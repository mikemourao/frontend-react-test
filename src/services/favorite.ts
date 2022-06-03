import {api} from '../utils/api';

const Favorite = (() => {
    
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

    return {
        getColumns,
        getJavaScript
    }
})();
export default Favorite;