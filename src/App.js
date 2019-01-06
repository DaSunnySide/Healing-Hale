import React, { Component } from 'react';
import './App.css';
import Route from './Routes.json';
import RouteContainer from './Route.js';
import ChoiceButton from './ChoiceButtons.js';
import Mailto from 'react-protected-mailto';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentRoute: Route.Chapters[100],
      route: Route.Chapters[100]
    }
}
    handleClick = (choiceId) => {
      this.setState({
        route : Route.Chapters[choiceId]
      });
      this.refs.Image.scrollIntoView();
    }


  render() {
    const { route = {} } = this.state;
    const { content, image, choices = [] } = route;
    return (
      <div className="App">
        <div className="Image" ref="Image">
          <img src={`/Photos/${image}`} />
        </div>
        <div className="route">
          <p>{content}</p>
        </div>
        <div className="choices">
          {choices.map((choice) => {
            const { text, nextId } = choice;

            return (
              <ChoiceButton
                key={nextId}
                onClick={() => this.handleClick(nextId) }
                buttonText = {text}
              />
            );
          })}
        </div>
        <div className="contact">
          <p>You liking what you see? Does a relaxing getaway sound enticing? Then check out &nbsp; {<a href='https://www.airbnb.com/rooms/29292935?guests=1&adults=1'>Air BnB page</a>} &nbsp; to make a reservation!</p>
        </div>
      </div>
    )
  }
}

export default App;
