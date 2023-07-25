import { Stack, Typography, Container } from "@mui/material";
import BrandItem from "../../../components/brand-item";
import theme from "../../../themes/theme";
import NavLink from "../../../components/links/nav-link";
import useAxios from "../../../utils/use-axios";

const BrandsSection = () => {
  const [data]=useAxios("https://app-68c6b164-71cf-4968-8378-502de2661021.cleverapps.io/brands")
  return (
    <Container
      sx={{
        paddingBottom: "67px",
        paddingTop: "67px",
        gap: 3,
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
          gap: 1,
        },
      }}
      id="brands"
    >
      <Typography variant="h2">Shop by Brands</Typography>
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(168px,1fr))",
          rowGap: "46px",
          columnGap: "46px",
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            rowGap: "24px",
            columnGap: "16px",
          },
          [theme.breakpoints.down("400")]: {
            gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))",
          },
        }}
      >
        {data?.brands?.map((item) => {
          return (
            <NavLink
              path={`/category?brand=${item.id}`}
              key={item.id}
              component={<BrandItem image={item.image_url} />}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

export default BrandsSection;
