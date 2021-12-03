import { Link } from 'react-router-dom'
import React from 'react'
import './reg.css'

const Registation = () => {
    return (
        <div>
                <div className="m_cn">
               
                    <div className="cn">

                       
                        <div className="left_c">
                            <img src="https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300242/97334667-user-icon-human-person-symbol-avatar-login-sign-circle-button-with-soft-color-gradient-background-ve.jpg" alt="" />
                        </div>
                        <div className="Right_c">

                            <div className="inp_c">
                                <div className="lav">
                                    <label>
                                        UserName
                                    </label>
                                </div>
                                <input type="text" name="" id="" placeholder="User_name"/>

                                <div className="lav">
                                    <label>
                                      Password
                                    </label>
                                </div>
                                <input type="text" name="" id="" placeholder="Password"/>
                                <div className="lav">
                                    <label>
                                        Re-enter Password
                                    </label>
                                </div>
                                <input type="text" name="" id="" placeholder="Re-enter Password"/>


                                    <div className="BtnR">

                                        <Link to="/login">

                                        <button>Sign In</button>


                                        </Link>
                                    


                                    </div>
                        
                            </div>
           
                           

                           
                        </div>
                       

                    </div>
                </div>
            
        </div>
    )
}

export default Registation
