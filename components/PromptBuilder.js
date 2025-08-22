import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialComponents = [
  { id: '1', type: 'text', content: 'This is a text component.' },
  { id: '2', type: 'image', content: 'https://via.placeholder.com/150' },
  { id: '3', type: 'video', content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
];

const PromptBuilder = () => {
  const [components, setComponents] = useState(initialComponents);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(components);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setComponents(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="components">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {components.map(({ id, type, content }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {type === 'text' && <p>{content}</p>}
                    {type === 'image' && <img src={content} alt="placeholder" />}
                    {type === 'video' && (
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PromptBuilder;
