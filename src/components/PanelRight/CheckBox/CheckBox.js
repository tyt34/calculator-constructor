import './CheckBox.css'

function CheckBox(props) {
  function handleCheck() {
    console.log(' check ')
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
          checked={props.check}
          onChange={handleCheck}
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
