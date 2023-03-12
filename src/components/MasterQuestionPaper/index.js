import './index.css'
import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

class MasterQuestionPaper extends Component {
  state = {
    emptyError: false,
    questionInput: '',
    questionsList: [],
  }

  onChangeInput = event => {
    this.setState({questionInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {questionInput} = this.state
    const newQuestion = {
      id: uuidV4(),
      question: questionInput,
    }
    if (questionInput === '') {
      this.setState({emptyError: true})
    } else {
      this.setState(
        prevState => ({
          questionsList: [...prevState.questionsList, newQuestion],
          emptyError: false,
          questionInput: '',
        }),
        this.addLocalStorage,
      )
    }
  }

  addLocalStorage = () => {
    const {questionsList} = this.state
    const jsonData = JSON.stringify(questionsList)
    localStorage.setItem('questionsList', jsonData)
  }

  render() {
    const {emptyError, questionInput} = this.state

    return (
      <div className="main-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <h1 className="heading">Adding Questions</h1>
          <label className="label" htmlFor="question">
            QUESTION
          </label>
          <input
            className="input"
            id="question"
            type="text"
            placeholder="Type your question"
            onChange={this.onChangeInput}
            value={questionInput}
          />
          {emptyError && (
            <p className="error-msg">*please enter your question</p>
          )}
          <button className="add-button" type="submit">
            Add Question
          </button>
        </form>
      </div>
    )
  }
}
export default MasterQuestionPaper
