import styled from "styled-components";
export const DivRegisterForm = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: auto;
`
export const FormRegisterStyled = styled.div`
width: 300px;
height: 350px;
border: 2px solid #A3E4D7;
border-radius: 10px;
padding: 20px;
`

export const LabelRegister = styled.label`
font-family: 'roboto';
   `
   export const InputRegister = styled.input`
   display: block;
   margin-top: 10px;
   margin-bottom: 50px;
   border: 2px solid #A3E4D7;
   border-radius: 10px;
   height: 20px;
   width: 300px;
   &:hover {
      border: 2px solid #82C9B1;
  }
    `

export const ButtonRegister = styled.button`
display: block;
font-family: 'roboto';
border: 2px solid #A3E4D7;
border-radius: 10px;
font-size: 18px;
font-weight: 500;
background-color: #A3E4D7;
width: 100px;
height: 28px;
margin: auto ;
transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background-color: #82C9B1; 
    border:none;
   
  }
   `