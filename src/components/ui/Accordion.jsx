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
    const [contentHeight, setContentHeight] = useState(0);

    useLayoutEffect(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }, [answer, isActive]);

    // Animate height and opacity
    const springs = useSpring({
      height: isActive ? contentHeight : 0,
      opacity: isActive ? 1 : 0,
      config: { tension: 200, friction: 28 },
    });
    return (
      <div className="border-b border-lightGrayishBlue">
        <button
          ref={ref}
          aria-expanded={isActive}
          aria-controls={answerId}
          onClick={() => setActiveAccordion(isActive ? null : id)}
          className={clsx(
            "text-veryDarkDesaturatedBlue w-full text-xs cursor-pointer tracking-tight flex items-center justify-between py-4",
            isActive ? "font-bold text-veryDarkDesaturatedBlue text-base" : ""
          )}
        >
          {question}
          <FaChevronDown
            className={clsx(
              "text-softRed transition-transform duration-300",
              isActive ? "rotate-180" : ""
            )}
          />
        </button>
        {/* {isActive && ( */}
        <animated.div
          id={answerId}
          role="region"
          aria-labelledby={`accordion-btn-${id}`}
          style={{
            overflow: "hidden",
            ...springs,
            width: "100%",
            willChange: "height, opacity",
          }}
        >
          <div ref={contentRef} style={{ width: "100%" }}>
            <p className="text-xs text-veryDarkGrayishBlue pb-4">{answer}</p>
          </div>
        </animated.div>
        {/* )} */}
      </div>
    );
  }
);

export default memo(Accordion);
