import './PartOfCalc.css'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'
import Button from './Button/Button'

function PartOfCalc(props) {
  const [drag, setDrag] = useState(true)
  let fullMainClass
  const checkState = useSelector( state => state.check)
  if (props.status === 'work') {
    fullMainClass = props.mainClass + ' ' + props.mainClass + '__work'
  } else {
    if (!props.remove) { // тут должно появиться опасити
      fullMainClass = props.mainClass + ' ' + props.mainClass + '__constructor ' + props.mainClass + '__remove'
      //setDrag(false)
      //console.log(props)
    } else {
      fullMainClass = props.mainClass + ' ' + props.mainClass + '__constructor'
    }
  }

  function getDragable(rem) {
    //console.log(checkState)
    if (rem === false) {
      //console.log(' var 1 ')
      return false
    } else if (rem === true) {
      //console.log(' var 2 ')
      return true
    } else if ((rem === undefined) && (checkState === true)) {
      //console.log(' var 3 ')
      return true
    } else if (checkState === false) {
      //console.log(' var 4 ')
      // тут еще курсор должен СТАТЬ обычным
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
              <p className={props.thirdClass}>
                0
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
/*
return (
  <>
    {
      props.mainClass === 'display' ?
      (
        <section
          className={props.mainClass}
          draggable={checkState}
          onDragOver={props.onDragOver}
          onDragLeave={props.onDragLeave}
          onDragStart={props.onDragStart}
          onDragEnd={props.onDragEnd}
          onDrop={props.onDrop}
        >
          <section
            className={props.secondClass}
          >
            <p className={props.thirdClass}>
              0
            </p>
          </section>
        </section>
      ) : (
        <section
          className={props.mainClass}
          draggable={checkState}
          onDragOver={props.onDragOver}
          onDragLeave={props.onDragLeave}
          onDragStart={props.onDragStart}
          onDragEnd={props.onDragEnd}
          onDrop={props.onDrop}
        >
          {props.buttons.map( el =>
            (
              <Button
                secondClass={props.secondClass}
                thirdClass={props.thirdClass}
                text={el.text}
                key={el.id}
              />
            )
          )}
        </section>
      )
    }
  </>
)
*/



/*
<p className="display__text">
  {props.result}
</p>
*/
/*
Display
*/
/*
return (
  <>
    <section
      className="display"
      draggable={checkState}
      onDragOver={props.onDragOver}
      onDragLeave={props.onDragLeave}
      onDragStart={props.onDragStart}
      onDragEnd={props.onDragEnd}
      onDrop={props.onDrop}
    >
      <section
        className="display__indicator"
      >
        <p className="display__text">
          0
        </p>
      </section>
    </section>
  </>
)
*/
