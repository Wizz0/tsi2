import React, { Component } from 'react'

const Header = () => {
    return (
        <div className="fixed top-0 w-full h-[100px] text-black" style={{ backgroundColor: '#8EE7BB'}}>
            <div className="flex w-[70%] m-auto">
                <div className="flex flex-col">
                    <p>Местоположение</p>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                </div>
            </div>
        </div>
        );
    };

export default Header