import { useState } from 'react';
// import {BiSearch} from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import { Cart } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { useEffect } from 'react';

import { selectFilteredItems, selectAllAddItems, loadItems, removeItems, addItems } from './features/items/items-slice';

import { addItemToCart, removeItemFromCart } from './features/Cart/cart-slice';
import { Search } from './features/search/Search';
import { selectSearch } from './features/search/search-slice';

const onClickFavorite = () => {
	console.log('F');
}

function App() {
	const dispatch = useDispatch();
	const search = useSelector(selectSearch);
	const list = useSelector(state => selectFilteredItems(state,{search}));
	const addList = useSelector(selectAllAddItems);

	useEffect(() => {
			dispatch(loadItems());
	}, [dispatch]);

	const onClickPlus = (obj) => {
		if (addList.indexOf(obj.id) === -1) {
			dispatch(addItems(obj.id));
			dispatch(addItemToCart(obj));
		} else {
			dispatch(removeItems(obj.id));
			dispatch(removeItemFromCart(obj));
		}
	}

	const [cartOpened, setCartOpened] = useState(false);
	return (
		<div className="wrapper clear">
			{cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
			<Header onClickCart={() => setCartOpened(true)}/>
			<div className="content p-40">
				<div className='d-flex align-center justify-between mb-40'>
					<h1 className=''>{search ? `Search on request: "${search}"` : 'All sneakers'}</h1>
					<Search/>
				</div>
				<div className="d-flex flex-wrap">
					{list.map((obj) => (
						<Cart 
						key={obj.id} 
						title={obj.name} 
						price={obj.price} 
						url={obj.url} 
						isAddCart={addList.indexOf(obj.id) !== -1}
						onClickFavorite={onClickFavorite}
						onClickPlus={() => onClickPlus(obj)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
