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

export function sortUsers(users) {
  return users.sort((user1, user2) => {
    let user1Total = user1.questions.length + Object.keys(user1.answers).length;
    let user2Total = user2.questions.length + Object.keys(user2.answers).length;
    return user1Total < user2Total ? 1 : user1Total > user2Total ? -1 : 0;
  });
}

export function sortPolls(polls) {
  return polls.sort((poll1, poll2) => {
    return poll1.timestamp < poll2.timestamp
      ? 1
      : poll1.timestamp > poll2.timestamp
      ? -1
      : 0;
  });
}
