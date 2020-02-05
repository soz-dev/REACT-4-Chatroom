import { connect } from 'react-redux';

import {
  settingsToggle,
  changeSettingsUsername,
  changeCurrentUser,
} from 'src/store/reducers/settings';
import Settings from 'src/components/Settings';

const mapStateToProps = state => ({
  open: state.settings.settingsOpen,
  username: state.settings.settingsUsername,
});


const mapDispatchToProps = dispatch => ({
  clickPlus: () => {
    dispatch(settingsToggle());
  },
  changeInput: (currentInputValue) => {
    dispatch(changeSettingsUsername(currentInputValue));
  },
  submitForm: () => {
    dispatch(changeCurrentUser());
  },
});

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
