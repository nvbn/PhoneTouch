import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TouchPanel from '../components/touch-panel';
import { panelSubscribe, panelInteracted } from '../actions';

const mapStateToProps = ({session}) => ({
  controls: session.controls,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    subscribe: panelSubscribe,
    interacted: panelInteracted,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TouchPanel);
