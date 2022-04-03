import './PartOfCalc.css'
import { useSelector } from 'react-redux'
import Button from '../Button/Button'

function PartOfCalc(props) {
  //console.log('PartOfCalc ', props)
  const checkState = useSelector( state => state.check)
  let display = false
  if (props.mainClass === 'display') display = true

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
