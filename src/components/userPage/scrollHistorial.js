import React, { useState } from 'react';
import ScrollFormat from './scrollFormat';
const ScrollWindowHistorial = ({titulo}) => {
    return (
        <>
            <h2 class="scrollWindowTitle"> </h2>
            <h2 class="scrollWindowTitle">{titulo}</h2>
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