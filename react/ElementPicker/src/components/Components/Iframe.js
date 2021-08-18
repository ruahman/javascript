import React from 'react';
import PropTypes from 'prop-types';

const Iframe = ({ values }) => (
  <iframe
    title={`content from ${values.src}`}
    src={values.src}
    height={values.height}
    width={values.width}
  />
);

Iframe.propTypes = {
  values: PropTypes.shape({
    height: PropTypes.number,
    src: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
};

export default Iframe;
