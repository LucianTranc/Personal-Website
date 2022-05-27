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
          a better idea of what I learned during each of my Co-op jobs. If you would like a general overview of my
          experiences, visit the Experiences page.
        </p>
      </div>
      <div className='job-section'>
        <div className="job-info">
          <div className="company-logo-wrapper">
            <img src="/img/magnet_logo.png" alt="Magnet Forensics logo" className="company-logo-img"></img>
          </div>
          <div className="job-info-text-wrapper">
            <h1 className="job-title">Software Developer Co-op</h1>
            <h2 className="company-title">Magnet Forensics</h2>
            <p>January 2022 - April 2022</p>
          </div>
        </div>
        <div className="job-description">
          <h2>About Magnet Forensics</h2>
          <p> 
            Magnet Forensics is a software company that makes digital forensics tools. Founded in 2011 by Jad Saliba, they have been recognized
            as one of the fastest growing companies in Canada by Canadian Business’s Growth 500 List in 2016, 2017 and 2019. Their first product,
            IEF (Internet Evidence Finder), was very popular tool and was used globally by many private investigators and police forces. Since then,
            they started fresh with a new product called AXIOM with which they have been leading the digital forensics space for many years now.
          </p>
          <h2>Job Description/Accomplishments</h2>
          <p> 
            I worked on the Computer Artifacts team, which was a team of 6 developers that focused on adding and maintaining the computer artifacts side
            of AXIOM. I realize that what “computer artifacts” means might not be so clear so let me explain. The first stage of the AXIOM workflow is giving
            the software data to parse through in the form of a disk image or a physical hard drive. AXIOM then parses through the data, spitting out any
            information it finds. The computer artifacts team was the team that did the parsing of the data. The way we organized information was by grouping
            them by where they originated on the disk. For example, discord chat logs, skype, etc. We called these services “artifacts” hence computer artifacts. 
            <br/><br/>
            On the computer artifacts team, we used C# and .NET for development, and various in-house tools for testing. The testing was an unexpectedly
            interesting part of the whole experience. Since we were dealing with digital forensics, we couldn’t afford to merge any code that caused any
            failures or small issues that lead to losing even 1 piece of evidence. So, every time code was merged, we ran a large test case against it and
            compared the results to the previous build. If there were changes in the outputs, you would need to verify that those changes are expected and
            perform debriefs with a test specialist.
            <br/><br/>
            I worked on a variety of interesting things at Magnet, but the most notable was my contribution to the AXIOM 6.0 release. In this release,
            we were launching a new service that specialized in accessing cloud platforms. This service was using usernames and passwords taken from mobile
            and computer artifacts. There was an issue where a lot of useless values were being passed through to this service and they were coming from values
            extracted from Apple Keychain. I was tasked with investigating why this was. After a 3 weeklong investigation, I presented a plan of action to the
            product managers that was approved. My plan involved a modular parsing system that allowed different parsers to be written based on the service
            provider for each entry stored in the Apple Keychain. Since we were in a time crunch, this solution was convenient since multiple developers could
            work on different parsers in parallel. We were ultimately successful in parsing all the values by the time AXIOM 6.0 was released. It was a very
            powerful team effort where multiple developers from different teams came to help. I am very thankful for the responsibility my team entrusted in
            me and the support they provided throughout.  
            <br/>
          </p>

          <h2>Learning Goals</h2>
          <h3>Goal 1: Communication with Product Owners</h3>
          <p> 
            This is a goal that I took on partly through my work term. I noticed that communication with product managers was an aspect of software development that
            I needed to improve on. I had the privilege of working on production level feature at Magnet and with that, came some added responsibility of communicating
            my progress on tasks with product managers. With this being a hard learning goal to measure progress, I had to think of ways to ensure I was making progress.
            What I ended up doing was forcing myself to give updates on the status of my tickets whenever something noteworthy came up. I set a goal completion date,
            and if I was starting to think I couldn’t reach that goal, I would communicate that with my product manager and give reasoning to why.  
          </p>
          <h3>Goal 2: Thin slicing</h3>
          <p> 
            This was a learning goal that my supervisor recommended I take because it was very relevant to the work we were doing at Magnet. On the Computer Artifacts team,
            there aren’t always clearly defined tasks. Sometimes I was assigned exploratory tickets called “spikes” where I would take 3 or 4 days to research possible ways
            to tackle a problem. After the research was complete, the problem would be broken down into tasks. The issue with this was that you could quickly fall down a rabbit
            hole of research to no end. Or alternatively, the research that was done for a task you were doing might not have dug too deep into implementation details, revealing
            a much deeper problem. This was something that the developers on my team were very good at balancing, but for me it took some time getting used to it. To tackle this
            goal, my supervisor gave me a time limit of 3 days on spikes, and on software features, he would encourage me to break off any tasks I was doing whenever it seemed
            logical. This was a nuanced practice and I noticed getting better at it with time. I emphasized vertical thin slicing; delivering users any small benefit would be accepted. 
          </p>
          <h3>Goal 3:	Scrum/Agile </h3>
          <p> 
            This was a goal that I was determined to improve on from the start of the term. I had no previous professional experience in scrum/agile, and I was excited to learn
            more about it and put it to use. My team used Kanban so there were no typical “Sprints” where work would be assigned over a two-week period and reviewed at the end.
            Instead, we would continually refine tickets from the backlog every Monday and developers would pick them up as they needed work. Regarding my goal, I can say that
            I am more comfortable with agile practices now and the tasks I set for myself during the terms helped with this. The big one was forcing myself to participate in every
            retrospective meeting we had. I made myself include at least one like, dislike and wonder to our team slide show that we used during our retros. This helped me reflect
            on our practices as a team, make suggestions, and see if implementing those suggestions in following weeks yielded improvements, which is truly in the spirit of agile workflows.
          </p>
          
          <h2>Conclusion</h2>
          <p> 
            I am very thankful for how supportive Magnet Forensics has been to my professional development. I learned a lot about C# development, but even more so about problem solving and teamwork.
          </p>
          
        </div>
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
            Established in 1997, Communitech is a Waterloo-based startup business that was founded by a group of entrepreneurs who wanted 
            to help tech-driven companies in Canada succeed. My time at Communitech was spent working with Digital Main Street in the Future 
            Proofing Main Street program. You can read more about the program as a whole on Digital Main Street's website.
          </p>
          <h2>Job Description</h2>
          <p> 
            I worked as a Web Designer in the Transformation Teams stream of the Future Proof program. Each transformation team consisted 
            of a Copywriter, Digital Marketer, UX/UI Designer, Graphic Designer and a Web Designer. My team was assigned businesses in 4-week 
            sprints. Our goal was to identify and fix problems with the business’s online presence such as their website or social media. My 
            task was more focused on the client's website.
            <br/><br/>
            Here is a list of the responsibilities I had:
          </p>
          <ul className="point-form">
            <li>
              Met with clients to discuss their needs and the issues they had with their website  
            </li>
            <li>
              Created and tested web applications and wrote website code
            </li>
            <li>
              Worked with the UX/UI Designer to create website layouts and designs
            </li>
            <li>
              Worked with CMS's like Shopify and WordPress
            </li>
            <li>
              Fixed bugs and other issues in the client websites or hosting providers
            </li>
            <li>
              Collaborated with Copywriters and Graphic Designers on website content
            </li>
          </ul>

          <h2>What I Learned</h2>
          <p>
            With this being my first co-op placement, it was a valuable experience working in a professional environment. Being able to communicate 
            directly with clients and leading the discussions during our initial consultations improved my confidence and public speaking skills. 
            The collaborative aspect of the Transformation Teams was also a great learning experience. Working in a team where each member had different 
            skill sets was a little unorganized at first, but we soon became more comfortable with each other's strengths and got better at distributing 
            the workload. Additionally, working in 4-week sprints helped me get accustomed to the pace of working in a professional setting. The structure 
            of having daily check-ins with the team and weekly meetings with our supervisor allowed me to improve at setting short term goals. Furthermore, 
            designing websites and writing code while knowing that the final product will be used by the business owner on a daily basis motivated me to 
            improve my workflow. Over the course of the work term, I became more diligent about small details and I became more knowledgeable when it 
            came to fixing issues and bugs. I was also given the opportunity to learn more about different CMS platforms like WordPress and Shopify. 
            Finding solutions and workarounds through the limitations of each platform was one of the biggest challenges that I faced. However, working 
            with the different platforms exposed me to each of their strengths and weaknesses, which allowed me to give better recommendations to clients 
            during our consultations. Lastly, working with Shopify introduced me to Shopify's templating language, Liquid. Learning and applying Liquid to 
            websites was a great way for me to expand my knowledge of different web development techniques. Overall, the experiences made me more confident, 
            diligent, and gave me great web development experience.
          </p>

          <h2>Learning Goals</h2>
          <p> 
            In order to take full advantage of the learning opportunity from each co-op placement, my co-op program recommended I come up with learning goals 
            going into each job. These are my reflections on the areas of improvement I chose to focus on.
          </p>
          <h3>Goal 1: Work on communication skills</h3>
          <p> 
            Working in a team environment allowed me to collaborate with people that work in different disciplines, and possessed different skills. This challenged 
            and helped improve my communication skills. Over the course of the term, I improved at communicating the platform's limitations to my team, which gave 
            us a better idea of what is possible to complete given our deadlines. This helped our team become better at creating realistic plans to help our clients. 
            Additionally, we had several consultations with different businesses throughout the term. The first couple of which the conversation was led by my team 
            and I mostly just chimed in with questions about their website. However, I became more comfortable with the consultations and I asked if I could be the 
            one to lead the conversations with the businesses. Through the 4 consultations that I led, I improved my ability to deviate from the set of questions we 
            had prepared and improvised questions based on where the business owner was leading the conversation. This improved our groups understanding of the needs 
            of the business and allowed us to better tailor our deliverables to suit their business.  
          </p>
          <h3>Goal 2: Practice writing clean and manageable code</h3>
          <p> 
            The type of work and responsibilities that came with this role didn’t perfectly line up with my expectations going in. I was expecting to work directly with
            the code from the businesses websites. But since most of our clients were small businesses, most of them relied on CMS’s for creating their websites. Most
            of the technical work that came with this position had to do with either managing and making changes through the websites CMS, adding additional CSS code
            or writing new sections using templating languages. As a result, my goal of writing manageable code for the business owners had to be redefined. What I had
            in mind when I came up with the goal was making sure that the work I completed for the businesses was clear, clean, and easy for them to build upon in the
            future. Therefore, I applied this idea to the general development of each of the websites. When writing new theme templates for the Shopify sites, I made
            sure to follow consistent naming schemes, use consistent code structure across sections, and keep theme sections separate to allow the business owners to
            add to them in the future.
          </p>
          <h3>Goal 3: Improve time management skills</h3>
          <p> 
            Setting realistic goals for the businesses was not only one of my initial learning goals, but my supervisor also stressed that it was important. My supervisor
            wanted to make sure that our team wasn’t promising businesses a set of deliverables that we wouldn’t be able to manage. Because of this, I was encouraged to
            practice laying out action plans detailing what we plan to provide for the businesses and by when. The plans included smaller incremental goals that the team 
            agreed upon. We set up action plans for each team member individually and we held each other accountable in order to meet our deadlines. Also, working in 4-week 
            sprints helped me get accustomed to the pace of working in a professional setting. Having a deadline made me realize the importance of setting small short-term 
            goals in order to avoid getting overwhelmed as deadlines approach.
          </p>

          <h2>Accomplishments</h2>
          <p>
            By the end of my time with Communitech, I was fortunate enough to get the opportunity to help 5 different small businesses with their websites. The businesses 
            included a hearing aid clinics, pet cremation service, security services, personal artists and bakery. The diversity of the projects broadened my understanding 
            of website design and gave me the opportunity to work with different platforms. I am very proud of the work my team did for each of the businesses. I helped the 
            businesses with website content, SEO, small optimizations and in one case, I was able to help a business fully develop a new Shopify site.
          </p>
          
          <h2>Conclusion</h2>
          <p> 
            Overall, I enjoyed my time working at Communitech. Helping small businesses was very fulfilling and a great learning experience. 
            During my next co-op placement, I hope to have the opportunity to further improve my public speaking and get a chance to focus on 
            growing my technical skills.
          </p>
          
        </div>
      </div>
    </div>
  );
}
export default CoopContent;
