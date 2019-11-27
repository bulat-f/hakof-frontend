import { compose, withStateHandlers } from "recompose";

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
