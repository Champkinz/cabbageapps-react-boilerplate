import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import { ConfigProvider, Spin } from "antd";
import { ConnectedRouter } from "connected-react-router";
import React, { useCallback, useEffect, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.less";
import "./App.scss";
import { CONFIG } from "./config";
import { P } from "./containers/atoms/typography";
import MainPage from "./containers/pages/MainPage";
import PlaygroundPage from "./containers/pages/playground/playground.page";
import { getAntLocal } from "./locale/ant.lang";
import { AvailableLanguages } from "./locale/available-languages";
import { Strings } from "./locale/strings";
import { history, store } from "./store/store";
import { iStore } from "./store/store.model";
import { useForceUpdate } from "./utils/hooks/force-update";

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const LoadingView = (
  <div className="flex flex-col items-center justify-center h-screen w-screen">
    <div
      id="test"
      className="flex flex-col items-center h-full"
      style={{ paddingTop: "10rem" }}
    >
      <div className="flex flex-row">
        <P fontSize={40} bold color="#143273">
          Welcome
        </P>
      </div>
      <Spin size="large" style={{ paddingTop: "2rem" }} />
    </div>
  </div>
);

function App() {
  const language = useSelector((state: iStore) => state.preferences.language);
  const forceUpdate = useForceUpdate();
  const AntLocale = getAntLocal(language);

  const [viewHandler, setviewHandler] = useState("nooauth");

  const escFunction = useCallback((event: any) => {
    // set the hotkey here for all search
    if (event.ctrlKey && event.keyCode === "S".charCodeAt(0)) {
      event.preventDefault();
      event.stopPropagation();
      //Do whatever when esc is pressed
    }
  }, []);

  useEffect(() => {
    Strings.setLanguage(language || AvailableLanguages.ENGLISH);
    forceUpdate();
  }, [language, forceUpdate, escFunction]);

  if (viewHandler === "idle") {
    return <p>lol</p>;
  }

  if (viewHandler === "nooauth") {
    return (
      <BrowserRouter>
        <Switch>
          <MainPage OAuthOveridden />
        </Switch>
      </BrowserRouter>
    );
  }
  if (viewHandler === "oauth") {
    return (
      <BrowserRouter basename={CONFIG.base}>
        <ConfigProvider locale={AntLocale}>
          <ConnectedRouter history={history}>
            <Auth0Provider
              domain={CONFIG.domain}
              clientId={CONFIG.client_id}
              audience={CONFIG.audience}
              scope={CONFIG.scope}
              redirectUri={`${CONFIG.homepage}/tenant`}
              onRedirectCallback={onRedirectCallback}
            >
              <Switch>
                {/* Re-routing with the query parameter */}
                <Route
                  exact
                  path={["/", `/${CONFIG.tenant}`]}
                  component={({ location }: any) => (
                    <Redirect
                      to={{
                        ...location,
                        pathname: `${CONFIG.base}/${CONFIG.tenant}/dashboard`,
                      }}
                    />
                  )}
                />
                <Route
                  path={`${CONFIG.base}/${CONFIG.tenant}`}
                  component={withAuthenticationRequired(MainPage, {
                    onRedirecting: () => LoadingView,
                  })}
                />
                <Route
                  path={`/playground`}
                  component={withAuthenticationRequired(PlaygroundPage, {
                    onRedirecting: () => LoadingView,
                  })}
                />
              </Switch>
            </Auth0Provider>
          </ConnectedRouter>
        </ConfigProvider>
      </BrowserRouter>
    );
  }

  return (
    <p>
      Something terrible has happened and its definitely because of this
      horrible code
    </p>
  );
}

function WrappedApp() {
  const [loader, setloader] = useState(true);

  setTimeout(() => {
    setloader(false);
  }, 2000);
  if (!loader) {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={LoadingView} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    );
  }
  return (
    <div
      id="test"
      className="flex flex-col items-center h-full"
      style={{ paddingTop: "10rem" }}
    >
      <P fontSize={40} bold color="#143273">
        Welcome
      </P>
    </div>
  );
}

export default WrappedApp;
