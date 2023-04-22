import { useState } from 'react';
import {BiSearch} from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';

import { Cart } from './components/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { useEffect } from 'react';

import { selectAllItems } from './features/items/items-slice';

import { loadItems } from './features/items/items-slice';

// const arr = [
// 	{name: "Men's Sneakers Nike Blazer Mid Suede", price: 129.99, url: '/img/goods/1.png'},
// 	{name: "Men's Nike Air Max 270 Sneakers", price: 249.99, url: '/img/goods/2.png'},
// 	{name: "Men's Nike Blazer Mid Suede Sneakers", price: 99.99, url: '/img/goods/3.png'},
// 	{name: "Puma X Aka Boku Future Rider Sneakers", price: 199.99, url: '/img/goods/4.png'}

// ];
const onClickFavorite = () => {
	console.log('F');
}
const onClickPlus = () => {
	console.log('P');
}

function App() {
	const dispatch = useDispatch();
	const list = useSelector(selectAllItems);

	useEffect(() => {
			dispatch(loadItems());
	}, [dispatch]);

	const [cartOpened, setCartOpened] = useState(false);
	return (
		<div className="wrapper clear">
			{cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
			<Header onClickCart={() => setCartOpened(true)}/>
			<div className="content p-40">
				<div className='d-flex align-center justify-between mb-40'>
					<h1 className=''>All sneakers</h1>
					<div className='search-block d-flex align-center'>
						<BiSearch size="18px" color="#E4E4E4"/>
						<input placeholder='Search ...' />
					</div>
				</div>
				<div className="d-flex justify-between flex-wrap">
					{list.map((obj, i) => (
						<Cart 
						key={i} 
						title={obj.name} 
						price={obj.price} 
						url={obj.url} 
						onClickFavorite={onClickFavorite}
						onClickPlus={onClickPlus}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
