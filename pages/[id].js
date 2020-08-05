import MainLayout from '../layouts/main-layout'
import styles from '../scss/fine.module.scss'
import {getDate} from '../utils'

export default function Fine({fine}) {
  return (
    <MainLayout>
      <div className={styles.fine}>
        <span className={styles.fine__title}>Постановление #{fine.number}</span>
        <table>
          <tbody>
            <tr>
              <td>Свидетельство о регистрации</td>
              <td>{fine.doc_number}</td>
            </tr>
            <tr>
              <td>Дата постановления</td>
              <td>{getDate(fine.bill_at)}</td>
            </tr>
            <tr>
              <td>Нарушение</td>
              <td>{fine.koap_code}</td>
            </tr>
            <tr>
              <td>Получатель платежа</td>
              <td>{fine.payee_username}</td>
            </tr>
            <tr>
              <td>ИНН</td>
              <td>{fine.payee_inn}</td>
            </tr>
            <tr>
              <td>КПП</td>
              <td>{fine.payee_kpp}</td>
            </tr>
            <tr>
              <td>Расчетный счет</td>
              <td>{fine.payee_bank_account}</td>
            </tr>
            <tr>
              <td>БИК</td>
              <td>{fine.payee_bank_bik}</td>
            </tr>
            <tr>
              <td>ОКТМО(ОКАТО)</td>
              <td>{fine.payee_oktmo}</td>
            </tr>
            <tr>
              <td>КБК</td>
              <td>{fine.kbk}</td>
            </tr>
            <tr>
              <td>Сумма штафа</td>
              <td>{+fine.amount}</td>
            </tr>
            <tr>
              <td>Скидка</td>
              <td>
                {getDate(fine.discount_at)
                  ? `Активна до ${getDate(fine.discount_at)}`
                  : `-`}
              </td>
            </tr>
            <tr>
              <td>К оплате</td>
              <td>{fine.amount_to_pay}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps({query}) {
  try {
    const response = await fetch(
      `https://test-task.shtrafovnet.com/fines/${query.id}`
    )
    const fine = await response.json()
    return {props: {fine}}
  } catch (error) {
    return {props: {fine: ''}}
  }
}
