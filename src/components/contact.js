import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

import avatar from "../images/a2.png";

class Contact extends Component {
    render () {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    
                    <Cell col={6}>
                        <h2>Arman Pithawala</h2>
                        <img
                        src={avatar}
                        alt="avatar"
                        style={{height:'250px'}}
                        />

                        <p style={{width: '75%', margin: 'auto', paddingTop:'1em'}}>
                        Hi, I’m Arman Pithawala. I’m an incoming senior studying Computer Science and Business Administration at UC Irvine. 
                        My career interests lie in exploring new technologies and how they can impact businesses. 
                        I love working with a plethora of different technologies, including React (what this site is built with), NodeJS, Machine Learning, Swift, and BlockChain. 
                        I already have experience on several teams working as a software engineering intern and then as a blockchain development intern.
                        </p>
                        
                    </Cell>


                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (408) 480 - 4131
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        armanpithawala@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;