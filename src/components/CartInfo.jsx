export const CartInfo = ({title, description, image, onClose }) => {
  return (
    <div className='cartEmpty'>
            {/* <img className='emptyBox' src="/img/empty-box.png" alt="" /> */}
            <img className='emptyBox' src={image} alt={title} />
            {/* <h3>Cart is empty</h3> */}
            <h3>{title}</h3>
            {/* <p>Cart is empty, add at least <br/> one item to make an order</p> */}
            <p>{description}</p>
            <button onClick={onClose} className='greenButton'><img src="/img/arrow-left.svg" alt="arrow" />Return to catalog</button>
        </div>
  )
}
