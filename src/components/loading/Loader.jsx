import React from 'react';
import { CubeSpinner } from 'react-spinners-kit';

const Loader = () => (
  <div
    style={{ height: '100vh' }}
    className="d-flex justify-content-center align-items-center"
  >
    <CubeSpinner size={20} frontColor="#e9940b" backColor="#ddd" loading />
  </div>
);

export default Loader;
