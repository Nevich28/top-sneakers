import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { HomePage } from './pages/HomePage';
import { Favorite } from './pages/Favorite';



function App() {

	const [cartOpened, setCartOpened] = useState(false);
	return (
		<div className="wrapper clear">
			{cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
			<Header onClickCart={() => setCartOpened(true)}/>
			<Routes>
				<Route exact path='/' element={<HomePage/>}/>
				<Route exact path='/favorite' element={<Favorite/>}/>

			</Routes>
		</div>
	);
}

export default App;
