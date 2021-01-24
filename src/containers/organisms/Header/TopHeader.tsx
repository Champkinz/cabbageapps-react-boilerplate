import {
  BellOutlined,
  FireOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MessageOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  ScheduleOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Badge, Button, Dropdown, Menu, Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { setSideBarCollapsed } from "../../../store/modules/ui-state/ui-state.dispatchers";
import { selectSideBarIsCollapsed } from "../../../store/modules/ui-state/ui-state.selectors";
import { P } from "../../atoms/typography";
import AvatarDropDown from "../../molecules/AvatarDropDown";

const { TabPane } = Tabs;

function TopHeader() {
  const state: any = useSelector((state) => state);
  const { user, logout } = useAuth0();

  const hideMenu = () => {
    // setSideBarCollapsed(true);
    setSideBarCollapsed(state.uiState.sideBar.isCollapsed ? false : true);
    // console.log("topHeader");
  };

  return (
    <header className="w-full h-full flex items-center justify-between pl-3 pr-3 border border-grey-200">
      {/* <div className="flex items-center justify-between pl-3 pr-3 border border-grey-200"> */}
      <MenuFoldOutlined
        onClick={hideMenu}
        className="text-md"
        style={{
          transform: selectSideBarIsCollapsed()
            ? "rotate(180deg)"
            : "rotate(0deg)",
        }}
      />
      <div className="flex align-middle">
        <div>
          <QuestionCircleOutlined style={{ fontSize: 16 }} className="px-4" />
          <Dropdown
            trigger={["click"]}
            placement="bottomRight"
            overlayStyle={{ paddingTop: 10 }}
            overlay={
              <Menu className="pt-2 px-4 pb-4">
                <Tabs defaultActiveKey="1">
                  <TabPane
                    tab={
                      <span>
                        <NotificationOutlined style={{ fontSize: 18 }} />
                        Notifications (3)
                      </span>
                    }
                    key="1"
                  >
                    <div className="flex flex-row py-2">
                      <MailOutlined
                        style={{ fontSize: "1.5rem", color: "#238E2D" }}
                      />{" "}
                      <div>
                        <P className="pl-4" fontSize="1rem">
                          5 Newsletters
                        </P>
                        <P style={{ paddingLeft: 18 }} fontSize="0.7rem">
                          2 hours ago
                        </P>
                      </div>
                    </div>
                    <div className="flex flex-row py-2">
                      <UserDeleteOutlined
                        style={{ fontSize: "1.5rem", color: "#FFBA53" }}
                      />{" "}
                      <div>
                        <P className="pl-4" fontSize="1rem">
                          John Doe was removed from the system
                        </P>
                        <P style={{ paddingLeft: 18 }} fontSize="0.7rem">
                          2 hours ago
                        </P>
                      </div>
                    </div>
                    <div className="flex flex-row py-2">
                      <FireOutlined
                        style={{ fontSize: "1.5rem", color: "#FF4D4F" }}
                      />{" "}
                      <div>
                        <P className="pl-4" fontSize="1rem">
                          3 New Updates available
                        </P>
                        <P style={{ paddingLeft: 18 }} fontSize="0.7rem">
                          3 hours ago
                        </P>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <MessageOutlined style={{ fontSize: 18 }} />
                        Messages (1)
                      </span>
                    }
                    key="2"
                  >
                    TBA
                  </TabPane>
                  <TabPane
                    tab={
                      <span>
                        <ScheduleOutlined style={{ fontSize: 18 }} />
                        Tasks (3)
                      </span>
                    }
                    key="3"
                  >
                    TBA
                  </TabPane>
                </Tabs>
              </Menu>
            }
          >
            <Badge count={7} className="cursor-pointer">
              <BellOutlined style={{ fontSize: 16 }} />
            </Badge>
          </Dropdown>
        </div>

        <Button size="small" className="ml-6 mr-2 w-20 h-6" disabled>
          <span className="text-xs inline-block flex justify-center">
            Hello
          </span>
        </Button>
        <AvatarDropDown
          onLogout={() => {
            if (user) {
              logout();
            }
          }}
          userAvatar="data:image/png;base64,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"
          userName={user ? user.nickname : "SAMPLE NAME"}
        />
      </div>
    </header>
  );
}

export default TopHeader;
