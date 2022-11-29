import React, {useEffect, useRef} from 'react';
import styles from "assets/Modal.module.css";
import {FiX} from "react-icons/fi";

const Modal = ({ onClose, item }) => {
    const modalRef = useRef(null);

    // modal 외부 클릭 시 닫히도록
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef]);

    return (
        <div>
            <div className={styles.backgroundBlur}></div>
            <div ref={modalRef} className={styles.container}>
                <div
                    className={styles.closeButtonContainer}
                    onClick={onClose}
                >
                    <FiX size={20} />
                </div>
                <div style={{ marginTop: 48 }}>
                    <h2 style={{ letterSpacing: "0.05rem" }}>{item.kwamokname}</h2>
                    <div className={styles.modalItemContainer}>
                        <div style={{ marginRight: 60, fontWeight: "bold" }}>
                            <div>분반</div>
                            <div>시간</div>
                            <div>장소</div>
                            <div>트랙</div>
                            <div>교수</div>
                        </div>
                        <div>
                            <div>{item.kwamokname}</div>
                            <div>{item.day} {item.startTime} ~ {item.endTime}</div>
                            <div>{item.classroom}</div>
                            <div>{"웹공학트랙"}</div>
                            <div>{item.prof.join(", ")}</div>
                        </div>
                    </div>

                    <div className={styles.introduce}>
                        <h3>과목소개</h3>
                        <div style={{ fontSize: "1.25rem" }}>
                            {item.kcomment}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
