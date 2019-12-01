import React, { Component } from 'react';

import './MainFooter.css'

export default class MainFooter extends Component {
    render() {
        return(
            <section className='MainFooter'>
                <div className="fb-like" data-href="https://www.lakeshowtix.com" data-width="" data-layout="button" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                <p>Copyright Lakeshow Tix 2019</p>
            </section>
        )
    }
}