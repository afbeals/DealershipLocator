import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//LOCAL
import ColumnDataList from "../../components/ColumnDataList";
import { selectors } from "../../modules/employee/";

class EmployeeList extends React.Component {
    //return provided classname
    getClassName() {
        return `${this.props.classname}`;
    }
    render() {
        const { employeeList, isEmployeeListLoading, isEmployeeListLoaded } = this.props;
        return (
            <div className={`${this.getClassName()}`}>
                <ColumnDataList
                    columnName="Employees:"
                    classname={`${this.getClassName()}__employees`}
                    actionButtonText={`Log employees`}
                    dataList={employeeList}
                    contentLoading={isEmployeeListLoading}
                    contentLoaded={isEmployeeListLoaded}
                    waitingDataText={'Waiting for location selection'}
                    noDataText={`No Employees available for this selection`}
                    handleRequestSelectedItems={
                        employeeIds => {
                            console.log(`The selected employees are ${employeeIds.join(', ')}`)
                        }
                    }
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    employeeList: selectors.getEmployees(state),
    isEmployeeListLoading: selectors.getIsEmployeeLoading(state),
    isEmployeeListLoaded: selectors.getIsEmployeeLoaded(state)
});

EmployeeList.propTypes = {
    employeeList: PropTypes.array,
    isEmployeeListLoading: PropTypes.bool
};

export default connect(
    mapStateToProps
)(EmployeeList);