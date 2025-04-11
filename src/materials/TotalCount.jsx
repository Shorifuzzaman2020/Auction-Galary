
import React from 'react';

const TotalCount = ({ total }) => {
    const totalSum = total.reduce((sum, item) => sum + item.currentBidPrice, 0);
    return (
        <div>
            <p>${totalSum.toFixed(2)}</p>
        </div>
    );
};

export default TotalCount;
