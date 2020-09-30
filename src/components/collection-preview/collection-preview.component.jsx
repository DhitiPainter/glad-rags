import React from "react";
import { withRouter } from "react-router-dom";
import "./collection-preview.styles.scss";

import CollectionItem from "./../collection-item/collection-item.component";

const CollectionPreview = (props) => {
  const { title, items } = { ...props };
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((items, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
