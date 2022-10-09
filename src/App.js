import Catagory from "./components/Catagory";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from 'react-icons/gi';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Deliciousss</Logo>
        </Nav>
        <Search />
        <Catagory />
        <Pages />
      </BrowserRouter>

    </div>
  );
}

const Logo = styled(Link)`
text-decoration:none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobster two', cursive;
`

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content:flex-start;
text-align: center;

svg{
  font-size: 2rem;
}
`

export default App;
