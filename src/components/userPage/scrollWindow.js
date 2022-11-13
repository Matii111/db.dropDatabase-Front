import React, { useState } from 'react';
import ItemFormat from '../productos/itemFormat';
import ScrollWindowHistorial from './scrollHistorial';
const ScrollWindow = () => {
    return (
        <>
            <div>
                <ScrollWindowHistorial></ScrollWindowHistorial>
            </div>
            <div>
            </div>
        </>
    );
}
export default ScrollWindow;