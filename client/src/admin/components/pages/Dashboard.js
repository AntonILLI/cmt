import React, { useContext, useEffect } from "react";
import Teachers from "../dashboard/teachers/Teachers";
import AbsoluteWrapper from "../globals/AbsoluteWrapper";

import AdminContext from "../../../components/context/adminAPI/adminContext";

const Dashboard = ({ location }) => {
  const adminContext = useContext(AdminContext);

  const { adminUsers, teachers, deleteUser, loading, error } = adminContext;

  useEffect(() => {
    adminUsers();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <AbsoluteWrapper>
        <Teachers
          deleteUser={deleteUser}
          location={location}
          teachers={teachers}
          loading={loading}
          error={error}
        />
      </AbsoluteWrapper>
    </>
  );
};

export default Dashboard;
