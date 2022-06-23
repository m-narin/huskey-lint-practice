import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// 追加
import { hello } from './test-for'

const Home: NextPage = () => {
  // 追加
  // hello()の引数にはstring型を指定していますが
  // あえてnumber型を入れて型エラーになることをチェックします
  ;+hello(12)

  return (
    <div className={styles.container}>
      <p>test</p>
    </div>
  )
}

export default Home
