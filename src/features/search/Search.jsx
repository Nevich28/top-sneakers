import {BiSearch} from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from './search-slice';
import { selectSearch, clearSearch } from './search-slice';
import {MdOutlineClose} from 'react-icons/md';

export const Search = () => {
    const dispatch = useDispatch();
    const search =  useSelector(selectSearch);
    const handleSearch = (e) => {
        dispatch(setSearch(e.target.value));
      }
    return (
        <div className='search-block d-flex align-center pos-r'>
            <BiSearch size="18px" color="#E4E4E4"/>
            {search && <MdOutlineClose onClick={() => dispatch(clearSearch())} className='closeSearc cu-p' size="18px" color="#E4E4E4"/>}
            <input onChange={handleSearch} value={search} placeholder='Search ...' />
        </div>
    )
}

