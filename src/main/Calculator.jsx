import React, {Component} from "react";

import './Calculator.css';

import Button from "../components/Button";
import Display from "../components/Display";

const estadoInicial = {
    valorDisplay: '0',
    limparDisplay: false,
    tipoOperacao: null,
    valor: [0, 0],
    indiceAtual: 0,
}

export default class Calculator extends React.Component {

    state = {...estadoInicial}

    constructor(props){
        super(props)
        this.setOperacao = this.setOperacao.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory(){ 
        this.setState( { ...estadoInicial } )
    }

    setOperacao(operacao){
        console.log(operacao)
        if (this.state.indiceAtual === 0) {
            this.setState( { tipoOperacao: operacao, indiceAtual: 1, limparDisplay: true } )
        }
        else {
            const equals = operacao === '='
            const currentOperation = this.state.tipoOperacao

            const values = [...this.state.valor]
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                values[0] = this.state.valor[0]
            }
            values[1] = 0


            this.setState({
                valorDisplay: values[0],
                operation: equals ? null : operacao,
                indiceAtual: equals ? 0 : 1,
                limparDisplay: !equals,
                values,
            })
        } 
    }

    addDigit(n){
        console.log(n)
        //se o usuário digitou um ponto e no display já existe um ponto, then
        if (n === '.' && this.state.valorDisplay.includes('.') ) {
            return 
        }
        
        //limpar display se o valor do display for igual a "0" ou se limparDisplay for "true"
        const clearDisplay = this.state.valorDisplay === '0' || this.state.limparDisplay


        const atualValor = clearDisplay ? '' : this.state.valorDisplay


        const displayValor = atualValor + n
        this.setState( {valorDisplay: displayValor, limparDisplay: clearDisplay} )

        if (n !== '.') {
            const i = this.state.indiceAtual
            const newValue = parseFloat(displayValor)
            const values = [...this.state.valor]
            values[i] = newValue
            this.setState( { valor: values } )
            console.log(values)
        }
        
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.valorDisplay}></Display>
                <Button label="AC" click={this.clearMemory} triple operacao></Button>

                <Button label="+" click={this.setOperacao} double operacao></Button>

                <Button label="1" click={this.addDigit} ></Button>
                <Button label="2" click={this.addDigit} ></Button>
                <Button label="3" click={this.addDigit} ></Button>
                <Button label="4" click={this.addDigit} ></Button>
                <Button label="5" click={this.addDigit} ></Button>
                <Button label = "6" click={this.addDigit} ></Button>
               
                <Button label = "-" click={this.setOperacao} double operacao ></Button>

                <Button label = "7" click={this.addDigit} ></Button>
                <Button label = "8" click={this.addDigit} ></Button>
                <Button label = "9" click={this.addDigit} ></Button>
                
                <Button label = "." click={this.addDigit} ></Button>
                <Button label = "0" click={this.addDigit} ></Button>
                
                <Button label = "=" click={this.setOperacao} doubleCol operacao></Button>
                
            </div>
        )
    }
}