import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ToDoList from './components/ToDoList';
import {Provider} from 'react-redux';
import store from './store';
import ItemModal from './components/itemModal';
import {Container} from 'reactstrap';
import {loadUser} from './actions/authActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ToDoList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
