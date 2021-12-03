import { PermIdentity } from '@mui/icons-material'
import PhoneIcon from '@mui/icons-material/Phone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react'
import { Link } from 'react-router-dom';
import './user.css'

const UserPage = () => {
    return (
        <>
            <div className="user_Main_Container">
                <div className="userTitleContainer">
                    <h1 className="userTitle" > Edit User</h1>

                    <Link to="/newuser">
                    <button className="userAddvutton">
                        create
                    </button>
                    </Link>
                   
                </div>

                <div className="userContainer">
                    <div className="userShow">


                        <div className="userShow_top">

                            <img 
                            src="data:image/jpeg;base64,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" alt=""
                             className="userShowImg"/>
                        <div className="userDhowrirle">

                            <span className="userUsername">parl</span>
                            <span className="userTitle">Pranjal</span>
                        </div>
                        </div>
                        <div className="userShow_buttom">

                            <div className="userheader">
                               <span className="accunt">
                               Account Details
                               </span>
                               <div className="userShowInfo">


                                     <PermIdentity/>

                                    <div className="userInfo">Parl</div>
                               </div>
                               <div className="userShowInfo">


                                     <PhoneIcon/>

                                    <div className="userInfo">+91 6000000303</div>
                               </div>
                               <div className="userShowInfo">


                                     <AddLocationIcon/>

                                    <div className="userInfo">Assam | Dibrugarh</div>
                               </div>
                               <div className="userShowInfo">


                                     <EmailIcon/>

                                    <div className="userInfo">test@gmail.com</div>
                               </div>
                              

                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">

                        <div className="uptitle">
                            Edit
                     </div>
          
                        <form className= "userUpdform">
                            <div className="upleft">
                                <div className="userupitem">
                                    <label>UserName</label>
                                    <input type="text" className="userupinput" />
                                </div>
                                <div className="userupitem">
                                    <label>email</label>
                                    <input type="text" className="userupinput" />
                                </div>
                                <div className="userupitem">
                                    <label>Phone</label>
                                    <input type="text" className="userupinput" />
                                </div>
                                <div className="userupitem">
                                    <label>Address</label>
                                    <input type="text" className="userupinput" />
                                </div>
                                </div>

                            <div className="upRight">

                                <img 
                                src="data:image/jpeg;base64,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" alt=""
                                 className="imgcls" />
                                    <div className="btn">
                                  
                                 <input type="file" className='fileupdate' />
                                 <button className="updatebtn">
                                     Update
                                 </button>

                                    </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default UserPage
