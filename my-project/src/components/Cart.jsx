import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart = ({ totalItems }) => {
    return (
        <>
            <div className='flex justify-end items-center w-[100%] pr-20 p-5 border-b-4 border-red-300'>

                <NavLink to="/cart">
                    <button className='pl-4 p-2 pr-4 rounded-md bg-red-200'>
                        Cart ({totalItems})
                    </button>
                </NavLink>
            </div>

        </>
    );
};

export default Cart;
