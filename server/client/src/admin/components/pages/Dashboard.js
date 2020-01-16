import React, { useContext, useEffect } from "react";
import Teachers from "../dashboard/teachers/Teachers";
import AbsoluteWrapper from "../globals/AbsoluteWrapper";
import { useParams } from "react-router";
import AdminContext from "../../../components/context/adminAPI/adminContext";
const Dashboard = ({ location }) => {
  const adminContext = useContext(AdminContext);
  const { adminUsers, teachers, loading, error } = adminContext;
  useEffect(() => {
    adminUsers();
    //eslint-disable-next-line
  }, []);
  const { id } = useParams();
  return (
    <>
      <AbsoluteWrapper>
        <Teachers userId={id} location={location} teachers={teachers} />
      </AbsoluteWrapper>
    </>
  );
};

export default Dashboard;
