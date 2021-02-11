import { connect } from "react-redux";
import ProjectPage from "./project_page";
import { createSection } from "../../actions/section_actions";
import { selectProjectSections } from "../../reducers/selectors";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    return {
      sections: selectProjectSections(state, projectId),
      projectId: projectId,
    }
};
const mapDispatchToProps = (dispatch) => ({
  createSection: (section) => dispatch(createSection(section))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectPage));
