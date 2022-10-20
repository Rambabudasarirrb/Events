import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails
  const eventImageClassName = isActive ? 'event-image active' : 'event-image'

  const onClickActive = () => {
    setActiveEventId(id)
  }

  return (
    <li className="list-items">
      <button className="button-image" type="button" onClick={onClickActive}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="title">{name}</p>
      <p className="description">{location}</p>
    </li>
  )
}
export default EventItem
