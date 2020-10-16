import React from "react";
import { Link, withRouter } from "react-router-dom";

import CollectionItem from "./../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = (props) => {
  const { title, items } = { ...props };
  return (
    <div className="collection-preview">
      <Link to={`${props.match.path}/${props.routeName}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
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
