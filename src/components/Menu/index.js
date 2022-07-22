import { MenuWrapper } from "./styles";

export default function Menu({start}) {
  return (
    <MenuWrapper onClick={start}>
      <button>Jogar Tetris</button>
    </MenuWrapper>
  )
}