import { Breadcrumb, Progress, Tabs } from "antd";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { CONFIG } from "../../config";
import { setTabKey } from "../../store/modules/tabs/tabs.dispatcher";
import { P } from "../atoms/typography";
import { MenuItem, navigation } from "./navigation";

const LoadingView = (
  <div className="flex items-center justify-center h-screen w-screen">
    <Progress status="normal" type="circle" />
  </div>
);

interface iBreadcrumbData {
  title: string;
  description?: string;
  tooltip?: string;
  path: iBreadcrumbItem[];
}

interface iBreadcrumbItem {
  type: "TEXT" | "LINK";
  link?: string;
  text: string;
}

function RouterContainer() {
  let breadcrumbData: iBreadcrumbData = {
    title: "",
    path: [],
  };

  const availableRoutes = (() => {
    const routes: MenuItem[] = [];
    const fetchRoutes = (menu: MenuItem[]) => {
      for (let item of menu) {
        if (item.children) {
          fetchRoutes(item.children);
        }
        if (item.type === "LINK") {
          routes.push(item);
        }
      }
    };
    fetchRoutes(navigation.menu);
    return routes;
  })();

  console.log("availableRoutes", availableRoutes);
  console.log("base", CONFIG.base);

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      {breadcrumbData.title && (
        <div>
          <Breadcrumb>
            {breadcrumbData.path.map((path) => {
              // console.log("path", `web/casa${path.link}`);
              return (
                <Breadcrumb.Item key={path.text}>
                  {path.type === "LINK" ? (
                    <>
                      <a href={`/web/casa${path.link}`}>{path.text}</a>

                      {/* <Link
                        to={(location) => {
                          console.log("location", path);
                          return `${path.link}`;
                        }}
                      >
                        {path.text}
                      </Link> */}
                    </>
                  ) : (
                    path.text
                  )}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
          <div>
            <P bold>{breadcrumbData.title}</P>
            {breadcrumbData.description && <P>{breadcrumbData.title}</P>}
            <Tabs
              tabBarStyle={{ margin: 0 }}
              className="p-0"
              onChange={(k: any) => {
                setTabKey(k);
              }}
            >
              <Tabs.TabPane tab="Pending" key="1"></Tabs.TabPane>
              <Tabs.TabPane tab="Rejected" key="2"></Tabs.TabPane>
              {/* <Tabs.TabPane tab="Activated" key="3"></Tabs.TabPane> */}
            </Tabs>
          </div>
        </div>
      )}

      <div
        style={{
          background: "#EEEEEE",
        }}
        className="w-full h-full p-2"
      >
        <Suspense fallback={LoadingView}>
          <Switch>
            {availableRoutes.map((item) => (
              <Route
                exact
                path={`${CONFIG.base}${item.pathMap}`}
                component={item.component}
                key={item.pathMap}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </div>
  );
}

export default RouterContainer;
