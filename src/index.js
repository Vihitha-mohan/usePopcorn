import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

function Test()
{
  const [movieRating,setmovieRating]=useState(0);
return(
  <div>
  <StarRating onsetRating={setmovieRating}/>
 <p>This movies has  {movieRating} ratings</p>
</div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    {/* <StarRating maxRating={5} messages={['Terrible','Bad','Okay','Good','Amazing']}/>
    <StarRating size={24} color="red" className="test" defaultRating={3}/>
<Test /> */}
 <App />
  </React.StrictMode>
);
