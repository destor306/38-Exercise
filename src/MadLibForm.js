import React, { useState } from "react";

const MadLibForm = ({addStory, clear})=>{
    const INITIAL_STATE = {
        noun: "",
        noun2: "",
        adj: "",
        color: ""
    };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState({});  
    const [showForm, setShowForm] = useState(true);

    const handleChange= e =>{
        const {name, value} = e.target;
        setFormData(data =>({
            ...data,
            [name]: value
        }));

        setFormErrors(errors =>({
            ...errors,
            [name]: ""
        }));
    }

    const validateForm = ()=>{
        let valid = true;
        const errors ={}

        for (const key in formData){
            if(!formData[key]){
                errors[key] = `${key} is required`;
                valid = false;
            }
        }
        setFormErrors(errors);
        return valid;
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if(validateForm()){
            addStory({...formData});
            setFormData(INITIAL_STATE);    
            setShowForm(false);
        }
    }

    const handleRestart = () =>{
        clear();
        setShowForm(true);
    }

    if (showForm){
    return (
        
        <form onClick={handleSubmit}>
            <input 
            id="noun" 
            type="text" 
            name="noun"
            placeholder="Noun"
            value={formData.noun}
            onChange={handleChange}
            />
            {formErrors.noun && <span style={{color:'red'}}>{formErrors.noun}</span>}
            <input 
            id="noun2" 
            type="text" 
            name="noun2"
            placeholder="Noun2"
            value={formData.noun2}
            onChange={handleChange}
            />
            {formErrors.noun2 && <span style={{color:'red'}}>{formErrors.noun2}</span>}
            <input 
            id="adj" 
            type="text" 
            name="adj"
            placeholder="adjective"
            value={formData.adj}
            onChange={handleChange}
            />
            {formErrors.adj && <span style={{color:'red'}}>{formErrors.adj}</span>}
            <input 
            id="color" 
            type="text" 
            name="color"
            placeholder="Color"
            value={formData.color}
            onChange={handleChange}
            />
            {formErrors.color && <span style={{color:'red'}}>{formErrors.color}</span>}
            <button >Get Story</button>
        </form> 
        );
    }
    else{
        return(
            <div>
                <button onClick={handleRestart}>Restart</button>
            </div>
        );
    }
}
export default MadLibForm;