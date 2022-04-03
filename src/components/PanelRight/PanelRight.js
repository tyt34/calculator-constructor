import './PanelRight.css'
import CheckBox from './CheckBox/CheckBox'
import Canvas from './Canvas/Canvas'

function PanelRight(props) {
  const drop = (e) => {
    e.preventDefault()
    console.log(' -_--> 5 <--_-')
  }

  return (
    <>
      <section className="panelright">
        <CheckBox />
        <Canvas
          onDrop={drop}
        />
      </section>
    </>
  )
}

export default PanelRight
