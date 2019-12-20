import React from 'react';
import { Whisper, Popover, Tag } from 'rsuite';
import _ from 'lodash';

const ListPopup = props => {
  const { data } = props;
  if (!_.isEmpty(data)) {
    return (
      <Whisper
        placement="topLeft"
        trigger="hover"
        speaker={
          <Popover>
            {_.map(data, d => (
              <Tag color="cyan" key={d.id}>
                {d.name}
              </Tag>
            ))}
          </Popover>
        }
      >
        <Tag color="cyan">{data && data[0] && data[0].name}</Tag>
      </Whisper>
    );
  }
  return <></>;
};

export default ListPopup;
