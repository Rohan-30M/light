
import {useState} from 'react'
import Context from './Context';
const Provider=({children})=>
{
    const[theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"));
    };
    return(
        <Context.Provider
            value={{theme,toggleTheme}}>
                {children}
        </Context.Provider>
    );

};

export default Provider