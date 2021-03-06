import { DaoInterface } from "./dao-interface";
import Pessoa from "./pessoa";


export class PessoaDao implements DaoInterface {

    nomeTabela: string = 'tb_pessoa';
    nomeObjeto: string = 'Pessoa';

    inserir(object: Pessoa): boolean {

        console.log(this.nomeObjeto, 'cadastrada com sucesso!');
        return true;
    }

    atualizar(object: Pessoa): boolean {

        console.log(this.nomeObjeto, 'atualizada com sucesso!');
        return true;
    }

    remover(id: number): Pessoa {

        console.log(this.nomeObjeto, 'removida com sucesso!');
        return new Pessoa('', '');
    }

    selecionar(id: number): Pessoa {

        console.log(this.nomeObjeto, 'selecionada');
        return new Pessoa('', '');
    }

    selecionarTodos(): [any] {
        console.log(this.nomeObjeto, 's selecionadas');
        return [new Pessoa('', '')];
    }

}