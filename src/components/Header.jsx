import {SlBasket} from 'react-icons/sl';
import {BiUserCircle} from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { selectTotalCount } from '../features/Cart/cart-slice';


export const Header = ({onClickCart}) => {
    const totalCount = useSelector(selectTotalCount);
    return (
        <header className='d-flex justify-between align-center p-40'>
        <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="logo"/>
            <div>
                <h3 className="text-uppercase">TOP SNEAKERS</h3>
                <p className='opacity-5'>Store for the best sneakers</p>
            </div>
        </div>
        <ul className="d-flex">
            <li onClick={onClickCart} className='mr-30 cu-p'>
                <SlBasket size='18px' color='#9B9B9B' className='logo'/>
                {totalCount>0 && <span className='ml-10'>{totalCount} $</span>}
                
            </li>
            <li>
                <BiUserCircle size='20px' color='#9B9B9B'/>
            </li>
        </ul>
        </header>
    );
}