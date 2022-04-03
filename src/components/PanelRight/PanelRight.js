import './PanelRight.css'
import CheckBox from './CheckBox/CheckBox'
import Canvas from './Canvas/Canvas'

function PanelRight(props) {
  //console.log(' R P ', props)
  /*
  function dropCardHandler(e) {
    console.log(' --- 5 ---')
  }
  */

  return (
    <>
      <section className="panelright">
        <CheckBox />
        <Canvas
          dragOverHandler={props.dragOverHandler}
          dropCardHandler={props.dropCardHandler}
        />
      </section>
    </>
  )
}

export default PanelRight
