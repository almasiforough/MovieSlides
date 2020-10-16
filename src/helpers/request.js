export const request = (url, method = 'GET', body) => {
  return fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${localStorage.token}`,
      Accept: 'application/json'
    },
    body
  }).then((response) => Promise.all([response.status, response.json()]))
}
