import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const plants = [
    { id: 1, name: "Lillies", price: 15, img: "./src/assets/hWJ4Xe9x8iWmgVi8Kx3EoJ.jpg"},
    { id: 2, name: "Sunflowers", price: 20, img: "./src/assets/sunflower-planted-in-flower-pot-isolated-on-white-background-JGWMK2.jpg" }
];

const ProductPage = ({ setPage }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h2 className="text-3xl text-center">Our Plants</h2>
            <div className="grid grid-cols-2 gap-4">
                {plants.map((plant) => (
                    <div key={plant.id} className="p-4 border rounded">
                        <img src={plant.img} alt={plant.name} className="w-full h-40" />
                        <h3>{plant.name}</h3>
                        <p>${plant.price}</p>
                        <button onClick={() => dispatch(addToCart(plant))} className="bg-green-600 text-white px-3 py-1">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;