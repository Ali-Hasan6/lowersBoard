import JoditEditor, { Jodit } from "jodit-react";
import React, { useState, useRef } from "react";

function Editor() {

    const editor = useRef(null)
    const [content, setContent] = useState('')
    return (
        <JoditEditor ref={editor} value={content} onChange={newContent => setContent(newContent)} />
    );
}

export default Editor;
