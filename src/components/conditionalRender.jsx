import React,{Component} from "react"

class Conditional extends Component {
    state = {
        tags:[]
    }
    renderTag=()=>{
           if(this.state.tags.length===0){
              return("Empty Tags")
           }
        return  <ul>{this.state.tags.map((tag,tagIndex)=>{
            return(
            <li key={tagIndex}>{tag}</li>
            )
        })}</ul>
    }

    render() {
        return(
        <>
        {/**If there is no else part you can youse  and operator that can return the final part (eg:(true&&"342"&"he" will return "he" if  true statisfies (meaning some value must be present) else it will not display anything)) */}
        
        {this.state.tags.length===0&&<p>create a tag</p>}
            {this.renderTag()}
            </>
        )

}
}
export default Conditional