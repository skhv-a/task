import Head from 'next/head'

import styles from '../scss/main-layout-styles.module.scss'

import Logo from '../components/logo/logo-component.jsx'
import Form from '../components/form/form-component.jsx'

export default function MainLayout({children}) {
  return (
    <>
      <Head>
        <title>Штрафов нет</title>
      </Head>
      <div className={styles.main_layout}>
        <Logo />

        <span className={styles.text}>
          Получение информации о штрафе по УИН
        </span>

        <Form />
        {children}
      </div>
    </>
  )
}
