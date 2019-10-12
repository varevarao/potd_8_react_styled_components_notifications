import React from 'react';
import { NotificationLine } from '../components/notification';

function App() {
  return (
    <>
      <NotificationLine
        image="/test.jpg"
        name="Varshneya Rao"
        description="did something awesome"
        time="2 hours ago"
      />
      <NotificationLine
        image="/logo192.png"
        name="Varshneya Rao"
        description="did something not so awesome"
        time="1 hour ago"
      />
    </>
  );
}

export default App;
