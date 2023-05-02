import { Grid } from "@mui/material";

function SingleCard({ card }) {
  return (
    <Grid item xs={2}>
      <img src={card.src} loading="lazy" />
      <img src="/img/BackCard.jpg" />
    </Grid>
  );
}

export default SingleCard;
