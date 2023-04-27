import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { OrdersItems } from "../features/orders/OrdersItems";
import { loadOrders } from "../features/orders/order-slice";
import { selectAllOrders, selectStatusLoading } from "../features/orders/order-slice";
import { Skeleton } from "../features/Cart/Card/Skeleton";
import { FavoriteOrderInfo } from "../components/FavoriteOrderInfo";

export const Orders = () => {
    const dispatch = useDispatch();
    const allOrders = useSelector(selectAllOrders);
    const status = useSelector(selectStatusLoading);
    const loadingArr = [...Array(4)];
    useEffect(() => {
        dispatch(loadOrders());
    }, [dispatch])

    return (
        <div className="content p-40">
            <Link to='/'>
                <h1 className='d-flex'><img src="/img/arrow-left-btn.svg" alt="arro-left" className='mr-20 cu-p mb-40'/>My Orders</h1>
            </Link>
            {allOrders.length===0 && <FavoriteOrderInfo 
                                        title="You don't have orders yet"
                                        description="Place at least one order"
                                        img="/img/sad-smile-order.png"/>}
            {status==='loading' && 
            <div className="d-flex flex-wrap">
                {loadingArr.map((_, i) => <Skeleton key={i}/>)}
            </div>
            }
            {status==='idle' && <OrdersItems allOrders={allOrders}/>}
        </div>
    )
} 