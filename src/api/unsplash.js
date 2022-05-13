import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID m8NFpKpRpob1LkF_NlVGKS2efeeTI8bXdFTyKlTOq8g'
    }
});