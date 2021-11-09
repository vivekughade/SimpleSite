import React,{useState} from 'react';
import "./style.css"
const ToDoList = () => {
  const[data,setData]=useState("")
    const getData=(e)=>{
        const name=e.target.value;
        setData(name);
    }
    const[datac,setclick]=useState([])
    const click=()=>{
        setclick((pval)=>{
                    return[...pval,data]
        })
        setData("")

    }
    const deldata=(id)=>{
        setclick((pval)=>{
            return pval.filter((av,index)=>{
                return id!==index;
            })
        })
    }
    
    return (
        <>
        <div className="todolist">
         <input type="text" value={data} onChange={getData} />
         <span onClick={click}  className ="far fa-plus-square"/>

            <br/>
            {datac.map((e,index)=>{
                return(<>
                    <div className="box">
                <li key={index} id={index}>{e}</li>
                <i  onClick = {()=>{ deldata(index) }} className="far fa-trash-alt"></i>
                </div>
                </>)
               
            })

            }

         </div>
        </>
    );
};

export default ToDoList;