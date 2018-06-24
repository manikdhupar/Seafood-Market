import React from 'react';
import AddFishForm from './AddFishForm';

class Order extends React.Component{
    render(){
        return(
            <div className="inventory">
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Sample Fishes!</button>
            </div>
        );
    }
}

export default Order;