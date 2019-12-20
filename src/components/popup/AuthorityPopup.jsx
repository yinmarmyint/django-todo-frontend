import React from 'react';
import { Whisper, Popover, Tag } from 'rsuite';
import _ from 'lodash';

const AuthorityPopup = props => {
  const { data } = props;
  if (data) {
    return (
      <Whisper
        placement="top"
        trigger="hover"
        speaker={
          <Popover>
            {_.map(data, d => (
              <Tag color="cyan" key={_.uniqueId()}>
                {d}
              </Tag>
            ))}
          </Popover>
        }
      >
        <Tag color="cyan">{data[0]}</Tag>
      </Whisper>
    );
  }
  return null;
};

export default AuthorityPopup;
