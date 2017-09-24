import React from 'react';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React, {
    //By default, the changes for each component are grouped by component and these groups collapsed
    groupByComponent: true,
    collapseComponentGroups: true,
    //include or exclude components by their displayName
    // include: /^pure/,
    // exclude: /^Connect/,
  });
}

export default React;
