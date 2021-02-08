export const createSection = (section) =>
  $.ajax({
    url: "/api/sections",
    method: "POST",
    data: { section },
  });
export const deleteSection = (sectionId) =>
  $.ajax({
    url: `/api/sections/${sectionId}`,
    method: "DELETE",
  });
export const updateSection = (section) =>
  $.ajax({
    url: `/api/sections/${section.id}`,
    method: "PATCH",
    data: { section },
  });
