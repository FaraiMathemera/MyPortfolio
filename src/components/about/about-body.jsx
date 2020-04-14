import React from 'react'

import Icon from '../partials/icon.jsx'

import linebreakToBr from '../../helpers/linebreak-to-br'

import lang from 'lang'

import Education from '../../components/Resume/Education';
import Experience from '../../components/Resume/Experience';
import Volunteer from '../../components/Resume/Volunteer';
import References from '../../components/Resume/References';

import volunteers from '../../data/resume/volunteers';
import degrees from '../../data/resume/degrees';
import positions from '../../data/resume/positions';

const sections = [
  'Education',
  'Experience',
  'Volunteer',
  'References',
];

const langContext = lang.about

export default class AboutBody extends React.PureComponent {
  render () {
    const {about} = this.props.profile
    return (
      <div className='pt-content-card__body pt-content-card__body__about flex flex-full-center'>
        <div className='pt-content-card__body__about__presentation flex flex-dc flex-full-center'>

          <Education data={degrees} />
          <Experience data={positions} />
          <References />
        </div>
      </div>
    )
  }
}
