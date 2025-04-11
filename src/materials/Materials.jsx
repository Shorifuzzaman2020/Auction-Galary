
import React, { use, useState } from 'react';
import Material from './Material';
import Favourite from './Favourite';
import TotalCount from './TotalCount';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Materials = ({ fetchPromise }) => {
    const [cart, setCart] = useState([]);
    const [likedItems, setLikedItems] = useState([]);
    const [total, setTotal] = useState([]);

    const data = use(fetchPromise);
    
    const triggerToast = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const triggerWarningToast = (message) => {
        toast.warning(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    
    const handleButton = (material) => {
        document.getElementById('hide-data').style.display = 'none';
        triggerToast("Item added to favorites!");

        setCart(prev => [...prev, material]);
        setTotal(prev => [...prev, material]);

        if (!likedItems.includes(material.id)) {
            setLikedItems([...likedItems, material.id]);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <ToastContainer></ToastContainer>


            <h1 className='auction-heading'>Active Auctions</h1>
            <h3 className='auction-description'>Discover and bid on extraordinary items</h3>
            <div className='table-style'>
                <div className='first-table'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th></th>
                                <th>Current Bid</th>
                                <th>Time Left</th>
                                <th>Bid Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(material => (
                                <Material
                                    key={material.id}
                                    handleButton={handleButton}
                                    material={material}
                                    isLiked={likedItems.includes(material.id)}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='card-system'>
                    <div>
                        <h3 className='td-rest second-card-heading'>
                            <i className="fa-regular fa-heart"></i> Favourite Items
                        </h3>
                    </div>
                    <div>
                        <div>
                            <div id='hide-data'>
                                <h4 className='td-rest no-favourite'>No favorites yet</h4>
                                <p className='td-rest card-paragraph'>Click the heart icon on any item <br /> to add it to your favorites</p>
                            </div>
                            <Favourite cart={cart} setCart={setCart} total={total} setTotal={setTotal} triggerToast={triggerToast} triggerWarningToast={triggerWarningToast}/>
                        </div>
                        <div className='flexdiv'>
                            <div>
                                <h5>Total bids Amount</h5>
                            </div>
                            <div id='total'>
                                <TotalCount total={total} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Materials;
