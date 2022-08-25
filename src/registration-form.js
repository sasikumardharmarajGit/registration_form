import TextField from "./component/text-field";
import { useState } from "react";
const Registration = () => {
    const [emailValue, setEmailValue] = useState()
    const [nameValue, setNameValue] = useState()

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value)
    }
    const handleNameChange = (e) => {
        setNameValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (emailValue && nameValue) {
            alert("You are Registered Successfully")
        }
        else {
            alert("Please enter valid data")
        }
    }

    return (
        <>

            <section>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                                <div className="row">
                                    <div className="col text-center">
                                        <h1>Registeration Form</h1>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col mt-4">
                                        <TextField
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            required={true}
                                            handleChange={handleNameChange}
                                            value={nameValue}
                                        />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <TextField
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            required={true}
                                            handleChange={handleEmailChange}
                                            value={emailValue}
                                        />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <TextField
                                            type="text"
                                            placeholder="Phone"
                                            name="phone"
                                        />
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Country</option>
                                            <option value="1">India</option>
                                            <option value="2">UK</option>
                                            <option value="3">US</option>
                                        </select>
                                        <label></label>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>City</option>
                                            <option value="1">Chennai</option>
                                            <option value="2">Salem</option>
                                            <option value="3">Madurai</option>
                                        </select>
                                        <label></label>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>State</option>
                                            <option value="1">Tamilnadu</option>
                                            <option value="2">Kerala</option>
                                            <option value="3">Delhi</option>
                                        </select>
                                        <label></label>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-4">
                                    <div className="col">
                                        <textarea class="form-control" placeholder="Message" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="row justify-content-start mt-4">
                                    <div className="col">
                                        <button className="btn btn-primary mt-4">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Registration;