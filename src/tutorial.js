import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css'

// Test component: Trying out HTML/JSX
function Test() {
  return <div>
  <h1> React Tutorial</h1>
  Hello <strong>World!</strong>
  <div>Unordered List of Web Technologies</div>
  <ul className='web_list'>
    <li><a href="/">Tutorial</a></li>
    <li><a href="/state">State</a></li>
    <li><a href="/api">Querying APIs</a></li>
  </ul>
  Adding 5 + 10: {5+10}
</div>;
}

// Hi component: Takes in a name and says Hi
function Hi(props) {
  return <div>
    <h3>Hi {props.name}</h3>
  </div>;
}

// MediaCard component: Takes in title, body, and link to image and displays them.
const MediaCard = ({title, body, imageUrl}) => {
  return <div className='mediaCard'>
    <h3>Media Card: {title}</h3>
    <p>{body}</p>
    <img src={imageUrl} alt={'This is is a picture of a ' + title} width="300px"/>
  </div>
}

// Gate Component: Testing conditional logic in JSX
const Gate = ({isOpen}) => {
  return <div>
    {isOpen === true ? "Gate is open!" : "Gate is closed!"}
  </div>
}

// Calling all the above components
const TutorialContents = () => {
  return <div>
    <Test/>
    <Hi name='Malcolm'/>
    <MediaCard title='Lion' body={'This is a Nambian Lion'} imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg' />    
    <br/>
    <Gate isOpen={false}/>
    <Gate isOpen={true}/>
  </div>
}

// Tutorial Component is exported with a defined path of /tutorial
export const Tutorial = () => {
  return <div>
      <Switch>
        <Route path="/" component={TutorialContents} exact />    
      </Switch> 
  </div>
}