import React, { useState } from 'react';

const initialCollections = [
  {
    id: '1',
    name: 'My First Collection',
    prompts: [
      { id: '1', name: 'My First Prompt' },
      { id: '2', name: 'My Second Prompt' },
    ],
  },
  {
    id: '2',
    name: 'My Second Collection',
    prompts: [
      { id: '3', name: 'My Third Prompt' },
      { id: '4', name: 'My Fourth Prompt' },
    ],
  },
];

const PromptCollections = () => {
  const [collections, setCollections] = useState(initialCollections);

  return (
    <div>
      {collections.map(({ id, name, prompts }) => (
        <div key={id}>
          <h2>{name}</h2>
          <ul>
            {prompts.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PromptCollections;
