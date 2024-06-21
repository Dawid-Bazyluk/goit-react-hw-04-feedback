import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <button name="Good" type="button" onClick={onLeaveFeedback}>
      Good
    </button>
    <button
      name="Neutral"
      style={{ margin: "10px" }}
      type="button"
      onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button name="Bad" type="button" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);


FeedbackOptions.propTypes = {
  FeedbackOptions: PropTypes.func,
};


export default FeedbackOptions;
