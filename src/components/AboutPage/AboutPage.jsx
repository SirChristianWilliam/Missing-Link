import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="aboutContainer ">
      <div className='whitebox'>
      <h1> About </h1>
      <div>
        <p>
          Thank you Prime Digital Academy for teaching me 
          the tools needed to create this project. Specifically, 
          thank you Edan- your methods of teaching are perfect and 
          you always answer any questions I have. Thanks to my 
          cohort Ramirez, who are always willing to share their 
          knowledge- I’ve learned so much from you all! Thank you 
          to those in my life who I’m close to who understand my 
          need to be selfish with my time while I’m attending this 
          program. A big thank you to anyone who’s helped me 
          even though I may not have realized it at the time, 
          you’re amazing. 
        </p>
        <p>
          Technologies used: 
          Javascript, React, 
          Redux, Postico, 
          postql, Postman, 
          Figma, Vscode, 
          HTML, CSS, AWS. 
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
