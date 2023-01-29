export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${
    minutes < 10 ? '0' + minutes : minutes
  } | ${month}/${day}/${year}`;
};
