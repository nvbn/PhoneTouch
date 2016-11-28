import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Settings from '../components/settings';
import { settingsSave } from '../actions';

const mapStateToProps = ({settings}, {navigator}) => ({
  url: settings.url,
  back: () => navigator.pop(),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({save: settingsSave}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
