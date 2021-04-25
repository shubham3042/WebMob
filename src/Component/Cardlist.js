import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Card from './Card';
import Loader from './Loader';
function Cardlist() {
        const[data,setData]=useState([]);
        const [load,setLoad]=useState();
     useEffect(()=>{
         setLoad(true);
      axios.get('https://randomuser.me/api/?page=1&results=30')
      .then((ans)=>{
        console.log(ans.data.results[0]);
        setData(ans.data.results);
        setLoad(false);
       })
    },[])
    if(load)
    {   
        return <Loader />
    }
    return (
        <div style={{flex:1,display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',alignItems:'center'}}>
        {
            data.length>0 ?
                data.map((item,index)=>{
                    return <Card key={index} data={item} />
                })
        :null    
        }
        </div>
        
    )
}

export default Cardlist
