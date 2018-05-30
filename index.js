function produceDrivingRange(drivingRange) {
  return function(arg1, arg2){
    const x = Math.abs(arg2 - arg1)
    if (x >= drivingRange) {
      return `within range by ${x}`
  } else {
    return `${x} blocks out of range`
  }
}
}