import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';

function Searched() {
  const [searchValue, setSearchValue] = useState([]);

  const { Search } = useParams();

  useEffect(() => {
    searchData(Search)
  }, [Search])

  const searchData = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f453a839f29043cc90c4190ca794885c&query=${name}`)
    const recipeData = await data.json();
    setSearchValue(recipeData.results);

  }
  return (
    <Grid>
      {searchValue.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={'Recipe/' + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>

          </Card>
        )
      })}
    </Grid>
  )
}
const Grid = styled.div`
display : grid;
grid-template-columns : repeat(auto-fit , minmax(20rem, 1fr));
grid-gap:3rem;
`
const Card = styled.div`
img{
    width:80%;
    border-radius:2rem;
}
h4{
    text-align: center;
    padding: 1rem;
    margin-right: 5rem;

}`

export default Searched;