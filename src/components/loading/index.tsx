import React, { FC } from 'react';
import './index.less';
export interface LoadingProps {}
const Loading: FC<LoadingProps> = () => {
  return (
    <>
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </>
  );
};

export default Loading;
