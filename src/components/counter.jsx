//imrc+tab to import class with react
import React, { Component } from 'react';


//cc+tab for creating a class
class Counter extends Component {
    state={
        count:0,
        tags:[1,2,3]
    }
    formatCount=()=>{
        const {count}=this.state
        return(  count===0?<h4>Zero</h4>:count
            // this.state.count===0?"zero":this.state.count//if we have same this.same so we can destructure it
        )
       }
// styles={//un  cmmment if use want use styles as external
//     fontSize:15,
//     fontWeight: "bold"
// }

    render() { 
        //this both lines are commented as we use getclasses method
        // let classes="badge m-2 badge-";
        // classes +=this.state.count===0?"warning":"primary";
       
        return (
        <>
        <h1>Hello counter</h1>
        
        {/* <span style={this.styles}className="badge badge-primary m-2">{this.formatCount()}</span> external styles*/}
        
        {/* <span style={{fontSize:33}} className="badge badge-primary m-2">{this.formatCount()}</span> INLINE styles*/}
        
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> it is commented as we use the classes method to change the color of the button*/}

        {/* <span className={classes}>{this.formatCount()}</span> thiss is commented as we use getClasses method*/}

        <span className={this.getClasses()}>{this.formatCount()}</span>
        
        <button className="btn btn-secondary btn-sm">Increament</button>
        
       
        </>);
    }
   

    getClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;