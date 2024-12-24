import React from 'react';

const Cartitems = ({ totalItems, final, products, removeFromCart }) => {
    console.log(totalItems) //  Ek array hai jo cart mein add kiye gaye products ke indexes rakhta hai.
    console.log(final) //  Ek unique indexes ka array hai jo cart mein hain.
    console.log(products) // Products ka pura data store karta hai
    console.log(removeFromCart)


    // quantityMap ek object hai jo har item ka index aur uski quantity ko store karta hai.
    const quantityMap = totalItems.reduce((acc, index) => {
        acc[index] = (acc[index] || 0) + 1;
        return acc;
    }, {});

    return (
        <div className="flex items-center justify-center">
            <div className="flex bg-white flex-wrap w-full justify-center items-center">
                {final.map((index) => {
                    const product = products[index];
                    const quantity = quantityMap[index] || 0;
                  
                    return (
                        <div
                            key={index}
                            className="w-52 h-72 rounded-md bg-zinc-300 flex flex-col justify-center items-center m-2"
                        >
                            <img
                                src={product.image}
                                alt="product"
                                className="w-24 h-24 object-contain mb-2"
                            />
                            <h1 className="text-center font-sm">{product.title}</h1>
                            <h1 className="text-center text-gray-700">${product.price}</h1>
                            <h1 className="text-center text-sm text-gray-500">{product.category}</h1>
                            <p className="text-center text-sm text-gray-600">Quantity: {quantity}</p>
                            <button
                                className="p-2 bg-red-300 rounded-md mt-2"
                                onClick={() => removeFromCart(index)}
                            >
                                Remove
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Cartitems;
