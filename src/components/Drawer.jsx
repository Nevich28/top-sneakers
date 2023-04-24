import { useDispatch, useSelector } from 'react-redux';
import { selectAllCartItems, removeItemFromCart } from '../features/Cart/cart-slice';
import { removeItems } from '../features/items/items-slice';
import { selectTotalCount } from '../features/Cart/cart-slice';


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

const EmptyCart = () => {
    return (
        <div className='cartEmpty'>
            <img className='emptyBox' src="/img/empty-box.png" alt="" />
            <h3>Cart is empty</h3>
            <p>Cart is empty, add at least <br/> one item to make an order</p>
            <button className='greenButton'><img src="/img/arrow-left.svg" alt="arrow" />Return to catalog</button>
        </div>
    )
}

const CartFooter = ({totalCount}) => {
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
            <button className='greenButton'>Place an order <img src="/img/arrow.svg" alt="arrow" /></button>
        </div>	
    )
}

export const Drawer = ({onClose}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectAllCartItems);
    const totalCount = useSelector(selectTotalCount);

    const removeItem = (item) => {
        dispatch(removeItemFromCart(item));
        dispatch(removeItems(item.id));
    }
    return (
        // <div style={{ display: 'none' }} className="overlay">
        <div className="overlay">
            <div className="drawer">
                <h2 className='d-flex justify-between mb-30'>
                    Cart 
                    <img onClick={onClose} className='removeBtn cu-p' src="/img/btn-remove.svg" alt="remove" /></h2>
                    {cartItems.length===0 && <EmptyCart/>}
                
                <div className="items">   
                    {cartItems.map((item) => (
                        <Item
                            key={item.id}
                            name={item.name}
                            url={item.url}
                            price={item.price}
                            removeItem={() => removeItem(item)}
                        />
                    ))}
                </div>
                {cartItems.length!==0 && <CartFooter totalCount={totalCount}/>}
            </div>
        </div>
    )
}