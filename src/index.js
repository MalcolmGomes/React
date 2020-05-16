import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

// function Hi(props) {
//   return <div>
//     Hi {props.name}
//   </div>;
// }

const MediaCard = ({title, body, imageUrl}) => {
  return <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={imageUrl} alt={body} width="300px"/>
  </div>
}

// Test Function: Trying out HTML/JSX
// function Test() {
//   return <div>
//   <h1> React Tutorial</h1>
//   Hello <strong>World!</strong>
//   <div>Unordered List of Web Technologies</div>
//   <ul className='web_list'>
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>Javascript</li>
//   </ul>
//   {5+10}
// </div>;
// }

ReactDOM.render(<MediaCard title='Lion' body='This is a Nambian Lion' imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg' />, document.querySelector('#root'));