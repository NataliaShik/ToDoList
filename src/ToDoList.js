import { Component } from 'react';
import done from './done.jpg'


export class ToDoList extends Component {
        state = {
            userInput: '',
            toDoList: [],
        }
    
        onChangeEvent(e) {
            this.setState({userInput: e})
        }
    
        onFormSubmit(e) {
            e.preventDefault();
        }
    
        addItem(input) {
            if (input === '') {
                alert ("Please enter an item!")
            }
            else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userInput: ''})
            }
        }

        crossedWord(event) {
            const li = event.target;
            li.classList.toggle('crossed');
        }

        deleteItem() {
            let listArray = this.state.toDoList;
            listArray = [];
            this.setState({toDoList: listArray})
            }
        
        render() {
            return(
                <div>
                <form onSubmit={this.onFormSubmit}>    
                    <div className='cont'>
                        <input type='text'
                        placeholder='What to do?'
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                    <div className='cont'>
                        <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
                    </div>
                    <ul>
                    {this.state.toDoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={done} width="35px" alt="basket"/>
                        {item}
                    </li> 
                    ))}
                </ul>
                    
                    <div className='cont'>
                        <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
                    </div>
                </form>   
                </div>
            )
        }
}