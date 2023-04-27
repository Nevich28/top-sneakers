import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { selectAllCartItems, removeItemFromCart } from '../../features/Cart/cart-slice';
import { removeItems, clearAdd } from '../../features/items/items-slice';
import { selectTotalCount, postOrder, selectLastOrderNumber, selectStatusLoading } from '../../features/Cart/cart-slice';
import { CartInfo } from '../CartInfo';

import styles from './Drawer.module.scss'


const Item = ({name, url, price, removeItem}) => {
    return (
        <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: `url(${url})` }} className="cartItemImg"></div>
            <div className='mr-20 flex'>
                <p className='mb-5'>{name}</p>
                <b>{price}</b>
            </div>
            <img onClick={removeItem} className='removeBtn' src="/img/btn-remove.svg" alt="remove" />
        </div>
    )
}

const CartFooter = ({totalCount, onClickOrder, isLoading}) => {
    return (
        <div className='cartTotalBlock'>
            <ul>
                <li>
                    <span>Total:</span>
                    <div></div>
                    <b>{totalCount} $</b>
                </li>
                <li>
                    <span>Tax 5%:</span>
                    <div></div>
                    <b>{Math.round(totalCount*0.05)} $</b>
                </li>
            </ul>
            <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>Place an order <img src="/img/arrow.svg" alt="arrow" /></button>
        </div>	
    )
}

export const Drawer = ({onClose, opened}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectAllCartItems);
    const totalCount = useSelector(selectTotalCount);
    const [isOrderCompleted, setIsOrderCompleted] = useState(false);
    const orderNumber = useSelector(selectLastOrderNumber);
    const isLoading = useSelector(selectStatusLoading);

    const onClickOrder = () => {
        setIsOrderCompleted(true);
        dispatch(clearAdd());
        dispatch(postOrder(cartItems));

    }

    const removeItem = (item) => {
        dispatch(removeItemFromCart(item));
        dispatch(removeItems(item.id));
        dispatch(removeItems(item.id));
    }


    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible: ''}`}>
            <div className={styles.drawer}>
                <h2 className='d-flex justify-between mb-30'>
                    Cart 
                    <img onClick={onClose} className='removeBtn cu-p' src="/img/btn-remove.svg" alt="remove" /></h2>
                    {cartItems.length===0 && <CartInfo 
                                                title={isOrderCompleted ? 'Order placed' : 'Cart is empty'}
                                                description={isOrderCompleted ? `Your order #${orderNumber} will soon be transferred to courier delivery` : 'Cart is empty, add at least one item to make an order'} 
                                                image={isOrderCompleted ? '/img/complet-order.png' : '/img/empty-box.png'}
                                                onClose={onClose}/>}
                <div className="items">   
                    {cartItems.map((item) => (
                        <Item
                            key={item.id}
                            {...item}
                            removeItem={() => removeItem(item)}
                        />
                    ))}
                </div>
                {cartItems.length!==0 && <CartFooter
                                            totalCount={totalCount}
                                            onClickOrder={onClickOrder} 
                                            isLoading={isLoading === 'loading'}/>}
            </div>
        </div>
    )
}