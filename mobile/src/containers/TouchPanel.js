import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TouchPanel from '../components/touch-panel';
import { subscribe, callbackCalled } from '../actions';
import * as routes from '../routes';

const mapStateToProps = ({session}, {navigator}) => ({
  controls: session.controls,
  toSettings: () => navigator.push(routes.SETTINGS),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({subscribe, callbackCalled}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TouchPanel);
