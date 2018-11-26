//Packages
import React from "react";
import PropTypes from "prop-types";

//Local
import Header from "./columnDataList/Header";
import List from "./columnDataList/List";

class ColumnDataList extends React.Component {
  // return provided classname
  getClassName() {
    return `columnDataList`;
  }

  render() {
    const { dataList, contentLoading, handleRequestSelectedItems, columnName, actionButtonText, contentLoaded, noDataText, waitingDataText } = this.props;
    return (
      <div
        className={`${this.props.classname} ${this.getClassName()} `}
      >
        <Header
          columnName={columnName}
          classname={`${this.getClassName()}`}
        />
        <List
          dataList={dataList || []}
          classname={`${this.getClassName()}`}
          contentLoading={contentLoading}
          contentLoaded={contentLoaded}
          noDataText={noDataText}
          waitingDataText={waitingDataText}
          handleRequestSelectedItems={handleRequestSelectedItems}
          actionButtonText={actionButtonText}
        />
        {this.props.children}
      </div>
    );
  }
}

ColumnDataList.propTypes = {
  dataList: PropTypes.array,
  classname: PropTypes.string,
  columnName: PropTypes.string,
  handleRequestSelectedItems: PropTypes.func,
  contentLoading: PropTypes.bool,
  contentLoaded: PropTypes.bool,
  actionButtonText: PropTypes.string,
  noDataText: PropTypes.string,
  waitingDataText: PropTypes.string
};

export default ColumnDataList;
