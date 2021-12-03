import React from 'react'

import styled from 'styled-components'
import imgs from '../../../images/linkedin.png'

const Container = styled.div`
width: 100vw;
padding: 50px;



`
const MainGroup = styled.div`
width: 70%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`
const GroupsDetails = styled.div`
    width: 300px;
    height: auto;
    padding: 20px;
    display: flex;
    border-radius: 10px;
    border: 1px solid ;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    margin-bottom: 20px;
    cursor: pointer;
`
const Images = styled.div`
display: flex;
align-items: center;
    img{
        margin-right: 30px;
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 999px;
    }

    p{
        margin-right: 20px;
        color: darkgray;
        font-weight: 600;
    }
`
const Heading = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
margin-bottom: 10px;
    h1{
        margin-right: 30px;
        color: darkgray;
        

    }
`

const Group = styled.div`

    p{
        margin-right: 20px;
        color: darkgray;
        font-weight: 600;
    }

`


const TotalGroups = () => {
    return (
        <div>

            <Container>
                <MainGroup>
                    <GroupsDetails>
                        <Images>
                            <img src={imgs} alt="" />

                        <p>Total Members : </p>
                        <span>3450</span>
                        </Images>
                        <Heading>
                            <h1>Group Name :</h1>
                            <span>Test</span>
                        </Heading>
                        <Group>
                            <p>Description :</p>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rem 
                            delectus quos nam culpa error autem provident deserunt ipsam mollitia?</span>
                        </Group>
                    </GroupsDetails>
                    <GroupsDetails>
                        <Images>
                            <img src="" alt="" />

                        <p>Total Members : </p>
                        <span>3450</span>
                        </Images>
                        <Heading>
                            <h1>Group Name :</h1>
                            <span>Test</span>
                        </Heading>
                        <Group>
                            <p>Description :</p>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rem 
                            delectus quos nam culpa error autem provident deserunt ipsam mollitia?</span>
                        </Group>
                    </GroupsDetails>
                    <GroupsDetails>
                        <Images>
                            <img src="" alt="" />

                        <p>Total Members : </p>
                        <span>3450</span>
                        </Images>
                        <Heading>
                            <h1>Group Name :</h1>
                            <span>Test</span>
                        </Heading>
                        <Group>
                            <p>Description :</p>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est rem 
                            delectus quos nam culpa error autem provident deserunt ipsam mollitia?</span>
                        </Group>
                    </GroupsDetails>
                </MainGroup>

            </Container>
            
        </div>
    )
}

export default TotalGroups
