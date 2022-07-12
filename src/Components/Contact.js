import React, { Component } from 'react';  
import { TransitionGroup, CSSTransitionGroup } from 'react-transition-group';




class Contact extends Component {
  constructor(props)
{
  super(props);
  this.state={items:['Blockchain','ReactJS','TypeScript','JavaTPoint']};
  this.handleAdd = this.handleAdd.bind(this);
}  

handleAdd(){
  const newItems = this.state.items.concat([
    prompt('Enter item Name')
  ]);
  this.setState({items:newItems});
}

handleRemove(i) {  
  let newItems = this.state.items.slice();  
  newItems.splice(i, 1);  
  this.setState({items: newItems});  
}  

render() {  
  const items = this.state.items.map((item, i) => (  
    <div key={item} onClick={() => this.handleRemove(i)}>  
      {item}  
    </div>  
  ));  

  return (  
    <div>  
  <h1 className='ahead'>Animation Example</h1>  
          <button onClick={this.handleAdd}>Insert Item</button>  
          <TransitionGroup className="example"  
             transitionName="example"  
         transitionEnterTimeout={800}  
             transitionLeaveTimeout={600}>  
             {items}  
          </TransitionGroup>  
    </div>  
  );  
}  
}  
export default Contact;  
