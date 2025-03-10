import React from "react";

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full h-[300px] text-black" style={{ backgroundColor: '#8EE7BB'}}>
            <div className="flex w-[70%] m-auto">
                <div className="flex flex-col space-x-100">
                    <span className="text-2xl font-radium">Catalog</span>
                    <li>Item1</li>
                    <li>Item2</li>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-radium">Navigation</span>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li>Privacy policy</li>
                    <li>Terms of services</li>
                </div>
            </div>
        </div>
        );
    };


export default Footer