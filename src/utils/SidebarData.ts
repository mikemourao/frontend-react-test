import rasOverIgm from '../assets/img/rasp_overview.svg';
import rasDispIgm from '../assets/img/rasp_disponivel.svg';

const data = [
    {
        key: 'overview',
        title: 'Visão geral',
        icon: rasOverIgm,
        path: '/overview'
    },
    {
        key: 'rasps',
        title: 'Raspberry',
        icon: rasDispIgm,
        items: [
            {
                key: 'rasp',
                title: 'Disponíveis',
                path: '/rasp'
            },
            {
                key: 'sync-raspberry',
                title: 'Configurados',
                path: '/sync-raspberry'
            }
        ]
    }
]
export default data;