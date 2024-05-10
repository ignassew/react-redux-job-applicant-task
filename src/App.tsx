import "./App.css";
import { selectCards, Card, addCard } from "./store/cardSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <>
      <h1>Card List</h1>
      <CardList />
      <AddCardForm />
    </>
  );
}

function AddCardForm() {
  const dispatch = useDispatch();
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const card: Card = {
          cardholder: form.cardholder.value,
          number: form.number.value,
          expiry: form.expiry.value,
          cvv: form.cvv.value,
        };
        dispatch(addCard(card));
      }}
    >
      <input name="cardholder" placeholder="Cardholder" />
      <input name="number" placeholder="Card Number" />
      <input name="expiry" placeholder="Expiry" />
      <input name="cvv" placeholder="CVV" />
      <button type="submit">Add Card</button>
    </form>
  );
}

function CardList() {
  const cards = useSelector(selectCards);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gridTemplateRows: "1fr 1fr 1fr 1fr",
        gap: "10px",
        margin: "10px",
      }}
    >
      {cards.map((card) => (
        <CardComponent card={card} />
      ))}
    </div>
  );
}

function CardComponent({ card }: { card: Card }) {
  return (
    <div style={{ height: "150px", width: "250px", backgroundColor: "gray" }}>
      <h3>{card.cardholder}</h3>
      <p>{card.number}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <p>{card.expiry.toString()}</p>
        <p>{card.cvv}</p>
      </div>
    </div>
  );
}

export default App;
