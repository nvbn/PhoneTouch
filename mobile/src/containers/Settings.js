import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Settings from '../components/settings';
import { settingsSave } from '../actions';

const mapStateToProps = ({settings}, {navigator}) => ({
  back: () => navigator.pop(),
  settings,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({save: settingsSave}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
