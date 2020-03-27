import React from 'react'
import UserInfo from './userInfo';
import Data from '../data/data'

class Navigation extends React.Component{
  constructor(){
    super()
    this.state = {
      personId: 0,
      peopleArr: Data,
      personShown: Data[0]
    }
    this.forward = this.forward.bind(this)
    this.backward = this.backward.bind(this)
  }

  forward(){
    this.setState({personId: (this.state.personId + 1), personShown: this.state.peopleArr[this.state.personId]})
  }

  backward(){
    this.setState({personId: (this.state.personId - 1), personShown: this.state.peopleArr[this.state.personId]})
  }

  render() {

    return (
      <div>
        <div className='people'>
          <UserInfo shown={this.state.personShown} numberOfPeople={this.state.peopleArr.length}/>
        </div>
        <nav className='nav'>
          <button className='nav-button' onClick={() => this.backward()} disabled={this.state.personId <= 0}>{'< Previous'}</button>
          <section className='user-buttons' >
            <button className='user-interact' >Edit</button>
            <button className='user-interact' >Delete</button>
            <button className='user-interact' >New</button>
          </section>
          <button className='nav-button' onClick={() => this.forward()} disabled={this.state.personId >= 25}>{'Next >'}</button>
        </nav>
      </div>
    )
  }
}

export default Navigation