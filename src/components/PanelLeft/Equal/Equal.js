import './Equal.css'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'

function Equal(props) {
  const checkState = useSelector( state => state.check)

  return (
    <>
      <section
        className="equal"
        draggable={checkState}
      >
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
