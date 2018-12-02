import { ErrorMsgs } from './ErrorMsgs'

export default function Errors({ type, length, errors }) {
  console.log('Errrrrrrr--->', errors, type)

  if (!length && !errors && type) return <h5 className="errorMessage">{ErrorMsgs[type]}</h5>
  //General Return of error with only type of error passed
  else {
    if (length)
      return errors && length && errors.type === type && length < 1 ? (
        <h5 className="errorMessage">{ErrorMsgs[type]}</h5>
      ) : null
    //Return of error with type, errors.type and string length passed
    else if (errors)
      return errors && errors.type === type ? (
        <h5 className="errorMessage">{ErrorMsgs[type]}</h5>
      ) : null //Return of error with type and errors.type of error passed
  }
}
