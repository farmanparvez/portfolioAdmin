import React from "react";
import { Row, Descriptions } from "antd";

const WorkModalDetails = ({ details }) => {
  return (
    <div>
      <Row gutter={16} justify="center">
        {/* <Col span={24}>
          <Divider>
            <h1>{details.name}</h1>
          </Divider>
        </Col> */}
        <Descriptions title="" bordered size={"small"}>
          <Descriptions.Item label="Github Repo" span={24}>
            <span>
              <a target="_blank" href={`${details.repoLink}`}>
                {details.repoLink}
              </a>
            </span>
          </Descriptions.Item>
          <Descriptions.Item label="Website Url" span={24}>
            <a target="_blank" href={`${details.websiteLink}`}>
              {details.websiteLink}
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Details" span={24}>
           <h4> {details.details}</h4>
          </Descriptions.Item>
        </Descriptions>
      </Row>
    </div>
  );
};

export default WorkModalDetails;
