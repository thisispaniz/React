import React from "react";
import { useSelector } from "react-redux";

const Header =  ({ setPage }) => {
    const totalItems = useSelector((state) => state.cart.totalQuantity);

    return(
        <header className="p-4 bg-green-600 text-white flex justify-between">
            <h1 className="text-2x1 cursor-pointer" onClick={() => setPage("home")}>
                Paradise Nursery
            </h1>
            <div className="cursor-pointer" onClick={() => setPage("cart")}>
                🛒 Cart ({totalItems})
            </div>
        </header>
    );
};

export default Header;