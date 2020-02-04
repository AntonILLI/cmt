//react router

import React from "react";
<<<<<<< HEAD

=======
import styled from "styled-components";
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
import { useLocation } from "react-router";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Event from "./components/pages/Event";
import EventTableList from "./components/pages/EventTableList";
import GlobalStyles from "./components/globals/GlobalStyles";
import { Route, Switch } from "react-router-dom";
import { useDarkMode } from "./components/globals/DarkMode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/globals/Theme";
import Navbar from "./components/dashboard/nav/Navbar";
import Footer from "./components/dashboard/footer/Footer";
import Toggle from "./components/globals/Toggle";
import { ModalProviders } from "./components/modal/Modal";
<<<<<<< HEAD
import { useTransition, animated } from "react-spring";
import EventCallModal from "../admin/components/modal/EventCallModal";
import CallModal from "../admin/components/modal/CallModal";
import AuthRoute from "../AuthRoute";
import NotFound from "../components/utils/NotFound";
=======
import { ModalProvider, BaseModalBackground } from "styled-react-modal";
import { useTransition, animated } from "react-spring";
import EventCallModal from "./components/modal/EventCallModal";
import CallModal from "./components/modal/CallModal";
import AuthRoute from "../AuthRoute";
import setAuthToken from "../components/utils/SetAuthToken";
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
function Admin() {
  //router
  // const { location } = useContext(__RouterContext);
  const location = useLocation();
  console.log(location);
  // const history = useHistory();

  //transition,location.name is key,objects for transition
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%,0)" },
    enter: { opacity: 1, transform: "translate(0%,0)" },
    leave: { opacity: 0, transform: "translate(-50%,0)" }
  });

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }

<<<<<<< HEAD
  const CustomAuthRouter = ({
    exact,
    path,
    component: Component,
    ...props
  }) => (
    <Route
      exact={exact}
      path={path}
      render={props => {
        return (
          <div>
            <Toggle theme={theme} toggleTheme={toggleTheme} />

            <Component {...props} />
            <Footer />
          </div>
        );
      }}
    />
  );

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <ModalProviders>
          <GlobalStyles />

          <Navbar />

          {transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
              <Switch location={item}>
                <CustomAuthRouter
                  exact
                  path="/admin"
                  component={Dashboard}
                  location={location}
                />
                <CustomAuthRouter
                  exaxt
                  path="/admin/profile"
                  component={Profile}
                />
                <CustomAuthRouter exaxt path="/admin/event" component={Event} />
                <CustomAuthRouter
                  exaxt
                  path="/admin/eventTable"
                  component={EventTableList}
                  location={location}
                />
                <AuthRoute
                  path="/admin/eventModalPage/:id"
                  component={EventCallModal}
                />

                <AuthRoute
                  path="/admin/modalPage/:params"
                  component={CallModal}
                />
                <Route path="*" component={NotFound} />
              </Switch>
            </animated.div>
          ))}
        </ModalProviders>
      </ThemeProvider>
=======
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <ModalProvider backgroundComponent={ModalBackground}>
          <ModalProviders>
            <GlobalStyles />
            <Navbar />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            {transitions.map(({ item, props, key }) => (
              <animated.div key={key} style={props}>
                <Switch location={item}>
                  <AuthRoute
                    exact
                    path="/admin"
                    component={Dashboard}
                    location={location}
                  />
                  <AuthRoute exaxt path="/admin/profile" component={Profile} />
                  <AuthRoute exaxt path="/admin/event" component={Event} />
                  <AuthRoute
                    exaxt
                    path="/admin/eventTable"
                    component={EventTableList}
                    location={location}
                  />
                  <AuthRoute
                    path="/admin/eventModalPage/:id"
                    component={EventCallModal}
                  />

                  <AuthRoute
                    path="/admin/modalPage/:params"
                    component={CallModal}
                  />
                </Switch>
              </animated.div>
            ))}
          </ModalProviders>
        </ModalProvider>
      </ThemeProvider>

      <Footer />
>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
    </>
  );
}

<<<<<<< HEAD
=======
const ModalBackground = styled(BaseModalBackground)`
  background-image: linear-gradient(
    to left bottom,
    #43cea2,
    #00b5b3,
    #0099bb,
    #007ab4,
    #185a9d
  );
  opacity: ${props => props.opacity};
`;

>>>>>>> d0b64319a84d7dce92c396baf9c2386b8f130adb
export default Admin;
