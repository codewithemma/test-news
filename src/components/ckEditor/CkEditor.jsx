import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKEditorComponent = ({ initialValue, onChange }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={initialValue}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data);
      }}
    />
  );
};

export default CKEditorComponent;
