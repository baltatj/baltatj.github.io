import { useEffect, useState } from "react";

import "./NotFoundPage.sass";

const NotFoundPage = ({ ...props }: {}) => {
  return (
    <div className="not-found-page" {...props}>
      <h1>404 Not found</h1>
    </div>
  );
};

export { NotFoundPage };
