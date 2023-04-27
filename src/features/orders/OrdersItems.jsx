import { Cart } from "../Cart/Card";

export const OrdersItems = ({allOrders}) => {
    const objToArr = (obj) => {
        const res = Object.values(obj);
        res.pop();
        return res;
    }
    return (
        <>
        {allOrders.map((item, i) => (
            <div key={i}>
                <h3>Order №{item.id}</h3>
                <div className="d-flex flex-wrap">
                    {objToArr(item).map((obj) => (
                            <Cart 
                            key={obj.id} 
                            {...obj}
                            btnShow={false}
                            />
                        ))
                    }
                </div>
            </div>
        ))}
        </>
    )
}