import './PanelLeft.css'
import Display from './Display/Display'
import Equal from './Equal/Equal'
import Numbers from './Numbers/Numbers'
import Operations from './Operations/Operations'



function PanelLeft(props) {

  return (
    <>
      <section className="panelleft">
        <Display
          result='0'
        />
        <Operations />
        <Numbers />
        <Equal />
      </section>
    </>
  )
}

export default PanelLeft
