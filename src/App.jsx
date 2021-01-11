import ProfileList from './components/Profile/ProfileList';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistical-data.json';
import friend from './components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <ProfileList items={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
