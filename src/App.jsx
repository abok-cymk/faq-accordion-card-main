import Faqs from "./sections/Faqs";
const baseImagePath = import.meta.env.BASE_URL;
function App() {
  return (
    <>
      <main className="relative">
        <Faqs />
        <img
          src={`${baseImagePath}/illustration-box-desktop.svg`}
          alt=""
          className="hidden md:block absolute md:-top-16 md:left-18 lg:left-0 lg:-top-28 lg:-translate-x-20 lg:translate-y-64"
        />
      </main>
    </>
  );
}

export default App;
