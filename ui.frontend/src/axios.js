import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4502/graphql/execute.json/aem-spa-sccp',
    headers: {
        'Authorization': 'Basic ' + btoa('admin:admin')
    }
});

export default api;