import React from "react";

import Teachers from "../dashboard/teachers/Teachers";
import AbsoluteWrapper from "../globals/AbsoluteWrapper";
import { useParams } from "react-router";
const Dashboard = ({ location }) => {
  const { id } = useParams();
  return (
    <>
      <AbsoluteWrapper>
        <Teachers userId={id} location={location} />
      </AbsoluteWrapper>
    </>
  );
};

export default Dashboard;
