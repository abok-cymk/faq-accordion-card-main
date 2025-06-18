import clsx from "clsx";
import { memo } from "react";
import BgPattern from "./BgPattern";

const baseImagePath = import.meta.env.BASE_URL;

const Illustration = ({ className }) => {
  return (
    <div className="relative">
        <picture>
          <source
            media="(min-width: 48rem)"
            srcSet={`${baseImagePath}/illustration-woman-online-desktop.svg`}
          />
          <img
            src={`${baseImagePath}/illustration-woman-online-mobile.svg`}
            alt=""
            className={clsx("w-full object-contain", className)}
          />
        </picture>
        <BgPattern className="-top-6 lg:-top-45 lg:-left-28" />
    </div>
  );
};

export default memo(Illustration);
