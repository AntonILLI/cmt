//react router

import React from "react";
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
import { useTransition, animated } from "react-spring";
import EventCallModal from "../admin/components/modal/EventCallModal";
import CallModal from "../admin/components/modal/CallModal";
import AuthRoute from "../AuthRoute";
import NotFound from "../components/utils/NotFound";
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
    </>
  );
}

export default Admin;
