//imrc+tab to import class with react
import React, { Component } from 'react';


//cc+tab for creating a class
//Note:Component is the parent class and theCounter is the child class

class Counter extends Component {
    state={
        value:this.props.counter.value,//every react component has a property called props whic is a JS object that stores the attributs of the component(counter component)//note :counter.value is addedd as we use extract vlaue from  counter object
        tags:[1,2,3]
    }
    formatCount=()=>{
        const {value: count}=this.state
        return(  count===0?<h4>Zero</h4>:count
            // this.state.count===0?"zero":this.state.count//if we have same this.same so we can destructure it
        )
       }
// styles={//un  cmmment if use want use styles as external
//     fontSize:15,
//     fontWeight: "bold"
// }

// constructor(){//constructor is a method when the objct is called with type Counter 
//     super()
//     console.log("constructor",this)//now "this" will refer the counter object
//     this.handleIncreament=this.handleIncreament.bind(this)//functions in JS are objects.bind method can set the value of "this" and this bind methpd will give the new instance of the handleIncreament function in which the "this" will always refer the current object(counter) and this.handleIncreament.bind(this) creates a new function ,we can get that function  and reset the handleincereament  
// }

// handleIncreament(){
//     console.log("increamented",this)// this will print undefined because when the function is called without any object by default it refers to the window object and the strict mode is enbled then it will display as undefind to overcome this issue we can use constructors or use arrow functions
    
// }

//arrow function dont rebind this keyword instead they inherit it
handleIncreament=()=>{
    console.log("increamented",this)// this will print undefined because when the function is called without any object by default it refers to the window object and the strict mode is enbled then it will display as undefind to overcome this issue we can use constructors or use arrow functions
    this.setState(
        {value:this.state.value+1}
    )//it will change the state by detecting which part of the dom is changed based on the change it will bring the virtual dom sync with actual dom
    
}

    render() { 
        //this both lines are commented as we use getclasses method
        // let classes="badge m-2 badge-";
        // classes +=this.state.count===0?"warning":"primary";

        return (
        <>
        {/* <h1>Hello counter</h1> */}
        
        {/* <span style={this.styles}className="badge badge-primary m-2">{this.formatCount()}</span> external styles*/}
        
        {/* <span style={{fontSize:33}} className="badge badge-primary m-2">{this.formatCount()}</span> INLINE styles*/}
        
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> it is commented as we use the classes method to change the color of the button*/}

        {/* <span className={classes}>{this.formatCount()}</span> thiss is commented as we use getClasses method*/}

        <span className={this.getClasses()}>{this.formatCount()}</span>
        
        <button onClick={this.handleIncreament} className="btn btn-secondary btn-sm">Increament</button>
       
       
       <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2 ">Delete</button>
        <br/>
       
        </>);
    }
   

    getClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;