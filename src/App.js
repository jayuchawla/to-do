import React from 'react';
import './App.css';
import ListItems from './ListItems/ListItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);

  }

  setUpdate(text, key){
    const updated_items = this.state.items;
    updated_items.map(item => {
      if(item.key === key){
        item.text = text
      }
    })
    this.setState({
      items:updated_items
    })
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    //console.log(newItem);
    if (newItem.text !== ''){
      //const updated_items = [...this.state.items, newItem];
      this.state.items.push(newItem);
      this.setState({
        //items: updated_items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
    console.log(this.state.items);
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => 
      item.key!==key)
      this.setState({
        items: filteredItems
      })
  }

  render(){
    return(
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit = {this.addItem}>
          <input type="text" placeholder="Enter Task" value = {this.state.currentItem.text} onChange = {this.handleInput}/>
          <button type="submit">Add</button>
        </form>
        </header>
        <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate = {this.setUpdate}>
        </ListItems>
      </div>
      );
  }
}

export default App;
