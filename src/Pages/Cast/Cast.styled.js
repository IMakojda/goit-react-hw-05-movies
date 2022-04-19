import styled from "styled-components";

export const ListActors = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill,minmax(180px,1fr));
  justify-items: center;
  list-style: none;
  margin: 0 auto;
  padding:10px;
  max-width: calc(100vw - 48px);
`

export const LiItemActor = styled.li`
  background-color: #282c34;
  border-radius: 10px;
  margin-top: 5px;
  max-width: 180px;
  padding: 5px;
`

export const ImgActors = styled.img`
display:block;
max-width:100%;
border-radius:10px;
margin-bottom:3px;
`
export const SubTitle = styled.p`
margin:0;
text-align: center;
color:white;
`