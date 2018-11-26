//Packages
import React from "react";
import { connect } from "react-redux";

//LOCAL
import DealershipList from "./home/DealershipList";
import EmployeeList from "./home/EmployeeList";
import LocationList from "./home/LocationList";
import {actions as dsActions} from "../modules/dealership/";

class Home extends React.Component {
  //fetch all dealserships when component has mounted
  componentDidMount(){
    this.props.handleDealershipRequest();
  }

  //return provided classname to pass down
  getClassName() {
    return `home`;
  }
  
  render() {
    return (
      <div className={`${this.getClassName()}`}>
        <DealershipList classname={`${this.getClassName()}__column`} />
        <LocationList  classname={`${this.getClassName()}__column`} />
        <EmployeeList  classname={`${this.getClassName()}__column`} />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleDealershipRequest: () => {
    dispatch(dsActions.requestDealerships());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);