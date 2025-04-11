
import React from 'react';

const Favourite = ({ cart, setCart, total, setTotal,triggerWarningToast}) => {
    const removeFromCart = (materialToRemove) => {
        const updatedCart = cart.filter(item => item.id !== materialToRemove.id);
        const updatedTotal = total.filter(item => item.id !== materialToRemove.id);
        setCart(updatedCart);
        setTotal(updatedTotal);
        triggerWarningToast("Item removed from favorites!");
    };

    return (
        <div>
            {
                cart.map(material => (
                    <div key={material.id}>
                        <div className='card-div'>
                            <div className='image-wrapper'>
                                <img className='card-image' src={material.image} alt="" />
                            </div>
                            <div>
                                <div className='card-description'>
                                    <div>
                                        <p>{material.title}</p>
                                    </div>
                                    <div className='cross-icon'>
                                        <i
                                            onClick={() => removeFromCart(material)}
                                            className="fa-solid fa-xmark"
                                        ></i>
                                    </div>
                                </div>
                                <div className='card-margin'>
                                    <div>
                                        <p>${material.currentBidPrice}</p>
                                    </div>
                                    <div>
                                        <p>Bids: {material.bidsCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Favourite;
