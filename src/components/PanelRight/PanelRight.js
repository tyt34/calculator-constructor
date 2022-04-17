import './PanelRight.css'
import CheckBox from './CheckBox/CheckBox'
import Canvas from './Canvas/Canvas'
import WorkPlace from './WorkPlace/WorkPlace'
import React from 'react'

function PanelRight(props) {
  return (
    <>
      <section className="panelright">
        <CheckBox />
        {
          props.items.length === 0 ?
          (
            <Canvas
              items={props.items}
              board={props.board}
              dragOverHandler={props.dragOverHandler}
              dropCardHandler={props.dropCardHandler}
            />
          ) : (
            <WorkPlace
              items={props.items}
              board={props.board}
              dragOverHandler={props.dragOverHandler}
              dragLeaveHandler={props.dragLeaveHandler}
              dragStartHandler={props.dragStartHandler}
              dragEndHandler={props.dragEndHandler}
              dropHandler={props.dropHandler}

              dropCardHandler={props.dropCardHandler}

              handleClick={props.handleClick}
            />
          )
        }
      </section>
    </>
  )
}

export default PanelRight
