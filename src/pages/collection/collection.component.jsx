import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectShopData } from "../../redux/shop/shop.selector";
import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      
    </div>
  );
};

const matStateToProps = (state, ownProps) => ({
  collection: selectShopData(ownProps.match.params.collectionId)(state),
});

export default connect(matStateToProps)(CollectionPage);
