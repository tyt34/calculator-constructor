import './WorkPlace.css'
import PartOfCalc from '../../PartOfCalc/PartOfCalc'

function WorkPlace(props) {
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
