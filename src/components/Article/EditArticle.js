import axios from 'axios';
import React,  { useEffect, useState} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditArticle() {

  let navigate = useNavigate();

  const{idarticle} = useParams();

  const [article, setArticle] = useState({

    nomarticle : "",
    description : "",
  });

  const {nomarticle, description} = article;

  const onInputChange = (e) =>{
    setArticle({ ...article, [e.target.name] : e.target.value });
  }

  useEffect(() => {
    loadingData();
  }, [])

  const onSubmit = async (e) =>{

    e.preventDefault();
    await axios.put(`http://192.168.10.53:8088/article/${idarticle}`, article);
    navigate('/');
  };

  const loadingData = async () =>{

    const dataResult = await axios.get(`http://192.168.10.53:8088/article/${idarticle}`);
    setArticle(dataResult.data)
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit Article</h2>
          <form onSubmit={(e) => onSubmit(e)}>
          <div  className='mt-3'>
            <input  type="text" className="form-control"
                    placeholder='Enter your name........' name='nomarticle'
                    value={nomarticle}
                    onChange={(e) => onInputChange(e)}
                    />
          </div>
          <div  className='mt-3'>
          <textarea className="form-control"  type="text" rows="3"
                    placeholder="Message sent to description..."
                    name='description'
                    value={description}
                    onChange = {(e) => onInputChange(e)}></textarea>
          </div>
          <div className='text-center'>
            <button type='submit' className='btn btn-outline-primary my-3 mx-4'>
              Submit
            </button>
            <Link to={'/'} className='btn btn-outline-danger my-3'>
              Cancel
            </Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}
