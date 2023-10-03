import React, { useState } from 'react';

export function Background_panel() {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="container_button relative text-white">
            <input
                type="text"
                name="text"
                className={`input_button ${isFocused ? 'focused' : ''}`}
                required
                placeholder="Type to search..."
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <div className="icon absolute top-0 left-0 w-10 h-10 p-2 pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon w-full h-full"
                    viewBox="0 0 512 512"
                >
                    <title>Search</title>
                    <path
                        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                        fill="none"
                        stroke="currentColor"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                    ></path>
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="32"
                        d="M338.29 338.29L448 448"
                    ></path>
                </svg>
            </div>
        </div>
    );
}

