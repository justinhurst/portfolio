import React, { Component } from 'react';
import logo from './logo.svg';
import LabBlock from './Labblock';
import './App.css';

class App extends Component {
  state = {
    lab : [
      {
        url : 'http://justinhurst.net/todo-list/',
        name : 'Todo List',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/pokesearch/',
        name : 'Poke Search',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/zerka/',
        name : 'Worker Idle Game',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/water/',
        name : 'Water Conservation',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/void/#',
        name : 'Space Idle Game',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/vidbot/',
        name : '2012 Class Project Vidbot',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/tipcalculator/',
        name : '2012 Class Project Tip Calculator',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/tarot/',
        name : 'Tarot Card Draw',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/spinz/',
        name : 'Spinner Idle Game',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/spacebum/',
        name : 'Space Colony Idle Game',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/snes/',
        name : '2011 Class Project ',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/smd2/',
        name : 'Dungeon Platformer',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/derp/',
        name : 'RPG Tilemap Practice',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/pig/',
        name : 'Pig Dice Game',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/pax/',
        name : '2012 Class Project PAX',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/nomz/',
        name : 'Cupcake Monster',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/ncs/#',
        name : '2011 Class Project Camera Shop',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/droids/',
        name : 'Droid Incremental Game',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        url : 'http://justinhurst.net/apex/',
        name : '2011 Class Project Apex Engineering',
        text : 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ]
  }
  renderLab(){
    return this.state.lab.map((block, index) => {
      return (
          <LabBlock title={block.name}
              key={index}
              url={block.url}
              text={block.text}
          />
      )
    })
   
  }
  render() {
    return (
      <div className="App">
        <header>
          <div className="centerer cf">
            <h1><span id="square">JH</span><span>Justin Hurst</span></h1>
            <ul>
              <li>About</li>
              <li>Skills</li>
              <li>Experience</li>
              <li>Lab</li>
              <li>Contact</li>
            </ul>
          </div>
        </header>
        <div id="intro">
          <div className="centerer">
            <div id="intro-blurb">
              <h2>Lorem ipsum dolor sit amet</h2>
              <h3>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
              <button className="colored">Action</button>
              <button>Another One</button>
            </div>
            <div id="intro-creative">
              <div></div>
            </div>
          </div>
        </div>
        <div id="social-separator">
          <div className="centerer">
            <ul>
              <li><a href="#"><i className="fab fa-twitter"></i> <span>Twitter</span></a></li>
              <li><a href="#"><i className="fab fa-github-alt"></i> <span>GitHub</span></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i> <span>LinkedIn</span></a></li>
              <li><a href="#"><i className="fas fa-code"></i> <span>Repl.it</span></a></li>
              <li><a href="#"><i className="fab fa-codepen"></i> <span>Codepen</span></a></li>
            </ul>
          </div>
        </div>
        <section id="about">
          <div className="centerer">
            <h2>About Me</h2>
            <div>
              <p>I've been making websites since 8th Grade. Geocities, Xanga and Myspace lead me to where I am. Now I use HTML, CSS and Javascript. Most of my work experience is with Shopify stores and Wordpress Blogs. I am learning React and having a great time with it.</p>
              <p>My free time goes to my Family, World of Warcraft, Dungeons and Dragons and learning more about code</p>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="centerer">
            <h2>Skills &amp; Tools</h2>
            <ul>
              <li>
                <div>
                  <i className="fab fa-js-square"></i>
                </div>
                <h3>Javascript</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li>
                <div>
                  <i className="fab fa-html5"></i>
                </div>
                <h3>HTML</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li>
                <div>
                  <i className="fab fa-css3-alt"></i>
                </div>
                <h3>CSS</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li>
                <div>
                  <i className="far fa-gem"></i>
                </div>
                <h3>UX Design</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li>
                <div>
                  <i className="far fa-money-bill-alt"></i>
                </div>
                <h3>Shopify</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li>
                <div>
                  <i className="fab fa-wordpress"></i>
                </div>
                <h3>Wordpress</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
            </ul>
          </div>
        </section>
        <section id="experience">
          <div className="centerer">
            <h2>Work Experience</h2>
            <ul>
              <li>
                <div>
                  <h3>Rowdy Gentleman</h3>
                  <h4>Shopify Store</h4>
                  <p>Developed and maintained landing pages, homepage, collection and product templates, and general site functionality. Implemented a collection filtering feature allowing customers to filter products based on criteria using VueJS.</p>
                  <a className="button colored">View</a>
                </div>
              </li>
              <li>
                <div>
                  <h3>Man Outfitters</h3>
                  <h4>Shopify Store</h4>
                  <p>Developed and maintained landing pages, homepage, collection and product templates, and general site functionality. Implemented a collection filtering feature allowing customers to filter products based on criteria using VueJS</p>
                  <a className="button colored">View</a>
                </div>
              </li>
              <li>
                <div>
                  <h3>Grandex Media</h3>
                  <h4>Four Wordpress Sites</h4>
                  <p>Updated and developed main site features and layouts for four wordpress sites.</p>
                  <a className="button colored">View</a>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section id="lab">
          <div className="centerer">
            <h2>Code Lab</h2>
            <ul>
              { this.renderLab() }
            </ul>
          </div>
        </section>
        <footer>
          <div className="centerer">
            <h1>Justin Hurst</h1>
            <h2>Web Developer Austin Texas</h2>
            <h3><a href="#">Resume</a></h3>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
