const Poll = ({ author, timestamp }) => {
  return (
    <div>
      <h3>{author}</h3>
      <p>{timestamp}</p>

      <button>Show</button>
    </div>
  );
};

export default Poll;
