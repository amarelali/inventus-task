export const formatDate = (date: Date) => {
  return `${date.toLocaleDateString("en-US", {
    weekday: "short",
  })}, ${date.toLocaleDateString("en-US", {
    month: "long",
  })} ${date.getUTCDate()}`;
};
