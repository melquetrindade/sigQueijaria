import Header from './header'
import styles from '../styles/main.module.css'

export let usuario = null
export let setClickLogout = undefined

export default function MainContainer({children, user, funcSetLogout}){

    usuario = user
    setClickLogout = funcSetLogout

    return(
        <div>
            <Header/>
            <div className={styles.mainContainer}>
                {children}
            </div>
        </div>
    )
}