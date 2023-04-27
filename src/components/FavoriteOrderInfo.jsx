import { Link } from "react-router-dom"
export const FavoriteOrderInfo = ({title, description, img}) => {
    return (
    <div className='cartEmpty favoriteEmpty'>
        <img className='emptyBox' src={img} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to='/' className='greenButton mt-20'><img src="/img/arrow-left.svg" alt="arrow" />Return to catalog</Link>
    </div>
    )
  }