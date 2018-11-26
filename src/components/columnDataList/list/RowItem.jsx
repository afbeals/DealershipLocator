import React from "react";
import PropTypes from "prop-types";
import Checkbox from '@material-ui/core/Checkbox';

class RowItem extends React.Component {
  //only update item if selected status has changed
  shouldComponentUpdate(nextProps) {
    return (this.props.isSelected !== nextProps.isSelected ) ? true : false;
  }

  render() {
    const { isSelected, itemData } = this.props;
    return (
      <div className={`content`}>
        <Checkbox
          checked={isSelected}
          value={itemData.name}
        />
          <p>{itemData.name}</p>
      </div>
    );
  }
}

RowItem.propTypes = {
    itemData: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired
};

export default RowItem;
