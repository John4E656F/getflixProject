import React, { useState } from "react";
import "./login.css";
import ReactPlayer from "react-player";

//import { Link } from "react-router-dom";
import AniflixLogo from "../../assets/images/logo.png";
import { TextField } from "@material-ui/core";
import Button from "../../components/Button/btn.component";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useNavigate } from "react-router-dom";
//import { AuthenticationContext } from "../../contexts/authUser";
import { validEmailAndPhoneNumber } from "../../utils/validation";
import axios from "axios";

/**
 * The login component, which validates the email and password
 * fields and uses a controlled form. Uses material UI for the
 * textfields.
 */



const Login = (props) => {
    //const token = localStorage.getItem("token")
    const [form, setForm] = useState({
        email: {
            value: "",
            touched: false,
            valid: false,
        },

        password: {
            value: "",
            touched: false,
            valid: false,
        },

        onSubmitInvalid: false,
    });

    const navigate = useNavigate();
    //const authContext = useContext(AuthenticationContext);

    const inputChangeHandler = (event) => {
        const  { name, value } = event.target;
        if (name === "email") {
			setForm((prevForm) => ({
				...prevForm,
				email: {
					...prevForm.email,
					value: value,
					touched: true,
					valid: value.length > 0 && validEmailAndPhoneNumber(value),
				},
			}));
        } else if (name === "password") {
			setForm((prevForm) => ({
				...prevForm,
				password: {
					...prevForm.password,
					value: value,
					touched: true,
					valid: value.length >= 4 && value.length <= 60,
				},
			}));
		}  
    };

    //For setting error spans once any of the fields are touched.
    const fieldBlurHandler = (event) => {
        if (event.target.name === "email") {
            if (form.email.value === "") {
                setForm((prevForm) => ({
                    ...prevForm,
                    email: { ...prevForm.email, touched: true},
                }));
            }
        }

        if (event.target.name === "password") {
            if (form.password.value === "") {
                setForm((prevForm) => ({
                    ...prevForm,
                    password: { ...prevForm.password, touched: true },
                }));
            }
        }
    };

    let [emailSpan, passwordSpan] = [null, null];

    if ((!form.email.valid && form.email.touched) || (form.onSubmitInvalid && !form.email.valid)) {
        emailSpan = <span>Please enter a valid email or phone number.</span>;
    }

    if((!form.password.valid && form.password.touched) || (form.onSubmitInvalid && !form.password.valid)) {
        passwordSpan = <span>Your password must contain between 4 and 60 characters.</span>
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        // console.log(form.email.value);
        // console.log(form.password.value);
        if (!form.email.valid || !form.password.valid) {
            setForm((prevForm) => ({...prevForm, onSubmitnvalid: true}));
        } else {
            let payload = {
                "email": form.email.value,
                "password": form.password.value
            }

            let config = {
                method: "post",
                url: "https://aniflix-getflix.herokuapp.com/user/login",
                header: {
                    "Content_type": "application/json"
                },
                data: payload
            }

            axios(config)
            .then((res) => {
                const { token } = res.data
                localStorage.setItem("token",token)
            // dispatch(fetchLoginSuccess(res.data))
            navigate("/home", { replace: true})
            })
            .catch(err => { console.log(err); });
        }
    };

    return (
        <div className="Login" >
            <img src={AniflixLogo} alt="Logo" />
            <div className="LoginCard">
                <h1>Sign In</h1>
                <form onSubmit={formSubmitHandler}>
                <TextField
						name="email"
						className="textField"
						label="Email or phone number"
						variant="filled"
						type="text"
						style={{ backgroundColor: "#333" }}
						color="secondary"
						value={form.email.value}
						onChange={inputChangeHandler}
						onBlur={fieldBlurHandler}
						autoComplete="off"
						InputLabelProps={{
							style: { color: "#8c8c8c" },
						}}
					/>

					{emailSpan}

					<TextField
						name="password"
						className="textField"
						label="Password"
						variant="filled"
						type="password"
						style={{ backgroundColor: "#333" }}
						color="secondary"
						value={form.password.value}
						onChange={inputChangeHandler}
						onBlur={fieldBlurHandler}
						autoComplete="off"
						InputLabelProps={{
							style: { color: "#8c8c8c" },
						}}
					/>

					{passwordSpan}

                    <Button height="45px" width="100%" backgroundColor="#e50914" textColor="#fff">
						Sign In
					</Button>
                </form>

                <div className="HorizontalDiv">
                    <FormControlLabel style={{ marginLeft: "-12px" }}
                    control={<Checkbox style={{ color: "rgb(229, 9, 20)"}} name="checkB" />}
                    label="Remember Me"
                    />
                    <span className="spanLink" onClick={() =>navigate("/signup")}>
							Signup
                    </span>
                </div>
            </div>
            <div className="videoPlayer">
            <ReactPlayer
                  url='https://www.youtube.com/watch?v=juiHHzIvrYs'
                  playing={true}
                    width='100%'
                  height='800px'
                  muted
            />
            </div>
        </div>
    );
};

export default Login;
