import './WorkPlace.css'
import PartOfCalc from '../../PartOfCalc/PartOfCalc'

function WorkPlace(props) {
  //console.log('Canvas ', props)

  return (
    <>
      <section
        className="work"
        onDragOver={ (e) => {props.dragOverHandler(e)} }
        onDrop={ (e) => {props.dropCardHandler(e)} }
      >
        {props.elementsOfCanvas.map( (el) =>
          (
            <PartOfCalc
              mainClass={el.mainClass}
              secondClass={el.secondClass}
              thirdClass={el.thirdClass}
              buttons={el.buttons}
              key={el.id}
              onDragOver={ (e) => {props.dragOverHandler(e)} }
              onDragLeave={ (e) => {props.dragLeaveHandler(e)} }
              onDragStart={ (e) => {props.dragStartHandler(e, el) }}
              onDragEnd={ (e) => {props.dragEndHandler(e)} }
              onDrop={ (e) => {props.dropHandler(e, el)} }
              status={'work'}
            />
          )
        )}
      </section>
    </>
  )
}

export default WorkPlace
