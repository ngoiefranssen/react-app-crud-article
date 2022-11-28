import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        api_calls();
    },[])

    const api_calls = async () =>{
        
        const apiData = '';
        const resultApiData = await axios.get(apiData);

        setUsers(resultApiData.data)
    }
    
    
  return (
    <div className='container'>
        <table className="table table-striped border shadow py-4">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>User name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.users?.map((user, index) => (
                        <tr>
                            <th scope='row'></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
