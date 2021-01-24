import { LoadingOutlined } from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Spin } from "antd";
import { push } from "connected-react-router";
import React, { useEffect, useState } from "react";
import CommandPalette from "react-command-palette";
import { connect } from "react-redux";
import { CONFIG } from "../../config";
import TopHeader from "../organisms/Header/TopHeader";
import { NavBar } from "../organisms/Navbar.organism";
import MainTemplate from "../templates/MainTemplate";
import { navigation } from "./navigation";
import RouterContainer from "./RouterContainer";

const LoadingView = (
  <div className="flex items-center justify-center h-screen w-screen">
    <Spin indicator={<LoadingOutlined className="text-10xl" spin />} />
  </div>
);

function MainPage({
  goToTab,
  OAuthOveridden,
}: {
  goToTab: (url: string) => any;
  OAuthOveridden?: boolean;
}) {
  const { user, isLoading, error, isAuthenticated } = useAuth0();
  const [commands, setcommands] = useState<Commands[]>([]);

  useEffect(() => {
    if (navigation) {
      let x: Commands[] = [];
      for (const menuItem of navigation.menu) {
        if (menuItem.type === "LINK") {
          x.push({
            name: menuItem.label,
            command: () => {
              // let x = menuItem.pathMap.indexOf()
              goToTab(
                menuItem.pathMap!.replace("/:tenant", "tenant")! ||
                  "tenant/dashboard"
              );
            },
            category: menuItem.label,
          });
        } else {
          for (const childrenItem of menuItem.children!) {
            x.push({
              name: childrenItem.label,
              command: () => {
                goToTab(
                  childrenItem.pathMap!.replace("/:tenant", "tenant")! ||
                    "tenant/dashboard"
                );
              },
              category: menuItem.label,
            });
          }
        }
      }
      setcommands(x);
    }
  }, [goToTab]);

  if (!OAuthOveridden) {
    if (error) {
      return <div>Oops... {error.message}</div>;
    }

    if (isLoading) {
      return LoadingView;
    }
  }

  return (
    <>
      <CommandPalette
        hotKeys="ctrl+s"
        resetInputOnClose
        shouldReturnFocusAfterClose
        placeholder="Where do you want to go ?"
        header={
          <div
            style={{
              color: "rgb(172, 172, 172)",
              display: "inline-block",
              fontFamily: "arial",
              fontSize: "12px",
              marginBottom: "6px",
            }}
          >
            <span style={{ paddingRight: "32px" }}>Search for a Module</span>
            <span style={{ paddingRight: "32px" }}>
              <kbd
                style={{
                  backgroundColor: "rgb(23, 23, 23)",
                  borderRadius: "4px",
                  color: "#b9b9b9",
                  fontSize: "12px",
                  marginRight: "6px",
                  padding: "2px 4px",
                }}
              >
                ↑↓
              </kbd>{" "}
              to select
            </span>
            <span style={{ paddingRight: "32px" }}>
              <kbd
                style={{
                  backgroundColor: "rgb(23, 23, 23)",
                  borderRadius: "4px",
                  color: "#b9b9b9",
                  fontSize: "12px",
                  marginRight: "6px",
                  padding: "2px 4px",
                }}
              >
                enter
              </kbd>{" "}
              to navigate
            </span>
            <span style={{ paddingRight: "32px" }}>
              <kbd
                style={{
                  backgroundColor: "rgb(23, 23, 23)",
                  borderRadius: "4px",
                  color: "#b9b9b9",
                  fontSize: "12px",
                  marginRight: "6px",
                  padding: "2px 4px",
                }}
              >
                esc
              </kbd>{" "}
              to dismiss
            </span>
          </div>
        }
        commands={commands}
        display="modal"
        trigger={<div></div>}
        showSpinnerOnSelect={false}
        closeOnSelect
      />
      <MainTemplate
        navbar={<NavBar />}
        header={<TopHeader />}
        router={<RouterContainer />}
      />
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  goToTab: (url: string) => {
    dispatch(push(CONFIG.base + url));
  },
});

interface Commands {
  name: string;
  command: Function;
  category?: string;
  color?: string;
}

export default connect(null, mapDispatchToProps)(MainPage);
