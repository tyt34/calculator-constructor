import './Operations.css'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'

function Operations(props) {
  const checkState = useSelector( state => state.check)

  return (
    <>
      <section
        className="operations"
        draggable={checkState}
      >
        {props.buttons.map( el =>
          (
            <Button
              needClass="button__small"
              text={el.text}
              key={el.id}
            />
          )
        )}
      </section>
    </>
  )
}

export default Operations
/*
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
*/
