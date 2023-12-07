const request = require('./request')

describe('request function', () => {
    it('should throw an error if the url is http://error.com', async () => {
        await expect(request('http://error.com'))
            .rejects.toThrow('Network Error');
    })
    it('should return the message if the url is http://success.com', async () => {
        await expect(request('http://success.com'))
            .resolves.toEqual({ message: 'success' });
    })
    
})