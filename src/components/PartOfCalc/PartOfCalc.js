import './PartOfCalc.css'
import { useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import Button from './Button/Button'

function PartOfCalc(props) {
  const [drag, setDrag] = useState(true)
  //const [textDisplay, setTextDisplay] = useState({text: '0'})
  //console.log(textDisplay)
  let fullMainClass
  const checkState = useSelector( state => state.check)
  if (props.status === 'work') {
    //console.log(' work ', checkState)
    if (checkState === true) {
      fullMainClass = props.mainClass + ' ' + props.mainClass + '__work'
    } else {
      fullMainClass = props.mainClass + ' ' + props.mainClass + '__use'
    }
  } else {
    //console.log(' not work ', checkState)
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
  /*
  function handleClickBut(e) {
    //console.log(' -> ', e)
    if (!checkState) {
      console.log(' key press: ', e.text)
      //setTextDisplay(e.text)
      let newText = {text: e.text}
      setTextDisplay({
        text: [e.text]
      })
      //setTextDisplay('')
      console.log(textDisplay)
    }
  }
  */
  /*
  useEffect(() => { setTextDisplay(textDisplay) }, [])
  */
  /*
  useEffect( () => {
    console.log(' -> ', textDisplay)
    setTextDisplay(textDisplay)
  }, [textDisplay])
  */

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
