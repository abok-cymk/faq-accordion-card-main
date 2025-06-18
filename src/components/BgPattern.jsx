
const baseImagePath = import.meta.env.BASE_URL;

const BgPattern = () => {
  return (
    <picture>
      <source media="(min-width: 48rem)" srcSet={`${baseImagePath}/bg-pattern-desktop.svg`}/>
      <img src={`${baseImagePath}/bg-pattern-mobile.svg`} alt="" className="w-full"/>
    </picture>
  );
}

export default BgPattern;
