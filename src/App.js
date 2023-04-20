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
						<p>Store for the best sneakers</p>
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
				<h1>All sneakers</h1>
				<div className="card">
					<img src="" alt="" />
					<p></p>
					<div>
						<div>
							<span>Price:</span>
							<b>129.99</b>
						</div>
						<button>
							<BsPlus size='11px' color='#D3D3D3'/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
