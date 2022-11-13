import React, { useState } from 'react';
import ScrollFormat from './scrollFormat';
const ScrollWindowHistorial = () => {
    return (
        <>
            <h2 class="scrollWindowTitle"> </h2>
            <h2 class="scrollWindowTitle">Historial de compras</h2>
            <div class="scrollWindow">
                <div className='historial'>
                    <ScrollFormat
                        historial=
                        "aaaaaaaaaaaaaaa"
                    />
                </div>
                <div className='historial'>
                    <ScrollFormat
                        historial=
                        "aaaaaaaaaaaaaaa"
                    />
                </div>
                <div className='historial'>
                    <ScrollFormat
                        historial=
                        "aaaaaaaaaaaaaaa"
                    />
                </div>
                <div className='historial'>
                    <ScrollFormat
                        historial=
                        "aaaaaaaaaaaaaaa"
                    />
                </div>
            </div>
        </>
    );
}
export default ScrollWindowHistorial;