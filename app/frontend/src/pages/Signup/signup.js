import React, { useState, useContext } from "react";
//import "./index.scss";

import SignUpBackground from "../../assets/images/landingPage.jpg";
import AniflexLogo from "../../assets/images/logo.png";
import { TextField } from "@material-ui/core";
import Button from "../../components/Button/btn.component";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/authenticationContext";
import { validEmailAndPhoneNumber } from "../../utils/validation";

/**
 * The SignUp component, which validates the email,password,phoneNumber ...
 * fields and uses a controlled form. Uses material UI for the
 * textfields.
 */

const Signup = (props) => {
    const [form, setForm] = useState({
        email: {
            value: "",
            touched: false,
            valid: false,
        },
        name: {
            value: "",
            touched: false,
            valid: false,
        },
        password: {
            value: "",
            touched: false,
            valud: false,
        },
        repeatPassword: {
            value: "",
            touched: false,
            valid: false,
        },

        onSubmitInvalid: false,
    });

    const navigate = useNavigate();

    const inputCHangeHandler = (props) => {
        const { name, value } = event.target;
        switch (name) {
            case "email":
                setForm((prevForm) => ({
                    ...prevForm,
                    email: {
                        ...prevForm.email,
                        value: value,
                        touched: true,
                        valid: value.length > 0 && validEmailAndPhoneNumber(value),
                    },
                }));
                break;

            case "password":
                setForm((prevForm) => ({
                    ...prevForm,
                    password: {
                        ...prevForm.password,
                        value: value,
                        touched: true,
                        valid: value.length >= 4 && value.length <= 60,
                    },
                }));
                break;

            case "repeatPassword":
                setForm((prevForm) => ({
                    ...prevForm,
                     repeatPassword: {
                        ...prevForm.repeatPassword,
                        value: value,
                        touched: true,
                        valid: value === form.password.value,
                     },
                }));
                break;
            default:
                break;
        }
    };

    // For setting error spans once any of the fields are touched.
    const fieldBlurHandler = (event) => {
        if (event.target.name === "email") {
            if (form.email.value === "") {
                setForm((prevForm) => ({
                    ...prevForm,
                    email: { ...prevForm.email, touched: true },
                }));
            }
        }

        if(event.target.name === "password") {
            if (form.password.value === "") {
                setForm((prevForm) => ({
                    ...prevForm,
                    password: { ...prevForm.password, touched: true },
                }));
            }
        }

        if (event.target.name === "repeatPassword") {
            if (form.repeatPassword.value === "") {
                setForm((prevForm) => ({
                    ...prevForm,
                    repeatPassword: { ...prefForm.repeatPassword, touched: true },
                }));
            }
        }
    };

    let [emailSpan, nameSpan, passwordSpan, repeatPasswordSpan] = [null, null, null, null];

    if ((!form.email.valid && form.email.touched) || (form.onSubmitInvalid && !form.email.valid)) {
        emailSpan = <span>Please enter a valid email or phone number.</span>
    }

    if ((!form.password.valid && form.password.touched) || (form.onSubmitInvalid && !form.password.valid)) {
		passwordSpan = <span>Your password must contain between 4 and 60 characters.</span>;
	}

    if (
        (!form.repeatPassword.valid && form.repeatPassword.touched) ||
        (form.onSubmitInvalid && !form.repeatPassword.valid)
    ) {
        repeatPasswordSpan = <span>The repeated password must match the password.</span>
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!form.email.valid || !form.password.valid) {
            setForm((prevForm) => ({ ...prevForm, onSubmitInvalid: true }));
        } else {
            // TODO: handle the data submission
            navigate.push('/browse');
        }
    };

    return (
        <div className="Signup" style={{ backgroundImage: `url(${SignupBackground})` }}>
            <img src={AniflexLogo} alt="Aniflex Logo" />
            <div className="SignupCard">
                <h1>Sign Up</h1>
                <form onSubmit={formSubmitHandler}>
                    <TextField
                        name="name"
                        className="textField"
                        label="Name"
                        type="text"
                        style={{ backgroundColor: '#333' }}
                        color="secondary"
                        value={form.name.value}
                        onChange={inputChangeHandler}
                        onBlur={fieldBlurHandler}
                        autoComplete="off"
                        InputLabelProps={{
                            style: { color: "#8c8c8c"},
                        }}
                    />

                    {/*nameSpan*/}

                    <TextField
                    name="email"
                    className="textField"
                    label="Email or Phone Number"
                    variant="filled"
                    type="text"
                    style={{ backgroundColor: '#333'}}
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
                    style={{ backgroundColor: '#333'}}
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
                    <TextField
                    name="repeatPassword"
                    className="textField"
                    label="Repeat Your Password"
                    variant="filled"
                    type="password"
                    style={{ backgroundColor: '#333'}}
                    color="secondary"
                    value={form.repeatPassword.value}
                    onChange={inputChangeHandler}
                    onBlur={fieldBlurHandler}
                    autoComplete="off"
                    InputLabelProps={{
                        style: { color: "#8c8c8c" },
                    }}
                    />

                    {repeatPasswordSpan}

                    <Button height="45px" width="1400%" backgroundColor="#e50914" textColor="#fff">
                        Sign Up
                    </Button>
                </form>

                <div className="HorizontalDiv">
                    <span>Do you already have an account? </span>
                    <span className="spanLink" onClick={() =>navigate.push("/login")}>
                        Sign In
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Signup;