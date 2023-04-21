import React, { useState } from "react";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Write a note"
          value={note.content}
        />

        <button
          onClick={(event) => {
            props.onAdd(note);
            setNote({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        />
      </form>
    </div>
  );
}

export default CreateArea;
