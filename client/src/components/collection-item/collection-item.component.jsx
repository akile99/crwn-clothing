import React from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => dispatch(addItem(item))} inverted>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
