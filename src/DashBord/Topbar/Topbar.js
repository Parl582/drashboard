
import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import Options from './Options';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import { Medication, NotificationAdd } from '@mui/icons-material';

const Container = styled.div`

    width: 100vw;
    height: 70px;
    top: 0;
    position: sticky;
    z-index: 999;
    background-color: #f5f5f5;
`
const Navbar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    padding: 0 50px;
`

const LeftSide = styled.div`
    display: flex;
    align-items: center;
    color: #000;
  
`
const LeftIcon = styled(MenuIcon)`
    background-color: green;
    cursor: pointer;
    padding: 5px 8px;
    color: #fff;
`
const Logo =styled.div`
margin-left: 10px;
cursor: pointer;
      h1{
        font-size: 1.5rem;
        font-weight: 600;
    }

    span{
        color: red;
    }

`
const Middle = styled.div`
    display: flex;
    align-items: center;

`
const RightSide = styled.div`
    

    display: flex;
    align-items: center;   
   
  
`
const PersonSides = styled.div`
    

    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 10px;
    cursor: pointer;
  
`



const Topbar = () => {
    return (
        <>
            <Container>
                <Navbar>
                    <LeftSide>
                        <LeftIcon>
                             <MenuIcon/>
                        </LeftIcon>
                          

                        <Logo>
                            <h1 backgroundColor= 'red'>Flyweis <span>Technology</span></h1>
                        </Logo>
                    </LeftSide>
                    

                    <RightSide>
                    <Middle>
                      
                      <Options Icon={NotificationAdd} color='gray' numbers='5' />
                    
                     <Options Icon={PersonIcon} color= "green" numbers='2' />
                    
                     <Options Icon={Medication} color= "red" numbers='1' />
                     </Middle>
                        <PersonSides>
                            <Options Icon={PersonIcon} title='Admin' Icons={ArrowDropDownIcon}/>

                        </PersonSides>
                    </RightSide>
                
                </Navbar>

            </Container>
            
        </>

    )
}

export default Topbar
