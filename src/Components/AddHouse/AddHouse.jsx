
import axios from "axios";
import { useState,useEffect } from "react";
export const AddHouse = () => {
  const[form,setform]=useState({
    name:"",
    ownerName:"",
    address:"",
    areaCode:"",
    rent:"",
    preferredTenant:"",
    image:""
  })
  const[isChecked,setIschecked]=useState(false);
  const handleOnchange=()=>{
setIschecked(!isChecked);
  }

  const hendalechange=(e)=>{
     let preferredTenant;
     if(isChecked){
      preferredTenant="married"
     }
     else{
      preferredTenant="bachelor"
     }
     const{className,value}=e.target
     setform({
       ...form,
       [className]:value,
       preferredTenant
     })
  }

  const addHouseContainer=(e)=>{
 e.preventDefault();
  axios.post("http://localhost:8080/houses",form).then((e)=>{
    setform({
      name:"",
    ownerName:"",
    address:"",
    areaCode:"",
    rent:"",
    preferredTenant:"",
    image:""
    })
  })
  }
  return (
    <div className="addHouseContainer">
      <form onSubmit={addHouseContainer}>
        <label>name</label>
        <input type="text" className="name" value={form.name} onChange={hendalechange} required />
        <br />
        <label>ownerName</label>
        <input value={form.ownerName} type="text" className="ownerName" onChange={hendalechange}  required />
        <br />
        <label>address</label>
        <input value={form.address} type="text" className="address" onChange={hendalechange}  required />
        <br />
        <label>areaCode</label>
        <input value={form.areaCode} type="text" className="areaCode" onChange={hendalechange}  required />
        <br />
        <label>rent</label>
        <input value={form.rent} type="text" className="rent" onChange={hendalechange}  required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={isChecked} onChange={handleOnchange} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={!isChecked} onChange={handleOnchange} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input value={form.image} type="text" className="image"  onChange={hendalechange} required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
