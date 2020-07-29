import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

import avatar from "../images/a1.jpg";


class Landing extends Component {
    render () {
        return(
            <div style = {{width: '100%', margin:'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col= {12}>
                        <img
                          src={avatar}
                          alt="avatar"
                          className="avatar-img"
                          />

                        <div className="banner-text">
                            <h1>Arman Pithawala</h1>
                            
                            <hr/>

                            <p>C++ | Python | Octave | JavaScript | BlockChain | React | NodeJS | MongoDB</p>

                            <div className="social-links">
                                
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/arman-p-406754b4/" rel="noopener noreferrer" target = "_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/armanp79" rel="noopener noreferrer" target = "_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;