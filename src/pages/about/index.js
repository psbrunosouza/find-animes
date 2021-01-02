import React from 'react';
import '../../styles/about-section.css';

function About(){
  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <div className="about-section ">
        <h1 className="">About-me</h1>
        <p>Hello guys,</p>
        <p>If you're here, are interested on the creator of this web site, then my name is Bruno,</p>
        <p>and was a pleasure present my simple website to you, it was created to</p>
        <p>learn more about react js, components, programming and javascript, and was</p>
        <p>maked with much love, because i love animes and japanese culture. </p>
        <p>this website was only possible because the tutorial of <a href="https://medium.com/@mrocha98/crie-seu-primeiro-projeto-com-reactjs-16e340dfde1a">@mrocha98</a>, thank you,</p>
        <p>to make a tutorial very, very, interesting and expand my knowledge.</p>
        <ul className="mt-3">
          <li className="badge badge-danger"><i data-feather="github"></i><a className="text-white" href="https://github.com/psbrunosouza">psbrunosouza</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;