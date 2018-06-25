import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component{

    renderOrder=(key)=>{
        const count=this.props.order[key];
        const fish=this.props.fishes[key];
        const isAvailable= fish && fish.status==="available";

        if(!fish) return null 

        if(!isAvailable){
            return <li key={key}>Sorry {fish ? fish.name: fish} is no longer available</li>
        }

        return(
            <li key={key}>{count}  {fish.name}  {formatPrice(count*fish.price)}</li>
        )
    }

    render(){
        const orderIds=Object.keys(this.props.order);
        const total=orderIds.reduce((total,id)=>{
            const count=this.props.order[id];
            const fish=this.props.fishes[id];
            const isAvailable= fish && fish.status==="available";
            if(isAvailable){
                return total+(count*fish.price)
            }
            return total
        },0)


        return(
            <div className="order-wrap">
                <h2>Order</h2>
                <ul>
                    <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    </ul>
                    <li>Total: {formatPrice(total)}</li>
                </ul>
            </div>
        );
    }
}

export default Order;