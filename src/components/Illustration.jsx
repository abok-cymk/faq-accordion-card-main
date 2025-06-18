const baseImagePath = import.meta.env.BASE_URL;

const Illustration = () => {
  return (
    <div>
        <picture>
          <source media="(min-width: 48rem)" srcSet={`${baseImagePath}/illustration-woman-online-desktop.svg`}/>
          <img src={`${baseImagePath}/illustration-woman-online-mobile.svg`} alt="" />
        </picture>
    </div>
  );
}

export default Illustration;
