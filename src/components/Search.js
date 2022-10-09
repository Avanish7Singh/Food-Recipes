import React, {useState} from 'react';
import styled from 'styled-components';
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";


function Search() {
    const [input, setInput] = useState('');
     
    const navigate= useNavigate();
    const handleSubmit = (e) =>{
       e.preventDefault();
       navigate("/Searched/" + input);
    }

    return (
        <FormStyle onSubmit={handleSubmit}>
            <FaSearch></FaSearch>
            <div>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type='text' />
            </div>
        </FormStyle>
    )
}

const FormStyle = styled.form`
margin: 0rem 20rem;
position: relative;
width:100%;
 div {
    
 }
input {
  border: none;
  background: black;
  border-radius: 1rem;
  color: white;
  font-size: 1.3rem;
  padding: .5rem 3rem;
  outline: none;
  width: 45%;
  /* height: 25rem; */
  
//   margin-top: 3rem;
}
svg{
    color: white;
    position: absolute;
    background:black;
    top:50%;
    left:0%;
    transform: translate(100%, -50%)
}
`

export default Search