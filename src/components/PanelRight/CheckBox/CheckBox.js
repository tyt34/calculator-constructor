import React from 'react'
import './CheckBox.css'
import { useDispatch, useSelector } from 'react-redux'

function CheckBox(props) {
  const dispatch = useDispatch()
  const checkState = useSelector( state => state.check)
  //const [check, setCheck] = React.useState(false)

  const reverseCheck = () => {
    dispatch({ type: 'changeCheck', payload: !checkState})
  }

  React.useEffect( () => {
    //console.log(' check -> ', check)
    //console.log(' checkState ', checkState)
  },[checkState])

  return (
    <div className="checkbox">
      <section
        className="check"
      >
        <input
          type="checkbox"
          className="check-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          checked={checkState}
          onChange={reverseCheck}
        />
          <label
            className="check-label"
            htmlFor="toggleSwitch"
          >
            <span
              className="check-inner"
            >
            </span>
            <span
              className="check-switch">
            </span>
          </label>
      </section>
    </div>
  )
}

export default CheckBox
