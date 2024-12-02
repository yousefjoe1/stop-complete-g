import React from "react";
import ContainerUp from "../../_components/ContainerUp";
import { Collapse, theme } from "antd";
import {
  companionsData,
  companionsDataFemal,
  phrophets,
} from "../../_constants/Sahaba";

import { CaretRightOutlined } from "@ant-design/icons";

const AllInfo = () => {
  const { token } = theme.useToken();
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <ContainerUp>
      <Collapse
        size="small"
        className="mt-4"
        defaultActiveKey={['1']}
        items={[
          {
            key: "1",
            label: <h1>اسماء الانبياء والرسل</h1>,
            children: (
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{ background: token.colorBgContainer }}
                defaultActiveKey={["1"]}
                className="mt-10 w-fit"
                size="small"
                items={phrophets(panelStyle)}
              />
            ),
          },
        ]}
      />
      <Collapse
        size="small"
        className="mt-4"
        items={[
          {
            key: "1",
            label: <h1>بعض من اسماء الصحابة</h1>,
            children: (
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{ background: token.colorBgContainer }}
                defaultActiveKey={["1"]}
                className="mt-10 w-fit"
                size="small"
                items={companionsData(panelStyle)}
              />
            ),
          },
        ]}
      />
      <Collapse
        size="small"
        className="mt-4"
        items={[
          {
            key: "1",
            label: <h1>بعض من اسماء الصحابات</h1>,
            children: (
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                style={{ background: token.colorBgContainer }}
                defaultActiveKey={["1"]}
                className="mt-10 w-fit"
                size="small"
                items={companionsDataFemal(panelStyle)}
              />
            ),
          },
        ]}
      />
    </ContainerUp>
  );
};

export default AllInfo;
