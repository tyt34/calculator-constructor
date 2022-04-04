import './Display.css'
import { useSelector } from 'react-redux'

function Display(props) {
  const checkState = useSelector( state => state.check)

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
            {props.result}
          </p>
        </section>
      </section>
    </>
  )
}

export default Display
