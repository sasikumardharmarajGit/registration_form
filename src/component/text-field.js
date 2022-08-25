import { useState } from "react";

const TextField = (props) => {
    const [isTouched, setTouched] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isValid, setValid] = useState(true);

    const handleInput = e => {
        setInputValue(e.target.value);
        validate(e.target.value);
    };

    const validate = val => {
        if (props.name === "email") {
            if (emailIsValid(val)) setValid(true);
            else setValid(false);
        }
        if (props.name === "name") {
            if (isName(val)) setValid(true);
            else setValid(false);
        }
        if (props.name === "phone") {
            if (isPhone(val)) setValid(true);
            else setValid(false);
        }
    };

    return (
        <>
            <input
                type={props.type}
                className="form-control"
                onChange={handleInput}
                onBlur={() => setTouched(true)}
                value={props.value}
                onInput={props.handleChange}
                placeholder={props.placeholder}
            />
            <label>
                {(props.required && isTouched && !inputValue) ? <div className="text-danger text-left">
                    Please enter the {props.placeholder} </div>
                    : (isTouched && !isValid) ? <div className="text-danger text-left">
                        Please enter the valid {props.placeholder} </div> : null}
            </label>
        </>
    )
}

export default TextField;

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isName(val) {
    return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(val);
}

function isPhone(val) {
    return /^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/.test(val);
}