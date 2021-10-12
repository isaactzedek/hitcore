import React from 'react'
import Guitarfooter from './Guitarfooter.PNG'
function Offers() {
    return (
        <>
          <div className="jumbotron text-center">
              <h3>Be the first to know about exclusive offers, tips and more.</h3>
              <form method="post">
                <div className="form-group">
                    <input type="search" className="form-control-sm pr-5" placeholder="Enter Keywords #" size="50"/>
                    <span> </span> <span>  </span>   <span> </span> <span>  </span>
                    <span> </span> <span>  </span>    <span> </span> <span>  </span>
                    
                    <button type="submit" className="btn btn-danger">Sign Up</button>
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"/> Yes, I would like to receive emails with news and offers from Guitar Center.
                    </label>
                </div>
            </form>
              </div>
              <div className="container"> 
              <img src={Guitarfooter} width="100%"/>
              </div>
        </>
    )
}

export default Offers;