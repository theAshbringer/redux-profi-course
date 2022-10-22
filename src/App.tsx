import React, { useEffect } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';

// приложение без RTK query
// function App() {
//   const dispatch = useAppDispatch();
//   const { users, isLoading, error } = useAppSelector(state => state.userReducer)

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [])

//   return (
//     <div className="App">
//       {isLoading && <h1>Идет загрузка...</h1>}
//       {error ?? <h1>{error}</h1>}
//       {users && <div>
//         {users.map(user =>
//           <div>{user.name}</div>
//         )}
//       </div>}
//     </div>
//   );
// }

// export default App;

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  return (
    <div className="App">
      <PostContainer />
    </div>
  );
}

export default App;
