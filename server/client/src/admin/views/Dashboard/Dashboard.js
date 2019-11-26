import React from "react";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Team from "./Team";
export default function Dashboard() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Team />
        </GridItem>
      </GridContainer>
    </div>
  );
}
