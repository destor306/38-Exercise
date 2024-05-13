import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import MadLibForm from "./MadLibForm";
import Story from "./Story";

const Madlib = () => {
    const INITIAL_STATE=[]

    const [madlib, setMadlib] = useState(INITIAL_STATE);
    const addMadlib = newMadlib =>{
        setMadlib(madlib => [...madlib, {...newMadlib, id: uuid()}]);       
    }
    const clearMadlib = () =>{
        setMadlib(INITIAL_STATE);
    }
    return (
        <div>
            <h3>MadLibList</h3>
            <MadLibForm addStory={addMadlib} clear={clearMadlib}/>
            <div>
                {madlib.map(({id, noun, noun2, adj, color})=><Story key={id} noun={noun} noun2={noun2} adj={adj} color={color}/>)}
            </div>
        </div>
    );
}

export default Madlib;