export const Drawer = ({onClose}) => {
    return (
        // <div style={{ display: 'none' }} className="overlay">
        <div className="overlay">
            <div className="drawer">
                <h2 className='d-flex justify-between mb-30'>
                    Cart 
                    <img onClick={onClose} className='removeBtn cu-p' src="/img/btn-remove.svg" alt="remove" /></h2>
                <div className="items">
                    
                    <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: 'url(/img/goods/1.png)' }} className="cartItemImg"></div>
                    <div className='mr-20 flex'>
                        <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
                        <b>129.99 $</b>
                    </div>
                    <img className='removeBtn' src="/img/btn-remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/goods/1.png)' }} className="cartItemImg"></div>
                        <div className='mr-20 flex'>
                            <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
                            <b>129.99 $</b>
                        </div>
                        <img className='removeBtn' src="/img/btn-remove.svg" alt="remove" />
                    </div>

                    <div className="cartItem d-flex align-center mb-20">
                    <div style={{ backgroundImage: 'url(/img/goods/1.png)' }} className="cartItemImg"></div>
                    <div className='mr-20 flex'>
                        <p className='mb-5'>Men's Sneakers Nike Blazer Mid Suede</p>
                        <b>129.99 $</b>
                    </div>
                    <img className='removeBtn' src="/img/btn-remove.svg" alt="remove" />
                    </div>					
                </div>
                <div className='cartTotalBlock'>
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>2 587 $</b>
                        </li>
                        <li>
                            <span>Tax 5%:</span>
                            <div></div>
                            <b>128 $</b>
                        </li>
                    </ul>
                    <button className='greenButton'>Place an order <img src="/img/arrow.svg" alt="arrow" /></button>
                </div>	
            </div>
        </div>
    )
}