import { Link } from "react-router-dom";
import { useAddItem } from "../hooks/use-add-item";

import { Cart } from "../components/Card";
import { FavoriteOrderInfo } from "../components/FavoriteOrderInfo";

const FavoriteItem = ({favoriteItems, addList, favoriteList, onClickFavorite, onClickPlus}) => {
    return (
        <div className="d-flex flex-wrap">
                {favoriteItems.map((obj) => (
                    <Cart 
                    key={obj.id} 
                    {...obj}
                    isAddCart={addList.indexOf(obj.id) !== -1}
                    isAddFavorite={favoriteList.indexOf(obj.id) !== -1}
                    onClickFavorite={() => onClickFavorite(obj)}
                    onClickPlus={() => onClickPlus(obj)}
                    />
                ))}
            </div>
    )
}

export const Favorite = () => {
    const [onClickPlus, onClickFavorite, addList, favoriteList, favoriteItems] = useAddItem();
    return (
        <div className="content p-40">
            <Link to='/'>
                <h1 className='d-flex'><img src="/img/arrow-left-btn.svg" alt="arro-left" className='mr-20 cu-p mb-40'/> My bookmarks</h1>
            </Link>
            {favoriteItems.length>0 ? <FavoriteItem
                favoriteItems={favoriteItems}
                addList={addList}
                favoriteList={favoriteList}
                onClickFavorite={onClickFavorite}
                onClickPlus={onClickPlus}
                /> : <FavoriteOrderInfo
                        title='No bookmarks'
                        description="You haven't added anything to your bookmarks"
                        img="/img/arrow-left.svg"
                        />}
        </div>
    )
} 