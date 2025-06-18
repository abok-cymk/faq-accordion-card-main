import clsx from "clsx";
import { forwardRef, memo, useLayoutEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";

const Accordion = forwardRef(
  ({ id, question, answer, activeAccordion, setActiveAccordion }, ref) => {
    const isActive = activeAccordion === id;
    const answerId = `accordion-answer-${id}`;

    // Measure content height for animation
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0)

    useLayoutEffect(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }, [answer, isActive]);

    // Animate height and opacity
    const springs = useSpring({
      height: isActive ? contentHeight: 0,
      opacity: isActive ? 1 : 0,
      config: { tension: 200, friction: 28 },
    });
    return (
      <>
        <button
          ref={ref}
          aria-expanded={isActive}
          aria-controls={answerId}
          onClick={() => setActiveAccordion(isActive ? null : id)}
          className={clsx("text-veryDarkDesaturatedBlue text-base cursor-pointer tracking-tight flex items-center justify-between py-4",
            isActive
            ? "font-bold text-veryDarkDesaturatedBlue text-lg"
            : ""
          )}
        >
          {question}
          <FaChevronDown className={clsx("text-softRed transition-transform duration-300", 
            isActive
            ? "rotate-180"
            : ""
          )}/>
        </button>
        {isActive && (
          <animated.div
            id={answerId}
            role="region"
            aria-labelledby={`accordion-btn-${id}`}
            style={{
              overflow: "hidden",
              ...springs}}
          >
            <div ref={contentRef}>
              <p className="text-base text-veryDarkGrayishBlue py-4">{answer}</p>
            </div>
          </animated.div>
        )}
      </>
    );
  }
);

export default memo(Accordion);
