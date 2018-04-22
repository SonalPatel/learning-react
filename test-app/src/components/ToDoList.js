import React from "react";
import ToDoItems from "./ToDoItems.js";
class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    //my initial state in my items property is an empty array
    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this); //i have bound my function to the class
  }

  addItem(e) {
    //if else to check is input vlaue is empty or not like using queryselectors
    //if the value is not equal to empty then create a new variable storing the value and the unique key (have to use Date.now to do this)
    if (this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      //using prevState so that it doesnt overwite the orig state. concat returns a whole new array instead of modyfiying an existing one
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    //reset the input value to null
    this._inputElement.value = "";

    //console.log(this.state.items);
    e.preventDefault(); //prevents the page from refreshing on form submit - allows the state to be updated
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h2>To do list</h2>
          {/* addItem is my function for onSubmit */}
          <form onSubmit={this.addItem}>
            {" "}
            {/*_inputElement is my variable that represents my input */}
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
        </div>
        {/*renders the entries on the page from the ToDoItems component */}

        <ToDoItems entries={this.state.items} />
      </div>
    );
  }
}

export default ToDoList;
