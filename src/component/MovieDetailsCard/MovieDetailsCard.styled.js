import styled from "styled-components";

export const Article = styled.article`
  display:flex;
  padding:0 15px 15px 15px;
`

export const Image = styled.img`
  display:block;
  max-width:300px;
  border-radius:10px;
`

export const DescriptionDiv = styled.div`
padding:15px
`
export const Title = styled.h2`
font-size:26px;
margin:10px 0;
&::first-letter{
    font-size:140%;
    color:#db1a5e
  }
`

export const UserScore = styled.p`
  margin: 0;
  font-size: 17px;
  
`

export const VoteS = styled.span`
  // font-size: 20px;
  margin-left: 10px;
  padding: 4px;
  border-radius: 50%;
`

export const CardSubTitle = styled.h3`
  font-size: 20px;
  margin:10px 0 5px 0;
`
export const OverviewText = styled.p`
margin:0;
`
export const List = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  margin:0;
`

export const ListItem = styled.li`
  margin-right: 8px;
`

