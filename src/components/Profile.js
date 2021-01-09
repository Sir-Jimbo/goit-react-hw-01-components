import UserMarkup from './UserMarkup';
import PropTypes from 'prop-types';

function Profile({ items }) {
  return (
    <ul>
      {items.map(user => (
        <li key={user.tag}>
          <UserMarkup
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
          />
        </li>
      ))}
    </ul>
  );
}

Profile.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
    }),
  ),
};

export default Profile;
