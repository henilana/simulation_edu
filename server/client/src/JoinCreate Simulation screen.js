import React from 'react';
import './JoinCreate Simulation screen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function JoinCreate_screen() {
  return (
   <div className="JoinCreate_screen">
    <div>
      <h1>ברוכים הבאים</h1>
      <p>בבקשה התחברו או הרשמו כדי להמשיך<br/> להשתמש באפליקציה שלנו</p>
      <br/>
      <h1>EDUSIM</h1>
    </div>
    <div className="button-container">

    <div class="row">
      <a href="https://github.com/garageil/simulation_edu/pull/7" class="p-3 col-4 btn btn-primary btn-lg">הרשמה</a>
    </div>
     <br/>
    <div class="row">
      <a href="https://github.com/garageil/simulation_edu/pull/7" class="p-3 col-4 btn btn-primary btn-lg">התחברות</a>
    </div>
    </div>
  </div>
  );
}

export default JoinCreate_screen;