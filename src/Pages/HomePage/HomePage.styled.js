import styled from "styled-components";
import { Link } from "react-router-dom";

export const GlobalLink = styled(Link)`
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
  &:hover {
    color:#db1a5e;
  }
`

export const ListMovie = styled.ul`
  list-style: auto;
`;

export const Title = styled.h2`
  font-size: 25px;
  margin: 10px 20px;
  &::first-letter{
    font-size:140%;
    color:#db1a5e
  }
}
`


