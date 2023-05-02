import { Stack, Button, Grid } from "@mui/material";
import { useState } from "react";
import SingleCard from "../src/Components/SingleCard";

const CARD_IMAGES = [
  { src: "/img/IMG_7459.JPG" },
  { src: "/img/IMG_7462.JPG" },
  { src: "/img/IMG_7463.JPG" },
  { src: "/img/IMG_7465.JPG" },
  { src: "/img/IMG_7466.JPG" },
  { src: "/img/IMG_7467.JPG" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...CARD_IMAGES, ...CARD_IMAGES]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <Stack sx={{ width: "100%", height: "100vh" }} alignItems={"center"}>
      <h1>Card Matching Game</h1>
      <Button onClick={shuffleCards}>New Game</Button>
      <Stack
        sx={{
          height: "100%",
          width: "auto",
          position: "relative",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cards.map((card) => (
            <SingleCard key={card.id} card={card} />
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
}

export default App;
