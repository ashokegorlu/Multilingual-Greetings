import './index.css'

const Button = props => {
  const {buttonDetails, setBut, isActive} = props
  const {buttonText, id} = buttonDetails
  console.log(isActive)
  const active = isActive === true ? 'active' : 'button'
  console.log(isActive)
  const changeButton = () => {
    setBut(id)
  }

  return (
    <li>
      <button type="button" onClick={changeButton} className={active}>
        {buttonText}
      </button>
    </li>
  )
}
export default Button
