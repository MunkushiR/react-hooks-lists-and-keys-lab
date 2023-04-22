import React from "react";

function Links({ github,  }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      
    </div>
  );
}

export default Links;