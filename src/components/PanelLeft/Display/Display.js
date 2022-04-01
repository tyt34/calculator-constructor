import './Display.css'

function Display(props) {

  return (
    <>
      <section className="display">
        <section
          className="display__indicator"
        >
          <p className="display__text">
            {props.result}
          </p>
        </section>
      </section>
    </>
  )
}

export default Display
