import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Cart'; 

const Products = ({ products, addToCart }) => {
    return (
        <>
          
            <div className="flex items-center justify-center">
                <div className="flex bg-white flex-wrap w-[100%] justify-center items-center">
                    {products.map((items, index) => {
                        return (
                            <div
                                key={index}
                                className="w-52 h-72 rounded-md bg-zinc-300 flex justify-center items-center flex-col m-2"
                            >
                                <img
                                    src={items.image}
                                    className="w-24 h-24 object-contain mb-2"
                                    alt=""
                                />
                                <h1 className="text-center font-sm">{items.title}</h1>
                                <h1 className="text-center text-gray-700">${items.price}</h1>
                                <h1 className="text-center text-sm text-gray-500">{items.category}</h1>

                                <button
                                    className='p-2 bg-red-300 rounded-md'
                                    onClick={() => addToCart(index)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Products;
