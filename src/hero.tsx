import React from 'react';

interface testProps {
    handleLogout: Function;
}

const Hero = ({ handleLogout }: testProps) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={() => handleLogout()}> Logout</button>
            </nav>
        </section >
    )
}

export default Hero;