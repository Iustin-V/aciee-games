import faciee from "../images/logo-aciee.png";
import redeclipse from "../images/Red Eclipse -white-horizontal.png";
import "./Game-Style.scss";

export const Footer = () => {
  return (
    <div className="footer-section">
      <div
        className="faciee"
        onClick={() => window.open("https://aciee.ugal.ro/")}
      >
        <img src={faciee} alt="Logo-FACIEE" />
        <p>
          Facultatea de Automatică, Calculatoare, Inginerie Electrică și
          Electronică
        </p>
      </div>
      <img
        src={redeclipse}
        alt="Logo-redeclipse"
        onClick={() => window.open("https://redeclipse.ro/")}
      />
    </div>
  );
};
