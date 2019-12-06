import React, { useEffect, useContext } from "react";
import LoadingComponent from "../loading/LoadingComponent";
import ApiContext from "../context/api/apiContext";
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
        {users !== null &&
          users.map((user, i) => (
            <ul key={i}>
              <li>{user.email}</li>
              <li>{user.firstname}</li>
            </ul>
          ))}
      </div>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <HomeLayout />
    </React.Fragment>
  );
};
export default Home;

// const errorMsg = () => {
//   toast.error("some error occurred, while fetching api!", {
//     position: toast.POSITION.TOP_LEFT
//   });
// };
