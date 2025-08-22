import React, { useState } from 'react';

const initialPrompts = [
  {
    id: '1',
    name: 'My First Prompt',
    price: 10,
  },
  {
    id: '2',
    name: 'My Second Prompt',
    price: 20,
  },
  {
    id: '3',
    name: 'My Third Prompt',
    price: 30,
  },
];

const PromptMarketplace = () => {
  const [prompts, setPrompts] = useState(initialPrompts);

  return (
    <div>
      {prompts.map(({ id, name, price }) => (
        <div key={id}>
          <h2>{name}</h2>
          <p>${price}</p>
          <button>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default PromptMarketplace;
