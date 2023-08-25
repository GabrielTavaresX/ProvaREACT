import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  background-color: ${colors.third};
  display: flex;
  height: 6rem;
  
    

`

export const NavBar = styled.nav`
  /* Navegação */
  display: center;
  align-items:center;
  width: 100%;
  font-size:35px;
  
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    
    li {
      padding: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color:whi;
      }
    }
    li:hover {
      background-color: ${colors.secondaryLight};
    } ul{
  
}
  }
 

`