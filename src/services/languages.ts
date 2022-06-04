import {api} from '../utils/api';

const RaspConfigured = (() => {
    
    const getColumns = () => {
        return [
            { title: 'ID', dataIndex: 'id', key: 'id'},
            { title: 'Linguagem', dataIndex: 'language', key: 'language'},
            { title: 'Usuario GitHub', dataIndex: 'full_name', key: 'full_name'},
            { title: 'Descrição', dataIndex: 'description', key: 'description'},
        ]
    }

    const getJavaScript = async(full_name: any) => {
        let response = await api.get('');
        return response;
    }

    const getSearch = () => {
        return { inputName: "serial", label: "Informe a linguagem de programação"}
    }

    const onSearch = async (language: string) => {
        let response = await api.get(`https://api.github.com/search/repositories?q=${language}`);
       
        return response.data.items;
    }

    return {
        getColumns,
        getJavaScript,
        getSearch,
        onSearch,
    }
})();
export default RaspConfigured;