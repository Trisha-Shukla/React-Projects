import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({ name = "content", control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue} // Important to set this for the Controller
        render={({ field: { onChange, value } }) => (
          <Editor
          apiKey="q71meyahhp79rec63uckhfb1m3l7yhl5at84w34cwl3m4nwm" // Replace with your TinyMCE API key
            value={value} // Use value from Controller's field
            initialValue={defaultValue} // Set only once on initial render
            onEditorChange={onChange} // Set onChange to update value
            init={{
              height: 500,
              menubar: true,
              readonly: false, // Ensure this is false or removed
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        )}
      />
    </div>
  );
}
