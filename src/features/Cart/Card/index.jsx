import styles from './Card.module.scss';

const CartIner = ({name, price, url, isAddCart=false, isAddFavorite=false, onClickPlus, onClickFavorite, btnShow=true}) => {
    return (
        <>
        <div className={styles.favorite} onClick={onClickFavorite}>
            {btnShow && <img src={isAddFavorite ? "/img/heart-liked.svg" : "/img/heart-unlike.png"} alt="unliked" />}
        </div>
        <img width={133} height={112} src={url} alt={name} />
        <h5>{name}</h5>
        <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
                <span>Price:</span>
                <b>{price} $</b>
            </div>
                { btnShow && <img onClick={onClickPlus} src={isAddCart ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"} alt="Plus" className='cu-p'/>}
        </div>
        </>
    )
}

export const Cart = (props) => {
    return (
        
        <div className={ `${styles.card} ${props.marginForSearch && "mr-30"}`}>
            <CartIner
                {...props}
                />            
        </div> 
    )
}

