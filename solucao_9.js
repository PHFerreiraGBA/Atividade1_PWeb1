// Função
const criarContaBancaria = (saldoInicial) => {
    let saldo = saldoInicial;

    const depositar = (valor) => saldo += valor;
    const sacar = (valor) => saldo -= valor;
    const consultarSaldo = () => console.log("Saldo: R$ " + saldo.toFixed(2))

    return {
        depositar,
        sacar,
        consultarSaldo
    }
};

// Uso da função

conta1 = criarContaBancaria(500);

conta1.depositar(500.25);
conta1.consultarSaldo();

conta2 = criarContaBancaria(500);

conta2.sacar(250.50);
conta2.consultarSaldo();