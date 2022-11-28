import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Home() {

    const [articles, setArticle] = useState([]);

    useEffect(() =>{
        api_calls();
    },[]);

    const api_calls = async () =>{
        
        const resultApiData = await axios.get('http://192.168.10.53:8088/article');

        setArticle(resultApiData.data)
        // console.log(resultApiData.data)
    }
    
    
  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name article</th>
                        <th scope='col'>Description</th>
                        {/* <th scope='col'>Email</th> */}
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map((article, index) => (
                            <tr>
                                <th scope='row' key={index.idarticle}>{index+1}</th>
                                <td>{article.nomarticle}</td>
                                <td>{article.description}</td>
                                {/* <td>{}</td> */}
                                <td>
                                    <button className='btn btn-primary mx-2'>View</button>
                                    <button className='btn btn-outline-success mx-2'>Edit</button>
                                    <button className='btn btn-danger mx-2'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
