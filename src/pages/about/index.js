import React from 'react';
import '../../styles/about.css';

function About(){
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <div className="about-section">
        <h1 className="">About-me</h1>
        <p>Hello guys,</p>
        <p>If you're here, you are interested on the creator of this web site, my name is Bruno,</p>
        <p>and it is a pleasure to present my simple website to you, it was created for me</p>
        <p>to learn more about react js, components, programming and javascript, and was</p>
        <p>made with much love, because I love animes and japanese culture. this website</p>
        <p>was only possible because of 
          <a href="https://medium.com/@mrocha98/crie-seu-primeiro-projeto-com-reactjs-16e340dfde1a">@mrocha98</a>, 
        thank you, for making a very,</p>
        <p>interesting tutorial and expand my knowledge.</p>
        <ul className="mt-3">
          <li className="badge badge-danger"><i class="devicon-github-original"></i> <a className="social-link text-white" href="https://github.com/psbrunosouza">psbrunosouza</a></li>
          <li className="badge badge-danger ml-2"><i class="devicon-linkedin-plain"></i> <a className="social-link text-white" href="https://www.linkedin.com/in/psbrunosouza/">psbrunosouza</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;