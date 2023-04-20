import {SlBasket} from 'react-icons/sl';
import {BiUserCircle} from 'react-icons/bi';
import {BsPlus} from 'react-icons/bs';

function App() {
	return (
		<div className="wrapper clear">
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
				<h1 className='mb-40'>All sneakers</h1>
				<div className="d-flex justify-between flex-wrap">
					<div className="card">
						<img width={133} height={112} src="/img/goods/1.png" alt="1" />
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
