import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//LOCAL
import ColumnDataList from "../../components/ColumnDataList";
import { selectors as dsSelectors } from "../../modules/dealership/";
import { actions as lcActions } from "../../modules/location/";

class DealershipList extends React.Component {
    //return provided classname
    getClassName() {
        return `${this.props.classname}`;
    }

    render() {
        const { handleRequestSelectedItems, dealerShipList, isDealerShipListLoading, isDealerShipListLoaded } = this.props;
        return (
            <div className={`${this.getClassName()}`}>
                <ColumnDataList
                    columnName="Dealerships:"
                    classname={`${this.getClassName()}__dealerships`}
                    actionButtonText={`view locations`}
                    dataList={dealerShipList}
                    contentLoading={isDealerShipListLoading}
                    contentLoaded={isDealerShipListLoaded}
                    waitingDataText={'Waiting for dealerships'}
                    noDataText={`No Dealerships available`}
                    handleRequestSelectedItems={(requestIds)=>handleRequestSelectedItems(requestIds,dealerShipList)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dealerShipList: dsSelectors.getDealerships(state),
    isDealerShipListLoading: dsSelectors.getIsDealershipLoading(state),
    isDealerShipListLoaded: dsSelectors.getIsDealershipLoaded(state)
});

const mapDispatchToProps = dispatch => ({
    handleRequestSelectedItems: (dealershipIds,list) => {
        let requestedLocations = [];
        //for each item in current dealership, check if id in selected dealerships
        list.forEach((dealership) => {
            if (dealershipIds.includes(dealership.id)) {
                requestedLocations = [...requestedLocations, ...dealership.locations];
            }
        })
        dispatch(lcActions.requestLocations(requestedLocations))
    }
});

DealershipList.propTypes = {
    dealerShipList: PropTypes.array,
    isDealerShipListLoading: PropTypes.bool
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DealershipList);