import React from 'react'
import './sidebaropt.css'
import HomeIcon from '@mui/icons-material/Home';


const SidebarOptions = ({Icon, title, Icons}) => {
    return (
        <>
         <div className="deshbord">
                {Icon && <Icon className="header_Icon"  /> }
                 <p>{title}</p>
                 {Icons && <Icons className="header_Icons"  /> }

                
            </div>
         
        </>
    )
}

export default SidebarOptions
