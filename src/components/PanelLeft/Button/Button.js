import './Button.css'

function Button(props) {
  function secClass() {
    return 'button '+props.needClass
  }

  return (
    <>
      <section
        className="button"
        className={secClass()}
      >
        <p
          className={props.pClass}
        >
          {props.text}
        </p>
      </section>
    </>
  )
}

export default Button
