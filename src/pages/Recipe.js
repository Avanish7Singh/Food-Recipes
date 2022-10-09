import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import React from 'react'

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const [activeTab, setActiveTab] = useState('instructions')
    const { id } = useParams();

    useEffect(() => {
        recipeData(id)
    }, [id])

    const recipeData = async (id) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f453a839f29043cc90c4190ca794885c`)
        const recipeData = await data.json();
        setRecipe(recipeData);
        console.log(recipeData)

    }

    return (
        <RecipeWrapper>
            <div>
                <h2 >{recipe.title}</h2>
                <img style={{borderRadius:"2rem",height: "25rem", width:"35rem", marginTop:"2rem"}} src={recipe.image} alt="" />
            </div>
            <Info>
                <Div>
                    <Botton className={activeTab === 'instructions' ? "active" : " "}
                        onClick={() => setActiveTab('instructions')}>Instructions</Botton>

                    <Botton className={activeTab === 'ingredients' ? "active" : " "}
                        onClick={() => setActiveTab('ingredients')} >Ingredients</Botton>
                </Div>
                {activeTab === 'instructions' && (
                    <div>
                        <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }} ></h3>
                        <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }} ></h3>
                    </div>
                )}

                {activeTab === 'ingredients' && (
                    <ul>
                        {recipe.extendedIngredients.map((item) =>
                        (
                            <li key={item.id}>{item.original}</li>
                        )
                        )}
                    </ul>
                )}

            </Info>
        </RecipeWrapper>


    )
}

const RecipeWrapper = styled.div`
margin-top: 10rem ;
margin-bottom: 5em;
display: flex;
.active{
    background: black;
    color: white;
}
h3 {
    margin-bottom: 2rem;
}
li {
   font-size: 1.5rem;
   line-height: 2.5rem;
}
ul {
    margin-top: 2rem;
}
`
const Botton = styled.div`
padding: 1rem 2rem;
background: white;
color: black;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
cursor: pointer;
`
const Info = styled.div`
margin-left: 10rem;
`
const Div = styled.div`
display: flex;
`

export default Recipe