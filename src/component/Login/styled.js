import styled from "styled-components";

export const Container = styled.div`
min-width: 100px;
max-width: 300px;
margin: 0 auto;
width: 80%;
`;

export const Titulo = styled.h1`
font-size: 20px;
text-align: center;
`;

export const Form = styled.form`
margin: 5px auto;
width: 80%;
`;

export const Label = styled.label`
font-size: 16px;
width: 100%;
font-weight: bold;
margin-top: 10px;
`;

export const Input = styled.input`
width: 100%;
margin-top: 5px;
border-left:transparent;
border-right:transparent;
border-top:transparent;
border-style: outset;
&::placeholder{
    font-size: 10px;
    padding-left: 5px;
}

&:active{
}
&:focus{
  outline: none;
  font-size: 14px;
}
`;

export const Error = styled.p`
width: 100%;
font-size: 10px;
text-align: center;
color: red;
font-weight: bold;
`;


export const Wraper = styled.div`
display: flex;
`;