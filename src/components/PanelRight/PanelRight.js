import './PanelRight.css'
import CheckBox from './CheckBox/CheckBox'
import Canvas from './Canvas/Canvas'
import WorkPlace from './WorkPlace/WorkPlace'
import React from 'react'

function PanelRight(props) {
  //console.log(props)
  React.useEffect( () => {
    //console.log('Left-Panel checkState ', checkState)
    //console.log(' now els ', props.elementsOfCanvas)
  }, [props.elementsOfCanvas])



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
        {
          props.elementsOfCanvas.length === 0 ?
          (
            <Canvas
              dragOverHandler={props.dragOverHandler}
              dropCardHandler={props.dropCardHandler}
              elementsOfCanvas={props.elementsOfCanvas}

            />
          ) : (
            <WorkPlace
              dragOverHandler={props.dragOverHandler}
              dropCardHandler={props.dropCardHandler}
              elementsOfCanvas={props.elementsOfCanvas}
              dragLeaveHandler={props.dragLeaveHandler}
              dropHandler={props.dropHandler}
              dragEndHandler={props.dragEndHandler}
              dragStartHandler={props.dragStartHandler}
            />
          )
        }
      </section>
    </>
  )
}

export default PanelRight
