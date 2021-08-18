import React from "react";

const A = ({ values }) => {
  const onClick = e => {
    e.preventDefault();
    window.open(values.href, "newBrowsingContext");
  };
  return (
    <a href={values.href} onClick={onClick}>
      {values.label}
    </a>
  );
};

export default A;
