import React from 'react'
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


export default function Veggies() {
    const [Veggie, setVeggie] = useState([])

    useEffect(() => {
        getVeggie();
    }, [])


    const getVeggie = async () => {
        const check = localStorage.getItem("veggie")

        if (check) {
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=f453a839f29043cc90c4190ca794885c&number=9&tags=vegetarian`
            );
            const data = await api.json();
            localStorage.setItem("veggie", JSON.stringify(data.recipes))
            setVeggie(data.recipes)
            console.log(data.recipes)
        }

    };
    return (<div>
        <Wrapper >
            <h3>Vegitables</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}>
                {Veggie.map((recipe) => {
                    return (
                        <SplideSlide key={recipe.id}>
                            <Card key={recipe.id}>
                                <Link style={{textDecoration:"none"}} to={'/Recipe/' + recipe.id}>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt="recipe.title" />
                                </Link>
                            </Card>
                        </SplideSlide>

                    );
                })}
            </Splide>
        </Wrapper>

    </div>
    )
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card = styled.div`
min-height: 15rem;

overflow:hidden;
position:relative;


img {
    border-radius: 2rem;
    left:0;
    height:100%;
    width: 100%;
    position:absolute;
    object-fit:cover;
}
`
