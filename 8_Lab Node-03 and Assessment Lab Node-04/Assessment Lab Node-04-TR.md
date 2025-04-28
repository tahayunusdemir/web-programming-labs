Assessment Lab Node-04
Objetivos
- Explorar a criação de Middleware
- Explorar a utilizar de Schemas para validação de dados com Mongoose
Instruções
Fase 1 - Middleware
1. abra o projeto do Assessment Lab Node-02
2. implemente uma middleware para que, sempre que receber um pedido (GET,
POST, PUT, PATCH, DELETE) faça um console.log do tipo de pedido
recebido e o dia/hora a que o recebeu.
Fase 2 - Routers
3. importar o router no início do ficheiro do controlador
4. substituir app por router
5. export do router no fim do ficheiro do controlador
6. no index.js, associe a rota /notas aos endpoints criados previamente
7. verifique se todos os seus endpoints estão a devolver um código de status
correto e se todos eles têm as validações corretas (ex: o que acontece se for
executado um GET a “/:OLA”?)
Fase 3 – Mongoose
8. instale o Mongoose
9. crie a pasta Models
10. crie o ficheiro notas.js para codificar os Schema das notas
11. nesse ficheiro, faça o import do mongoose e declare a variável schema.
12. crie um schema com os seguintes campos:
a. Código da Disciplina, número, obrigatório, único;
b. Nome do Professor, string, obrigatório;
c. Nome da disciplina, string, obrigatório;
d. Nota, número, mínimo 0, máximo 20, obrigatório.
13. ative a opção timestamps deste schema.
14. faça export deste modelo.
15. no index.js, comente o código de ligação à base de dados e insira o código
para efetuar a ligação através do mongoose
16. no ficheiro do controlador, faça import do Schema previamente criado
17. no ficheiro do controlador, substitua o collection pela variável importada na
alínea anterior
18. faça as alterações necessárias para que os endpoints fiquem a funcionar
correctamente e a gravar a informação na base de dados
19. verifique que todos os endpoints estão a funcionar
20. (pesquisa...) Como customizar os erros devolvidos no processo de validação
utilizando o Schema? 