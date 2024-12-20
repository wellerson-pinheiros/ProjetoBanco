# Sistema de Banco :bank:

Este projeto simula o funcionamento básico de um banco, com classes que representam diferentes tipos de contas, como Conta Corrente e Conta Poupança. O sistema permite a criação e manipulação de contas bancárias, realizando operações básicas como saque, depósito e consulta de saldo.

Estrutura do Projeto
O projeto é composto pelas seguintes partes principais:

## 1. Classe Conta (Abstrata)
A classe Conta é a classe base abstrata que define a estrutura básica de uma conta bancária. Ela possui atributos essenciais como saldo e métodos para acessar e modificar essas informações. As classes Conta Corrente e Conta Poupança herdam essa classe e implementam funcionalidades específicas de cada tipo de conta.

## 2. Conta Corrente e Conta Poupança
Essas classes são as especializações da classe Conta. Elas representam os dois tipos de contas oferecidos pelo sistema:

Conta Corrente: Destinada a transações do dia a dia, com a possibilidade de usar cheques especiais e outras funcionalidades específicas.
Conta Poupança: Conta com rendimento de juros, destinada ao armazenamento de valores a longo prazo.
## 3. Conta Repository (Repositório)
A classe Conta Repository é responsável pelo gerenciamento das contas bancárias. Ela contém os métodos para realizar as operações de CRUD (Criar, Ler, Atualizar e Deletar) das contas no sistema, funcionando como um "banco de dados" simples dentro da aplicação.

## 4. Conta Controller
O Conta Controller gerencia as interações com os usuários, garantindo que as operações de getter (obter dados) e setter (modificar dados) sejam realizadas corretamente. Ele funciona como um intermediário entre as classes de modelo (Conta, Conta Corrente, Conta Poupança) e a interface do usuário.

## 5. Menu
A página Menu é a interface principal do sistema, localizada na raiz do projeto. Ela apresenta ao usuário as opções disponíveis, como a criação de novas contas, consulta de saldo, depósitos, saques e outras funcionalidades.

##Funcionalidades 📋

Criação de Conta: O usuário pode criar uma conta corrente ou poupança.
Consultar Saldo: Verifique o saldo disponível em sua conta.
Depósito: Realize depósitos nas contas bancárias.
Saque: Efetue saques das contas, respeitando as regras de cada tipo de conta.
Transferência entre contas: Transfira valores entre contas do mesmo tipo.
##Como Usar
Clone este repositório para o seu computador.
Abra o projeto na sua IDE favorita.
Execute a classe Menu para iniciar a interação com o sistema.
Siga as opções no menu para gerenciar suas contas.
Tecnologias Utilizadas
Typescript 
Padrão de Programação Orientada a Objetos (POO)
Conceitos de herança e abstração
Controle de fluxo e manipulação de dados
Contribuindo
Se você deseja contribuir para o desenvolvimento do projeto, basta fazer um fork deste repositório, implementar suas melhorias e abrir um pull request.
