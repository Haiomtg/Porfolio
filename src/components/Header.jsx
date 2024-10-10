// import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between">
                <h1 className="text-xl">My Portfolio</h1>
                <ul className="flex space-x-4">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;