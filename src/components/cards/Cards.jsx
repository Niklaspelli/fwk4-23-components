import UniversalButton from "../universalButton/UniversalButton";
import "./Cards.modules.css";
import HeadLines from "../headlines/HeadLines";

const Cards = ({}) => {
  return (
    <div className="card">
      <HeadLines subTitle="Card" />

      <input
        type="text"
        placeholder="Skriv något här..."
        style={{ width: "300px", height: "60px" }}
      />
      <UniversalButton title="Add" type="submit" />
    </div>
  );
};

export default Cards;
