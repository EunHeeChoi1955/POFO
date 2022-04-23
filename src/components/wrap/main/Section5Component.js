import React, { Component } from 'react';

class Section5Component extends Component {
    render() {
        return (
            <section id="section5">
                <div className="container">
                    <div className="gap">
                        <div className="wrap">
                            <div className="content">
                                <ul className="svg-box">
                                    <li>
                                        <div className="svg-gap">
                                            <div className="svg-wrap">
                                                <svg viewBox = '0 0 150 150' className='svg svgbg'>
                                                    <circle cx='75' cy='75' r='73.5' className='circle' style={{strokeWidth:'3'}}  stroke='#ddd' fill='transparent'/>
                                                
                                                </svg>

                                                <svg viewBox = '0 0 150 150' className='svg svgfg'>
                                                    <circle cx='75' cy='75' r='73.5' className='circle circleAni circle1' style={{strokeWidth:'3'}}  stroke='#555' fill='transparent'/>
                                                    
                                                </svg>
                                                <span className="number">90%</span>
                                            </div>                                       
                                            <h2>GRAPHIC DESIGN</h2>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="svg-gap">
                                            <div className="svg-wrap">
                                                <svg viewBox = '0 0 150 150' className='svg svgbg'>
                                                    <circle cx='75' cy='75' r='73.5' className='circle' style={{strokeWidth:'3'}}  stroke='#ddd' fill='transparent'/>
                                                    
                                                </svg>
                                                
                                                <svg viewBox = '0 0 150 150' className='svg svgfg'>
                                                    <circle cx='75' cy='75' r='73.5' className='circle circleAni circle2' style={{strokeWidth:'3'}}  stroke='#555' fill='transparent'/>
                                                    
                                                </svg>
                                                <span className="number">75%</span>
                                            </div>
                                            <h2>WEB DESIGN</h2>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="svg-gap">
                                            <div className="svg-wrap">
                                                <svg viewBox = '0 0 150 150' className='svg svgbg'>
                                                    <circle cx='75' cy='75' r='73.5' className='circle' style={{strokeWidth:'3'}}  stroke='#ddd' fill='transparent'/>
                                                    
                                                </svg>
                                                
                                                <svg viewBox = '0 0 150 150' className='svg svgfg'>
                                                    <circle cx='75' cy='75' r='73.5' className='circle circleAni circle3' style={{strokeWidth:'3'}}  stroke='#555' fill='transparent'/>
                                                
                                                </svg>
                                                <span className="number">90%</span>
                                            </div>                                        
                                            <h2>BRANDING</h2>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="svg-gap">
                                            <div className="svg-wrap">
                                                <svg viewBox = '0 0 150 150' className='svg svgbg'>
                                                    <circle cx='75' cy='75' r='73.5' className='circle' style={{strokeWidth:'3'}}  stroke='#ddd' fill='transparent'/>
                                                    
                                                </svg>
                                                
                                                <svg viewBox = '0 0 150 150' className='svg svgfg'>
                                                    <circle cx='75' cy='75' r='73.5' className='circle circleAni circle4' style={{strokeWidth:'3'}}  stroke='#555' fill='transparent'/>
                                                    
                                                </svg>
                                                <span className="number">62%</span>
                                            </div>                                        
                                            <h2>PHOTOGRAPHY</h2>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
        );
    }
}

export default Section5Component;