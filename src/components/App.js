import React from 'react'

import ListPage from './ListPage'
import NewPostLink from './NewPostLink'
import Header from './Header'

export default class App extends React.Component {

  render () {
    return (
      <div>
       <Header />
        <ListPage />
        
      </div>
    )
  }
}
