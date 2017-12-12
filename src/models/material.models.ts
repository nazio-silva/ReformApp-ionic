export class Material {
    constructor(
        public area: string,
        public preco: number,
        public inclinacao: number,
        private qtd: number,
        private valor_gasto: number) {
    }
}