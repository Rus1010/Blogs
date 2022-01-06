import React from "react";

class AddEmail extends React.Component{
    render(){
        const value = "abc@email.com"
        return (
            <form>
            <label for="text-form">Email: </label>
            <input type="text" value={value} id="text-form" />
            </form>
        );
    }
}


/*
function AddEmail(){
    const value = "abc@email.com"
    return (
      <form>
        <label for="text-form">Email: </label>
        <input type="text" value={value} id="text-form" />
      </form>
    );
}*/

export default AddEmail;

