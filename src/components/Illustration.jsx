import clsx from "clsx";
import { memo } from "react";

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
    </div>
  );
};

export default memo(Illustration);
