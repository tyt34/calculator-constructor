import './Equal.css'
import Button from '../Button/Button'

function Equal(props) {

  return (
    <>
      <section className="equal">
        <Button
          needClass="button__huge"
          pClass='button__equal'
          text='='
        />
      </section>
    </>
  )
}

export default Equal
