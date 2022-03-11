import React, { useEffect, useState } from "react";
import '../AddOwners.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { setOwners, getOwners ,updateowners } from '../reducers/action'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"





const AddOwners = (props) => {
    const { id } = useParams();
        ////////////////////////////////////////////////////// hooks single owner
        const [firstNameOwner, setfirstNameOwner] = useState("")
        const [lastNameOwner, setlastNameOwner] = useState("")
        const [addressOwner, setAddressOwner] = useState("")
        const [startTimeOwner, setstartTimeOwner] = useState("")
        const [endTimeOwner, setEndTimeOwner] = useState("")
        const [phoneOwner, setphoneOwnerOwner] = useState("")
        const [descriptionOwner, setdescriptionOwner] = useState("")
        const [websiteOwner, setwebsiteOwner] = useState("")
        const [categoryOwner, setCategoryOwner] = useState("")
    
        //////////////////////////////////////////////////////// other hooks
        const history = useNavigate();
        const [btn , setBtn] = useState("")
        const [btn2 , setBtn2] = useState("")
      
  

  
   

    useEffect(() => {

        if (window.location.pathname === `/update/${id}`) {
            setBtn('none')
            setfirstNameOwner(props.singleOwner.name_of_business_owner)
            setlastNameOwner(props.singleOwner.lastname_of_business_owner)
            setAddressOwner(props.singleOwner.address)
            setstartTimeOwner(props.singleOwner.activity_time)
            setEndTimeOwner(props.singleOwner.activity_time_end)
            setphoneOwnerOwner(props.singleOwner.phone)
            setdescriptionOwner(props.singleOwner.business_opening_sentence)
            setwebsiteOwner(props.singleOwner.address_home_page)
            setCategoryOwner(props.singleOwner.category_of_business_owner)
           
           
        } if (window.location.pathname === '/addOwners') {
            setBtn('block')
            setBtn2('none')
           

            
        }

    }, [props.singleOwner , id])



      
   
    
    const SetData = () => {
    
        
            const FirstName = firstNameOwner;
            const LastName = lastNameOwner;
            const address = addressOwner;
            const Starttime = startTimeOwner;
            const Endtime = endTimeOwner;
            const number = phoneOwner;
            const sentence = descriptionOwner;
            const url = websiteOwner;
            // const imgFile = e.target.imgFile.value;
            const select = categoryOwner;
            
            props.setdata({ FirstName, LastName, address, Starttime, Endtime, number, sentence, url, select })
            history("/");
        
        //   props.setdata(dataOfOwners)

    }

const updateOwner =()=>{
  const firstName = firstNameOwner
  const lastName = lastNameOwner
  const address = addressOwner
  const startTime = startTimeOwner
  const EndTime = endTimeOwner
  const phone = phoneOwner
  const text = descriptionOwner
  const website = websiteOwner
  const category = categoryOwner
 
  const dataAll = {firstName,lastName,address ,startTime ,EndTime ,phone ,text ,website , category , id}
  console.log("dataAll",dataAll);
  
 props.updateowners(dataAll)
 history("/");
}


    return (
        <>

            <div  className="coverForm">

                {/* {props.singleOwner ? ():() } */}
                <div className="form"  >
                    <div className="titleAddOwners" >
                        <h1>Add Owners</h1>
                        <Link to="/">
                            <img src={logo} alt="logo pic" className="sizeLogoAddOwner" />
                        </Link>
                    </div>


                    <label>your first name of business</label>
                    <input defaultValue={firstNameOwner} onChange={(e)=>setfirstNameOwner(e.target.value)} type="text"  name="firstName" placeholder="First Name" />

                    <label>your last name of business</label>
                    <input defaultValue={lastNameOwner} onChange={(e)=>setlastNameOwner(e.target.value)} type="text" name="LastName" placeholder="Last Name" />

                    <label>address</label>
                    <input defaultValue={addressOwner} onChange={(e)=>setAddressOwner(e.target.value)} type="text" name="address" placeholder="bar Ilan 2/42 , Herzeliya" />

                    <label>active time from:</label>
                    <input defaultValue={startTimeOwner} onChange={(e)=>setstartTimeOwner(e.target.value)} type="time" name="Starttime" />
                    <label>to</label>
                    <input defaultValue={endTimeOwner} onChange={(e)=>setEndTimeOwner(e.target.value)} type="time" name="Endtime" />

                    <label>your number phone</label>
                    <input defaultValue={phoneOwner} onChange={(e)=>setphoneOwnerOwner(e.target.value)} type="number" name="number" placeholder="0523157725" />

                    <label>short sentence of your business</label>
                    <textarea defaultValue={descriptionOwner}  onChange={(e)=>setdescriptionOwner(e.target.value)}  type="text" name="sentence" placeholder="Describe in a few sentences about the business , what service you give" />

                    <label>address home page</label>
                    <input defaultValue={websiteOwner} onChange={(e)=>setwebsiteOwner(e.target.value)} type="url" name="url" placeholder="https://example.com" />

                    <label>your category</label>
                    <select defaultValue={categoryOwner} onChange={(e) => {  ////    
                       
                       setCategoryOwner(e.target.value)
                    }}>
                        <option value="Travel">Travel</option>
                        <option value="Help">Help</option>
                        <option value="Buy">Buy</option>
                        <option value="Hang out">Hang out</option>
                        <option value="Fix">Fix</option>
                        <option value="Food">Food</option>
                    </select>


                    <label>your image</label>
                    <input type="file" name="imgFile" />
                    
                    
                     <button onClick={SetData}  className="btnAddOwners" style={{display:btn}} >Add to Website</button>
                      <div className="coverBtnUpdate">
                         <button onClick={updateOwner} className="btnUpdateOwner" style={{display:btn2}} >update</button>
                      </div>
                     
                </div>
               
                 
               
               
              
                
            </div>

        </>
    )



}


const mapStateToProps = (state) => {
    return {
        dataOwners: state.AllOwners
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setdata: (data) => dispatch(setOwners(data)),
        getOwners: () => dispatch(getOwners()),
        updateowners: (dataOwner) => dispatch(updateowners(dataOwner ))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AddOwners)