import React from "react";

export const Text = ({ color, size, children }) => {
    const defaultClass = "font-sans";

    const classes = {
        colors: {
            primary: "text-amber-700",
            secondary: "text-red-500",
        },
        sizes: {
            small: "text-sm",
            medium: "text-base",
            large: "text-lg",
        },
    };

    return (
        <p className={`${defaultClass} ${classes.colors[color]} ${classes.sizes[size]}`}>
            {children}
        </p>
    );
};