import React from 'react'
import PartOfCalc from '../PartOfCalc/PartOfCalc'
import './PanelLeft.css'
import { useSelector } from 'react-redux'
import {
  arrayButtons,
} from '../../utils/constants.js'

function PanelLeft(props) {
  const checkState = useSelector( state => state.check)
  
  function handleClickButt() { // чтобы не появлялась ошибка при клике на кнопку в левой части

  }

  return (
    <>
      <section
        className="panelleft"
        className={ checkState ? 'panelleft' : 'panelleft-disabled'}
      >
        {arrayButtons.map( (el) =>
          (
            <PartOfCalc
              mainClass={el.mainClass}
              secondClass={el.secondClass}
              thirdClass={el.thirdClass}
              buttons={el.buttons}
              key={el.id}
              status={'constructor'}
              remove={el.remove}
              onDragOver={ (e) => {props.dragOverHandler(e)} }
              onDragLeave={ (e) => {props.dragLeaveHandler(e)} }
              onDragStart={ (e) => {props.dragStartHandler(e, props.board, el) }}
              onDragEnd={ (e) => {props.dragEndHandler(e)} }
              onDrop={ (e) => {props.dropHandler(e, props.board, el)} }

              handleClick={props.handleClick}
              handleClickButt={handleClickButt}
              textDisplay={'0'}
            />
          )
        )}
      </section>
    </>
  )
}

export default PanelLeft
