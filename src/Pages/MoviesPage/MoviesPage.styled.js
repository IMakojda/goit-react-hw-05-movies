import styled from "styled-components";


export const ButtonSearch = styled.button`
    width: 50px;
    height: 30px;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
    background-color: #2a363b;
    cursor: pointer;
        
    &:hover {
    background-color:#db1a5e;
  }
`
export const InputSearch = styled.input`
    width: 180px;
    height: 30px;
    padding-left: 10px;
    font-size:15px;
    border-radius: 5px;
    border:solid 1px #2a363b;

}
`
export const FormSearch = styled.form`
display:flex;
align-items: center;
`

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