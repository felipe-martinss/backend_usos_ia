# Registros de uso de IA

## Descrição
O projeto **Registros de uso de IA** tem como objetivo gerenciar e monitorar os registros de usos de IA.

O sistema permite realizar o cadastro de usuários, registrar informações, consultar, atualizar e excluir registros e etc.

---

## Diagrama de Classes
<p align="left">
  <img src="der_uso_ia.png" alt="Der">
</p>
<p align="left">
  <img src="diagrama.png" alt="Diagrama de Classes">
</p>

---

## Tecnologias
* JavaScript
* Node.js
* Express
* MySQL
* MySQL2
* Insomnia

---

## Passo a passo para testar

### 1. Clonar o repositório
```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acessar a pasta do projeto
```bash
cd NOME_DO_PROJETO
```

### 3. Instalar as dependências
```bash
npm install mysql2, express, cors
```

### 4. Configurar o banco de dados
* Abrir o MySQL.
* Executar o script SQL disponibilizado no projeto.
* O script criará o banco de dados `usos_ia`, as tabelas `usuario` e `usoia` e inserirá dados para testes.

### 5. Iniciar o servidor
```bash
npm run dev
```

O servidor estará disponível em:
```text
http://localhost:3000
```

### 6. Testar a API no Insomnia
Utilizar o Insomnia para realizar requisições HTTP e testar as funcionalidades do sistema.

---


## Testes do Insomnia

## Testes usuarios
### Login usuario
<p align="left">
  <img src="./docs/login.png" alt="Login usuario">
</p>

### Listar usuario
<p align="left">
  <img src="./docs/listar_usuario.png" alt="Listar usuario">
</p>

### Buscar usuario
<p align="left">
  <img src="./docs/buscar_usuario.png" alt="Buscar usuario">
</p>

### Cadastrar usuario
<p align="left">
  <img src="./docs/cadastrar_usuario.png" alt="Cadastrar usuario">
</p>

### Deletar usuario
<p align="left">
  <img src="./docs/deletar_usuario.png" alt="Deletar usuario">
</p>

### Atualizar usuario
<p align="left">
  <img src="./docs/atualizar_usuario.png" alt="Atualizar usuario">
</p>

## Testes usos IA
### Listar usos IA
<p align="left">
  <img src="./docs/usoia_listar.png" alt="Listar usos IA">
</p>

### Buscar usos IA
<p align="left">
  <img src="./docs/usoia_buscar.png" alt="Buscar usos IA">
</p>

### Postar usos IA
<p align="left">
  <img src="./docs/usoia_postar.png" alt="Postar usos IA">
</p>

### Deletar usos IA
<p align="left">
  <img src="./docs/usoia_deletar.png" alt="Deletar usos IA">
</p>

### Atualizar usos IA
<p align="left">
  <img src="./docs/usoia_atualizar.png" alt="Atualizar usos IA">
</p>

### Resumo usos IA
<p align="left">
  <img src="./docs/resumo_usoia.png" alt="Resumo usos IA">
</p>
