import './Numbers.css'
import Button from '../Button/Button'

function Numbers(props) {

  return (
    <>
      <section className="numbers">
        <Button
          needClass="button__normal"
          text='7'
        />
        <Button
          needClass="button__normal"
          text='8'
        />
        <Button
          needClass="button__normal"
          text='9'
        />
        <Button
          needClass="button__normal"
          text='4'
        />
        <Button
          needClass="button__normal"
          text='5'
        />
        <Button
          needClass="button__normal"
          text='6'
        />
        <Button
          needClass="button__normal"
          text='7'
        />
        <Button
          needClass="button__normal"
          text='8'
        />
        <Button
          needClass="button__normal"
          text='9'
        />
        <Button
          needClass="button__big"
          text='0'
        />
        <Button
          needClass="button__normal"
          text=','
        />
      </section>
    </>
  )
}

export default Numbers
