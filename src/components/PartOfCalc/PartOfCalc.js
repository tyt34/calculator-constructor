import './PartOfCalc.css'
import { useSelector } from 'react-redux'
import React, { useMemo } from 'react'
import Button from './Button/Button'

function PartOfCalc(props) {
  const checkState = useSelector( state => state.check)

  const fullMainClass = useMemo(() => {
    const mainClass = props.mainClass;
    const modifier = props.status !== 'use' ? props.status : 'use';
    const removeClass = () => {
      if ((props.status !== 'work') && (!props.remove)) {
        return props.mainClass + '__remove'
      } else {
        return ''
      }
    };
    return `${mainClass} ${mainClass}__${modifier} ${removeClass}`;
  }, [props.mainClass, props.status, props.remove])

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
