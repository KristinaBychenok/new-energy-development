export const emailRegExp = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
export const nameRegExp = /^[a-zA-Zа-яА-ЯёЁ .-]+$/
export const phoneRegExp = /^[0-9+\-\s\(\)]+$/

export const checkRegExpField = (input: string, regExp: RegExp) => {
  return regExp.test(input)
}
