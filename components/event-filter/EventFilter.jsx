import React from 'react';  

const EventFilter = ({ selectedType, setSelectedType, eventTypes }) => {
  const handleChange = (e) => {
    setSelectedType(e.target.value);
  };

  return (
      <select
        className="events-list__select"
        value={selectedType}
        onChange={handleChange}
      >
        {eventTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
  );
};

export default EventFilter;