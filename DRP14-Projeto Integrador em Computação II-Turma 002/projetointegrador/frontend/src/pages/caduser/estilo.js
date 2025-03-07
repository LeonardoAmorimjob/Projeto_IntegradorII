import styled from "styled-components";

export const Container=styled.div
`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
width:100vw;
background-image: radial-gradient(circle, #ffc24d , #ffc24d , #ffc24d  ,#ffc24d );
`

export const Form=styled.form
`
display:flex;
padding:3rem;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:transparent;
border-radius:5px
width:100%;
max-width:450px;
gap:10px 0px;

span{
font-size:20pt;
color:#132544;
}
`