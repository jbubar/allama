import * as APISectionUtil from "../util/section_api_util";

export const RECEIVE_SECTION = "RECEIVE_SECTION";
export const DELETE_SECTION = "DELETE_SECTION";
export const RECEIVE_SECTION_ERRORS = "RECEIVE_SECTION_ERRORS";

const receiveSection = (section) => ({
  type: RECEIVE_SECTION,
  section,
});

const deleteSection = (sectionId) => ({
  type: DELETE_SECTION,
  sectionId,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SECTION_ERRORS,
  errors,
});

export const createSection = (section) => (dispatch) => {
  return APISectionUtil.createSection(section).then(
    (section) => dispatch(receiveSection(section)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateSection = (section) => (dispatch) => {
  return APISectionUtil.updateSection(section).then(
    (section) => dispatch(receiveSection(section)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const removeSection = (sectionId) => (dispatch) => {
  return APISectionUtil.deleteSection(sectionId).then(() =>
    dispatch(deleteSection(sectionId))
  );
};
