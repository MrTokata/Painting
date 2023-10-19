import React from 'react';
export default function Image(){
    const Getting = "Hello Student We are looking for React";
    const Name = "John";
    const Gender = "Male";
    const age = 55;
    const Address = "Phnom Penh";
    return(
        // <img src={require("../Components/pic1.webp")} style={{width:"250px",height:"250px"}} alt=""/>
        <>
        <h1>{Getting}</h1>
        <p>Welcome To React</p>
        <center>
            <h3>This is my Name={Name}</h3>
            <h3>This is my Gender={Gender}</h3>
            <h3>This is my Age={age}</h3>
            <h3>This is my Address={Address}</h3>
        </center>

        </>
    
    );
}