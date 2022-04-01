import './PanelRight.css'
import CheckBox from './CheckBox/CheckBox'
import Canvas from './Canvas/Canvas'

function PanelRight(props) {

  return (
    <>
      <section className="panelright">
        <CheckBox />
        <Canvas />
      </section>
    </>
  )
}

export default PanelRight
