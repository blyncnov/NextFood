import styled from "styled-components";

export const ValueContainer = styled.div`
padding: 2em 0;
margin: 1em 0;
background-color: #121F4A;
`

export const ValueContainerColumn = styled.div`
width: 100%;
max-width: 90%;
margin: 0 auto;
background-color: #fff;
border-radius: 4px;
padding: 1em;
box-shadow: rgb(0 0 0 / 10%) -4px 9px 25px -6px;
`

export const ValueContainerRows = styled.div`

h1{
    text-align: center;
}

@media (max-width: 768px) {
h1{
    font-size: 1.8em;
}
}
`

export const ValueContainerInner = styled.div`
padding: 2em 0;
display: flex;
justify-content: space-between;
align-items: center;
gap: 1em;

@media (max-width: 768px) {
    flex-direction: column;
    gap: 2em;
}

`

export const ValueContainerInnerFlex = styled.div`
line-height: 22px;


h2{
    margin: 1em 0;
    color: #253276;
}

p{
    opacity: 0.8;
    color: #253276;
}

@media (max-width: 768px) {


    h2{
    font-size: 1.5em;
}
}
`

export default ValueContainer