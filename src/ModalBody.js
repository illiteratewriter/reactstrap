import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
};
const defaultProps = {
  tag: 'div',
};

function ModalBody(props) {
  const { className, cssModule, innerRef, tag: Tag, ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'modal-body'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={innerRef} />;
}

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;
