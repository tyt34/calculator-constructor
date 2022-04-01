import './Operations.css'
import Button from '../Button/Button'

function Operations(props) {

  return (
    <>
      <section className="operations">
        <Button
          needClass="button__small"
          text='/'
        />
        <Button
          needClass="button__small"
          text='х'
        />
        <Button
          needClass="button__small"
          text='-'
        />
        <Button
          needClass="button__small"
          text='+'
        />
      </section>
    </>
  )
}

export default Operations
