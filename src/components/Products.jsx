import React,{useState,useEffect} from 'react';

const Products = () => {
    const [Data, setData] = useState({data:null})
    
       console.log(Data.data);
       useEffect(() => {
        fetch("http://localhost/BackendPhp/api/product/read.php").then((abc)=>{
            return abc.json();
           }).then((adc)=>{
               setData((a)=>{
                   return {
                       ...a,
                       data:adc
                   }
               })
           })
          
       }, [])
    return (
        <>
        
            
        </>
    );
};

export default Products;