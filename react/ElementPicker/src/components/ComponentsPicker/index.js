import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { uuid } from "../../utils/uuid";
import { addComponent } from "../../store/components/actions";

import "./components-picker.css";

const Components = [
  { layout: 1, label: "h1" },
  { layout: 2, label: "h2" },
  { layout: 3, label: "h3" },
  { layout: 4, label: "h4" },
  { layout: 5, label: "h5" },
  { layout: 6, label: "h6" },
  { layout: 7, label: "p" },
  { layout: 8, label: "a" },
  { layout: 9, label: "img" },
  { layout: 10, label: "iframe" },
];

export const ComponentsPicker = ({ lockedPicker, onComponentClick }) => (
  <div className="components-picker">
    {Components.map(component => (
      <div
        className={`components-picker__component${
          lockedPicker ? "--disabled" : ""
        }`}
        key={component.layout}
        onClick={() => !lockedPicker && onComponentClick(component.layout)}
      >
        <span className="components-picker__component-label">
          {component.label}
        </span>
      </div>
    ))}
  </div>
);

ComponentsPicker.propTypes = {
  onComponentClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onComponentClick: layout => dispatch(addComponent(uuid(), layout)),
});

export default connect(undefined, mapDispatchToProps)(ComponentsPicker);
