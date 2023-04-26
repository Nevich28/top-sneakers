import styles from './Card.module.scss';

const CartIner = ({name, price, url, isAddCart, isAddFavorite, onClickPlus, onClickFavorite}) => {
    return (
        <>
        <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isAddFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="unliked" />
        </div>
        <img width={133} height={112} src={url} alt={name} />
        <h5>{name}</h5>
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

export const Cart = (props) => {
    return (
        
        <div className={styles.card}>
            <CartIner
                // name={name}
                // price={price}
                // url={url}
                // isAddCart={isAddCart}
                // isAddFavorite={isAddFavorite}
                // onClickPlus={onClickPlus}
                // onClickFavorite={onClickFavorite}
                {...props}
                />            
        </div> 
    )
}

