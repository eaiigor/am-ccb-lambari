export interface EventosData {
    id: number,
    nome: string,
    localidade: string,
    encarregadoLocal?: string,
    contatoLocal: string,
    encarregadoRegional: string,
    imgIgreja: string,
    diasDeEvento: string[],
}