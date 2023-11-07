const timeLeft = document.getElementById('time-left')

const birthday = new Date('11/10/2023')
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24 // milliseconds
let timerID

function countDown() {
  const today = new Date()
  const timeSpan = birthday - today

  if(timeSpan <=-day){
    timeLeft.innerHTML = "Hope you had a nice Birtday!"
    clearInterval(timerId)
    return
  }
  if(timeSpan <= 0) {
    timeLeft.innerHTML = "Happy Birthday"
    clearInterval()
    return
  }

  const days = Math.floor( timeSpan/ day )
  const hours = Math.floor((timeSpan % day) / hour)
  const minutes = Math.floor((timeSpan % hour) / minute)
  const seconds = Math.floor((timeSpan % minute) / second)

  timeLeft.innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds'
}

timerId=setInterval(countDown, second)
