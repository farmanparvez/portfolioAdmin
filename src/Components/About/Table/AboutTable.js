import React, { Fragment } from "react";
import CustomTable from "../../CustomTable/CustomTable";
import { Row, Col, Button, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModalState } from "../../../Redux/reducers/aboutReducer";
import { deleteAbout } from "../../../Redux/actions/aboutAction";

const AboutTable = ({ aboutDetails }) => {
  const { isLoading } = useSelector((state) => state.about);

  const dispatch = useDispatch();
  const columns = [
    {
      title: "Name",
      width: 10,
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Phone Number",
      width: 50,
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Description",
      width: 10,
      dataIndex: "description",
      key: "websiteLink",
    },
    {
      title: "Details",
      width: 5000,
      dataIndex: "details",
      key: "details",
    },
    {
      title: "Actions",
      width: 300,
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Row gutter={16}>
            <Col>
              <Button
                onClick={() =>
                  dispatch(
                    setModalState({
                      visible: true,
                      type: "adminAboutModal",
                      details: record,
                    })
                  )
                }
              >
                Edit
              </Button>
            </Col>
            <Col>
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => dispatch(deleteAbout({id: record._id}))}
              >
                <Button>Delete</Button>
              </Popconfirm>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  const header = (
    <Fragment>
      <Row justify="space-between">
        <Col>
          <h1>Work</h1>
        </Col>
        <Col>
          {" "}
          <Button
            onClick={() =>
              dispatch(setModalState({ visible: true, type: "adminAboutModal" }))
            }
          >
            Add
          </Button>
        </Col>
      </Row>
    </Fragment>
  );

  return (
    <div>
      <CustomTable
        title={() => header}
        columns={columns}
        dataSource={aboutDetails}
        loading={isLoading}
      />
    </div>
  );
};

export default AboutTable;
