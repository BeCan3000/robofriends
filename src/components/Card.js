const Card = ({ name, username, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow tc">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <h2>{name}</h2>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  )
}

export default Card
