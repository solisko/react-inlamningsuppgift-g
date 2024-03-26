import styles from "../css/overlay.module.css";

export default function Overlay({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen ? (
        <div>
          <div className={styles.overlay} onClick={onClose}>
            <div className={styles.container}>

              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
