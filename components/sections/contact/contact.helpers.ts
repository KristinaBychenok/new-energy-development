export const emailRegExp = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/i
export const nameRegExp = /^[a-zA-Z .-]+$/
export const phoneRegExp = /^[0-9+\-\s\(\)]+$/

export const checkRegExpField = (input: string, regExp: RegExp) => {
  return regExp.test(input)
}
