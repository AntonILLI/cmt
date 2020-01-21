import React, { useContext, useEffect } from "react";
import TeditForm from "../dashboard/form/TeditForm";
import EditForm from "../dashboard/form/EditForm";
import { Modal } from "./Modal";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AdminContext from "../../../components/context/adminAPI/adminContext";

function CallModal() {
  const adminContext = useContext(AdminContext);
  const { adminUsers, teachers, loading, error } = adminContext;
  // const { Tvalue, setTvalue } = useState();
  useEffect(() => {
    adminUsers();
    //eslint-disable-next-line
  }, []);
  console.log("user", teachers);
  const { params } = useParams();

  // console.log("history:", history);
  console.log("id:", params);

  const Tvalue = teachers.filter(teacher => teacher._id === params);

  console.log("value:", Tvalue);
  return (
    <div>
      <MyModalWrapper
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <MyModal>
          <TeditForm Tvalue={Tvalue} params={params} />
        </MyModal>
      </MyModalWrapper>
    </div>
  );
}

const MyModalWrapper = styled(Modal)`
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  position: absolute;
  outline: none;
  overflow: auto;
  border-radius: 4px;
`;
export const MyModal = styled.div`
  position: absolute;
  margin: 10rem;
  background-color: #fff;
`;
export default CallModal;
