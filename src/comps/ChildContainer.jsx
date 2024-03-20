import styles from "../css/childcontainer.module.css";

export default function ChildContainer({ children }) {
  return <div className={styles.ChildCont}>{children}</div>;
}
