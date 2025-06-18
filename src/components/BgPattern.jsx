import clsx from "clsx";
import { memo } from "react";

const baseImagePath = import.meta.env.BASE_URL;

const BgPattern = ({ className }) => {
  return (
    <picture>
      <source media="(min-width: 70rem)" srcSet={`${baseImagePath}/bg-pattern-desktop.svg`}/>
      <img src={`${baseImagePath}/bg-pattern-mobile.svg`} alt="" className={clsx("w-full absolute", className)}/>
    </picture>
  );
}

export default memo(BgPattern);
