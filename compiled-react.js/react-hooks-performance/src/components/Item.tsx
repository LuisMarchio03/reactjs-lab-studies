import React, { memo } from "react";

type ItemProps = {
  title: string;
  onAddToWishlist: (item: string) => void;
};

function ItemComponent(props: ItemProps) {
  return (
    <li>
      {props.title}
      {" - "}
      <button onClick={() => props.onAddToWishlist(props.title)}>
        Add to Wishlist
      </button>
    </li>
  );
}

export const Item = memo(ItemComponent);
