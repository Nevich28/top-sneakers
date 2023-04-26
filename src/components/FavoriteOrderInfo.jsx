import { Link } from "react-router-dom"
export const FavoriteOrderInfo = ({title, description, img}) => {
    return (
    <div className='cartEmpty favoriteEmpty'>
        <img className='emptyBox' src="/img/sad-smile.png" alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to='/' className='greenButton mt-20'><img src={img} alt={title} />Return to catalog</Link>
    </div>
    )
  }