import './WorkPlace.css'
import PartOfCalc from '../../PartOfCalc/PartOfCalc'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function WorkPlace(props) {
  const [textDisplay, setTextDisplay] = useState('0')
  const checkState = useSelector( state => state.check)

  function handleClickButt(e) {
    //console.log(' -> ', e)
    if (!checkState) {
      console.log(' key press: ', e.text, ' -> ', textDisplay)
      //setTextDisplay(e.text)
      //let newText = {text: e.text}
      setTextDisplay(e.text)
      /*
      setTextDisplay(textDisplay => ([...textDisplay, ...newText]));
      */
      //setTextDisplay('')
      //console.log(textDisplay)
    }
  }
  //console.log('WorkPlace ', props)


  return (
    <>
      <section
        className="work"
        onDragOver={ (e) => {props.dragOverHandler(e)} }
        onDrop={ (e) => {props.dropCardHandler(e, props.board)} }
      >
        {props.items.map( (el) =>
          (
            <PartOfCalc
              mainClass={el.mainClass}
              secondClass={el.secondClass}
              thirdClass={el.thirdClass}
              buttons={el.buttons}
              key={el.id}
              onDragOver={ (e) => {props.dragOverHandler(e)} }
              onDragLeave={ (e) => {props.dragLeaveHandler(e)} }
              onDragStart={ (e) => {props.dragStartHandler(e, props.board, el) }}
              onDragEnd={ (e) => {props.dragEndHandler(e)} }
              onDrop={ (e) => {props.dropHandler(e, props.board, el)} }
              status={'work'}
              element={el}
              handleClick={props.handleClick}

              textDisplay={textDisplay}
              handleClickButt={handleClickButt}
            />
          )
        )}
      </section>
    </>
  )
}

export default WorkPlace
/*
onClick={e => {
  clearTimeout(this.timer); // Очищается ранее установленный таймер
  this.timer = setTimeout(() => {
    // Если было одиночное нажатие, то действие выполнится через 250мс
    console.log("onClick");
  }, 250);
}}
*/
