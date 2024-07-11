Todo:

[ ] - Subir para a produção
[X] - Aplicar responsividade
[ ] - Habilitar login
[ ] - Aplicar Testes
[ ] - Aplicar observabilidade
[ ] - Poder editar um hábito
[ ] - Poder excluir um hábito
[ ] - Página de settings
[ ] - Configurar as cores

Método de login

Usuário faz o login
pego o uid e guardo no cookie com uma expiração
e navego para a página de summary
Ao lado de criar um hábito vou ter um btn de navegaçao para settings
Em settings posso editar ou remover um hábito
Tbm posso deslogar

Interfaces

User {
id
name
displayName
email
uid
photoURL
refreshToken
}
