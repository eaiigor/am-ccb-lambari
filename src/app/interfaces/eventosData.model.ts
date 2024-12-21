export interface EventosData {
    id: number,
    nome: string,
    localidade: string,
    encarregadoLocal?: string,
    contatoLocal: string,
    encarregadoRegional: string,
    imgIgreja: string,
    diasDeEvento: string[],
    diasEmFrase: string,
    cidade: string,
    iframeMaps: string,
    endereco: string,
    tipoEvento: number
}