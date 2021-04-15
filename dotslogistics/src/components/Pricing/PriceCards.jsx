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
import Price4 from "../../assets/price4.png";
import Price5 from "../../assets/price5.png";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
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
                  <img src={Price1} style={{ width: 160 }} />
                  <h2>BRONZE</h2>

                  <p style={{ paddingBottom: 50, paddingTop: 60 }}>
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
                  <p>
                    Bronze + access to company analytics, market insights,
                    business partner recommendations, route optimization
                  </p>
                  <img src={Price4} style={{ width: 280, padding: 16 }} />

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
                  <p>
                    Bronze + our consulting service offered by industry
                    professionals
                  </p>

                  <img src={Price5} style={{ width: 280, padding: 20 }} />

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
        s{" "}
      </Grid>
    </div>
  );
}

export default PriceCards;
