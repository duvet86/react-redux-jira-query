import React, { PropTypes } from "react";

import { Col } from "react-bootstrap";

const Loading = ({ isFetching, children }) => isFetching
  ? <Col md={12}>
      <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </Col>
  : children;

Loading.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  children: React.PropTypes.element.isRequired
};

export default Loading;
