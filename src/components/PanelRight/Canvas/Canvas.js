import './Canvas.css'
import canvas__img from "../../../images/img.png"

function Canvas(props) {
  //console.log('Canvas ', props)

  return (
    <>
      <section
        className="canvas"
        onDragOver={ (e) => {props.dragOverHandler(e)} }
        onDrop={ (e) => {props.dropCardHandler(e)} }
      >
        <img
          className="canvas__img"
          alt="Изображение, которое показывает назначение данного элемента"
          src={canvas__img}
        />
        <p className="canvas__up">
          Перетащите сюда
        </p>
        <p className="canvas__bottom">
          любой элемент из левой панели
        </p>
      </section>
    </>
  )
}

export default Canvas
