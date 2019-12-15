import { compose, withStateHandlers, lifecycle } from "recompose";
import { connect } from "react-redux";
import { withTranslator } from "../../enhancers/withTranslator";

import { getCurrentUser, removeCurrentUser } from "../../modules/user";

import { UserDropdownView } from "./UserDropdownView";

const mapStateToProps = state => ({ ...getCurrentUser(state) });
const mapDispatchToProps = { logout: removeCurrentUser };

export const UserDropdownContainer = compose(
  withStateHandlers(
    { shown: false },
    {
      toggle: ({ shown }) => () => ({ shown: !shown }),
      close: ({ shown }) => () => (shown ? { shown: false } : { shown })
    }
  ),
  lifecycle({
    componentDidMount() {
      document.addEventListener("mouseup", this.props.close);
    },
    componentWillUnmount() {
      document.removeEventListener("mouseup", this.props.close, true);
    }
  }),
  withTranslator,
  connect(mapStateToProps, mapDispatchToProps)
)(UserDropdownView);
