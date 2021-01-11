import ProfileList from './components/Profile/ProfileList';
import Statistics from './components/Statistics';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';

export default function App() {
  return (
    <div>
      <ProfileList items={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
    </div>
  );
}
