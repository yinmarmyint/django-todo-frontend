import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'rsuite';
import classNames from 'classnames';
import styles from './mutableCell.module.scss';

class MutableCell extends React.Component {
  state = { isFocus: false };

  onValueChange = (e, data) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(e, data);
    }
  };

  render() {
    const {
      value,
      name,
      cellClassName,
      inputClassName,
      children,
      type,
      ...props
    } = this.props;
    return (
      // <td
      //   className={classNames(
      //     styles.compactCell,
      //     this.state.isFocus ? styles.focus : '',
      //     cellClassName
      //   )}
      // >
      <Input
        {...props}
        className={classNames(styles.tableInput, inputClassName)}
        name={name}
        value={value}
        type={type}
        onChange={this.onValueChange}
        onFocus={() => this.setState({ isFocus: true })}
        onBlur={() => this.setState({ isFocus: false })}
      />
      // </td>
    );
  }
}

MutableCell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func,
  cellClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};

MutableCell.defaultProps = {
  onChange: null,
  cellClassName: '',
  inputClassName: '',
};

export default MutableCell;
