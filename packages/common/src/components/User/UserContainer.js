import { compose, withStateHandlers } from "components/Comment/node_modules/recompose";

export const UserContainer = compose(
  withStateHandlers(
    {
      focused: false
    },
    {
      handleFocus: () => () => ({ focused: true }),
      handleBlur: () => () => ({ focused: false })
    }
  )
)();
