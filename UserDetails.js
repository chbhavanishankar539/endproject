import React from 'react'

function UserDetails() {
  return (
    <div className='body'>
      <div className='Usercontainer'>
      <form >
          <h1>TRIP DETAILS</h1>
          <hr className='Userhr'/>
          <fieldset className='fieldset'>
            <br/>
            <legend className='Userlegend'><b>Trip Type</b></legend>
            
           <input type='radio' style={{marginRight:'40px'}}/><label>solo trip</label><br/>
            <input type='radio'style={{marginRight:'40px'}}/><label>Family/Friends</label>
          </fieldset>
          
          <br/>
          <p>
            <label><b>Duration:</b></label>
            <input type='number' placeholder='enter number of days'className='number'/>
          </p>
          <br/>
          <fieldset className='fieldset'>
            <legend className='Userlegend'><b>Date</b></legend>
            <label>From</label><span><input type='date'/></span><br/>
            
            <label>To</label><span><input type='date'/><br/></span>
            
          </fieldset>
          <br/>
          <fieldset className='fieldset'>
            <legend className='Userlegend'><b>Type of Transportation</b></legend><br/>
            
            <input type='radio'style={{marginRight:'40px'}}/><label>Personal(bike/car)</label><br/>
            <input type='radio'style={{marginRight:'40px'}}/><label>Bus</label><br/>
            <input type='radio'style={{marginRight:'40px'}}/><label>Train</label><br/>
            <input type='radio'style={{marginRight:'40px'}}/><label>plane</label><br/>
          </fieldset>
          <br/> 
          <div>
            <button className='Userbutton'>submit</button>
          </div>
       </form>
       </div>
    </div>

    
  )
}

export default UserDetails
