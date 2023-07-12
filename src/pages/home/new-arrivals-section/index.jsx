import FinalPrice from "../../../components/price/final-price";
import ProductCard from "../../../components/product-card";
import purse from "../../../assets/images/purse.png";
import { Box, Container, Typography, Stack } from "@mui/material";

const NewArrivalsSection = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h3">New Arrivals</Typography>
      </Box>
      <Stack direction="row" justifyContent="space-between">
        {[1, 2, 3, 4].map((value) => {
          return (
            <Box sx={{ width: "286px" }} key={value}>
              <ProductCard
                image={purse}
                name="Grande"
                price={<FinalPrice price={"$39.49"} />}
                category={"Blossom Pouch"}
              />
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
};

export default NewArrivalsSection;
