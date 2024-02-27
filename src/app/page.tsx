'use client'
import React from 'react';


const YourComponent = () => {
  const namechange = () => {
    
  };

  return (
    <div className='center-container'> 
      <form>
      <h1>create user page's</h1>
        <div className="mb-3">
          <div className="row">
            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                 name
                </label>
                <input type="text" className='form-control ' id="exampleFormControlInput1"
                  placeholder="Enter name"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col-xl-3 col-md-4 col-sm-6 col-12">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Address
                </label>
                <input type="text" className='form-control ' id="exampleFormControlInput1"
                  placeholder="address"
                />
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" />
      </form>
    </div>
  );
};

export default YourComponent;
