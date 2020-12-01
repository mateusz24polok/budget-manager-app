import React from "react";
import Table from "../../organisms/Table";
import { exampleData, exampleHeaderData } from "../../../exampleData";

const MainPage: React.FC = () => <Table bodyData={exampleData} headData={exampleHeaderData} />;

export default MainPage;
