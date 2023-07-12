import { Box, IconButton, Typography, Stack } from "@mui/material";
import heartIcon from "../../assets/icons/heart-secondary.svg";

const ProductCard = ({
  name,
  category,
  price,
  rating,
  isInFavourites,
  image,
  favouritesAction,
}) => {
  // The price could be on sale or not, also a rating can be added to the card
  return (
    <Stack direction={"column"} sx={{ gap: "9px" }}>
      <Box
        sx={{
          minWidth: "286px",
          height: "286px",
          backgroundImage: `url('${image}')`,
        }}
      />
      <Stack direction={"column"} justifyContent={"space-between"} gap={1}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography>{name}</Typography>
          <img src={heartIcon} alt="heart icon" style={{ color: "black" }} />
        </Stack>
        <Typography color={"grey"}>{category}</Typography>
        <Box>{price}</Box>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
