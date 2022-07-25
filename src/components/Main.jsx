import { Grid } from "@mui/material";
import Form from "./form/Form";
import Table from "./table/Table";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const useStyles = makeStyles({
  mainContainer: {
    minHeight: "100vh",
    display: "flex",
    backgroundImage: `url("https://picsum.photos/1600/900")`,
    backgroundSize: "cover",
  },
});
const Main = () => {
  const theme = createTheme({});

  const classes = useStyles();
  const [data, setData] = useState([]);
  const [tempUuid, setTempUuid] = useState("");
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.mainContainer}>
        <Grid
          container
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
            margin: "1rem 0",
          }}
        >
          <Grid item xs={8} sm={7} md={5} lg={4}>
            <Form setData={setData} tempUuid={tempUuid} />
          </Grid>
          <Grid item xs={12} sm={11} md={7} lg={6}>
            <Table data={data} setTempUuid={setTempUuid} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Main;
