import React from 'react'
import './CheckBox.css'
import { useDispatch, useSelector } from 'react-redux'
import eyeBlack from "../../../images/eye-black.svg"
import eyeBlue from "../../../images/eye-blue.svg"
import arrowBlack from "../../../images/arrow-black.svg"
import arrowBlue from "../../../images/arrow-blue.svg"

function CheckBox() {
  const dispatch = useDispatch()
  const checkState = useSelector( state => state.check)

  const reverseCheck = () => {
    dispatch({ type: 'changeCheck', payload: !checkState})
  }

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
              className="check-switch"
            >
            </span>
            <span className='check__description'>
              {
                checkState ? (
                  <>
                    <img
                      className="check__img-left"
                      alt="иконка глазика"
                      src={eyeBlue}
                    />
                    <p className="check__text-left">
                      Runtime
                    </p>
                    <img
                      className="check__img-right"
                      alt="иконка стрелочек"
                      src={arrowBlack}
                    />
                    <p className="check__text-right">
                      Constructor
                    </p>
                  </>
                ) : (
                  <>
                    <img
                      className="check__img-left"
                      alt="иконка глазика"
                      src={eyeBlack}
                    />
                    <p className="check__text-left">
                      Runtime
                    </p>
                    <img
                      className="check__img-right"
                      alt="иконка стрелочек"
                      src={arrowBlue}
                    />
                    <p className="check__text-right">
                      Constructor
                    </p>
                  </>
                )
              }
            </span>
          </label>
      </section>
    </div>
  )
}

export default CheckBox
