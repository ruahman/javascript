import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';

const IframeForm = ({
  children,
  handleSubmit,
}) => {
  const [src, setSrc] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  return (
    <form onSubmit={() => {
      handleSubmit({ src, width, height });
    }}>
    <div className="component-field">
      <label className="component-field__label">
        src
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        name="src"
        type="text"
        value={src}
        onChange={e => setSrc(e.target.value)}
      />
    </div>
    <div className="component-field">
      <label className="component-field__label">
        width
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        name="width"
        type="number"
        value={width}
        onChange={e => setWidth(parseInt(e.target.value))}
      />
    </div>
    <div className="component-field">
      <label className="component-field__label">
        width
      </label>
      <input
        autoComplete="off"
        className="component-field__input"
        name="height"
        type="number"
        value={height}
        onChange={e => setHeight(parseInt(e.target.value))}
      />
    </div>
    <Actions>
      {children}
    </Actions>
    </form>
  );
}

IframeForm.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default IframeForm;
