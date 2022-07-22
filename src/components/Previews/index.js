import React from "react"
import Preview from "./Preview";

function Previews({ tetrominoes }) {
  const previewTetrominoes = tetrominoes.slice(1 - tetrominoes.length).reverse();

  return (
    <>
      {previewTetrominoes.map((tetromino, index) => 
        <Preview key={index} tetromino={tetromino} index={index}/>
      )}
    </>
  )
}

export default React.memo(Previews);