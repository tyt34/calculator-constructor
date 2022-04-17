import './WorkPlace.css'
import PartOfCalc from '../../PartOfCalc/PartOfCalc'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

function WorkPlace(props) {
  const [textDisplay, setTextDisplay] = useState('0')
  const checkState = useSelector( state => state.check)
  const [inputs, setInputs] = useState([])

  function handleClickButt(e) {
    if (!checkState) {
      if (e.text === '=') {
        getRes(inputs)
        setInputs([])
      } else if (inputs.length === 0) { // ПЕРВОЕ НАЖАТИЕ ПОСЛЕ РАВНО
        if (!/[0-9\-,]/.test(textDisplay)) { // это на случай, если первое нажатие после = будет ,
          setInputs(inputs => [...inputs, {num: e.text}] )
          setTextDisplay(e.text)
        } else { // до этого было число
          if ((textDisplay === '0') || (textDisplay === '-0')) { // если больше одного раза нажать 0
            if (e.text === ',') {
              setInputs(inputs => [...inputs, {num: e.text}] )
              setTextDisplay(e.text)
            } else {
              setInputs(inputs => [...inputs, {num: e.text}] )
              setTextDisplay(e.text)
            }
          } else {
            if (textDisplay.split(',').length === 2) {
              if (e.text !== ',') { // на случай повтороного нажатия запятой
                setInputs(inputs => [...inputs, {num: e.text}] )
                setTextDisplay(e.text)
              }
            } else {
              setInputs(inputs => [...inputs, {num: e.text}] )
              setTextDisplay(e.text)
            }
          }
        }
      } else if ((/[0-9]/.test(e.text)) || (e.text === ',')) {
        if (!/[0-9\-,]/.test(textDisplay)) { // до этого было не число
          setInputs(inputs => [...inputs, {num: e.text}] )
          setTextDisplay(e.text)
        } else { // до этого было число
          if ((textDisplay === '0') || (textDisplay === '-0')) { // если больше одного раза нажать 0
            if (e.text === ',') {
              setTextDisplay(addInDisp(e.text))
            } else {
              setInputs(inputs => [...inputs, {num: e.text}] )
              setTextDisplay(e.text)
            }
          } else {
            if (textDisplay.split(',').length === 2) {
              if (e.text !== ',') { // на случай повтороного нажатия запятой
                setTextDisplay(addInDisp(e.text))
              }
            } else {
              setTextDisplay(addInDisp(e.text))
            }
          }
        }
      } else {
        setInputs(inputs => [...inputs, {oper: e.text}] )
        setTextDisplay(e.text)
      }
    }
  }

  function addInDisp(input) {
    let arr = []
    arr.push(textDisplay)
    arr.push(input)
    setInputs(inputs => [...inputs, {num: arr.join('')}] )
    return arr.join('')
  }

  useEffect( () => {
    if (textDisplay.length > 11) {
      setTextDisplay(' O V E R')
    }
  }, [textDisplay])

  function getDataFronInputs(inputs) {
    let operFirst = false
    let operSec = false
    let first = false
    for (let i=inputs.length-2; i>-1; i--) {
      if (operFirst && !operSec && inputs[i].oper) {
        operSec = inputs[i].oper
      }
      if (!operFirst && inputs[i].oper) {
        operFirst = inputs[i].oper
      } else if (!first && operFirst) {
        first = inputs[i].num
      }
    }
    if ((operFirst === '-') && (turnToTrueNumber(first) < 0)) { // например -1 + -1 = -2
      return {
        first: turnToTrueNumber(first),
        second: turnToTrueNumber(inputs[inputs.length-1].num),
        operation: operSec
      }
    } else if (first) {
      if ((operFirst === '-') && (turnToTrueNumber(inputs[inputs.length-1].num) < 0)) { // 9 -1 - 8
        return {
          first: turnToTrueNumber(first),
          second: turnToTrueNumber(inputs[inputs.length-1].num),
          operation: '+'
        }
      } else { // обычное вычисление
        return {
          first: turnToTrueNumber(first),
          second: turnToTrueNumber(inputs[inputs.length-1].num),
          operation: operFirst
        }
      }
    } else { // чего то не хватает
      return {
        first: false,
        second: false,
        operation: false
      }
    }
  }

  function turnToTrueNumber(text) {
    if (text.split(',').length === 2) {
      return Number(text.split(',')[0]+'.'+text.split(',')[1])
    } else {
      return Number(text)
    }
  }

  function getRes(inputs) {
    let first = getDataFronInputs(inputs).first
    let second = getDataFronInputs(inputs).second
    let operation = getDataFronInputs(inputs).operation
    let res
    if ((first !== false) && (second !== false) && (operation !== false)) {
      if (operation === '+') {
        res = first + second
      } else if (operation === '-') {
        res = first - second
      } else if (operation === '/') {
        res = first / second
      } else if (operation === 'x') {
        res = first * second
      }
      if (res.toString().split('').length > 10) { // СИМВОЛОВ БОЛЬШЕ 10
        if (res.toString().split('.').length === 2) { // И ЕЩЕ ДРОБНОЕ
          setTextDisplay(delZeros(res.toFixed(10).toString().split('.')[0]+','+res.toFixed(10).toString().split('.')[1]))
        } else { // НЕДРОБНОЕ ЧИСЛО КОТОРОЕ НЕ УМЕЩАЕТСЯ В ДИСПЛЕЙ
          setTextDisplay('o v e r')
        }
      } else { // СИМВОЛОВ МЕНЬШЕ 10
        if (res.toString().split('.').length === 2) { // ОБЫЧНОЕ ДРОБНОЕ
          setTextDisplay(res.toString().split('.')[0]+','+res.toString().split('.')[1])
        } else { // ОБЫЧНОЕ НАТУРАЛЬНОЕ ЧИСЛО ИЛИ БЕСКОНЕЧНОСТЬ
          if (isFinite(res)) {
            setTextDisplay(res.toString())
          } else {
            setTextDisplay('Не определено')
          }
        }
      }
    }
  }

  function delZeros(num) {
    let arrRes = []
    let checkOnZero = false
    for (let i = num.split('').length-1; i > -1; i--) {
      if (num.split('')[i] === '0') {
        if (checkOnZero !== false) {
          arrRes.push(num.split('')[i])
        }
      } else {
        checkOnZero = true
        arrRes.push(num.split('')[i])
      }
    }
    let rewArrRes = arrRes.reverse()
    return rewArrRes.join('')
  }

  return (
    <>
      <section
        className="work"
        onDragOver={ (e) => {props.dragOverHandler(e)} }
        onDrop={ (e) => {props.dropCardHandler(e, props.board)} }
      >
        {props.items.map( (el) =>
          (
            <PartOfCalc
              mainClass={el.mainClass}
              secondClass={el.secondClass}
              thirdClass={el.thirdClass}
              buttons={el.buttons}
              key={el.id}
              onDragOver={ (e) => {props.dragOverHandler(e)} }
              onDragLeave={ (e) => {props.dragLeaveHandler(e)} }
              onDragStart={ (e) => {props.dragStartHandler(e, props.board, el) }}
              onDragEnd={ (e) => {props.dragEndHandler(e)} }
              onDrop={ (e) => {props.dropHandler(e, props.board, el)} }
              status={'work'}
              element={el}
              handleClick={props.handleClick}

              textDisplay={textDisplay}
              handleClickButt={handleClickButt}
            />
          )
        )}
      </section>
    </>
  )
}

export default WorkPlace
