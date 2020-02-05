import React, { useContext, useEffect } from "react";
import Teachers from "../dashboard/teachers/Teachers";
import AbsoluteWrapper from "../globals/AbsoluteWrapper";
import { useHistory } from "react-router-dom";
import AdminContext from "../../../components/context/adminAPI/adminContext";

const Dashboard = ({ location }) => {
  const apiContext = useContext(AdminContext);

  const history = useHistory();
  const {
    adminUsers,
    teachers,
    deleteUser,
    isAuthenticated,
    loading,
    error
  } = apiContext;

  useEffect(() => {
    adminUsers();
    if (isAuthenticated) {
      history.push("/");
    }
    //eslint-disable-next-lineo
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
