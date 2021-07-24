import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  margin-bottom: 20px;
`;

const Navigation = (props) => {
  return (
    <div>
      <Button onClick={(e)=> {props.returnToList(e);}}>Back to Featured Recipes</Button>
    </div>
  )
}

export default Navigation;