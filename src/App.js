import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Drawer } from './components/Drawer/Drawer';
import { HomePage } from './pages/HomePage';
import { Favorite } from './pages/Favorite';
import { Orders } from './pages/Orders';



function App() {
	const [cartOpened, setCartOpened] = useState(false);
	return (
		<div className="wrapper clear">
			{/* {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>} */}
			<Drawer onClose={() => setCartOpened(false)} opened={cartOpened}/>
			<Header onClickCart={() => setCartOpened(true)}/>
			<Routes>
				<Route exact path='/' element={<HomePage/>}/>
				<Route exact path='/favorite' element={<Favorite/>}/>
				<Route exact path='/orders' element={<Orders/>}/>
			</Routes>
		</div>
	);
}
export default App;
