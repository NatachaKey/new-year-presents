import { Component } from "react";
import icon from './icon.png';

export class Presents extends Component{
    state={
        userInput: "",
        groceryList: []

        
    }

    onChangeEvent(e){
        this.setState({userInput: e})
        
       
    }

    addItem(input){
        if (input===""){
            alert("Añade una regalo")
        }
        else{

        let listArray = this.state.groceryList;
        listArray.push(input)
        this.setState({groceryList:listArray,  userInput: ""})
    }
}
deleteItem(){
    let listArray= this.state.groceryList;
    listArray=[];
    this.setState({groceryList: listArray})
}

    crossedWord(event){
        const li =event.target;
        li.classList.toggle('crossed')
    }

    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
    <div>
        <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" 
                placeholder="Añade sueños de alguien"
                onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                value={this.state.userInput}/>
           
            </div>

            <div  className="container">
                <button className="btn add" onClick={()=> this.addItem(this.state.userInput)}>Nuevo regalo</button>
            </div>

            <ul>
                {this.state.groceryList.map((item, index)=>(
               
                <li onClick={this.crossedWord} key={index}><img src={icon} width="35px" alt="icon"/> {item}</li>
                ))}
            </ul>
            <div className="container">
                <button className="btn delete" onClick={()=> this.deleteItem(this.state.userInput)}>Borrar todo</button>
            </div>
            </form>
    </div>


        )
    }
}