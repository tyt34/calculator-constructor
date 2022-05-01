import React from 'react'
import PanelLeft from '../PanelLeft/PanelLeft'
import PanelRight from '../PanelRight/PanelRight'

function Board(
  {
    boardId, board, items, dragOverHandler, dragLeaveHandler, dragStartHandler,
    dragEndHandler, dropHandler, dropCardHandler, handleClick, workplaceRef
  }
) {
  return (
    <>
      {
        boardId === 'left' ?
        (
          <PanelLeft
            items={items}
            boardId={boardId}
            board={board}
            dragOverHandler={dragOverHandler}
            dragLeaveHandler={dragLeaveHandler}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dropHandler={dropHandler}

            dropCardHandler={dropCardHandler}

            handleClick={handleClick}
          />
        ) : (
          <PanelRight
            items={items}
            boardId={boardId}
            board={board}
            dragOverHandler={dragOverHandler}
            dragLeaveHandler={dragLeaveHandler}
            dragStartHandler={dragStartHandler}
            dragEndHandler={dragEndHandler}
            dropHandler={dropHandler}

            dropCardHandler={dropCardHandler}

            handleClick={handleClick}

            workplaceRef={workplaceRef}
          />
        )
      }
    </>
  )
}

export default Board
