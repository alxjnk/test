const axios = require('axios');

let baseURL;

switch (process.env.REACT_APP_API_HOSTNAME) {
	case 'my.biocard.com':
		baseURL = 'https://apiprod01.biocard.com/api';
		break;
	case 'test':
		baseURL = 'https://apitest.biocard.com/api';
		break;
	default:
		baseURL = 'https://apitest.biocard.com/api';
		break;
}

module.exports = axios.create({
	baseURL: 'https://apiprod01.biocard.com/api'
});
