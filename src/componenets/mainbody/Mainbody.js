import React, { useState } from 'react';
import './Mainbody.css';
import Public from "./PublicInfos/Public";

const Mainbody = (props) => {
    const [money, setMoney]=useState(0)
    let newIncome =0
    const totalIncome=(income)=>{
       newIncome = Number(income) + money
       setMoney(newIncome)
       console.log(money);
    }      
         

    
    const data = props.data
    return (
        <div className="flexBody">
        <div className="flex">
            {
                data.map(Objdata=> <Public totalIncome={totalIncome} Newdata={Objdata}></Public>)
            }
        </div>
        <div className="totalIncome">
           Friends Total Income <br/>
           <span>{money}</span>
        </div>
        </div>
    );
};

export default Mainbody;
