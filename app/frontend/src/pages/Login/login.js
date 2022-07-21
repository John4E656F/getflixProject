import React, { useState, useContext } from "react;
//import "./index.scss";

import LoginBackground from "../../assets/images/landingPage.jpg";
import ColosseumLogo from "../../assets/images/logo.png";
import { TextField } from "@material-ui/core";
import Button from "../../component/UI/Button/index";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router-dom";
import { AuthenticationContext } from "../../contexts/authenticationContext";
import { validEmailAndPhoneNumber } from "../../utils/validation";

/**
 * The login component, which validates the email and password
 * fields and uses a controlled form. Uses material UI for the
 * textfields.
 */

const Login = (props) => {
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

    const history = useHistory();
    const authContext = useContext(AuthenticationContext);

    const inpuChangeHandler = (event) => {
        const { name, value } =event.target;
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

    if((!form.password))
}