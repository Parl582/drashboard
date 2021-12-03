
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../side.css'
import styled from "styled-components"

const Links = styled(Link)`
text-decoration:none;
color: white;

`

const Collapsmenus = ({subMenus, Icon, name,to,Icons}) => {

    const [expand, setexpand] = useState(false)

    return (
        <>
            <div className="Items_collaps">

            <div className="Collapsmenu" onClick={()=>setexpand(!expand)}>
                    {Icon && <Icon className="header_Icon"  /> }

                 

                      <Links to={to}>
                         {name}
                     </Links>       
              
                             
                    
                    {Icons && <Icons className="header_Icons"  /> }
            </div>
            {subMenus && subMenus.length > 0 ? (
                <div className={`Submenu ${expand ? 'active' : ""}`}>
                  {subMenus.map((menu, index)=>
                  (
                     <li key={index}>
                     <Links to={menu.to}>
                         {menu.name}
                     </Links>       
                  
                 </li>

                    ))}
                 </div>
                
                ) : null

             }

            </div>
            
        </>
    )
}

export default Collapsmenus
