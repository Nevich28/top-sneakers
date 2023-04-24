import styles from './Card.module.scss';

export const Cart = ({title, price, url, isAddCart, onClickPlus, onClickFavorite}) => {
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onClickFavorite}>
                <img src="/img/heart-unliked.svg" alt="unliked" />
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
        </div>
    )
}

