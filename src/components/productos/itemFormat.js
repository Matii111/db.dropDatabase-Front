import React from 'react';


export const ItemFormat = ({ imgProducto, priceProducto, nameProducto, descriptionProduct }) => {
    return (
        <>
            <div className='producto'>
                <div className="description">
                    <div className="descriptionInfo">
                        {descriptionProduct}
                    </div>
                    <div className="descriptionItems">
                        <div >
                            <div className='producto_img'>
                                {imgProducto}
                            </div>
                        </div>
                        <div>
                            <div className='"product_footer'>
                                <h1>{nameProducto}</h1>
                                <p className='price'>{priceProducto}</p>
                            </div>
                        </div>
                        <div>
                            <div className='boton'>
                                <button className='btn'>
                                    Añadir al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemFormat;