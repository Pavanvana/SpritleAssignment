import './index.css'

const LoginPage = props => {
  const onClickStudentButton = () => {
    const {history} = props
    history.push('/student/login')
  }
  const onClickMasterButton = () => {
    const {history} = props
    history.push('/master/login')
  }
  return (
    <div className="main-container">
      <div className="buttons-card">
        <button
          type="button"
          className="master-button"
          onClick={onClickMasterButton}
        >
          Master
        </button>
        <button
          type="button"
          className="student-button"
          onClick={onClickStudentButton}
        >
          Student
        </button>
      </div>
    </div>
  )
}
export default LoginPage
