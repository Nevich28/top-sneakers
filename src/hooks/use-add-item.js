import { useDispatch, useSelector } from 'react-redux';
import { selectAllAddItems, selectAllFavoriteItems, removeItems, addItems, addFavorite, removeFavorite, selectFavoriteItems } from '../features/items/items-slice';
import { addItemToCart, removeItemFromCart } from '../features/Cart/cart-slice';

export const useAddItem = () => {
    const dispatch = useDispatch();
    const addList = useSelector(selectAllAddItems);
	const favoriteList = useSelector(selectAllFavoriteItems);
    const favoriteItems = useSelector(selectFavoriteItems);

    const onClickPlus = (obj) => {
        if (addList.indexOf(obj.id) === -1) {
            dispatch(addItems(obj.id));
            dispatch(addItemToCart(obj));
        } else {
            dispatch(removeItems(obj.id));
            dispatch(removeItemFromCart(obj));
        }
    }
    
    const onClickFavorite = (obj) => {
        if (favoriteList.indexOf(obj.id) === -1) {
            // dispatch(addFavorite(obj));
            dispatch(addFavorite(obj.id));
            // dispatch(addItemToCart(obj));
        } else {
            dispatch(removeFavorite(obj.id));
            // dispatch(removeItemFromCart(obj));
        }
    }

    return [onClickPlus, onClickFavorite, addList, favoriteList, favoriteItems]
}

