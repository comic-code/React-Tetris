import styled from "styled-components";

export const PreviewWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
  background: var(--black);
  border: 0.25rem solid var(--blueDark);
  border-radius: 10px;

  div.previewBoard {
    display: grid;
    grid-gap: 2px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    width: 5rem;
    height: 5rem;
  }
`