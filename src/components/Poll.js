const Poll = ({ username, date }) => {
  return (
    <div>
      <h3>{username}</h3>
      <p>{date}</p>
      <hr />
      <button>Show</button>
    </div>
  );
};

export default Poll;
