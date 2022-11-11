import React from 'react';


export const ItemFormat = ({imgProducto,priceProducto,nameProducto}) => {
    return (        
        <div className='producto'>
                    <a href='/#'>
                        <div className='producto_img'>
                            {imgProducto}                            
                        </div>
                    </a>
                    <div className='"product_footer'>
                        <h1>{nameProducto}</h1>
                        <p className='price'>{priceProducto}</p>
                    </div>
                    <div className='boton'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                    </div>
                </div>        
    )
}

export default ItemFormat;