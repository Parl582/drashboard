import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    return (
        <div>
            <div className="Main_c">
                <div className="cont">

                        <h1>
                            WellCome to Flyweis <span>Technology</span>

                        </h1>
                    <div className="inm">
                            <div>
                                    <label htmlFor="">User id</label>
                            </div>
                        <input type="text" placeholder="User Id"/>
                    </div>
                    <div className="inm">
                             <div>
                                    <label htmlFor="">Password</label>
                            </div>
                        
                       
                        <input type="text" placeholder="Password"/>
                    </div>

                    <div className="btn_kog">
                 
                            <div className="create">
                                <Link to="/reg">
                                create an account
                                
                                </Link>
                            <button>
                                <Link to="/">
                                Login
                                
                                </Link>
                              
                            </button>
                          
                            </div>

                    </div>

                    <div className="for">


                          
                    <Link to=''>
                    Forgot Password
                    </Link>


                    </div>
                  
                           
                </div>
            </div>
        </div>
    )
}

export default Login
