import { Component } from "react";
import icon from './icon.png';
import done from './done.png'

export class Presents extends Component{
    state={
        userInput: "",
        presentsList: [],
        deleteList: [],    
    }

    onChangeEvent(e){
        this.setState({userInput: e})
        
       
    }

    addItem(input){
        if (input===""){
            alert("Añade una regalo")
        }
        else{

        let listArray = this.state.presentsList;
        listArray.push(input)
        this.setState({presentsList:listArray,  userInput: ""})
    }
}
    
      deleteOne(input,index){
        let listArray=this.state.presentsList;
        let delArray=this.state.deleteList;
        listArray.splice(index,1);
        delArray.push(input)   
        this.setState({presentsList:listArray})
        this.setState({deleteList:delArray})
    }
    
deleteItem(){
    let listArray= this.state.presentsList;
    listArray=[];
    this.setState({presentsList: listArray})
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
                {this.state.presentsList.map((item, index)=>(
               
                <li onClick={this.crossedWord} key={index}><img src={icon} width="35px" alt="icon"/> {item}
                   <img src={done} width='30px' alt='del' onClick={()=>this.deleteOne(item,index)}  />
                </li>
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
