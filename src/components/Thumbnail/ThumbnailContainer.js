import { connect } from "react-redux";
import { Thumbnail } from "./Thumbnail";
import { setCurrent, toggleNavigation } from "../../store/actions";

const mapDispatchToProps = (dispatch, ownProps) => {
  const navigate = () => {
    dispatch(setCurrent(ownProps.index));
    dispatch(toggleNavigation());
  };

  return { navigate };
};

export const ThumbnailContainer = connect(null, mapDispatchToProps)(Thumbnail);
