import { useState } from 'react'
import Nav from './Nav'
import Project from './Project'
import Footer from './Footer'
import Experience from './Experience'
import './App.css'

const Experiences = [
  {
    position: "Radio Frequency Intern",
    period: "April 2024 - August 2024",
    company: "UL solutions",
    roles: [
      "Performed electromagnetic compatibility (EMC) tests on devices using an EMI test receiver to detect electromagnetic emissions and ensure all emissions conform to US standards.",
      "RanPython commands and scripts to configure antennas of test devices to transmit at specific frequencies, bands, and power. I then used the EMI test receiver to collect data, analyze results, and generate reports.",
      "Conducted regular checks on test equipment by utilizing measurements obtained from horn and hybrid antennas and comparing these measurements to a baseline, which verifies the calibration, integrity, and performance of test equipment."
    ]
  }
]

function App() {

  const [collapsed, setCollapsed] = useState(null)
  const handleClick = (index) => {
    if (collapsed === index) {
      setCollapsed(null)
    } else {
      setCollapsed(index)
    }
  }

  return (
    <div className="App">
      <Nav />
      <section className="container hero-section" id="home">
        <div className="text-box">
          <p>Hi there,</p>
          <h1>I'm Ekene Azubuko</h1>
          <h2>I am into Full Stack Web Development</h2>
          <p>I make websites and write a lot of code. Some run while some don't but you get the idea.</p>
          <a href="#contact" className="cta btn btn-outline">Contact me</a>
        </div>
        <div className="hero-image">
          <img src="static/images/bitmoji.jpg"></img>
        </div>
      </section>
      <section className="about-me" id="about">
        <h1>About Me</h1>
        <div className="accordion-and-bio">
          <div className="bio">
            <h1>Bio</h1>
            <p>I am a Nigerian Software developer passionate about building user-friendly software that solves problems facing me and my immediate community. 
                I love to write software that complements day-to-day activities like studying and self-organization. I  am currently a computer science student at Minerva University. 
                I love playing video games, dressing up for events, and building stuff. I am always looking forward to working on a new project.
              </p>
          </div>
          <div className="experience-container">
            <h3>Experience</h3>
            {Experiences.map((experience, index) => (
              <div className="accordion-container" onClick={() => handleClick(index)}>
              <Experience
                isCollapsed={collapsed === index}
                key={index}
                position={experience.position}
                period={experience.period}
                company={experience.company}
                roles={experience.roles}
              />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="project-section" id="projects">
        <h1>My Growth</h1>
        <div class="timeline">
          <div class="timeline-empty"></div>
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
          <Project
            name="AFII Website"
            description="I was done with my sidequests and decide to learn more web devlopment stuff from CodePath. I built this website for some friends using ReactJS and a PostgreSQL database. My favorite features on this project are the quiz which filters the database, a search suggestion system with realtime filtering and the react routing used on some pages." 
            image="static/images/afii_logo.png"
            link="https://afii.us/"
          />
          <Project
            name="Ping Pong Game"
            description="Working with python to build the ML model was fun so I wanted to try build other things with python. This time I built a ping pong game using the turtle module. This game was built to be played for long periods without getting bored. It is played using a terminal interface."
            link="https://github.com/Ekene-Azubuko/Ping-pong"
            image="static/images/pong.jpg"
          />
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>
          <div class="timeline-empty"></div>
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
          <Project
            name="ML Sentiment Analysis"
            description="In light of the AI boom, I decided to build a sentiment analysis model using machine learning. The model was built using an Amazon dataset containing a million reviews on groceries and gourmet foods. It was built using the sklearn python library. It is accessed using a terminal interface. Getting this model to work to some degree of accuracy was very satisfying. It was also the first major project I built using python."
            link="https://github.com/Ekene-Azubuko/ML-sentiment-Analysis"
            image="static/images/sentiment.jpg"
          />
          <Project
            name="Memory Mosaic"
            description="Very similar to safelock, this is a flashcard app that allows user authentication through the passport. It also saves notes on a Mongo database so users can review them anytime."
            link="https://memory-mosaic-dynamic.vercel.app/"
            image="static/images/puzzle.png"
          />
           <div class="timeline-middle">
               <div class="timeline-circle"></div>
           </div>
           <div class="timeline-empty"></div>
           <div class="timeline-empty"></div>
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
          <Project
            name="Safelock"
            description="Decided to up my backend game by building an authentication system. I used NodeJS and Express to build the backend and MongoDB as the database. I also used Passport for authentication and bcrypt for password hashing."
            link="https://safelock-9bc2ec112a2a.herokuapp.com/"
            image="static/images/padlock.jpg"
          />
          <Project
            name="Todo List"
            description="I built this when I started learning Embedded Javascript (EJS) and NodeJS. It is also one of my first projects to have databse implementation, MongoDB. This web app can be used to store itineraries on any given day. Each to-do activity can be deleted with a single click."
            link="https://dry-river-61359-786f7a335101.herokuapp.com/"
            image="static/images/todolist.png"
          />
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>
          <div class="timeline-empty"></div>
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
          <Project
            name="Bootstrap Website"
            description="This was my first project using Bootstrap. I built a website that showcases the features of Bootstrap. I used the grid system to create a responsive layout and the navbar component to create a navigation bar. I built this following guidelines from a Udemy tutorial"
            link="https://ekene-azubuko.github.io/bootstrap-website/"
            image="https://i.pinimg.com/236x/be/d3/0d/bed30ddfa5d434e827c775ac9a3b0d38.jpg"
          />
          <Project
            name="Notification Website"
            description="Still in my Javasrcipt DOM manipulation era, I built this project that displays notifications. The notifications are marked as read when the user clicks on it or clicks on the 'Mark all as read option'."
            link="https://ekene-azubuko.github.io/Notification-page/"
            image="https://i.pinimg.com/236x/2f/40/27/2f40277250d5c1a6c993caaa3ae4278f.jpg"
          />
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>
          <div class="timeline-empty"></div>
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
          <Project
            name="Interactive Rating"
            description="I built this project when I was learning how to use the DOM to manipulate elements on a webpage. I used the DOM to create a rating system that allows users to rate a product from 1 to 5 stars. The rating is then displayed when the submit button is clicked."
            link="https://ekene-azubuko.github.io/interactive-ratings/"
            image="https://i.pinimg.com/236x/b6/44/c1/b644c1fee7e91ace9606e276e78c4254.jpg"
          />
          <Project
            name="Smilebook"
            description="My very first project. I'd just found out I could host static web pages on GitHub so I copied and pasted my code in a repo and deployed the page. Watching it go live was so cool. "
            link="https://ekene-azubuko.github.io/smilebook/"
            image="https://i.pinimg.com/236x/03/70/a3/0370a33c1b097d586e890b5d22a53ee8.jpg"
          />
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
          <div class="timeline-empty"></div>
          <div class="timeline-empty"></div>
          <div class="timeline-middle">
              <div class="timeline-circle"></div>
          </div>
       </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-text">
          <h1>Contact</h1>
          <p>Send me a message or contact me using the links below</p>
        </div>
        <div className="contacts">
          <div className="social-container">
            <a href="https://github.com/Ekene-Azubuko" target="_blank" className="link" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
              <p>Github</p>
            </a>
            <a href="http://www.linkedin.com/in/ekene-azubuko-b4a53b288" target="_blank" className="link" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
              <p>LinkedIn</p>
            </a>
            <a href="https://www.instagram.com/k__e__n__z__o.__/" target="_blank" className="link" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
              <p>Instagram</p>
            </a>
            <a href="mailto:ekeneazubuko2935@gmail.com" target="_blank" className="link" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
              <p>Email</p>
            </a>
          </div>
          {/* <div className="form-container">
            <form>
              <div className="name-and-email">
                <div className="form-group input-box">
                  <input type="text" id="name" name="name" placeholder="Name" className="form-control undefined" required></input>
                </div>
                <div className="form-group input-box"></div>
              </div>
              <div className="form-group textarea">
                <textarea id="message" name="message" placeholder="Message" className="form-control undefined" required></textarea>
              </div>
              <div className="button-container">
                <button type="submit" className="cta btn btn-primary">Submit</button>
              </div>
            </form>
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
   )
}

export default App
