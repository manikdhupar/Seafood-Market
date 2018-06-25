import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component{
    render(){

        const orderIds=Object.keys(this.props.order);
        const total=orderIds.reduce((total,id)=>{
            const count=this.props.order[id];
            const fish=this.props.fishes[id];

            const isAvailable= fish.status=="available";
            if(isAvailable){
                return total+(count*fish.price)
            }
            return total
        },0)


        return(
            <div className="order-wrap">
                <h2>Order</h2>
                <ul>
                    <li>{formatPrice(total)}</li>
                </ul>
            </div>
        );
    }
}

export default Order;