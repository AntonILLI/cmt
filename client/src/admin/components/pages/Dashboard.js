import React, { useContext, useEffect } from "react";
import Teachers from "../dashboard/teachers/Teachers";
import AbsoluteWrapper from "../globals/AbsoluteWrapper";
<<<<<<< HEAD
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
=======

import AdminContext from "../../../components/context/adminAPI/adminContext";

const Dashboard = ({ location }) => {
  const adminContext = useContext(AdminContext);

  const { adminUsers, teachers, deleteUser, loading, error } = adminContext;

  useEffect(() => {
    adminUsers();
    //eslint-disable-next-line
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
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
