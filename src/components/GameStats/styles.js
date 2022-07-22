import styled from "styled-components";

export const GameStatsWrapper = styled.ul`
  position: absolute;
  font-size: 1.5rem;
  color:  var(--white);
  list-style-type: none;
  right: 0;
  bottom: 0;
  text-align: left;

  li {

    &.value {
      font-size: 2rem;
      margin-bottom: 0.5rem;
      color: var(--pink);
    }
  }
`