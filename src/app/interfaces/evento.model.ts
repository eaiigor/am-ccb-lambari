export interface Evento {
    id: number,
    nomeEvento: string,
    nomeLocalidade: string,
    dataEvento: Date,
    imgIgreja: string,
    idIgreja: number,
    encarregadoLocal?: string,
    encarregadoRegional: string,
    contatoLocal: string
}