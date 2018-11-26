import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//LOCAL
import ColumnDataList from "../../components/ColumnDataList";
import { selectors } from "../../modules/location/";
import { actions as emActions } from "../../modules/employee";

class LocationList extends React.Component {
    //return provided classname
    getClassName() {
        return `${this.props.classname}`;
    }

    render() {
        const { locationList, isLocationListLoading, isLocationListLoaded, handleRequestSelectedItems } = this.props;
        return (
            <div className={`${this.getClassName()}`}>
                <ColumnDataList
                    columnName="Locations:"
                    classname={`${this.getClassName()}__locations`}
                    actionButtonText={`view employees`}
                    dataList={locationList}
                    contentLoading={isLocationListLoading}
                    contentLoaded={isLocationListLoaded}
                    waitingDataText={'Waiting for dealership selection'}
                    noDataText={`No Locations available for this selection`}
                    handleRequestSelectedItems={(requestIds) => handleRequestSelectedItems(requestIds, locationList)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    locationList: selectors.getLocations(state),
    isLocationListLoading: selectors.getIsLocationLoading(state),
    isLocationListLoaded: selectors.getIsLocationLoaded(state)
});

const mapDispatchToProps = dispatch => ({
    handleRequestSelectedItems: (locationIds, list) => {
        let requestedEmployees = [];
        //for each current location, check if location id is in selected locations
        list.forEach((location) => {
            if (locationIds.includes(location.id)) {
                requestedEmployees = [...requestedEmployees, ...location.employees];
            }
        })
        dispatch(emActions.requestEmployees(requestedEmployees));
    }
});

LocationList.propTypes = {
    locationList: PropTypes.array,
    isLocationListLoading: PropTypes.bool
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationList);