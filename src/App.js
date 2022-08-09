import "./styles.css";
import { Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
export default function App() {
  return (
    <div>
      <Route path="/">
          <AllMeetupsPage></AllMeetupsPage>
      </Route>
      <Route path='/new-meetup'>
          <NewMeetup></NewMeetup>
      </Route>
    </div>
  );
}
