export default function wordCounter(textContent) {
  let wordsArray = textContent.split(/[\s,;\.]+/)
  wordsArray = wordsArray.filter(function (e) {
    return e !== ''
  })
  return wordsArray.length
}
