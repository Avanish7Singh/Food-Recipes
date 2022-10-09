import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from 'styled-components';
import {NavLink} from "react-router-dom";


function Catagory() {
    return (
        <List>
            <SLink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to={"/cuisine/American"}>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to={"/cuisine/Thai"}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to={"/cuisine/Japanese"}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink>
        </List>
    )
}

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem ;

`
const SLink = styled(NavLink)`
display : flex;
flex-direction: column;
justify-content: center;
/* align-item: center; */
border-radius: 50%;
margin-right: 1rem;
text-decoration: none;
width: 6rem;
/* height: 6rem; */

svg{
  margin-left:1rem;
}
&.active{
    svg{
        color:green;
    }
    h4{
        color:green;
    }
}

`


export default Catagory