import React from 'react';
import { Whisper, Popover } from 'rsuite';
import truncate from 'lodash/truncate';
import PropTypes from 'prop-types';

const Popup = props => {
  const { note, length } = props;
  if (note) {
    return (
      <Whisper
        placement="topLeft"
        trigger="hover"
        speaker={<Popover>{note}</Popover>}
      >
        <p>
          {truncate(note, {
            length,
          })}
        </p>
      </Whisper>
    );
  }
  return null;
};
Popup.propTypes = {
  note: PropTypes.string,
  length: PropTypes.number,
};

Popup.defaultProps = {
  note: null,
  length: 12,
};
export default Popup;
