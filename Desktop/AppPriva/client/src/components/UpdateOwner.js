import { useEffect } from "react"
import { useParams } from "react-router-dom"
import React , {useState} from "react"
import AddOwners from "./AddOwners"

const UpdateOwner =()=>{
  const {id} = useParams()
  const [singleOwner , setSingleOwner] = useState({})

  useEffect(()=>{
   fetch(`/uniqueOwner/${id}`,{
    method: "GET"
  })
  .then(res => res.json())
  .then(data => setSingleOwner(data[0]))

  }, [id]);


  return(
    <>
      <AddOwners singleOwner={singleOwner}/>
    </>
  )
}




export default UpdateOwner
