import axios from 'axios';
import React,  { useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddArticle() {

  const navigate = useNavigate();

  const [article, setArticle] = useState({

    nomarticle : "",
    description : ""
  });

  const {nomarticle, description} = article;

  const onInputChange = (e) =>{

    e.preventDefault()

    setArticle({ ...article, [e.target.nomarticle] : e.target.value });
  }

  const onsubmit = async () =>{

    await axios.post('http://192.168.10.53:8088/article', article);
    navigate('/');
  };



  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register Article</h2>
          <div  className='mt-3'>
            <input  type={"text"} className="form-control"
                    placeholder='Enter your name...........' name='name'
                    value={nomarticle}/>
                    onChange={(e) => onInputChange(e)}
          </div>
          <div  className='mt-3'>
          <textarea className="form-control"  type={"text"} rows="3"
                    placeholder="Message sent to description..."
                    name='description'
                    value={description}
                    onChange = {(e) => onInputChange(e)}></textarea>
          </div>
          <div className='text-center'>
            <button type='submit' className='btn btn-outline-primary my-3 mx-4'>
              Submit
            </button>
            <button type='submit' className='btn btn-outline-danger my-3'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
