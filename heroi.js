class heroi{
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade; 
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
        if (this.tipo === 'Mago'){
            ataque= 'magia';
        }
        else if (this.tipo==='Guerrero'){
            ataque= 'espada'
        }

        else if (this.tipo ==='Monge'){
            ataque= 'artes marciais';
        }

        else if (this.tipo  === 'Ninja'){
            ataque= 'shuriken';
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}
const heroi1 = new heroi("Edu",19,"Mago")

heroi1.atacar()

