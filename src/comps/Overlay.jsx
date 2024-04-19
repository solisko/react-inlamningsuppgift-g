import styles from "../css/overlay.module.css";

export default function Overlay({ isOpen, onClose, children }) {
  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <>
      {isOpen ? (
        <div>
          <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.container}>{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
