import React, { Fragment } from "react";
import CustomTable from "../../CustomTable/CustomTable";
import { Row, Col, Button, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setModalState } from "../../../Redux/reducers/workReducer";
import { deleteWork } from "../../../Redux/actions/workActions";

const WorkTable = ({ workDetails }) => {
  const { isLoading } = useSelector((state) => state.work);

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
      title: "repoLink",
      width: 50,
      dataIndex: "repoLink",
      key: "repoLink",
    },
    {
      title: "Website url",
      width: 10,
      dataIndex: "websiteLink",
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
                      type: "adminWorkModal",
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
                onConfirm={() => dispatch( deleteWork({id: record._id}))}
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
              dispatch(setModalState({ visible: true, type: "adminWorkModal" }))
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
        dataSource={workDetails}
        loading={isLoading}
      />
    </div>
  );
};

export default WorkTable;
