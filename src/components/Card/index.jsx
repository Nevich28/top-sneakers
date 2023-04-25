import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import { selectStatus } from "../../features/items/items-slice";
import { useSelector } from "react-redux";

const Skeleton = () => {
    return (
        <ContentLoader 
            speed={2}
            width={220}
            height={260}
            viewBox="0 0 210 260"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="110" /> 
            <rect x="0" y="137" rx="3" ry="3" width="150" height="15" /> 
            <rect x="0" y="221" rx="8" ry="8" width="80" height="24" /> 
            <rect x="0" y="156" rx="3" ry="3" width="93" height="18" /> 
            <rect x="118" y="215" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
    )
}

const CartIner = ({title, price, url, isAddCart, isAddFavorite, onClickPlus, onClickFavorite}) => {
    return (
        <>
        <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isAddFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="unliked" />
        </div>
        <img width={133} height={112} src={url} alt={title} />
        <h5>{title}</h5>
        <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>{price} $</b>
            </div>
                <img onClick={onClickPlus} src={isAddCart ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"} alt="Plus" className='cu-p'/>
        </div>
        </>
    )
}

export const Cart = ({title, price, url, isAddCart, isAddFavorite, onClickPlus, onClickFavorite}) => {
    const statusLoading = useSelector(selectStatus);
    return (
        
        <div className={styles.card}>
            {statusLoading === 'loading' && <Skeleton/>}
            {statusLoading === 'idle' && <CartIner
                                    title={title}
                                    price={price}
                                    url={url}
                                    isAddCart={isAddCart}
                                    isAddFavorite={isAddFavorite}
                                    onClickPlus={onClickPlus}
                                    onClickFavorite={onClickFavorite}
                                    />}
            {/* <Skeleton/> */}
            
        </div> 
    )
}

