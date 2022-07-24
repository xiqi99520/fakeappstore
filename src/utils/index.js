// 数字千分位
export function addThousandSymbol(val) {
  return val.toString().replace(/\B(?=(\d{3})+$)/g, ',')
}

// 评分星星
export function handleRating(val) {
  if (val.toFixed(1).split('.')[1] > 0) {
    const pre = val.toFixed(1).split('.')[0];
    return `${pre}.5`
  }
  return val.toFixed(1)
}