import React, { lazy, Suspense } from 'react';

const LazyWorkHistory = lazy(() => import('./WorkHistory'));

const WorkHistory = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWorkHistory {...props} />
  </Suspense>
);

export default WorkHistory;
