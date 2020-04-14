import React from 'react';

import Nav from './../components/partials/nav.jsx';
import AboutBody from './../components/about/about-body.jsx';
import { profile } from '../config.js';

import lang from 'lang';

const langContext = lang.home;


import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Volunteer from '../components/Resume/Volunteer';
import References from '../components/Resume/References';

import volunteers from '../data/resume/volunteers';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const sections = [
  'Education',
  'Experience',
  'Volunteer',
  'References',
];

export default class About extends React.PureComponent {
  render() {
    return (
      <div className="pt-content-card__about-container flex flex-dc">
        <Nav icon="account" title={langContext.about} />
        <AboutBody profile={profile} />
      </div>
    );
  }
}
