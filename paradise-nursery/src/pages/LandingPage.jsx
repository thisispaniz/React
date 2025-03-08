import React from "react";

const LandingPage = ({ setPage }) => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ 
                backgroundImage: "url('/flowers-8013886_960_720.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                width: "100vw" }}>

            <h1 className="text-4xl text-white mb-4">Welcome to Paradise Nursery</h1>
            <p className="text-lg text-white text-center mb-4">Find the perfect houseplants to brighten your home!</p>
            <button onClick={() => setPage("products")} className="px-4 py-2 bg-green-700 text-white rounded">
                Get Started
            </button>
        </div>
    );
};

export default LandingPage;