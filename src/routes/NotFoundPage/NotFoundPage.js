import React, { Component } from 'react'

import './NotFoundPage.css'

export default class NotFoundPage extends Component {
  render() {
    return (
      <section className='NotFoundPage'>
        <h1 className='page_headings'>404 - Page not found</h1>
        <p className='subheading'>Try going back to your previous page.</p>
      </section>
    )
  }
}