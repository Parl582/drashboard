import React from 'react'
import './noti.css'

const Notification = () => {
    return (
        <div>
            <div className="main-cintainer_not">
                <div className="header_con">
                    <h1>Send Notification</h1>
                </div>
                <div className="AppId">
                    <p>App Id</p>

                    <input type="text" placeholder="Enter the app id" />
                </div>

                <button className="btnsend">Send</button>
                
            </div>
            
        </div>
    )
}

export default Notification
