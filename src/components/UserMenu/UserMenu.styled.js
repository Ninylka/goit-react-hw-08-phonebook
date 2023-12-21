import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  
`;

export const TextWelcome = styled.p`
font-family: 'roboto';
font-size: 16px;
margin-right: 8px;
`

export const LogoutButton = styled.button`
padding: 8px 16px;
border: 2px solid #A3E4D7;
background-color: #A3E4D7;
border-radius: 10px;
font-family: 'roboto';
font-size: 16px;
margin-left: 24px;
margin-right: 24px;
transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background-color: #82C9B1; 
 
  }
`

export const TitleHomePhone = styled.h1`
font-family: 'roboto';
color: #A3E4D7;
margin-right: 8px;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`