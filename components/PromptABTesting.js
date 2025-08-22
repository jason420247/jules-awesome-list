import React, { useState } from 'react';

const PromptABTesting = () => {
  const [versionA, setVersionA] = useState({
    id: 'a',
    name: 'Version A',
    impressions: 100,
    clicks: 10,
  });

  const [versionB, setVersionB] = useState({
    id: 'b',
    name: 'Version B',
    impressions: 100,
    clicks: 20,
  });

  return (
    <div>
      <div>
        <h2>{versionA.name}</h2>
        <p>Impressions: {versionA.impressions}</p>
        <p>Clicks: {versionA.clicks}</p>
        <p>CTR: {versionA.clicks / versionA.impressions}</p>
      </div>
      <div>
        <h2>{versionB.name}</h2>
        <p>Impressions: {versionB.impressions}</p>
        <p>Clicks: {versionB.clicks}</p>
        <p>CTR: {versionB.clicks / versionB.impressions}</p>
      </div>
    </div>
  );
};

export default PromptABTesting;
