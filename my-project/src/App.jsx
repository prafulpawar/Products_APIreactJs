import React, { useEffect, useState } from 'react';
import axios from './utils/axios';
import Products from './components/Products';
import Cart from './components/Cart';
import Cartitems from './components/Cartitems';
import { Routes, Route } from 'react-router-dom';


function App() {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState(0);


    const [totalItems, setTotalItems] = useState([]); // or ye total count hai 
    const [final, setFinal] = useState([]); //Sorted data hai ye

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/products');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const addToCart = (index) => {

        setTotalItems([...totalItems , index]);

        setFinal(prev => {
            if (!prev.includes(index)) {
                setCart(prevCart => prevCart + 1); 
                return [...prev, index];  
            }
            
            return prev;
        });

    };


    const removeFromCart = (index) => {
        // Remove item from the final list (which holds product indices)
        const updatedFinal = final.filter(itemIndex => itemIndex !== index);

        // Remove all occurrences of the product index from totalItems
        const updatedTotalItems = totalItems.filter(itemIndex => itemIndex !== index);

        // Update states
        setFinal(updatedFinal);
        setTotalItems(updatedTotalItems);
        setCart(updatedFinal.length); // Update cart count based on the number of unique items
    };


    console.log(totalItems)
    
    return (
        <Routes>

            <Route path="/" element={
                <>
                    <Cart totalItems={cart} />
                    <Products products={data} addToCart={addToCart} />
                </>
            }
            />


            <Route path="/cart"

                element={

                    <>
                        <Cart totalItems={cart} />
                        <Cartitems final={final} totalItems={totalItems} products={data} removeFromCart={removeFromCart}  />
                    </>

                }
            />
        </Routes>
    );
}

export default App;
