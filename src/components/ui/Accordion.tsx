import React, { useState } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id || null);

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="treatment-accordion">
      {items.map((item) => {
        const isActive = activeId === item.id;
        return (
          <div key={item.id} className={`accordion-item ${isActive ? 'active' : ''}`}>
            <button
              className="accordion-header"
              onClick={() => handleToggle(item.id)}
              aria-expanded={isActive}
            >
              <span>{item.title}</span>
              <i className="ri-add-line"></i>
            </button>
            <div
              className="accordion-content"
              style={{
                maxHeight: isActive ? '200px' : '0px',
                paddingBottom: isActive ? '1.5rem' : '0px',
              }}
            >
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
