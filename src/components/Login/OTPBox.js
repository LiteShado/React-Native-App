import React, { useState } from "react";
import {Button} from 'react-native';
// import Header from "components/Header";

// import AppConfig from "App.config";
// import ExternalInfo from "components/ExternalInfo";

function OTPBox() {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            {/* <Header title="Verify your phone number" /> */}

            {/* <ExternalInfo page="otpBox" /> */}

            <div className="row">
                <div className="col text-center">
                    <p>Enter the code we've sent by text to </p>
                    <p>Change</p>

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p>OTP Entered - {otp.join("")}</p>
                    <p>
                        <Button
                            title="set otp"
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                        >
                            Clear
                        </Button>
                        <Button
                            title="otp entered"
                            className="btn btn-primary"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify OTP
                        </Button>
                        <p>This text should arrive within 30s</p>

                    </p>
                </div>
            </div>
        </>
    );
};

export default OTPBox;
