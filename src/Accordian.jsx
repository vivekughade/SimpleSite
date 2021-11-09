import React, { useState } from 'react';
import Carddata from "./Carddata";
import './style.css';
const Accordian = () => {

    const [items, setItems] = useState(Carddata);

    const filterItem = (catItem) => {
        const updateItem = Carddata.filter((curElem) => {
            return curElem.category === catItem;
        });

        setItems(updateItem);

    }






    return (
        <>
            <br /><br />
            <div className="contain">
            <button

                onClick={() => {
                    filterItem("beach")
                }}

            className="btn btn-primary">Beach</button>
            <button

                onClick={() => {
                    filterItem("pretty")
                }}

                className="btn btn-primary">Pretty</button>
            <button

                onClick={() => {
                    filterItem("sexy-lady")
                }}

                className="btn btn-primary">Sexy-Lady</button>
            
            <button

                onClick={() => {
                    setItems(Carddata);
                }}

                className="btn btn-primary">All</button>


            {

                items.map((elem) => {

                    const { id, imgsrc} = elem;

                    return (
                        <div className="row">
               <div className="col-lg-4">
            <div  className="cardbox">
                        <p>{id}</p>
                <img src={imgsrc} />
                </div>
            </div>
            <div className="col-lg-4">
            <p>{id}</p>
            <div  className="cardbox">
                <img src={imgsrc} />
                </div>
            </div>
            <div className="col-lg-4">
            <p>{id}</p>
            <div  className="cardbox">
                <img src={imgsrc} />
                </div>
            </div>
            </div>

                    )

                })


            }
            </div>
            <hr></hr>



        </>
    );
};

export default Accordian;