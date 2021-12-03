import React from 'react'
import { Link } from 'react-router-dom'

import './ctg.css'

const Categories = () => {
    return (
        <>
            <div className="ctg_cnt">
                <div className="ctg_dtls">
                    <div className="ctgs">
                       <Link className="Links" to='/free'>
                       <p>Free</p>
                       </Link>
                       
                    </div>
                    <div className="ctgs">
                    <Link className="Links" to='/justlisted'>
                       <p>Just Listed</p>
                       </Link>
                      
                       
                    </div>
                    <div className="ctgs">
                        <Link className="Links" to='/all'>
                       <p>All Products</p>
                       </Link>
                       
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Categories
