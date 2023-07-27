import React from "react";

import classNames from "classnames";

function Wysiwyg({ content, className }: WysiwygProps) {
  return (
    <div
      className={classNames("wysiwyg", className)}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default Wysiwyg;
