import React, { Component } from 'react';
import {getFunName} from "../helpers";

class StorePicker extends Component {
  myInput=React.createRef();

  GoToStore=(event)=>{
    // prevents the form from submitting
    event.preventDefault();

    const storeName= this.myInput.value.value;

    // Change the page to /store/whatever user enters in form
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
        <form className='store-selector' onSubmit={this.GoToStore}>
        <p></p>
        <h2>Please enter a store!</h2>
          <input ref={this.myInput} type='text' placeholder='Store Name' defaultValue={getFunName()} required />
          <button type='submit'>Visit Store -></button>
        </form>
    );
  }
}

export default StorePicker;