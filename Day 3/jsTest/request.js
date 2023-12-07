async function request(url) {
  if  (url === 'http://error.com') {
    throw new Error('Network Error')
  }
    return {
        message: 'success',
    }
}

module.exports = request