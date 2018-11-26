//Packages
import React from "react";
import PropTypes from "prop-types";
import _ from "underscore";

//Local
import RowItem from "./list/RowItem.jsx";
import StyledButton from "../StyledButton.jsx";

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedItemsList: []
        }
    }

    //compare prev data and new data, if diffrence in sets or length, reset seleted list
    componentDidUpdate(prevprops){
        const prevData = _.pluck(prevprops.dataList, 'id'),
              currentData = _.pluck(this.props.dataList, 'id');
        if(_.difference(prevData, currentData).length || (prevData.length !== currentData.length )){
            this.setState({
                ...this.state,
                selectedItemsList: []
            })
        };
        
    }

    //handle adding / removing id's of selected item
    selectItem = (id) => {
        //if item is not in list => add item
        if (!this.checkIsSelected(id)) {
            this.setState({
                ...this.state,
                selectedItemsList: [
                    ...this.state.selectedItemsList,
                    id
                ]
            })
        // else remove item
        } else {
            this.setState({
                ...this.state,
                selectedItemsList: this.state.selectedItemsList.filter((item) => item !== id)
            })
        }
    }

    //check if item id is in the list
    checkIsSelected = (id) => {
        return this.state.selectedItemsList.includes(id);
    }

    //send request of items to parent
    requestSelectedItems = () => {
        this.props.handleRequestSelectedItems(this.state.selectedItemsList);
    }

    //return provided classname
    getClassName() {
        return `${this.props.classname}__list`;
    }

    render() {
        const { dataList = [], contentLoading, actionButtonText, contentLoaded, noDataText, waitingDataText } = this.props;
        const { selectItem, requestSelectedItems } = this;
        const { selectedItemsList } = this.state;
        return (
            <div className={`${this.getClassName()}__wrapper`}>
                <ul className={`${this.getClassName()}`}>
                    {contentLoading && <div className={`loading`}><i className="fas fa-sync fa-spin"></i></div>}
                    {!contentLoading && contentLoaded && !dataList.length && <div className={`noData`}><p>{noDataText ? noDataText : `No Data Available`}</p></div>}
                    {!contentLoading && !contentLoaded && <div className={`waiting`}><p>{waitingDataText ? waitingDataText : `Waiting for data`}</p></div>}
                    {!contentLoading && dataList && dataList.map((item, i) => {
                        return <li key={`${item.id}-${item.name}-i`} onClick={() => selectItem(item.id)} className={`${this.getClassName()}__item`}>
                            <RowItem
                                itemData={item}
                                isSelected={this.checkIsSelected(item.id)}
                            />
                        </li>
                    })}
                </ul>
                <div className={`button__wrapper`}>
                    <StyledButton disabled={contentLoading || !dataList || (dataList && !dataList.length) || !selectedItemsList.length} onClick={() => requestSelectedItems()}>{actionButtonText}</StyledButton>
                </div>
            </div>

        );
    }
}

List.propTypes = {
    dataList: PropTypes.array,
    contentLoading: PropTypes.bool,
    handleRequestSelectedItems: PropTypes.func,
    classname: PropTypes.string,
    contentLoaded: PropTypes.bool,
    actionButtonText: PropTypes.string,
    noDataText: PropTypes.string,
    waitingDataText: PropTypes.string,
};

export default List;