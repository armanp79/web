import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

import avatar from "../images/a3.png";
import Education from "./resume_components/education"
import Experience from "./resume_components/experience"
import Skills from "./resume_components/skills"

class Resume extends Component {
    render () {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                            src={avatar}
                            alt="avatar"
                            style={{height:'200px'}}
                            />
                        </div>
                        <div className="resume-left-text">
                            <h2>Arman Pithawala</h2>
                            <h4>
                                University of California, Irvine <br/>
                                Business Administration - Finance<br/>
                                Minor in Computer Science
                            </h4>
                            <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        </div>



                    </Cell>
                    <Cell className="resume-right" col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2020}
                            endYear={2021}
                            schoolName='University of California, Berkeley'
                            schoolDescription={<h6>FinTech Bootcamp</h6>}
                        />

                        <Education 
                            startYear={2017}
                            endYear={2020}
                            schoolName='University of California, Irvine'
                            schoolDescription={<h6>Bachelor of Arts in Business Administration, Emphasis in Finance <br />Minor in Information and Computer Science <br />Minor in Innovation and Entreprenuership</h6>}
                        />

                        
                        <hr style= {{borderTop:'3px solid #000'}}/>



                        <h2>Professional Experience</h2>
                        <Experience 
                            startYear='May 2020'
                            endYear='September 2020'
                            jobName="BlockChain Development Intern at Adventure Corporation"
                            jobDescription="Work with a development team to create innovative decentralized applications on the Ethereum network using JavaScript and Solidity."
                        />

                        <hr style= {{border:'0px', height:'1px',backgroundImage:'linear-gradient(to right, #333,#ccc,#333)'}}/>

                        <Experience 
                            startYear="September 2019"
                            endYear="March 2020"
                            jobName="Brand Ambassador at Borocash"
                            jobDescription="Coordinated and executed social events, job fairs, campus interviews, talks, lectures, and social media activations.
                            Partnered with the marketing and growth teams to educate students on the importance of financial advancement.
                            Tracked and reported all engagement activities with the marketing team through different marketing channels
                            "
                        />
                        <hr style= {{border:'0px', height:'1px',backgroundImage:'linear-gradient(to right, #333,#ccc,#333)'}}/>
                        <Experience 
                            startYear="June 2019"
                            endYear="September 2019"
                            jobName="Software Engineering Intern at Elisity Inc"
                            jobDescription="Worked with a networking team to automate tests using Python and assist in development of routers using VPP and FRR ip packet forwarding.
                            Constructed server racks and configured test beds with ospf configurations to test network connectivity
                            "
                        />
                        <hr style= {{border:'0px', height:'1px',backgroundImage:'linear-gradient(to right, #333,#ccc,#333)'}}/>

                        <Experience 
                            startYear="July 2018"  
                            endYear="September 2019"
                            jobName="Research Assisstant"
                            jobDescription="Analyzed and annotated various academic sources concerning local currencies, demonetization, and cryptocurrencies for a soon to be released financial book about the future of money."
                        />
                        <hr style= {{border:'0px', height:'1px',backgroundImage:'linear-gradient(to right, #333,#ccc,#333)'}}/>

                        <Experience 
                            startYear="July 2018"
                            endYear="September 2018"
                            jobName="Market Research Analyst at Edelweiss Broking Limited"
                            jobDescription="Collaborated with a team of analysts to research long term investment opportunities in the Pharmaceutical and Chemical Industries."
                        />

                        <hr style= {{borderTop:'3px solid #000'}}/>

                        <h2>Certification and Volunteer Experience</h2>
                        <Experience 
                            startYear="January 2016"
                            endYear="Present"
                            jobName="Self-managed Investment Portfolio"
                            jobDescription="Initiated an account with TD Ameritrade to perform technical analysis to actively invest  in swing trading and options trading strategies."
                        />
                        <hr style= {{border:'0px', height:'1px',backgroundImage:'linear-gradient(to right, #333,#ccc,#333)'}}/>

                        <Experience 
                            startYear="May 2020"
                            endYear="August 2020"
                            jobName="Stanford Machine Learning Course taught by Andrew Ng (online)"
                            jobDescription="11 week course that covers advanced machine learning algorithms such as Linear/Logistic regression, Neural Networks, SVM, K-cluster, PCA, Anomoly Detection, and Recommender Systems."
                        />
                        <hr style= {{border:'0px', height:'1px',backgroundImage:'linear-gradient(to right, #333,#ccc,#333)'}}/>
                        
                        <Experience 
                            startYear="January 2020"
                            endYear="May 2020"
                            jobName="Deloitte Diversity Mentorship Program "
                            jobDescription="Selected to participate in a shadowing program with several Deloitte Business and Technology Analysts."
                        />
                        <hr style= {{border:'0px', height:'1px',backgroundImage:'linear-gradient(to right, #333,#ccc,#333)'}}/>

                        <Experience 
                            startYear="March 2020"
                            endYear="June 2020"
                            jobName="Discovering Salesforce Solutions by Deloitte Digital (DSS) Virtual Program  "
                            jobDescription="Certified as an Administrator and a Trailhead Ranger with over 200 Trailhead badges.
                            Proficient in various Salesforce technologies including customer relationship management, cloud computing, and lightning experience"                            
                        />
                        <hr style= {{border:'0px', height:'1px',backgroundImage:'linear-gradient(to right, #333,#ccc,#333)'}}/>

                        <Experience 
                            startYear="October 2017"
                            endYear="Present"
                            jobName="UC Irvine CalPirg Volunteer"
                            jobDescription="Recruit students and raise money in order to fight global warming by promoting sustainable energy and save ecosystems by trying to ban neonic pesticides."
                        />

                

                        


                        <hr style= {{borderTop:'3px solid #000'}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill = "C++"
                            level = {55}
                        />
                        <Skills 
                            skill = "Swift"
                            level = {60}
                        />
                        <Skills 
                            skill = "Python"
                            level = {100}
                        />
                        <Skills 
                            skill = "Matlab/Octave"
                            level = {60}
                        />
                        <Skills 
                            skill = "JavaScript"
                            level = {90}
                        />
                        <Skills 
                            skill = "Solidity"
                            level = {82}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;