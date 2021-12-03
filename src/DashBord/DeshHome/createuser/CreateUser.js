import React from 'react'
import './cresteuser.css'

const CreateUser = () => {
    return (
        <>
            <div className="newuser_container">
                <div className="userdetails">
                    <h1>New User</h1>
                    <form className="user_form">
                        <div className="inputs">
                        <label >username</label>
                        <input type="text" />
                        </div>
                        <div className="inputs">
                        <label >Phone</label>
                        <input type="text" />
                        </div>
                        <div className="inputs">
                        <label >Address</label>
                        <input type="text" />
                        </div>
                        <div className="inputs">
                            <label >email</label>
                            <input type="text" />
                        </div>
                        <input type="file" className="file_input"/>
                        <button className="btn1">Create</button>
                       
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default CreateUser
