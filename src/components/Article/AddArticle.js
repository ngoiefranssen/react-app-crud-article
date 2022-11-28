import React from 'react'

export default function AddArticle() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register Article</h2>
          <div  className='mt-3'>
            <input  type={"text"} className="form-control"
                    placeholder='Enter your name..........' name='name'/>
          </div>
          <div  className='mt-3'>
          <textarea className="form-control"  type={"text"} rows="3"
                    placeholder="Message sent to description..."
                    name='description'></textarea>
          </div>
          <div className='text-center'>
            <button type='submit' className='btn btn-outline-primary my-3 btn-center'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
