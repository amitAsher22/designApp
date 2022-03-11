import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import '../profile.css';
import logo from '../images/logo.png'
import { SiHomeadvisor } from 'react-icons/si'
import { FcOvertime } from 'react-icons/fc'
import { BiCategory } from 'react-icons/bi'
import { FcPhone } from 'react-icons/fc'
import { SiWebauthn } from 'react-icons/si'
import { MdDeleteForever } from 'react-icons/md'
import { GrUpdate } from 'react-icons/gr'
import { TiArrowBackOutline } from 'react-icons/ti'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProfileOwner = () => {
  const { id } = useParams()
  const [oneOwner, setOneOwner] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/uniqueOwner/${id}`)
      .then(res => res.json())
      .then(data => setOneOwner(data))
      .catch(err => console.log(err))
  },[id])

  const DeleteOwner = () => {
    fetch(`/deleteOwner/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then( alert('you delete from sysyem'))
      .catch(err => console.log(err))

      navigate("/")

  }

const updateOwner = () =>{
  navigate(`/update/${id}`)

}


  return (
    <>
      <div>
        {
          oneOwner.length ? (
            oneOwner.map(owner => {

              return <div key={owner.owner_id}>
                <div className="imgProfile" >
                  <img src={logo} alt="logo_img"/>

                </div>
                <div className="detailsProfile">
                  <div key={owner.owner_id}>
                    <div className="FullNameDiv">
                      <span className="fullNamePerson">{owner.name_of_business_owner} {owner.lastname_of_business_owner}</span>
                      <BiCategory />{owner.category_of_business_owner}
                      <span className="sentencePerson"> "{owner.business_opening_sentence}" </span>

                    </div>
                    <div className="detailsPerson">
                      <div><p><SiHomeadvisor /> {owner.address}</p></div>
                      <div><p><FcOvertime /> {owner.activity_time} - {owner.activity_time_end}</p></div>

                      <div><p><SiWebauthn /> <a href={owner.address_home_page}>{owner.address_home_page}</a></p></div>
                      <div><p> <FcPhone /> {owner.phone}</p></div>
                    </div>
                  </div>
                </div>
              </div>
            })
          ) : null
        }
      </div>
      <div className="buttonsPerson">
        <button className="btnBin" onClick={DeleteOwner}><MdDeleteForever /></button>

        <button className="btnwebsite">
          <Link to="/"><TiArrowBackOutline /></Link>
        </button>

         <button className="btnUpdate" onClick={updateOwner}><GrUpdate /> </button>
         {/* <Link to={`/update/${id}`}>  ///// </Link> */}

      </div>
    </>
  )
}

export default ProfileOwner
