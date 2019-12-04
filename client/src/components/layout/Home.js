import React, { useEffect, useContext } from "react";
import LoadingComponent from "../loading/LoadingComponent";
//import { toast } from "react-toastify";
import ApiContext from "../api/apiContext";
import HomeLayout from "./HomeLayout";

const Home = () => {
  const apiContext = useContext(ApiContext);
  const { userLoad, users, loading, error } = apiContext;

  useEffect(() => {
    userLoad();
    //eslint-disable-next-line
  }, []);

  if (loading) return <LoadingComponent />;
  return (
    <React.Fragment>
      <div>
        {/* {users !== null &&
          users.map((user, i) => (
            <ul key={i}>
              <li>{user.email}</li>
              <li>{user.firstname}</li>
              <li>{user.category}</li>
              <li>{user.bio}</li>
            </ul>
          ))} */}
      </div>
      <HomeLayout />
    </React.Fragment>
  );
};
export default Home;
//   <pre>{JSON.stringify(users, null, 2)}</pre>

// const errorMsg = () => {
//   toast.error("some error occurred, while fetching api!", {
//     position: toast.POSITION.TOP_LEFT
//   });
// };
