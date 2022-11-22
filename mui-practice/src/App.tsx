import React from "react";
import logo from "./logo.svg";
import {
  Typography,
  AppBar,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Card,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
//create a hook called useStyles that returns a function that contains an object that holds all the styles
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: { padding: "20px" },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
}));

export default function App() {
  const classes = useStyles();
  const cards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{ marginTop: "100px" }}>
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Albumn
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              This is the description of the photo Album. this is a test to see
              how long the sentence to make sure that it can be seen and viewed
              on the screen.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image Title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
