import React from "react"


function Conditional(props) {
    console.log(props.isLoading)
    if(props.isLoading === true) {
return (
    <h1>it is loading</h1>
)
    } else {
        return (
            <h1>you should wait</h1>
        )
    }
} 

export default Conditional