import { useEffect, useRef } from "preact/hooks";
import { gsap } from "gsap";
import tick from "../../assets/img/tick.webp";
import corner from "../../assets/img/corner-1.webp";

const BadgeTag = ({ text }) => {
  const badgeRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Animar el contenedor principal
    badgeRef.current.style.willChange ="transform, opacity";
    gsap.from(badgeRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: 1.6,
      onComplete : () =>{
        badgeRef.current.style.willChange ="auto";
      }
    });

    // Animar el contenido interior
    contentRef.current.style.willChange ="transform, opacity";
    gsap.from(contentRef.current, {
      x: "-150%",
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 1.9,
      onComplete: () =>{
        badgeRef.current.style.willChange ="auto";
      }
    });
  }, []);

  return (
    <div className="badge" ref={badgeRef}>
      <aside className="tick">
        <img src={tick} alt="tick" height="24px" width="24px" />
      </aside>
      <div className="content-wrapper">
        <div className="content" ref={contentRef}>
          <small>{text}</small>
          <img className="corner" src={corner} alt="corner-box" height="32px" width="15px" />
        </div>
      </div>
    </div>
  );
};

export default BadgeTag;