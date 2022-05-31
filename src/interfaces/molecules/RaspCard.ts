interface Detail {
    ip: string
    mac: string
    status: boolean,
    name_station: string,
    name_function: string,
    logRede: Array<LogRede>,
    logDados: Array<LogDados>
}

interface LogRede {
    log: string,
    status: string,
    created_at: string
}

interface LogDados {
    log: string,
    serial: string,
    created_at: string
}

export default interface RaspCard {
    available: boolean,
    title: string,
    detail: Detail,
}
