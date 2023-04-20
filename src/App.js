import {SlBasket} from 'react-icons/sl';
import {BiUserCircle, BiSearch} from 'react-icons/bi';
import {BsPlus} from 'react-icons/bs';

function App() {
	return (
		<div className="wrapper clear">
			<div className="overlay">
				<div className="drawer">
					<h2 className='d-flex justify-between mb-30'>
						Cart 
						<img className='removeBtn cu-p' src="/img/btn-remove.svg" alt="remove" /></h2>
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
							{/* <img className='mr-20' width={70} heeight={70} src="/img/goods/1.png" alt="1" /> */}
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


			<header className='d-flex justify-between align-center p-40'>
				<div className="d-flex align-center">
					<img width={40} height={40} src="/img/logo.png" alt="logo"/>
					<div>
						<h3 className="text-uppercase">TOP SNEAKERS</h3>
						<p className='opacity-5'>Store for the best sneakers</p>
					</div>
				</div>
				<ul className="d-flex">
					<li className='mr-30'>
						<SlBasket size='18px' color='#9B9B9B' className='logo'/>
						<span className='ml-10'>1205 $</span>
					</li>
					<li>
						<BiUserCircle size='20px' color='#9B9B9B'/>
					</li>
				</ul>
			</header>
			<div className="content p-40">
				<div className='d-flex align-center justify-between mb-40'>
					<h1 className=''>All sneakers</h1>
					<div className='search-block d-flex align-center'>
						<BiSearch size="18px" color="#E4E4E4"/>
						<input placeholder='Search ...' />
					</div>
				</div>
				<div className="d-flex justify-between flex-wrap">
					<div className="card">
						<div className='favorite'>
							<img src="/img/heart-unliked.svg" alt="unliked" />
						</div>
						<img width={133} height={112} src="/img/goods/1.png" alt="1" />
						<h5>Men's Sneakers Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Price:</span>
								<b>129.99 $</b>
							</div>
							<button className='button'>
								<BsPlus size='11px' color='#D3D3D3'/>
							</button>
						</div>
					</div>
					<div className="card">
						<img width={133} height={112} src="/img/goods/2.png" alt="1" />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Price:</span>
								<b>129.99 $</b>
							</div>
							<button className='button'>
								<BsPlus size='11px' color='#D3D3D3'/>
							</button>
						</div>
					</div>
					<div className="card">
						<img width={133} height={112} src="/img/goods/3.png" alt="1" />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Price:</span>
								<b>129.99 $</b>
							</div>
							<button className='button'>
								<BsPlus size='11px' color='#D3D3D3'/>
							</button>
						</div>
					</div>
					<div className="card">
						<img width={133} height={112} src="/img/goods/4.png" alt="1" />
						<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Price:</span>
								<b>129.99 $</b>
							</div>
							<button className='button'>
								<BsPlus size='11px' color='#D3D3D3'/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
