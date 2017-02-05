import React, { PropTypes } from 'react';

import { Col } from "react-bootstrap";
import BarChart from "./BarChart";

const App = ({ data, lastUpdated }) => (
  <Col md={12}>
    <div>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.</div>
    <BarChart data={data} />
  </Col>
);

App.propTypes = {
  data: PropTypes.object.isRequired,
  lastUpdated: PropTypes.number
};

export default App;