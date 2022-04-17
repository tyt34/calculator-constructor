import './PartOfCalc.css'
import { useSelector } from 'react-redux'
//import React, { useState } from 'react'
//import React from 'react'
import Button from './Button/Button'

function PartOfCalc(props) {
  const checkState = useSelector( state => state.check)
  let fullMainClass // если делать через useState то будет ошибка Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  if (props.status === 'work') {
    if (checkState === true) {
      fullMainClass = props.mainClass + ' ' + props.mainClass + '__work'
    } else {
      fullMainClass = props.mainClass + ' ' + props.mainClass + '__use'
    }
  } else {
    if (!props.remove) {
      fullMainClass = props.mainClass + ' ' + props.mainClass + '__constructor ' + props.mainClass + '__remove'
    } else {
      fullMainClass = props.mainClass + ' ' + props.mainClass + '__constructor'
    }
  }

  function getDragable(rem) {
    if (rem === false) {
      return false
    } else if (rem === true) {
      return true
    } else if ((rem === undefined) && (checkState === true)) {
      return true
    } else if (checkState === false) {
      return false
    }
  }

  return (
    <>
      {
        props.mainClass === 'display' ?
        (
          <section
            className={fullMainClass}
            draggable={getDragable(props.remove)}
            onDragOver={props.onDragOver}
            onDragLeave={props.onDragLeave}
            onDragStart={props.onDragStart}
            onDragEnd={props.onDragEnd}
            onDrop={props.onDrop}
            onClick={(e) => {props.handleClick(e, props.element)}}
          >
            <section
              className={props.secondClass}
            >
              <p className={
                props.textDisplay === 'Не определено' ?
                (
                  (props.thirdClass+' display__text-small')
                ) : (
                  props.thirdClass
                )
              }>
                {props.textDisplay}
              </p>
            </section>
          </section>
        ) : (
          <section
            className={fullMainClass}
            draggable={getDragable(props.remove)}
            onDragOver={props.onDragOver}
            onDragLeave={props.onDragLeave}
            onDragStart={props.onDragStart}
            onDragEnd={props.onDragEnd}
            onDrop={props.onDrop}
            onClick={(e) => {props.handleClick(e, props.element)}}
          >
            {props.buttons.map( el =>
              (
                <Button
                  secondClass={props.secondClass}
                  thirdClass={props.thirdClass}
                  text={el.text}
                  key={el.id}
                  onClick={props.handleClickButt}
                />
              )
            )}
          </section>
        )
      }
    </>
  )
}

export default PartOfCalc
