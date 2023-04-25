import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Search } from '../features/search/Search';
import { Cart } from '../components/Card';

import { selectFilteredItems, loadItems} from '../features/items/items-slice';
import { selectSearch } from '../features/search/search-slice';
import { useAddItem } from '../hooks/use-add-item';

export const HomePage = () => {
    const dispatch = useDispatch();
	const search = useSelector(selectSearch);
	const list = useSelector(state => selectFilteredItems(state,{search}));
	const [onClickPlus, onClickFavorite, addList, favoriteList] = useAddItem();



	useEffect(() => {
			dispatch(loadItems());
	}, [dispatch]);

    return (
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
                    isAddFavorite={favoriteList.indexOf(obj.id) !== -1}
                    onClickFavorite={() => onClickFavorite(obj)}
                    onClickPlus={() => onClickPlus(obj)}
                    />
                ))}
            </div>
        </div>
    )
}