import {api} from '../utils/api';
import IRaspConfigured from '../interfaces/models/RaspConfigured';

const RaspConfigured = (() => {
    
    const getColumns = () => {
        return [
            { title: 'ID', dataIndex: 'id', key: 'id'},
            { title: 'Linguagem', dataIndex: 'language', key: 'language'},
            { title: 'Usuario GitHub', dataIndex: 'full_name', key: 'full_name'},
            { title: 'Descrição', dataIndex: 'description', key: 'description'},
        ]
    }

    const getJavaScript = async() => {
        let response = await api.get('');
        return response;
    }

    const post = async(body: IRaspConfigured) => {
        return await api.post('solder-paste/provider/', body);
    }

    const getSearch = () => {
        return { inputName: "serial", label: "Informe a linguagem de programação" }
    }

    const onSearch = async (language: string) => {
        let response = await api.get(`https://api.github.com/search/repositories?q=${language}`);
        console.log(response.data.items);
        
        return response.data.items;
    }

    return {
        getColumns,
        getJavaScript,
        post,
        getSearch,
        onSearch
    }
})();
export default RaspConfigured;