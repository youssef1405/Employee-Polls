import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const { data } = useSelector((state) => state.users);
  console.log(data);
  console.log(Object.values(data));
  return (
    <div>
      {Object.values(data).map((user) => {
        return (
          <div key={user.id}>
            {user.name} - {user.id} - {Object.keys(user.answers).length} -
            {user.questions.length}
          </div>
        );
      })}
    </div>
  );
};

export default Leaderboard;
