![image](https://github.com/user-attachments/assets/2212a93e-2ed4-4fe1-95fa-0810e7ad4bb8)# Cadastro de Usuários

Projeto para cadastrar informações de usuários usando uma API conectada a um banco MongoDB. Permite adicionar e excluir usuários, exibindo-os em cards abaixo do formulário.

## Tecnologias

- React (com Vite)  
- CSS  
- API em JavaScript com Axios  
- MongoDB  
- Hospedagem: Frontend no Vercel e API no Firebase  

## Demonstração

![Interface do formulário de cadastro](./public/interface-do-formulario.png)  
*Exemplo do formulário para cadastro de usuários.*

![Lista de usuários cadastrados](./public/lista-de-usuarios)  
*Usuários exibidos em cards com opção de exclusão.*

## Como usar

1. Acesse o link do projeto hospedado (forneça o link aqui).  
2. Preencha o formulário com nome, idade e email.  
3. Clique em "Registrar".  
4. Após o cadastro, o usuário aparece em um card abaixo do formulário.  
5. É possível cadastrar múltiplos usuários, porém emails repetidos não são permitidos.  
6. Para excluir um usuário, use o botão de exclusão no card correspondente.

> Observação: o cadastro pode demorar um pouco devido ao uso da API.

## Exemplo de código

```jsx
// Exemplo do componente de formulário de cadastro
function CadastroUsuario() {
  // código React aqui...
}
