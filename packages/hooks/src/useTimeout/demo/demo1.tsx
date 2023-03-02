import React, { useState } from 'react';

import { useTimeout } from '@td-design/rn-hooks';

export default () => {
  const [state, setState] = useState(1);
  useTimeout(() => {
    setState(state + 1);
  }, 3000);

  return <div>{state}</div>;
};
