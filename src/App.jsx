import Profile from './components/Profile';
import user from './user.json';

export default function App() {
  return (
    <div>
      <Profile items={user} />
    </div>
  );
}
