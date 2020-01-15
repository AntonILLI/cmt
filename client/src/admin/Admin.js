//react router

import React from "react";
import styled from "styled-components";
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
import { ModalProvider, BaseModalBackground } from "styled-react-modal";
import { useTransition, animated } from "react-spring";

function Admin() {
  //router
  // const { location } = useContext(__RouterContext);
  const location = useLocation();
  console.log(location);

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
                  <Route
                    exact
                    path="/admin/dashboard"
                    component={Dashboard}
                    location={location}
                  />
                  <Route exaxt path="/admin/profile" component={Profile} />
                  <Route exaxt path="/admin/event" component={Event} />
                  <Route
                    exaxt
                    path="/admin/eventTable"
                    component={EventTableList}
                    location={location}
                  />
                </Switch>
              </animated.div>
            ))}
          </ModalProviders>
        </ModalProvider>
      </ThemeProvider>

      <Footer />
    </>
  );
}

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

export default Admin;
