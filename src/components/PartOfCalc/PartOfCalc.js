import './PartOfCalc.css'
import { useSelector } from 'react-redux'
import React, { useMemo } from 'react'
import Button from './Button/Button'

function PartOfCalc(
  {
    mainClass, secondClass, thirdClass, buttons, onDragOver,
    onDragLeave, onDragStart, onDrop, onDragEnd, status, handleClick,
    textDisplay, handleClickButt, element, remove
  }
) {
  const checkState = useSelector( state => state.check)

  const fullMainClass = useMemo(() => {
    const modifier = status !== 'use' ? status : 'use'
    const removeClass = (status !== 'work') && (!remove) ? mainClass + '__remove' : '' // из за этого в классе появляется лишний пробел
    return `${mainClass} ${mainClass}__${modifier} ${removeClass}`
  }, [mainClass, status, remove])

  const shadowClass = useMemo(() => {
    const side = status === 'constructor' ? 'left' : 'right'
    return `${mainClass}__shadow ${mainClass}__shadow-${side}`
  }, [mainClass, status, remove])

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
        mainClass === 'display' ?
        (
          <section className={shadowClass}>
            <section
              className={fullMainClass}
              draggable={getDragable(remove)}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onDrop={onDrop}
              onClick={(e) => {handleClick(e, element)}}
            >
              <section
                className={secondClass}
              >
                <p className={
                  textDisplay === 'Не определено' ?
                  (
                    (thirdClass+' display__text-small')
                  ) : (
                    thirdClass
                  )
                }>
                  {textDisplay}
                </p>
              </section>
            </section>
          </section>
        ) : (
          <section className={shadowClass}>
            <section
              className={fullMainClass}
              draggable={getDragable(remove)}
              onDragOver={onDragOver}
              onDragLeave={onDragLeave}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onDrop={onDrop}
              onClick={(e) => {handleClick(e, element)}}
            >
              {buttons.map( el =>
                (
                  <Button
                    secondClass={secondClass}
                    thirdClass={thirdClass}
                    text={el.text}
                    key={el.id}
                    onClick={handleClickButt}
                  />
                )
              )}
            </section>
          </section>
        )
      }
    </>
  )
}

export default PartOfCalc
