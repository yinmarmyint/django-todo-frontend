import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'rsuite';

const EmptyDataMessage = props => (
  <Message
    showIcon
    type={props.type}
    title={props.title}
    description={props.description}
  />
);

EmptyDataMessage.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

EmptyDataMessage.defaultProps = {
  type: 'info',
  title: 'No data to display',
  description: 'Create more contents to see a list.',
};
export default EmptyDataMessage;
