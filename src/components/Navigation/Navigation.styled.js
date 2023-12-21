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


export const NavLinkHome = styled(NavLink)`
  margin-left: 24px;
  margin-right: 24px;
  font-family: 'roboto';
  font-weight: 500;
  font-size: 18px;
  color: #2c3539;
  text-decoration: none;
  padding: 8px 16px;
  transition: background-color 0.3s, color 0.3s;


  &:hover {
    background-color: #A3E4D7;
    color: #2c3539;
    border-radius: 10px;
  }
`;

export const NavLinkContacts = styled(NavLink)`
  margin-left: 24px;
  margin-right: 24px;
  font-family: 'roboto';
  font-size: 18px;
  color: #2c3539;
  text-decoration: none;
  padding: 8px 16px;
  transition: background-color 0.3s, color 0.3s;
 

  &:hover {
    background-color: #A3E4D7;
    color: #2c3539;
    border-radius: 10px;
  }
`;