import { connect } from 'react-redux';

import Messages from 'src/components/Messages';

const mapStateToProps = state => ({
  list: state.messages.list,
});

const mapDispatchToProps = {};

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

export default MessagesContainer;
