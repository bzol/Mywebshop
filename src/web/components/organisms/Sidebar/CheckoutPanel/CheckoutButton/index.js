import React from 'react'
import { Link, Router } from '../../../../../../shared/routing/routing';

const CheckoutButton = (props) => {
  
  return (
    <div className={props.inheritedStyle}>
      <Router>
        <Link to="/checkout">
          <button>sajt</button>
        </Link>
      </Router>
    </div>
  )
}
export default CheckoutButton