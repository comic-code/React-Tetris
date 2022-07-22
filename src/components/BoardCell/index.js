import { CellWrapper } from "./styles";

export default function BoardCell({ cell }){
  return (
    <CellWrapper className={cell.className}>
      <div className="sparkle"></div>
    </CellWrapper>
  )
}