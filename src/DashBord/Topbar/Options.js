import React from 'react'
import styled from 'styled-components'

const Badges = styled.div`

    display: flex;
    align-items: center;
    padding: 5px 20px;
    position: relative;
    cursor: pointer;
   

    p{
        margin-left: 5px;
    }

    .header_Icon{
        color: gray;
    }

    span{
        position: absolute;
       
        border-radius: 999px;
        padding: 2px 7px;
        top: -5px;
        right: 20px;
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 0.8rem;
    }
`

const Options = ({Icon, title, Icons, color , numbers}) => {
    return (
        <>

        
              
            
            <Badges>
                 {Icon && <Icon className="header_Icon"  /> }
                 <p>{title}</p>
                 {Icons && <Icons className="header_Icon" /> }

                 <span style={{backgroundColor:color}}>{numbers}</span>
                 
            </Badges>
            
        </>
    )
}

export default Options
