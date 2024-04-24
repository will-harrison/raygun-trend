const services = [
  {service: 'square', serviceURL: ({apiKey, endpoint}) => `https://www.blah.com/${apiKey}/${endpoint}`}
]

const API_URL = ({service, apiKey, endpoint}) = services.filter(f => f.service === service)?.serviceURL({apiKey, endpoint})