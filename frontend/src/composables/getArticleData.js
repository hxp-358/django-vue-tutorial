import axios from 'axios';
import {onMounted} from 'vue'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default function getArticleData(info, route) {
    const getData = async () => {


        console.log('start sleep');
        await sleep(2000);
        console.log('end sleep');


        let url = '/api/article';

        let params = new URLSearchParams();
        params.appendIfExists('page', route.query.page);
        params.appendIfExists('search', route.query.search);

        const paramsString = params.toString();
        if (paramsString.charAt(0) !== '') {
            url += '/?' + paramsString
        }

        const response = await axios.get(url);

        console.log('start sleep');
        await sleep(2000);
        console.log('end sleep');

        info.value = response.data;
    };

    onMounted(getData);

    // watch(route, getData);
}