import "./styles.css";
import { Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
export default function App() {
  return (
    <div>
      <Route path="/">
          <AllMeetupsPage></AllMeetupsPage>
          
      </Route>
    </div>
  );
}
