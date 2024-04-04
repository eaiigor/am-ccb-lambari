export interface Evento {
    id: number,
    nomeEvento: string,
    nomeLocalidade: string,
    linkEndereco: string,
    dataEvento: Date,
    imgIgreja: string,
    idIgreja: number,
    encarregadoLocal?: string,
    encarregadoRegional: string,
    contatoLocal: string
}