import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Counters from "./components/counters";
class App extends Component {
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

     handleIncreament=(counter)=>{
         //console.log("incrent",counter)
         const counters=[...this.state.counters]//this wil get the clone of counters
         const index=counters.indexOf(counter)//to update the selected counter we need its index
         counters[index]={...counter}//making the clone of the counter selected
         counters[index].value++//changing the counter value 
         //counters[0].value++//console.log(this.state.counter[0])--this will print the increamented vaue of counter once  the increament button is clicked but it will not update the UI
         this.setState({counters})//displaying the updated UI
         console.log(this.state.counters[index])
     }
    render() {
        return (
            <>
                <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>{/**this will display the totalcounters whose value is greater than 0 */}
                <main className="container">
                <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onDelete={this.handleDelete}
                onIncreament={this.handleIncreament}
                /> 
                </main>
            </>
        );
    }
}

export default App;