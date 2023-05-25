import { SlBasket } from 'react-icons/sl';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { selectTotalCount } from '../features/Cart/cart-slice';

export const Header = ({ onClickCart }) => {
    const totalCount = useSelector(selectTotalCount);
    return (
        <header className="d-flex justify-between align-center p-40 flex-wrap">
            <Link to="/" className="header_margin d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="logo" />
                <div>
                    <h3 className="text-uppercase">TOP SNEAKERS</h3>
                    <p className="opacity-5">Store for the best sneakers</p>
                </div>
            </Link>
            <ul className="d-flex">
                <li
                    onClick={onClickCart}
                    className="mr-30 cu-p"
                    data-tooltip-id="Cart"
                    data-tooltip-content="Cart"
                    data-tooltip-place="bottom"
                    data-tooltip-variant="success">
                    <Tooltip id="Cart" />
                    <SlBasket size="18px" color="#9B9B9B" className="logo" />
                    {totalCount > 0 && <span className="ml-10">{totalCount} $</span>}
                </li>
                <li>
                    <Link to="/favorite">
                        <AiOutlineHeart
                            className="mr-30 cu-p"
                            size="20px"
                            color="#9B9B9B"
                            data-tooltip-id="Favorites"
                            data-tooltip-content="Favorites"
                            data-tooltip-place="bottom"
                            data-tooltip-variant="success"
                        />
                        <Tooltip id="Favorites" />
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <BiUserCircle
                            className="cu-p"
                            size="20px"
                            color="#9B9B9B"
                            data-tooltip-id="Orders"
                            data-tooltip-content="Orders history"
                            data-tooltip-place="bottom"
                            data-tooltip-variant="success"
                        />
                        <Tooltip id="Orders" />
                    </Link>
                </li>
            </ul>
        </header>
    );
};
