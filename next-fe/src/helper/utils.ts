export function formatDate(date: Date): string {
  const day = date.getDate()
  const year = date.getFullYear()
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const month = months[date.getMonth()]
  let hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12

  let suffix = 'th'
  if (day % 10 === 1 && day !== 11) suffix = 'st'
  else if (day % 10 === 2 && day !== 12) suffix = 'nd'
  else if (day % 10 === 3 && day !== 13) suffix = 'rd'

  const formattedHours = hours < 10 ? `0${hours}` : hours
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${day}${suffix} ${month}, ${year}, ${formattedHours}:${formattedMinutes} ${ampm}`
}

export function formatTime(seconds: number): string {
  const units = [60, 60, 24, 7]
  const parts: number[] = []

  for (let i = 0; i < units.length && seconds > 0; i++) {
    parts.unshift(seconds % units[i])
    seconds = Math.floor(seconds / units[i])
  }
  parts.unshift(seconds)

  while (parts.length < 2) {
    parts.unshift(0)
  }

  const formattedParts = parts.map(value => value.toString().padStart(2, '0'))

  return formattedParts.join(':')
}
