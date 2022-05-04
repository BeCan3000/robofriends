import Card from './Card'

const Cardlist = ({ robots }) => {
  return robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        name={robot.name}
        id={robot.id}
        username={robot.username}
        email={robot.email}
      />
    )
  })
}

export default Cardlist
