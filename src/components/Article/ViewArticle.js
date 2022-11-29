import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ViewArticle() {

  const [articleView, setArticleView] = useState({

    nomarticle : "",
    description : "",
  });

  const {idarticle} = useParams();

  useEffect(() => {
    loadDataView();
  },[]);

  const loadDataView = async () =>{
    const resultViewData = await axios.get(`http://192.168.10.53:8088/article/${idarticle}`);
    setArticleView(resultViewData.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Article Details</h2>
          <div className='card'>
             <div className='card-header'>
              Details for Article id :
              <ul className='list-group list-groupe-flush'>
                <li className='list-group-item'>
                  <b>Nom Article : </b>
                  {articleView.nomarticle}
                </li>
                <li className='list-group-item'>
                  <b>Description Article : </b>
                  {articleView.description}
                </li>
              </ul> 
             </div>
          </div>
          <Link className='btn btn-primary' to={'/'}>Back to home</Link>
        </div>
      </div>
    </div>
  )
}
