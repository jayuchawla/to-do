import React from 'react';
import '../ListItems/ListItems.css';
//import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-native-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className = "list" key = {item.key}>
                <p>
                    <input type="text" id = {item.key} value = {item.text} onChange = {(e) => {props.setUpdate(e.target.value, item.key)}}/>
                    <button className = "del-button" onClick = {() => props.deleteItem(item.key)}>Delete</button>
                </p>
            </div>
        );
    })
    return(
    <div>
        <FlipMove duration = {500} easing = "ease-in-out">
            {listItems}
        </FlipMove>
    </div>
    );
}

export default ListItems;