import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Public.css';

const Public = (props) => {
    const  {fullName , email , gender, img, income} = props.Newdata
    
    
    return (
    
        <div className="public-body">
           <div>
               <img src={img} alt=""/>
           </div>
           <div className="public-info">
              <h3 className="name">Full Name : {fullName}</h3> 
              <h3> Gander : {gender}</h3>
               <h3>Email : {email}</h3>
               <h3>Income :{income}</h3>
               <h3 onClick={(()=> props.totalIncome(income))} className="icon">Add User<FontAwesomeIcon icon={faUserPlus} /></h3>
           </div>
        </div>

        
    );
};

export default Public;