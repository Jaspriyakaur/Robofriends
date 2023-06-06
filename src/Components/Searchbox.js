import React from "react";

const Searchbox= ({ SearchChange})=>
{
    return (
    <div className="pa3 ">
        <input className="pa3 ba b--green bg-light-blue"
        type="search" 
        placeholder="search robots"
        onChange={SearchChange}
        />
    </div>
);
}
export default Searchbox;
                                 