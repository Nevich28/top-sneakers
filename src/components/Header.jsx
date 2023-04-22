import {SlBasket} from 'react-icons/sl';
import {BiUserCircle} from 'react-icons/bi';

export const Header = ({onClickCart}) => {
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
                <span className='ml-10'>1205 $</span>
            </li>
            <li>
                <BiUserCircle size='20px' color='#9B9B9B'/>
            </li>
        </ul>
        </header>
    );
}