import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const GoBackBtn = styled.button`
  cursor:pointer;
  margin-bottom: 10px;
  display:flex;
  align-items: center;
  color:#2a363b;
  background-color: transparent;
  border: none;
  font-size:18px;
  &:hover {
    color:#db1a5e;
  }
`

export const SubInfoDiv = styled.div`
padding:15px;
border-top:1px solid #6d6d6e;
`

export const SubLink = styled(NavLink)`
text-decoration: none;
  padding: 10px;
  color: #2a363b;
  font-size: 18px;
  &:hover {
    color:#db1a5e;
  }
`

export const Article = styled.article`
  display:flex;
  padding:0 15px 15px 15px;
`

export const Image = styled.img`
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
  font-size: 20px;
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
