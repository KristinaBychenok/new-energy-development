export const emailRegExp = /[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/i

export const checkRegExpField = (input: string, regExp: RegExp) => {
  return regExp.test(input)
}
