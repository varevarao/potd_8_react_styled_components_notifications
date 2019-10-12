import React, { useEffect, useState } from 'react';
import { NotificationLine } from '../components/notification';
import { fetchNotifications } from '../services/notifications';
import { timeAgo } from '../utils/datetime';

function App() {
  const [notifications, setNotifications] = useState([]);

  // Fetch data on each load, then do not fetch again
  useEffect(() => {
    async function doFetch() {
      const result = await fetchNotifications();
      setNotifications(result.data);
    }

    doFetch();
  }, []);

  return (
    <>
      {notifications.map((notif, index) => (
        <NotificationLine
          key={`notif-line-${index}`}
          image={notif.image}
          name={notif.name}
          description={notif.description}
          time={timeAgo(notif.time)}
        />
      ))}
    </>
  );
}

export default App;
