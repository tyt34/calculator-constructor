import React from 'react'
import PartOfCalc from '../PartOfCalc/PartOfCalc'
import './PanelLeft.css'
import { useSelector } from 'react-redux'
import {
  arrayButtons,
} from '../../utils/constants.js'

function PanelLeft(
  {
    items, boardId, board, dragOverHandler,
    dragLeaveHandler, dragStartHandler, dragEndHandler,
    dropHandler, dropCardHandler, handleClick
  }
) {
  const checkState = useSelector( state => state.check)

  function handleClickButt() { // чтобы не появлялась ошибка при клике на кнопку в левой части

  }

  return (
    <>
      <section
        className={ checkState ? 'panelleft' : 'panelleft-disabled'}
      >
        {arrayButtons.map( (el) =>
          (
            <PartOfCalc
              key={el.id}
              mainClass={el.mainClass}
              secondClass={el.secondClass}
              thirdClass={el.thirdClass}
              buttons={el.buttons}
              onDragOver={ (e) => {dragOverHandler(e)} }
              onDragLeave={ (e) => {dragLeaveHandler(e)} }
              onDragStart={ (e) => {dragStartHandler(e, board, el) }}
              onDrop={ (e) => {dropHandler(e, board, el)} }
              onDragEnd={ (e) => {dragEndHandler(e)} }
              status={'constructor'}
              handleClick={handleClick}
              textDisplay={'0'}
              handleClickButt={handleClickButt}
              
              remove={el.remove}
            />
          )
        )}
      </section>
    </>
  )
}

export default PanelLeft
