import { useEffect, useState } from 'react'
import './App.css'
import Box from './components/Box'

function App() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  let year = new Date().getFullYear() + 1
  const target = `January, 1, ${year}`

  const getTime = () => {
    const time = Date.parse(target) - Date.now()
    if (time > 0) {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
      setHours(formatTime(Math.floor((time / (1000 * 60 * 60)) % 24)))
      setMinutes(formatTime(Math.floor((time / 1000 / 60) % 60)))
      setSeconds(formatTime(Math.floor((time / 1000) % 60)))
    }
  }

  const formatTime = (time) => {
    return time < 10 ? '0' + time : time
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(target), 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='App'>
      <h1>Countdown to New Year {year} 🎉</h1>
      <div className='timer'>
        <Box text='Days' number={days} />
        <Box text='Hours' number={hours} />
        <Box text='Minutes' number={minutes} />
        <Box text='Seconds' number={seconds} />
      </div>
    </div>
  )
}

export default App
