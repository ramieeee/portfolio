import { useState, useRef, useEffect } from "react";
import CloseBtnIcon from "@/components/icons/CloseBtnIcon/CloseBtnIcon";
import styles from "./Modal.module.scss";

interface ModalToggle {
  isModalOpen: boolean;
  handleModalClose: Function;
}

export default function Modal({
  isModalOpen,
  handleModalClose,
}: ModalToggle): JSX.Element {
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 처음 렌더링 될때 close animation 되는것 제거
  useEffect(() => {
    if (isModalOpen && containerRef.current && modalRef.current) {
      if (isFirst) {
        setIsFirst(false);
      }
      document.body.style.overflow = "hidden";
      modalRef.current.style.display = "block";
      containerRef.current.className = styles.modalOnAni;
    } else if (!isModalOpen && containerRef.current && modalRef.current) {
      document.body.style.overflow = "auto";
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.style.display = "none";
        }
      }, 200);
      if (!isFirst) {
        containerRef.current.className = styles.modalOffAni;
      }
    }
  }, [isModalOpen]);

  const handleClose = () => {
    handleModalClose();
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const className: string = target.className;
    if (className === "Modal_Modal__DfM6u") {
      handleClose();
    }
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
  }, []);

  return (
    <div
      className={styles.Modal}
      ref={modalRef}
      onClick={handleBackgroundClick}
    >
      <div className={styles.modalContainer} ref={containerRef}>
        <div className={styles.header}>
          <span className={styles.title}>title</span>
          <div className={styles.closeBtn} onClick={handleClose}>
            <CloseBtnIcon width="30px" height="30px" color="#ffffff" />
          </div>
        </div>
        <div className={styles.bodyContainer}>
          <span className={styles.body}>body</span>
        </div>
      </div>
    </div>
  );
}
