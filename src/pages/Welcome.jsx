//Packages
import React from "react";
import PropTypes from "prop-types";
import { push } from "connected-react-router";
import { connect } from "react-redux";

//Local
import StyledButton from "../components/StyledButton";

class Welcome extends React.Component {
  getClassName() {
    return `welcome`;
  }
  render() {
    return (
      <div className={`${this.getClassName()}`}>
        <div className={`content`}>
          <h2>Welcome!</h2>
          <StyledButton onClick={() => this.props.handleNavigation('/home')}>View Dealerships</StyledButton>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  getState: state
});

const mapDispatchToProps = dispatch => ({
  handleNavigation: route => {
    dispatch(push(route));
  }
});

Welcome.propTypes = {
  handleNavigation: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);