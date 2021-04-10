import React from 'react';


const contact = () => {
    return(
        <div className="container text-center">
            <h1>Contact us</h1>
            <form action="varify()" method='POST'>
                <input type="email" name="email" id="" placeholder='abc@abc.com'/>
                <input type="file" name="inFile" id=""/>
            </form>
        </div>
    )
}

export default contact;