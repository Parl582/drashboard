import React from 'react'
import './creategroup.css'

const Creategroup = () => {
    return (
        <>
            <div className="cgp">
                <div className="mgp">
                    <div className="dts">
                        
                        <label htmlFor="" ><h1>Group Name</h1></label>
                        <input type="text" placeholder="Group Name" />

                    </div>
                    <div className="dts">
                    <label htmlFor="" ><h1>Group Description</h1></label>
                    <input type="text" placeholder="Group Description"/>

                    </div>

                    <div className="filesvgp">
                        
                    <input type="file" />

                    <button className="cgpbtn">
                        Create Group
                    </button>


                    </div>

                   
                </div>
            </div>
            
        </>
    )
}

export default Creategroup
