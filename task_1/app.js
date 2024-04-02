const currentDate = () =>
	new Date().toISOString().slice(0, 10).replace(/-/g, '/')

const currentTime = () => new Date().toLocaleTimeString()
