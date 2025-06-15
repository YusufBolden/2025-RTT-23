import UserProfileCard from './UserProfileCard';

function UserList() {
  const users = [
    { id: 1, name: 'Yusuf', email: 'yusuf@test.com' },
    { id: 2, name: 'Alex', email: 'abe@test.com' },
    { id: 3, name: 'Colton', email: 'colton@test.com' },
  ];

  return (
    <div>
      <h1>User Profiles</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserProfileCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
