import React from 'react'

class UserInfo extends React.Component{
  render() {

    const displayed = this.props.shown
    const numberPeople = this.props.numberOfPeople
    const favMovies = displayed.favoriteMovies.map((movie, i) => {
      return <li key={i}>{movie}</li>
    })

    return (
      <section className='people-info'>
        <h1 className='person-name'>{displayed.name.first} {displayed.name.last}</h1>
        <h3>From: {displayed.city}, {displayed.country}</h3>
        <h3>Job: {displayed.title}</h3>
        <h3>Employer: {displayed.employer}</h3>
        <h3>Favorite Movies: </h3>
        <ol>{favMovies}</ol>
        <h2 className='index-people'>{`${displayed.id}/${numberPeople}`}</h2>
      </section>
    )
  }
}

export default UserInfo