import React, { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isName, setIsName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    // setIsEditing(isEditing ? false : true);
    // setIsEditing(!isEditing);
    setIsEditing((wasEditing) => !wasEditing);
  };

  const handleNameChange = (event) => {
    setIsName(event.target.value);
  };

  let playerName = <span className="player-name">{isName}</span>;

  if (isEditing) {
    playerName = (
      <input
        type="text"
        required
        defaultValue={isName}
        onChange={handleNameChange}
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "save" : "Edit"}</button>
    </li>
  );
}
