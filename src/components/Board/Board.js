import React from 'react'
import PanelLeft from '../PanelLeft/PanelLeft'
import PanelRight from '../PanelRight/PanelRight'

function Board(props) {
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

            handleClick={props.handleClick}
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
