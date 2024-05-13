import React from "react";

const Story = ({id, noun, noun2, adj, color}) =>{
    return (
        <div>
            <p> {noun} is a {adj} {noun2} who loves the color {color}</p>
        </div>
    );
}

export default Story;