import './App.css'
import Board from '../Board/Board'
import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import {
  arrayButtons,
  goodClassArray
} from '../../utils/constants.js'


function App() {
  const checkState = useSelector( state => state.check)
  const cloneArrayButtons = [...arrayButtons]
  const [boards, setBoards] = useState([
    {
      id: 'left',
      items: cloneArrayButtons
    },
    {
      id: 'right',
      items: []
    }
  ])
  const [currentItem, setCurrentItem] = useState(null)
  const [currentBoard, setCurrentBoard] = useState(null)
  const workplaceRef = useRef(null)

  function dragOverHandler(e) { // просто двигаешь
    e.preventDefault()
    const coincidence = (el) => {
      return el === e.currentTarget.className
    }
    if (currentItem.mainClass !== 'display') {
      if (goodClassArray.some(coincidence)) {
        workplaceRef.current.style.background = '#F0F9FF'
        e.currentTarget.style.boxShadow = '0px 7px 0px -2px #5D5FEF'
      }
    }
  }

  function dragLeaveHandler(e) { // просто перемещение
    e.target.style.boxShadow = 'none'
    e.currentTarget.style.boxShadow = 'none'
  }

  function dragStartHandler(e, board, el) { // кого схватили
    setCurrentItem(el)
    setCurrentBoard(board)
  }

  function dragEndHandler(e) { // элемент калькулятора отпускается над холстом
    workplaceRef.current.style.background = '#FFFFFF'
    e.target.style.boxShadow = 'none'
    e.currentTarget.style.boxShadow = 'none'
  }

  function dropHandler(e, board, el) {
    e.preventDefault()
    if ((currentBoard.id === 'left') || (board.id === 'right')) {
      const currentIndex = currentBoard.items.indexOf(currentItem)
      const dropIndex = board.items.indexOf(el)
      if ((dropIndex !== -1) && (currentIndex !== dropIndex)) {
        currentBoard.items.splice(currentIndex, 1)
        board.items.splice(dropIndex+1, 0, currentItem)
        setBoards(boards.map(b => {
          if (b.id === board.id) {
            return board
          }
          if (b.id === currentBoard.id) {
            return currentBoard
          }
          return b
        }))
        setRemove()
        displayTop()
      }
    }
    e.target.style.boxShadow = 'none'
    e.currentTarget.style.boxShadow = 'none'
  }

  function dropCardHandler(e, board) {
    if (board.items.length === 0) {
      board.items.push(currentItem)
      const currentIndex = currentBoard.items.indexOf(currentItem)
      currentBoard.items.splice(currentIndex, 1)
      setRemove()
      setBoards(boards.map(b => {
        if (b.id === board.id) {
          return board
        }
        if (b.id === currentBoard.id) {
          return currentBoard
        }
        return b
      }))
      displayTop()
    } else {
      const currentIndex = currentBoard.items.indexOf(currentItem) // номер элемента слева
      if (board.id !== currentBoard.id) {
        if (currentIndex > -1) {
          board.items.push(currentItem)
          setRemove()
          currentBoard.items.splice(currentIndex, 1)
          setBoards(boards.map(b => {
            if (b.id === board.id) {
              return board
            }
            if (b.id === currentBoard.id) {
              return currentBoard
            }
            return b
          }))
          displayTop()
        }
      }
    }
    e.target.style.boxShadow = 'none'
    e.currentTarget.style.boxShadow = 'none'
  }

  function setRemove() {
    arrayButtons.map( el => { // чтобы в левой части появилось / пропало опасити
      if (el.id === currentItem.id) {
        el.remove = false
      }
    })
  }

  function setNotRemove(element) {
    arrayButtons.map( el => { // чтобы в левой части появилось / пропало опасити
      if (el.id === element.id) {
        el.remove = true
      }
    })
  }

  const handleClick = (e, el) => {
    if (el) {
      switch (e.detail) {
        case 1:
          break
        case 2:
          const currentIndex = boards[1].items.indexOf(el)
          if (checkState) {
            setBoards(boards.map(b => {
              if (b.id === 'left') {
                boards[0].items.push(el)
                return boards[0]
              }
              if (b.id === 'right') {
                boards[1].items.splice(currentIndex, 1)
                return boards[1]
              }
            }))
            setNotRemove(el)
            displayTop()
          }
          break
        case 3:
          break
        default:
      }
    }
  }

  function displayTop() {
    let displayInArray
    boards[1].items.map( el => {
      if (el.mainClass === 'display') return displayInArray = true
    })
    if (displayInArray) {
      let newArr = []
      boards[1].items.map( el => {
        if (el.mainClass === 'display') newArr.push(el)
      })
      boards[1].items.map( el => {
        if (el.mainClass !== 'display') newArr.push(el)
      })
      setBoards(boards.map(b => {
        if (b.id === 'left') {
          return b
        }
        if (b.id === 'right') {
          b.items = newArr
          return b
        }
      }))
    }
  }

  return (
    <section className="main">
      {
        boards.map( board =>
          <Board
            boardId={board.id}
            board={board}
            key={board.id}
            items={board.items}
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
    </section>
  )
}

export default App;
