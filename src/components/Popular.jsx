import React from 'react'
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


export default function Popular() {
    const [Popular, setPopular] = useState([])

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        const check = localStorage.getItem("popular")
        if (check) {
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=f453a839f29043cc90c4190ca794885c&number=9`
            );
            const data = await api.json();
            localStorage.setItem("popular", JSON.stringify(data.recipes))
            setPopular(data.recipes)
            console.log(data.recipes)
        }
    };

    return (
        <div>
            <Wrapper >
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '5rem',
                }}>
                    {Popular.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card key={recipe.id}>
                                    <Link style={{textDecoration:"none"}} to={'/Recipe/'+ recipe.id}>
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
//border-radius: 2rem;
overflow:hidden;
position:relative;
img {
    border-radius: 2rem;
    left:0;
    height:10rem;
    width: 100%;
    position:absolute;
    object-fit:contain;
}
`