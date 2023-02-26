export type ProdutoEdicao = {
    produto_id:number
    codigodebarras:string,
    movimentacaos:[],
    nome:string,
    quantidade_minima:number,
    saldo_inicial:number   
}