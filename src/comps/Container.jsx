import styles from "../css/container.module.css";

export default function Container({children}) {
  return (
    <div className={styles.parentCont} >{children}</div>
  )
}