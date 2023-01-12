import './index.css'

const GameOver = props => {
  const {score, playAGAIN} = props
  const playAgainFun = () => {
    playAGAIN()
  }

  return (
    <div className="bg-container">
      <div className="g-v">
        <img
          alt="trophy"
          className="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        />
        <div className="score-board">
          <p className="re-sc">YOUR SCORE</p>
          <span className="re-sc">{score}</span>
        </div>

        <button type="button" onClick={playAgainFun} className="playagainBtn">
          <img
            alt="reset"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default GameOver
