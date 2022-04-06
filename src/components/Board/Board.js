import React, { useState } from 'react'
import './Board.css'
import { useSelector } from 'react-redux'
import PartOfCalc from '../PartOfCalc/PartOfCalc'
import PanelLeft from '../PanelLeft/PanelLeft'
import PanelRight from '../PanelRight/PanelRight'

function Board(props) {
  //console.log('board ', props)

  return (
    <>
      {
        props.boardId === 'left' ?
        (
          <PanelLeft
            items={props.items}
            boardId={props.boardId}
            board={props.board}
            dragOverHandler={props.dragOverHandler}
            dragLeaveHandler={props.dragLeaveHandler}
            dragStartHandler={props.dragStartHandler}
            dragEndHandler={props.dragEndHandler}
            dropHandler={props.dropHandler}

            dropCardHandler={props.dropCardHandler}
          />
        ) : (
          <PanelRight
            items={props.items}
            boardId={props.boardId}
            board={props.board}
            dragOverHandler={props.dragOverHandler}
            dragLeaveHandler={props.dragLeaveHandler}
            dragStartHandler={props.dragStartHandler}
            dragEndHandler={props.dragEndHandler}
            dropHandler={props.dropHandler}

            dropCardHandler={props.dropCardHandler}

            handleClick={props.handleClick}
          />
        )
      }
    </>
  )
}

export default Board
/*
elementsOfCanvas={props.elementsOfCanvas} -> items
*/
