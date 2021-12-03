import React from 'react'
import Cards from './Cards/Cards'
import Charts from './charts/Charts'
import './main.css'

import { Userdata } from '../../Alldata'
import NewUser from './newuser/NewUser'

const MainPage = () => {
    return (
        <>
        
           <div className="Main_page_Container">

               <div className="CarsdHolder">
                    <Cards title='Total Install' nmb='2356'/>
                    <Cards  title='New Install' nmb='1056'/>
                    <Cards  title='Active user' nmb='9001'/>

               </div>

               <div className="Charts">
               <Charts data={Userdata} title="Active User" grid datakey="Active user" />


               </div>
       
             <div className="Details_pages">

               <div className="NewInstall">

                   <h3>New Users</h3>

                        <NewUser/>
                        <NewUser/>
                        <NewUser/>
                    
                </div>

                    <div className="NewInstall2">
                        <h3>Total Revenue</h3>
                            <Charts data={Userdata}  datakey="Active user"/>
                    </div>

              
               </div>
              

           </div>
          
        </>
    )
}

export default MainPage
