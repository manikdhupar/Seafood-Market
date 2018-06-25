import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component{
    state={
        fishes:{},
        order:{}
    }

    addFish=(fish)=>{
        const fishes={...this.state.fishes};
        fishes['fish' +Date.now().toString()]=fish;

        this.setState({
            fishes: fishes
        });
    }

    loadSampleFishes=()=>{
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder=(key)=>{
        // make a copy
        const order={...this.state.order}

        order[key]=order[key] + 1 || 1;

        this.setState({
            order: order
        });

    }

    render(){
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="Fresh SeaFood!"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map((key)=> {return(
                            <Fish key={key} index={key} addToOrder={this.addToOrder} details={this.state.fishes[key]} />
                        );
                        }
                        )}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
} 

export default App;