import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TouchPanel from '../components/touch-panel';
import { panelSubscribe, panelClicked } from '../actions';

const mapStateToProps = ({session}) => ({
  buttons: session.buttons,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    subscribe: panelSubscribe,
    clicked: panelClicked,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TouchPanel);
