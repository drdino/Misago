import React from 'react'; // jshint ignore:line
import misago from 'misago/index';
import Button from 'misago/components/button'; // jshint ignore:line
import Form from 'misago/components/form';
import ajax from 'misago/services/ajax';
import modal from 'misago/services/modal';
import snackbar from 'misago/services/snackbar';
import showBannedPage from 'misago/utils/banned-page';
import { Link } from 'react-router';

export default class extends Form {
  constructor(props) {
      super(props);

      this.state = {
          'isLoading': false,
          'showActivation': false,

          'validators': {}
      };
  }

  handleClick() {
      window.location.assign('/admin/oauth/login');
  }


  render() {
    /* jshint ignore:start */
    return (
      <div
        className="modal-dialog modal-sm modal-sign-in"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              aria-label={gettext("Close")}
              className="close"
              data-dismiss="modal"
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title">{gettext("Sign in with Google")}</h4>
          </div>

          <button
              className="btn-primary btn-block"
              onClick={this.handleClick}
              loading={this.state.isLoading}
          >
              {gettext("Click here to login with your google credentials")}
          </button>

        </div>
      </div>
    );
    /* jshint ignore:end */
  }
}
