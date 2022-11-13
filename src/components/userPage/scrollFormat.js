import React from 'react';

export const ScrollFormat = ({ historial }) => {

    return (
        <>
            <div className='producto' style={{ overflow: "hidden" }}>
                <div className="scrollHistorialContenido">
                    {historial}
                </div>
            </div>
        </>
    )
}

export default ScrollFormat;