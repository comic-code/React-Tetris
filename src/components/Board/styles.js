import styled from "styled-components";

export const BoardWrapper = styled.div`
  display: grid;
  margin: auto;
  width: 50vw;
  height: 90vh;
  background: var(--black);
  border: 0.25rem solid var(--blueDark);
  border-radius: 10px;
  grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px ;
`