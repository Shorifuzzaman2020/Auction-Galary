
import React from 'react';

const Material = ({ material, handleButton, isLiked }) => {
    return (
        <tr>
            <td><img className='picture' src={material.image} alt="" /></td>
            <td id='not-td-center'>{material.title}</td>
            <td className='td-rest'>$ {material.currentBidPrice}</td>
            <td className='td-rest'>{material.timeLeft}</td>
            <td className='td-rest fn-button' id='functional-button'>
                <div className={`heart-wrapper ${isLiked ? 'disabled-wrapper' : ''}`}>
                    <i
                        onClick={() => handleButton(material)}
                        className={`fa-heart fn-button ${isLiked ? 'fa-solid button-red disabled-heart' : 'fa-regular'}`}
                        style={{ cursor: isLiked ? 'not-allowed' : 'pointer' }}
                    ></i>
                </div>
            </td>
        </tr>
    );
};

export default Material;
