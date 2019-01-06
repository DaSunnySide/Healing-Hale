import React from 'react';
import Routes from './Routes.json';

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeIntro: { },
      route: [],
      loaded: false
    };
  }

  fetchStory = () => {
    this.setState({
      story: '',
      loaded: true,
    })
  }

  componentDidMount() {
    this.fetchStory();
  }

  handleChangeChapter(chapterId) {
    const { route = [] } = this.state;
    this.setState({
      route: route.concat(chapterId)
    });
  }

  render() {
    const {
      routeIntro = {},
      route = [],
      loaded = false
    } = this.state;

  let currentChapter = {};

  if(route.length) {
    const { chapters } = routeIntro;

    const currentChapterId = route[route.length-1];
    currentChapter = chapters[currentChapterId];
  }

  return (
    <div>
      {currentChapter.content}
    </div>
  );
}

}


export default Route;
