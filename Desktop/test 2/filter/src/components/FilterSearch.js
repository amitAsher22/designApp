import { useState } from 'react';
import mocaData from '../MOCK_DATA.json'

const Filter = () => {
  const [search , setSearch] = useState("")
  return ( 
        <div className='container'>
        <input type="text" placeholder='Search...' onChange={e => setSearch(e.target.value)}/>
          <table className='table table-bordered'>
           <thead className='thead-dark'>
             <tr>
               <th>first_name</th>
               <th>last_name</th>
               <th>Email</th>
               <th>gender</th>
               <th>price</th>
             </tr>
           </thead>
           <tbody>
          { mocaData.filter(value => {
           if(search === ""){
             return value
           }else if(
             value.first_name.toLowerCase().includes(search.toLowerCase()) || value.last_name.toLowerCase().includes(search.toLowerCase()) )
           {
             return value
           }
          }).map(value =>(
            <tr key={value.id}>
              <td>{value.first_name}</td>
              <td>{value.last_name}</td>
              <td>{value.email}</td>
              <td>{value.gender}</td>
              <td>{value.price}</td>
            </tr>
          ))}
           </tbody>
          </table>
        </div>
   )
}
 
export default Filter;