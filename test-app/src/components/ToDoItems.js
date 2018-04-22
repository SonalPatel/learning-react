import React from "react";
class ToDoItems extends React.Component {
  //create a function to take the input value and return itin a list
  createTasks(item) {
    return <li key={item.key}> {item.text} </li>; // output the li with the the unique key and item content
  }
  render() {
    //create the porperty for the component
    const toDoEntries = this.props.entries;
    //creating the list items using map and adding our createTask as a callback function (this is like a for loop)
    const listItems = toDoEntries.map(this.createTasks);

    return <ul className="thisList">{listItems}</ul>;
  }
}

export default ToDoItems;
