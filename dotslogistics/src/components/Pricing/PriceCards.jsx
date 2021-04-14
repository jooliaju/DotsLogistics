import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import "./PriceCards.css";
import Price1 from "../../assets/price1.png";
import Price2 from "../../assets/price2.png";
import Price3 from "../../assets/price3.png";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function PriceCards() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <div style={{ height: 400, backgroundColor: "#D0E7FF" }}>
          <Grid
            container
            justify="center"
            spacing={5}
            style={{ position: "relative", top: 150 }}
          >
            <Grid item xs={3}>
              <Card
                className={classes.root}
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  display: "grid",
                  textAlign: "center",
                  height: 500,
                }}
              >
                <CardContent>
                  <img src={Price1} style={{ width: 150 }} />
                  <h2>BRONZE</h2>

                  <h3>$0/mo</h3>

                  <p>
                    Access to marketplace to find and connect with potential
                    partners, request quotes, we take 3% commission on all
                    transactions and 10% commission from discounts by promotions
                    received.
                  </p>

                  <Button
                    size="large"
                    style={{ backgroundColor: "teal", color: "white" }}
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                className={classes.root}
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  display: "grid",
                  textAlign: "center",
                  height: 500,
                }}
              >
                <CardContent>
                  <img src={Price2} style={{ width: 180 }} />

                  <h2>SILVER</h2>
                  <h3>$57.99/mo</h3>
                  <p>
                    Bronze + access to company analytics, market insights,
                    business partner recommendations, route optimization
                  </p>

                  <Button
                    size="large"
                    style={{ backgroundColor: "teal", color: "white" }}
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card
                className={classes.root}
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  display: "grid",
                  textAlign: "center",
                  height: 500,
                }}
              >
                <CardContent>
                  <img src={Price3} style={{ width: 180 }} />

                  <h2>GOLD</h2>
                  <h3>$74.99/hr</h3>
                  <p>
                    Bronze + our consulting service offered by industry
                    professionals
                  </p>

                  <Button
                    size="large"
                    style={{ backgroundColor: "teal", color: "white" }}
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default PriceCards;
