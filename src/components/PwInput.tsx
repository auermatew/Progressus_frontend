import React from "react";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";

const PwInput = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Jelszó"
                required
            />
            {showPassword ? (
                <FaUnlock
                    className="icon pwIcon"
                    onClick={togglePasswordVisibility}
                />
            ) : (
                <FaLock
                    className="icon pwIcon"
                    onClick={togglePasswordVisibility}
                />
            )}
        </>
    );
};

export default PwInput;
