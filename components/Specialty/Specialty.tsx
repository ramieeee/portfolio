import { useState, useEffect, useRef, forwardRef } from "react";
import styles from "./Specialty.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// components
import AiIcon from "@/components/icons/AiIcon/AiIcon";
import CodingIcon from "@/components/icons/CodingIcon/CodingIcon";
import Line from "@/components/Line/Line";
import Modal from "@/components/Modal/Modal";

interface SpecialtyData {
  specialtyData: {
    ai: {
      title: string;
      text: string;
    };
    web: {
      title: string;
      text: string;
    };
  };
}

interface ModalData {
  title: string;
  text: string;
}

const Specialty = forwardRef<HTMLDivElement, SpecialtyData>(
  (specialtyData, ref) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalData, setModalData] = useState<ModalData>({
      title: "",
      text: "",
    });

    const textLeftRef = useRef<HTMLElement>(null);
    const textRightRef = useRef<HTMLElement>(null);
    const underlineLeftRef = useRef<HTMLDivElement>(null);
    const underlineRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      gsap.fromTo(
        textLeftRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: textLeftRef.current,
          },
        }
      );
      gsap.fromTo(
        textRightRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: textRightRef.current,
          },
        }
      );
      gsap.fromTo(
        underlineLeftRef.current,
        { width: "0px" },
        {
          width: "40px",
          delay: 0.8,
          duration: 0.4,
          scrollTrigger: {
            trigger: underlineLeftRef.current,
          },
        }
      );
      gsap.fromTo(
        underlineRightRef.current,
        { width: "0px" },
        {
          width: "40px",
          delay: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: underlineRightRef.current,
          },
        }
      );
      console.log(specialtyData.specialtyData);
    }, []);

    const handleModalOpen = (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;
      const parent = target.closest("div");
      const id = parent?.id as string;

      if (id === "ai") {
        setModalData({
          title: specialtyData.specialtyData.ai.title,
          text: specialtyData.specialtyData.ai.text,
        });
      } else {
        setModalData({
          title: specialtyData.specialtyData.web.title,
          text: specialtyData.specialtyData.web.text,
        });
      }

      setIsModalOpen(true);
    };

    const handleModalClose = () => {
      setIsModalOpen(false);
    };

    return (
      <div className={styles.Specialty} id="Specialty" ref={ref}>
        <div className={styles.specialtyGlowText}>
          <span>My Specialty</span>
        </div>
        <div className={styles.container}>
          <div
            id="ai"
            className={styles.specialtyBox}
            onClick={handleModalOpen}
          >
            <AiIcon width={"50px"} height={"50px"} color={"#ffffff"} />
            <Line
              width="40px"
              margin="20px 0"
              borderBottom="1px white solid"
              ref={underlineLeftRef}
            />
            <span className={styles.specialtyTitle}>
              Artificial Intelligence
            </span>
            <span className={styles.specialtyText} ref={textLeftRef}>
              As a postgraduate student,
            </span>
          </div>

          <div
            id="web"
            className={styles.specialtyBox}
            onClick={handleModalOpen}
          >
            <CodingIcon width={"50px"} height={"50px"} color={"#ffffff"} />
            <Line
              width="40px"
              margin="20px 0"
              borderBottom="1px white solid"
              ref={underlineRightRef}
            />
            <span className={styles.specialtyTitle}>Web Development</span>
            <span className={styles.specialtyText} ref={textRightRef}>
              As a front-end developer,
            </span>
          </div>
        </div>
        <Modal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          modalData={modalData}
        />
      </div>
    );
  }
);

export default Specialty;
