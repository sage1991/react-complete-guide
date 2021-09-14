export interface LoginFormState {
  email: {
    value: string
    valid: boolean
  },
  password: {
    value: string
    valid: boolean
  }
  valid: boolean
}

export const LOGIN_FORM_INITIAL_STATE: LoginFormState = {
  email: {
    value: "",
    valid: true
  },
  password: {
    value: "",
    valid: true
  },
  valid: false
}

export const loginFormReducer = (state: LoginFormState, action: LoginFormAction): LoginFormState => {
  switch (action.type) {
    case "EMAIL_ENTER":
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload,
        }
      }
    case "EMAIL_BLUR":
      return {
        ...state,
        email: {
          ...state.email,
          valid: validateEmail(state.email.value)
        }
      }
    case "PASSWORD_ENTER":
      return {
        ...state,
        password: {
          ...state.password,
          value: action.payload
        }
      }
    case "PASSWORD_BLUR":
      return {
        ...state,
        password: {
          ...state.password,
          valid: validatePassword(state.password.value)
        }
      }
    case "VALIDATE_FORM":
      return {
        ...state,
        valid: validatePassword(state.password.value) && validateEmail(state.email.value)
      }
    default:
      return state
  }
}

export type LoginFormAction = EmailEnterAction | EmailBlurAction | PasswordEnterAction | PasswordBlurAction
                            | ValidateFormAction

export interface EmailEnterAction {
  type: "EMAIL_ENTER"
  payload: string
}

export interface EmailBlurAction {
  type: "EMAIL_BLUR"
}

interface PasswordEnterAction {
  type: "PASSWORD_ENTER"
  payload: string
}

export interface PasswordBlurAction {
  type: "PASSWORD_BLUR"
}

export interface ValidateFormAction {
  type: "VALIDATE_FORM"
}


const EMAIL_REGEX = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
const validateEmail = (value: string) => EMAIL_REGEX.test(value)
const validatePassword = (value: string) => value.length > 6
