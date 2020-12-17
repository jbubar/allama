export function getInitials(user) {
  const idx_space = user.full_name.lastIndexOf(" ");
  if (idx_space === -1) {
    return user.full_name.slice(0, 2);
  } else {
    return (user.full_name[0] + user.full_name[idx_space + 1]).toUpperCase();
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
