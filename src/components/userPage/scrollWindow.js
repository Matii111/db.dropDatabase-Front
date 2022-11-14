import React, { useState } from 'react';
import ItemFormat from '../productos/itemFormat';
import ScrollWindowHistorial from './scrollHistorial';
const ScrollWindow = ({titulo}) => {
    return (
        <>
            <div>
                <ScrollWindowHistorial
                titulo={titulo}
                />
            </div>
        </>
    );
}
export default ScrollWindow;