# validadordedocumentos
O presente site, alia conhecimentos básicos de html5, css3 e vanilhaJS, com o intuito de entregar a todes, um sistema confiável para dizer se um CEP, CPF ou CNPJ é verídico, ou não (e, para alguns casos, interpretá-los). DESENVOLVIDO POR ESQUIZANDO, O PRESENTE SITE, EM SUA VERSÃO PRIMÁRIA (MVP), OBJETIVA APRESENTAR AO PÚBLICO UMA FERRAMENTA SIMPLES E OBJETIVA QUE FAZ A LEITURA DE DADOS E ENTREGA SE EQUIVALE A UM NÚMERO DE DOCUMENTO VÁLIDO.

## Dicas para melhor aproveitamento:
- Primeiro escolha o tipo de documento que você irá querer validar, clique em ver ele (CPF - CNPJ - CEP);
- Segundo digite o seu documento para validação (somente números sem máscaras ['xxxxxxxxxxx' ao invés de 'xxx.xxx.xxx-xx']);
- Terceiro clique em enviar e aguarde um tempinho que nosso algoritmo irá fazer o processo de leitura e validação.
- Quarto na parte de saída o nosso site irá apresentar o resultado da análise.

## Considerações técnicas do desenvolvedor:
- Infelizmente, o site pode não responder como desejado em celulares, pois seu MVP foi planejado para desktop, recomendamos que use seu celular em https://luizesquivel05.github.io/validadordedocumentos/#cpf (para cpf); https://luizesquivel05.github.io/validadordedocumentos/#cnpj (para CNPJ) https://luizesquivel05.github.io/validadordedocumentos/#cep (para CEP).
- Em versões futuras, o design responsivo está planejado, nosso foco agora está em performatizar o algoritmo, visando alcançar seu melhor desempenho possível;
- Pedimos desculpa, mas nossos desenvolvedores ainda estão em processo de aprendizado e pode ser que tenha alguns erros de ordem téecnica.

## Considerações de desenvolvimento:
- A ferramenta teve seu design criado no figma apoiado com o site paletadecores.com;
- Sua marcação de elementos foi feita pela tecnologia HTML5;
- Sua estilização de elementos foi usado a tecnologia CSS3;
- Seu algoritmo foi colocado pela tecnologia VanilhaJS.

## Como fizemos a validação do CPF?
- Primeiro vimos se tem 12 dígitos (sim? potencial cpf válido. não? não é válido);
- Segundo verificamos o primeiro dígito de segurança (somatório dos 10 primeiros dígitos pela sequência decrescente de 10 a 2, depois multiplica por 10 e pega a razão da divisão por 11);
- Terceiro verificamos o segundo dígito de segurança (somatório dos 11 primeiros dígitos pela sequência decrescente de 11 a 2, depois multiplica por 10 e pega a razão da divisão por 11);
- Quarto verificamos se os 2 últimos díigitos dados confere com os 2 de segurança.


## Como fizemos a validação do CNPJ?
- Primeiro vimos se tem 14 dígitos (sim? potencial cnpj válido. não? não é válido);
- Segundo verificamos o primeiro dígito de segurança (somatório dos 12 primeiros dígitos pela sequência 5 4 3 2 9 8 7 6 5 4 3 2, depois multiplica por 10 e pega a razão da divisão por 11);
- Terceiro verificamos o segundo dígito de segurança (somatório dos 13 primeiros dígitos pela sequência 6 5 4 3 2 9 8 7 6 5 4 3 2, depois multiplica por 10 e pega a razão da divisão por 11);
- Quarto verificamos se os 2 últimos díigitos dados confere com os 2 de segurança.
- Em um quinto momento, foi visto se o 11º dígito, caso seja 1 é entregue sede e caso seja 2, 3 ou 4 é filial. Se for um dígito diferente, então não é cnpj válido.

## Como fizemos a validação do CEP?
- Foi verificado se o número apresenta 8 dígitos (quantidade de dígitos do CEP).
- O CEP, diferente do CNPJ ou CPF não possui dígitos de segurança.

## Como fizemos a validação da conta?