import "./App.css";
import Block1 from "./components/Block1/Block1";
import Block2 from "./components/Block2/Block2";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="header">
          <div className="header__title">
            <h1 className="header__text">Upcoming University Events</h1>
          </div>
          <div className="header__par">
            <p className="header__paragraph">
              Sunt autem nusquam hoc epicurus in gravissimo bello
              animadversionis metu degendae praesidia firmissima. Torquatos
              nostros? quos tu paulo ante cum teneam sententiam. vult.
            </p>
          </div>
        </div>
        <div className="container__block">
          <Block1 />
          <Block2 />
        </div>
      </div>
    </div>
  );
}

export default App;
