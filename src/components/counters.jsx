import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state = { 
        counters:[
            {id: 1,value:0},
            {id: 2,value:0},
            {id: 3,value:0},
             {id: 4,value:3}
        ]
     }
   
     handleDelete=counterId=>{
        console.log("deleted the counter",counterId)
        const counters=this.state.counters.filter(c=>c.id!==counterId)
        this.setState({counters})
     }

     handleReset=()=>{
         const counters=this.state.counters.map(c=>{//this will not update as we have two states one in counter.jsx and another in counters.jsx
             c.value=0
             return c
         })
         this.setState({counters})
     }
 
     render() { 
        return ( <div className="container">
            <button onLick={this.handleReset} className="btn btn-primary btn-sm m-2">RESET</button>
            <br/>
            {this.state.counters.map(counter=>
           
           <Counter 
           key={counter.id}//key attribute is used by react intrenally so we cant be able to access it
            onDelete={this.handleDelete} 
            counter={counter}//this stores all the items of object counter so we can avoid writing the id value attriubute seperatly and we call its values in the requires areas like in onclick event of delete button
            id={counter.id}//so we use id as we cant acces from the key
             value={counter.value}/>
            )}
            {/* <Counter/>
            <br/>
           <Counter/>
           <br/>
           <Counter/>
           <br/>
           <Counter/>        */}
            </div> );
    }
}
 
export default Counters;  