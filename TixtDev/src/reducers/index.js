import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import ActiveUserReducer from './reducer_activeUsers'
import VoituresReducer from './reducer_voitures'
import ActiveVoiture from './reducer_activeVoiture'


const rootReducer = combineReducers({
  users : UsersReducer,
  voitures : VoituresReducer,
  activeUser : ActiveUserReducer,
  activeVoiture : ActiveVoiture
});

export default rootReducer;
