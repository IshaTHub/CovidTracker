import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infBox ${active && "infBox--selected"} ${
        isRed && "infBox--red"
      }`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infBox__cases ${!isRed && "infBox__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infBox__total" color="textSecondary">
          {total} Total case
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
