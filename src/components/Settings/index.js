/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */

import './settings.scss';

/**
 * Code
 */
class Settings extends React.Component {
  handleChange = (event) => {
    const { changeInput } = this.props;
    changeInput(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { submitForm, username } = this.props;
    if (!this.checkFormError(username)) {
      submitForm();
    }
  };

  
  checkFormError = str => str.trim().length < 2;

  render() {
   
    const { open, clickPlus, username } = this.props;

    const classCSS = classNames({
      'settings--open': open,
      'settings--error': this.checkFormError(username),
    });

    return (
      <div id="settings" className={classCSS}>
        <div id="settings-toggle" onClick={clickPlus} />
        <form autoComplete="off" id="settings-form" onSubmit={this.handleSubmit}>
          <input
            id="settings-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          <button id="settings-button" type="submit">
            ok
          </button>
        </form>
      </div>
    );
  }
}

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  clickPlus: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};
/**
 * Export
 */
export default Settings;
