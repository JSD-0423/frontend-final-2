import { Stack, Typography, Container } from "@mui/material";
import ProductWithTitle from "../../../components/product-with-title";
import theme from "../../../themes/theme";
import NavLink from "../../../components/links/nav-link";
import useAxios from "../../../utils/use-axios";

const HandPickedSection = () => {
  const [data] = useAxios(
    "https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io/products?page=0&type=handpicked"
  );
  return (
    <Container
      sx={{
        paddingBottom: "42px",
        paddingTop: "32px",
        gap: 3,
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          gap: 1,
        },
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Typography color="bright.main" variant="h2">
        Handpicked Collections
      </Typography>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(156px,1fr))",
          rowGap: "40px",
          columnGap: "40px",
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            rowGap: "16px",
            columnGap: "16px",
          },
          [theme.breakpoints.down("400")]: {
            gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))",
          },
        }}
      >
        {data?.products?.map((item) => {
          return (
            <NavLink
              path={`/product/${item.id}`}
              key={item.id}
              component={
                <ProductWithTitle
                  image={item.productImages[0].image_url}
                  title={item.title}
                />
              }
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default HandPickedSection;
