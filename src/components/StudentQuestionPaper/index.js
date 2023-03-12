import './index.css'
import {Component} from 'react'

class StudentQuestionPaper extends Component {
  state = {
    questionsList: [],
    answerInput: '',
  }

  componentDidMount = () => {
    this.getItems()
  }

  getItems = () => {
    const parsedData = localStorage.getItem('questionsList')
    const data = JSON.parse(parsedData)
    this.setState({questionsList: data})
  }

  onClickSaveButton = () => {
    const {answerInput} = this.state
    console.log(answerInput)
  }

  onChangeAnswerInput = event => {
    this.setState({answerInput: event.target.value})
  }

  render() {
    const {questionsList} = this.state
    return (
      <div className="container">
        <h1 className="question-paper-heading">Question Paper</h1>
        <ul className="questions-container">
          {questionsList.map(eachQuestion => (
            <li className="each-question-container" key={eachQuestion.id}>
              <p className="question">{eachQuestion.question}</p>
              <div className="answer-button-container">
                <input
                  type="text"
                  className="answer-input"
                  placeholder="Type your answer"
                  onChange={this.onChangeAnswerInput}
                />
                <button
                  className="save-button"
                  type="button"
                  onClick={this.onClickSaveButton}
                >
                  Save
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default StudentQuestionPaper
