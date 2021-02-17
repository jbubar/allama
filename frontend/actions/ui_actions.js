export const OPEN_PROJECT_MODAL = "OPEN_PROJECT_MODAL";
export const CLOSE_PROJECT_MODAL = "CLOSE_PROJECT_MODAL";
export const OPEN_SETTINGS_MODAL = "OPEN_SETTINGS_MODAL";
export const CLOSE_SETTINGS_MODAL = "CLOSE_SETTINGS_MODAL";

export const openProjectModal = projectId => ({
    type: OPEN_PROJECT_MODAL,
    projectId
})
export const closeProjectModal = (projectId) => ({
  type: CLOSE_PROJECT_MODAL,
  projectId
});
export const openSettingsModal = () => ({
    type: OPEN_SETTINGS_MODAL
})
export const closeSettingsModal = () => ({
  type: CLOSE_SETTINGS_MODAL
});