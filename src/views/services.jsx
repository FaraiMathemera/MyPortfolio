import React from 'react';
import Nav from '../components/partials/nav.jsx';
import AboutBody from './../components/about/about-body.jsx';

import lang from 'lang';

const langContext = lang.home;

export default class Home extends React.PureComponent {
  componentDidMount() {
  window.mediumWidget();
}
  render() {
    return (
      <div className="pt-content-card__work-container flex flex-dc">
        <Nav icon="services" title={langContext.services} />
        <div className='pt-content-card__body'>
        <div id="medium-widget"></div>
        </div>
        //<script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js"></script>
      </div>

    );
  }
}
