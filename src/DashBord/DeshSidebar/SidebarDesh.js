import React, { useState } from 'react'
import './side.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SidebarOptions from './SidebarOptions';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Collapsmenus from './Sidecollaps/Collapsmenus';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';




const SidebarDesh = () => {

    const [click, setclick] = useState(false)

    

    return (
        <>
         <div className="side_menu">
            <div className="top_section">
                <div className="Search_option">
                    <SearchIcon className="Search_icon"/>
                    <input type="text" placeholder="Search"/>
                </div>

            </div>
            <div className="heading">
                <h2>Dashboard</h2>
            </div>
                <div className="Sidebar_menus">
         
                 
                    
                 <Collapsmenus 
                    subMenus=
                    {[
                        {name:'Posts', to:'/post'},
                        
                       
                      
            
                     ]}
                  name="Home"
                  to="/"
                  Icon={HomeIcon}  
                
                  Icons={AddRoundedIcon} />

                    <Collapsmenus 
                    subMenus=
                    {[
                        {name:'Free',to:'/free'},
                        {name:'Categories', to:'/categoris'},
                        {name:'Just Listed', to:'/justlisted'},
          
                        {name:'All Product ', to:'/product'},
                      
                    
                     ]}
                  name="For Sale"
                  to=""
                  Icon={LoyaltyIcon}  
                  Icons={AddRoundedIcon} />

                    <Collapsmenus 
                    subMenus=
                    {[
                        
                        {name:'Create Group', to:'/create'},
                        {name:'Propular Groups', to:'/groups'},
                   
                      
                    
                     ]}
                  name="Group"
                  to=""
                  Icon={GroupAddOutlinedIcon}  
                  Icons={AddRoundedIcon}/>

                <Collapsmenus 
                 
                  name="Notification"
                  to="/noti"
                  Icon={NotificationsNoneOutlinedIcon}  
                 />

                <Collapsmenus 
                 
                 name="Settings"
                 to="/"
                 Icon={SettingsIcon}  
                />
              
                 <Collapsmenus 
                    subMenus=
                    {[
                        
                        {name:'User', to:'/user'},
                        {name:'Log-Out', to:'/login'},
                      
                   
                      
                    
                     ]}
                  name="Profile"
                  to="/"
                  Icon={ManageAccountsIcon}  
                  Icons={AddRoundedIcon}/>
               


                 
          
                </div>


         </div>
            
        </>
    )
}

export default SidebarDesh
