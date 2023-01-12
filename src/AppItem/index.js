import './index.css'

const AppItem = props => {
  const {appDetails, ButtonClick} = props
  const {thumbnailUrl, id} = appDetails

  const buttonClick = () => {
    ButtonClick(id)
  }

  return (
    <li className="list-of_apps">
      <button type="button" onClick={buttonClick}>
        <img className="App-item-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default AppItem
