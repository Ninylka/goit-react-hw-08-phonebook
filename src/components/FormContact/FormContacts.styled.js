
import styled from 'styled-components'

 
export const ContainerDivPhonebook = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const TitlePhonebook = styled.h2`
font-family: 'roboto';
font-size: 24px;
margin-top: 24px;
margin-bottom: 24px;
`
export const TitleContacts = styled.h2`
font-family: 'roboto';
font-size: 24px;
margin-bottom: 24px;
margin-top: 24px;
`
export const FormPhonebook = styled.form`
width: 300px;
height: 250px;
border: 2px solid #A3E4D7;
border-radius: 10px;
padding: 20px;
`
   export const LabelPhonebook = styled.label`
font-family: 'roboto';

   `
export const TitleInputSearch = styled.h3`
font-family: 'roboto';
font-size: 20px;
margin-bottom: 12px;

`
export const InputPhonebookName = styled.input`
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
export const InputPhonebookNumber = styled.input`
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


export const ButtonPhonebook = styled.button`
display: block;
font-family: 'roboto';
border: 2px solid #A3E4D7;
border-radius: 10px;
font-size: 18px;
font-weight: 500;
background-color: #A3E4D7;
width: 150px;
height: 28px;
margin: auto ;
transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background-color: #82C9B1; 
    border:none;
   
  }

`

export const InputSearch = styled.input`
height: 20px;
border: 2px solid #A3E4D7;
border-radius: 10px;
&:hover {
      border: 2px solid #82C9B1;
  }
`
export const ButtonDelete = styled.button`

font-family: 'roboto';
border: 2px solid #A3E4D7;
border-radius: 10px;
font-size: 18px;
font-weight: 500;
background-color: #A3E4D7;
width: 80px;
height: 28px;
margin-left: 12px;
transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

&:hover {
    background-color: #82C9B1; 
    border:none;
   
  }


`
export const  ItemContact = styled.li`
font-family: 'roboto';
margin-top: 8px;
`
export const  Message = styled.p`
font-family: 'roboto';
margin-top: 12px;
`

