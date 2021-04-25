import React from 'react';
import './Card.css';
const Card=(props)=>{
    let date=new Date(props.data.dob.date);
    return (
        <div style={{border:2,borderColor:'black',margin:'3%',backgroundColor:'grey'}} className='card'>
            <div style={{display:'flex',justifyContent:'center',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <img className='img' src={props.data.picture.thumbnail} />
            </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
              <p className='text'>Name :<span>
                  {props.data.name.first} {props.data.name.last}</span></p>
              <p className='text'>Email:<span>{props.data.email}</span></p>
              <p className='text'> Date of Birth:<span>{date.getUTCDate()>9?date.getUTCDate():`0${date.getUTCDate()}`}/{date.getMonth()+1>0?date.getMonth()+1:`0${date.getMonth()+1}`}/{date.getFullYear()}</span></p>
          </div>
        </div>
    )
}

export default Card
