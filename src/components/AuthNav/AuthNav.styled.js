import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavLinkStyled = styled(NavLink)`
display: inline-block;
font-family: 'roboto';
  text-decoration: none;
  font-size: 18px;
  padding: 8px 16px;
  font-weight: 500;
  color: #2c3539;
  margin-right: 24px;
  &.active {
    background-color: #A3E4D7;
    border-radius: 10px;
  }
`
