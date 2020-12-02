import React from "react";
import Table from "../../organisms/Table";
import Form from "../../organisms/Form";
import { exampleData, exampleHeaderData } from "../../../exampleData";

const MainPage: React.FC = () => (
  <>
    <Table bodyData={exampleData} headData={exampleHeaderData} />
    <Form />
  </>
);

export default MainPage;
