import React, { useReducer } from 'react';
import { Table } from 'rsuite';

const initialState = { page: 0, displayLength: 10 };

function reducer(state, action) {
  switch (action.type) {
    case 'changePage':
      return { ...state, page: action.payload };
    case 'changeLength':
      return { page: 0, displayLength: action.payload };
    default:
      throw new Error();
  }
}

const TablePagination = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { total, onChangePage, onChangeLength } = props;
  return (
    <div>
      <Table.Pagination
        lengthMenu={[
          {
            value: 10,
            label: 10,
          },
          {
            value: 20,
            label: 20,
          },
        ]}
        activePage={state.page}
        displayLength={state.displayLength}
        total={total}
        onChangePage={dataKey => {
          onChangePage(dataKey - 1, state.displayLength);
          dispatch({ type: 'changePage', payload: dataKey });
        }}
        onChangeLength={dataKey => {
          onChangeLength(0, dataKey);
          dispatch({ type: 'changeLength', payload: dataKey });
        }}
      />
    </div>
  );
};

// TablePagination.propTypes = {
//   onChangePage: PropTypes.func.isRequired,
//   onChangeLength: PropTypes.func.isRequired,
//   total: PropTypes.number.isRequired,
// };

export default TablePagination;
