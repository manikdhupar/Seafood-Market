import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

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

    render(){
        return(
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline="manik is awesome!"/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
}

export default App;