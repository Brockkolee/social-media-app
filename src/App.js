// App.js
import React from 'react';
import PostList from './components/PostList';
import { auth } from './firebase';
import styled from 'styled-components';
import LoginPage from './page/LoginPage';
import ProfilePage from './page/ProfilePage';
import FeedProvider from './context/FeedContext';

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
`;
// App.js

// ... (import statements)

const App = () => {
  const [user, setUser] = React.useState(null);
  const [username, setUsername] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false); // Set loading to false when user data is available

      // Set the username if the user is available
      if (user) {
        setUsername(user.displayName);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <FeedProvider>
      <AppContainer>
        {user ? (
          <>
            <ProfilePage username={username} isLoading={!user} />
            <PostList posts={[]} />
          </>
        ) : (
          <>
            <LoginPage onUsernameChange={setUsername} />
          </>
        )}
      </AppContainer>
    </FeedProvider>
  );
};

export default App;
