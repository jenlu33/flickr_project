import { connect } from 'react-redux';
import { log_out } from '../../actions/session_actions';
import LoggedInHeader from '../logged_in_header';

const mapDispatchToProps = dispatch ({
  logout: () => dispatch(log_out())
})

export default connect(null, mapDispatchToProps)(LoggedInHeader);