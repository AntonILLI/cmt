import React from "react";

import FormField from "../dashboard/form/FormField";
import AbsoluteWrapper from "../globals/AbsoluteWrapper";
import { useParams } from "react-router";
const Profile = () => {
  const { id } = useParams();

  return (
    <>
      <AbsoluteWrapper>
        <FormField userId={id} />
      </AbsoluteWrapper>
    </>
  );
};

export default Profile;
