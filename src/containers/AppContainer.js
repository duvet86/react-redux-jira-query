import "font-awesome/css/font-awesome.css";

import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../actions";

import { Grid, Row } from "react-bootstrap";
import Loading from "../components/Loading";
import App from "../components/App";

class AppContainer extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLogin());
  }

  render() {
    return (
      <Grid>
        <Row>
          <Loading isFetching={this.props.isFetching}>
            <App {...this.props} />
          </Loading>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  const { jiraQuery } = state;
  const {
    isFetching,
    data,
    lastUpdated
  } = jiraQuery ||
    {
      isFetching: true,
      data: {}
    };

  return {
    isFetching,
    data,
    lastUpdated
  };
};

export default connect(mapStateToProps)(AppContainer);
