import { compose, withProps } from "components/Comment/node_modules/recompose";
import { RatingView } from "./RatingView";

export const RatingContainer = compose(
  withProps(({ likes, dislikes }) => ({
    rating: likes.count - dislikes.count,
    isLiked: likes.isLiked || false,
    isDisliked: dislikes.isDisliked || false
  }))
)(RatingView);
