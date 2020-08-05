import styles from './form-component.styles.module.scss'

import {useState, useEffect, useRef} from 'react'

import {useRouter} from 'next/router'

import {UINSymbol} from '../../utils'

const Form = () => {
  const [urlId, setUrlId] = useState('')
  const [content, setContent] = useState('')

  const router = useRouter()

  const inputEl = useRef(null)
  const buttonRef = useRef(null)

  const submitHandler = e => {
    e.preventDefault()
    buttonRef.current.disabled = true
    if (+urlId) {
      if (urlId.length === 20 || urlId.length === 25) {
        setContent('')
        return router.push('/[id]', `/${urlId}`)
      }
      return setContent(
        'Количество введенных символов не совпадает с необходимым'
      )
    }
    return setContent('Неправильный формат УИН')
  }

  const inputHandler = e => {
    const value = e.target.value.trim()
    buttonRef.current.disabled = false
    if (value.length === 19 || value.length === 24) {
      const valueWithUINSymbol = value + UINSymbol(value)
      if (+valueWithUINSymbol) {
        setContent(valueWithUINSymbol)
      }
    } else if (value.length === 0) {
      setContent('')
    }
    setUrlId(value)
  }

  const handleHintClick = () => {
    if (+content) {
      inputEl.current.value = content
      setUrlId(inputEl.current.value)
    }
    return
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        className={styles.form__input}
        spellCheck="false"
        placeholder="Введите УИН"
        onInput={inputHandler}
        ref={inputEl}
      />

      <button className={styles.form__button} type="submit" ref={buttonRef}>
        Найти
      </button>
      {content ? (
        <div className={styles.hint} onClick={handleHintClick}>
          {content}
        </div>
      ) : null}
    </form>
  )
}

export default Form
