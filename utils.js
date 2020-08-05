export function UINSymbol(UIN, counter = 1) {
  const UINWithWeight = Array.from(UIN).reduce((acc, num) => {
    if (counter === 11) {
      //если весовой коэффициент больше 10
      counter = 1
    }

    acc += num * counter
    counter++
    return acc % 11
  }, 0)

  if (UINWithWeight === 10) {
    //если котнрольный разряд УИН равен 10 после расчета
    const UINSymbolAfterRecheck = UINSymbol(UIN, 3)
    return UINSymbolAfterRecheck === 10 ? 0 : UINSymbolAfterRecheck
  }
  return UINWithWeight
}

export function getDate(date) {
  const fullDate = new Date(+Date.parse(date))
  if (fullDate.toString() === 'Invalid Date') {
    return ''
  }
  const year = fullDate.getFullYear()
  const month = fullDate.getMonth()
  const day = fullDate.getDate()
  return `${year}-${month + 1}-${day}`
}
