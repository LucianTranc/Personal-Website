import React from 'react';
import '../App.css';
import './CoopContent.css';

function CoopContent() {
  return (
    <div className="coop-content-container">
      <div className="intro-section">
        <h1 className="section-header">About this Section</h1>
        <p>
          In this section I will be going in depth on my goals and experiences from each of my Co-op placements to give you
          a better idea of the learning experiences I had during each fo my Co-op jobs. If you would like a general overview of my
          experiences, visit the Experiences page.
        </p>
      </div>
      <div className='job-section'>
        <div className="job-info">
          <div className="company-logo-wrapper">
            <img src="/img/communitech_logo.jpg" alt="Communitech logo" className="company-logo-img"></img>
          </div>
          <div className="job-info-text-wrapper">
            <h1 className="job-title">Web Designer</h1>
            <h2 className="company-title">Communitech</h2>
            <p>August 2020 - December 2020</p>
          </div>
        </div>
        <div className="job-description">
          <h2>About Communitech</h2>
          <p> 
            Communitech is a startup based in Waterloo that was founded in 1997 by a group of entreprenuerus who wanted to help tech-driven companies in Canada succeed.
            My time at Communitech was spent working with Digital Main Street on the Future Proofing Main Street program. You can read more
            about the program as a whole on Digital Main Street's <a href='https://digitalmainstreet.ca/futureproof/'>website</a>. 
          </p>
          <h2>Job Description</h2>
          <p> 
            I worked as a Web Designer in the Transformation Teams stream of the Future Proof program. The transformation teams consisted of
            a Copy Writer, Digital Marketer, UX/UI Designer, Graphic Designer and a Web Designer. My team was assigned businesses in 4-week sprints.
            Our goal was to identify and fix problems with the businesses online presence such as their website or social media. My task was more focused 
            on the client's website. Here is a list of the responsibilities I had:
          </p>
          <ul className="point-form">
            <li>
              Meet with clients to discuss their needs and issue they have with their website
            </li>
            <li>
              Create and test web applications and write website code
            </li>
            <li>
              Work with the UX/UI Designer to create website layouts and designs
            </li>
            <li>
              Work with CMS's like Shopify and Wordpress
            </li>
            <li>
              Fix bugs and other issues with client websites or hosting providers
            </li>
            <li>
              Collaborate with Copy Writers and Graphic Designers on website content
            </li>
          </ul>
          
          <h2>Learning Goals</h2>
          <p> 
            In order to take full advantage of the learning opportunity from each Co-op placement, my Co-op program recommended
            I come up with learning goals going into this job. These were the areas of improvemnt I chose to focus on.
          </p>
          <ul className="point-form">
            <li>
              Communication skills
            </li>
            <li>
              Writing clean and manageable code
            </li>
            <li>
              Time management
            </li>
          </ul>

          <h2>What I Learned</h2>
          <p>
            With this being my first Co-op placement, it was a valuable experience working in a professional environment. Being able to communicate directly with clients and leading the discussions 
            during out initial consultations improved my confidence and my public speaking skills.
            The collaborative aspect of the Transformation Teams was also a great learning experience. Working with a group of individuals that each had different skill sets
            was hard to manage at first, but we soon became more comfortable with each other's strengths and were able to organize the workload more efficiently.
            Also, working in 4-week sprints helped me get accustomed to the pace of working in a professional setting. Having a deadline made me
            realize the importance of setting small short-term goals in order to not get overwhelmed as deadlines approach. 
            Lastly, designing websites and writing code while knowing that the final product will be used by the business owner on a daily
            bases forced me to change my workflow. Over the course of the work term, I became more diligent with details surrounding the websites and became more
            knowledgeable when it came to fixing issues and bugs. I was also given the opportunity to learn more about different CMS's like 
            Wordpress and Shopify. Finding solutions and workarounds through the limitations of each platform was one of the biggest challenges that I faced.
            However, working with the different platforms exposed me to each of their strengths and weaknesses, which allowed me to give better 
            recommendations to clients during our consultations. Working with Shopify also introduced me to Shopify's templating language, Liquid. Learning and applying Liquid to websites was a great way for me to
            expand my knowledge of different web development techniques. 

          </p>

          <h2>Accomplishments</h2>
          <p>
            By the end of my time with Communitech I was fortunate enough to get the opportunity to help 5 different small businesses
            with their websites. The businesses included hearing aid clinics, pet creamtion services, security services, personal artists and a bakery.
            The diversity of the projects broadened my understanding of website design and gave me the opportunity to work with different platforms.
            I am very proud of the work my team did for each of the business. I helped the businesses with website content, SEO, small optimizations and in one case,
            I was able to help a business start their Shopify site from scratch. 
          </p>
          
          <h2>Conclusion</h2>
          <p> 
            Overall I enjoyed my time working at Communitech. Helping small businesses was very fulfilling and it was a great learning experience.
            During my next Co-op placement, I hope to have the opportunity to further improve my public speaking, and get a chance to focus more on my
            techincal skills.
          </p>
          
        </div>
      </div>
    </div>
  );
}
export default CoopContent;
