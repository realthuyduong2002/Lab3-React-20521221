import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './Contact';
import Skill from './Skill';
import Certificate from './Certificate';
import Goal from './Goal';
import Content from './Content';
import AvatarImg from './image/Avatar.jpg'

const Avatar = () => (
  <div className="img-container">
    <img src={AvatarImg} alt="" class="img avatar" />
  </div>
);

const Title = () => (
  <div className="title-container">
    <h1>Phạm Thị Thùy Dương</h1>
    <h2>Tester</h2>
  </div>
);

const Header = () => (
  <header>
    <Avatar />
    <Title />
  </header>
);

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Contact />
    <Skill />
    <Certificate />
    <Goal />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);