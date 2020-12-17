export function getInitials(user) {
  const idx_space = user.fullName.lastIndexOf(" ");
  if (idx_space === -1) {
    return user.fullName.slice(0, 2);
  } else {
    return (user.fullName[0] + user.fullName[idx_space + 1]).toUpperCase();
  }
}

export const COLORS = [
  "lightblue",
  "violet",
  "cornflowerblue",
  "tan",
  "lightgreen",
  "orange",
  "coral",
  "mistyrose",
  "gold",
  "greenyellow",
  "lightsalmon",
  "lightseagreen",
  "red",
  "deeppink",
  "aquamarine",
  "khaki",
  "yellow",
  "lightpink",
  "silver",
  "deepskyblue",
];
