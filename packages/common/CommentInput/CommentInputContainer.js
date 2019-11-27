import { compose, withStateHandlers, withHandlers } from "recompose";
import { CommentInputView } from "./CommentInputView";

export const CommentInputContainer = compose(
  withStateHandlers(
    {
      comment: "",
      submitting: false,
      user: {
        name: null
      }
    },
    {
      setComment: () => comment => ({ comment }),
      setSubmitting: () => submitting => ({ submitting }),
      setUserName: () => name => ({ user: { name } })
    }
  ),
  withHandlers({
    handleChange: ({ setComment }) => ({ target }) => {
      console.log(target, target.value);

      setComment(target.value);
    },
    handleChangeName: ({ setUserName }) => ({ target }) =>
      setUserName(target.value),
    handleSubmit: ({ setComment, setSubmitting }) => () => {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setComment("");
      }, 500);
    }
  })
)(CommentInputView);
