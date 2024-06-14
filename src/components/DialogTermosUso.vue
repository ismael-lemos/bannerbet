<template>
  <v-dialog
        v-model="dialog"
        @keydown.esc="dialog = false"
        width="50em"
        height="100%"
        persistent
        scrollable
    >
        <template v-slot:activator="{ on, attrs }">
            <a
                v-bind="attrs"
                v-on="on"
            >
                termos de uso
            </a>
        </template>
        <v-card>
            <v-card-title class="text-h5 justify-center grey lighten-2">
                Termos de Uso
            </v-card-title>
            <v-card-text>
                <p>
                    1. Termos
                    Ao acessar ao site Bannercotação, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, não deverá utilizar nossos serviços. Caso contrátio, entenderemos que você concorda com os termos.

                    2. Uso de Licença
                    Neste Termo de Uso, gostaríamos de fornecer informações detalhadas sobre a licença de uso dos serviços e as restrições aplicáveis.

                    a) Permissão para Baixar e Utilizar os Serviços: É concedida permissão para baixar e utilizar todos os serviços oferecidos pela Bannercotação, tanto para uso pessoal como para uso comercial, excluindo a revenda, conforme detalhado no parágrafo seguinte e no tópico de afiliados.

                    b) Restrição de Cópia e Uso dos Softwares: Esta licença não garante a você uma cópia do site Bannercotação e dos demais softwares operados pela empresa, a menos que os softwares sejam oferecidos explicitamente. Qualquer cópia, total ou parcial, sem a devida autorização, constitui violação dos direitos autorais da Bannercotação e estará sujeita às penalidades previstas em lei.

                    c) Restrições de Uso do Conteúdo, Softwares e Serviços: É expressamente proibido copiar, reproduzir, modificar, distribuir, transmitir, exibir, publicar ou criar trabalhos derivados com base no conteúdo, nos softwares ou nos serviços da Bannercotação sem a autorização prévia e por escrito da empresa. Qualquer uso não autorizado constitui violação dos direitos autorais e está sujeito a medidas legais.

                    d) Restrições à Revenda de Mídias: Esta licença não garante o direito de revender as mídias baixadas como se fossem de sua autoria. Você pode utilizar as mídias para fazer o marketing de uma ou mais bancas que estejam devidamente registradas na Bannercotação. No entanto, a revenda das mídias para outras bancas como se fossem de sua autoria é estritamente proibida.

                    3. Isenção de responsabilidade
                    Neste Termo de Uso, gostaríamos de fornecer informações detalhadas sobre a isenção de responsabilidade relacionada aos materiais disponíveis no site.

                    a) Materiais Fornecidos "Como Estão": Os materiais disponíveis no site da Bannercotação são fornecidos "como estão". A Bannercotação não oferece garantias, expressas ou implícitas, e, por meio deste, isenta-se e nega todas as outras garantias, incluindo, mas não se limitando a, garantias implícitas ou condições de comercialização e adequação a um fim específico.

                    b) Precisão e Resultados Prováveis: A Bannercotação não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionados a esses materiais. Isso inclui a isenção de responsabilidade quanto a erros, omissões, interrupções, atrasos ou quaisquer imprecisões nos materiais disponíveis.

                    c) Sites Vinculados: A Bannercotação não garante ou faz qualquer representação em relação aos materiais ou conteúdos presentes em sites vinculados a este site. A inclusão de qualquer link não implica endosso ou aprovação por parte da Bannercotação do site vinculado. O usuário é responsável por acessar e utilizar esses sites vinculados por conta e risco próprios.

                    d) Limitação de Responsabilidade: Em nenhuma circunstância, a Bannercotação ou seus representantes serão responsáveis por quaisquer danos, incluindo, sem limitação, danos diretos, indiretos, incidentais, especiais, punitivos ou consequenciais decorrentes do uso ou da incapacidade de usar os materiais disponíveis no site ou em sites vinculados.

                    4. Limitações
                    Neste Termo de Uso, gostaríamos de fornecer informações detalhadas sobre a limitação de responsabilidade aplicável ao uso dos materiais disponíveis na Bannercotação.

                    a) Danos e Perdas: Em nenhum caso, a Bannercotação ou seus fornecedores serão responsáveis por quaisquer danos, incluindo, sem limitação, danos por perda de dados, lucros cessantes ou devido à interrupção dos negócios, decorrentes do uso ou da incapacidade de usar os materiais disponíveis no Bannercotação.

                    b) Notificação da Possibilidade de Danos: Essa limitação de responsabilidade se aplica mesmo que a Bannercotação ou um representante autorizado da empresa tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. As informações e materiais disponibilizados são fornecidos com base em sua disponibilidade e sem qualquer garantia de desempenho ou resultados específicos.

                    c) Limitações Jurisdicionais: Algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequenciais ou incidentais. Portanto, as limitações mencionadas podem não se aplicar a você, e você pode ter direitos legais adicionais de acordo com as leis de seu país.

                    5. Precisão dos materiais
                    Neste Termo de Uso, gostaríamos de fornecer informações detalhadas sobre a precisão e atualização dos materiais exibidos no site.

                    a) Possibilidade de Erros Técnicos, Tipográficos e Fotográficos: Os materiais exibidos no site da Bannercotação podem conter erros técnicos, tipográficos ou fotográficos. Embora nos esforcemos para oferecer informações precisas e atualizadas, não garantimos que todos os materiais em nosso site sejam isentos de erros.

                    b) Ausência de Garantia de Precisão, Completude e Atualidade: A Bannercotação não garante que qualquer material em seu site seja preciso, completo ou atual. Os materiais são fornecidos com base em sua disponibilidade e podem não refletir as informações mais recentes ou atualizadas.

                    c) Alterações nos Materiais Sem Aviso Prévio: A Bannercotação reserva-se o direito de fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. Essas alterações podem incluir atualizações, correções, adições ou remoções de conteúdo. No entanto, não nos comprometemos a atualizar os materiais de forma sistemática ou em tempo real.

                    6. Links
                    Neste Termo de Uso, gostaríamos de informar sobre os sites vinculados e esclarecer a responsabilidade da Bannercotação em relação ao conteúdo desses sites.

                    a) Sites Vinculados: A Bannercotação pode conter links ou referências a outros sites que não são de propriedade ou controlados pela empresa. Esses sites vinculados são fornecidos apenas para conveniência e informação dos usuários.

                    b) Uso por Conta e Risco do Usuário: O uso de qualquer site vinculado é de total responsabilidade do usuário. Ao acessar e utilizar um site vinculado, o usuário concorda que a Bannercotação não é responsável por qualquer dano, prejuízo ou consequência resultante desse uso.

                    c) Exclusão de Responsabilidade: A Bannercotação isenta-se de qualquer responsabilidade relacionada ao conteúdo, precisão, opiniões, políticas, práticas de privacidade ou qualquer outro aspecto dos sites vinculados. O usuário é encorajado a revisar os termos de uso e políticas de privacidade desses sites antes de utilizá-los.

                    7. Bancas
                    Neste Termo de Uso, gostaríamos de fornecer informações detalhadas sobre o uso de bancas e as regras associadas a essa funcionalidade.

                    a) Uso de uma Banca Gratuita: Ao utilizar a Bannercotação, você concorda que pode utilizar apenas uma banca de forma gratuita, independentemente de possuir ou não um plano pago. O acesso a uma única banca gratuita está disponível para todos os usuários.

                    b) Taxa para Adicionar uma Nova Banca: Caso deseje adicionar uma nova banca além daquela já disponibilizada gratuitamente, é necessário realizar o processo de adição mediante o pagamento de uma taxa. A taxa para adicionar uma nova banca deve ser negociada com o suporte, considerando as condições estabelecidas pela empresa.

                    c) Burlando o Suporte para Adicionar Várias Bancas sem Taxa Aplicável: Qualquer tentativa de burlar o suporte e adicionar várias bancas diferentes sem o pagamento da taxa aplicável é estritamente proibida. Caso seja identificado que o usuário está tentando contornar o processo estabelecido, medidas serão tomadas, podendo resultar no bloqueio da conta por tempo indeterminado.

                    d) Logo da Banca Visível em pelo menos 60% da Imagem Final: Ao utilizar a funcionalidade de bancas no Bannercotação, é necessário garantir que a imagem final contenha a logo da banca de forma visível, ocupando pelo menos 60% da imagem. Imagens totalmente transparentes ou com a logo pequena demais não estão dentro do escopo de aceitação.

                    e) Remoção da Banca por Violação do Termo: Caso haja violação das regras estabelecidas neste Termo de Uso, a Bannercotação reserva-se o direito de remover a banca a qualquer momento, sem aviso prévio. O usuário será notificado sobre o ocorrido e as medidas tomadas.

                    8. Compartilhamento de contas
                    Neste Termo de Uso, gostaríamos de informar sobre a importância do uso individual das contas, com exceção de usuários específicos que tenham acesso comunitário, como parceiros autorizados.

                    a) Uso Individual da Conta: Recomendamos que todas as contas da Bannercotação sejam utilizadas individualmente pelos usuários registrados. Embora o compartilhamento da conta não seja proibido, é importante ressaltar que o compartilhamento com terceiros pode gerar riscos de responsabilidade para o usuário.

                    Dos riscos:

                    a) Exposição de informações confidenciais: O compartilhamento da conta pode resultar na exposição de informações confidenciais, como dados pessoais, registros de atividades e informações financeiras.

                    b) Uso indevido da conta: Terceiros podem fazer uso indevido da conta compartilhada, realizando ações não autorizadas ou prejudiciais, o que pode afetar a segurança e a integridade da conta.

                    c) Responsabilidade por atividades realizadas: O usuário que compartilha a conta é responsável pelas ações realizadas pelos terceiros com acesso à conta, incluindo atividades ilegais, violações de direitos autorais, entre outros.

                    d) Perda de controle sobre a conta: O compartilhamento da conta pode resultar na perda de controle sobre o seu uso, incluindo alterações indesejadas nas configurações e na estrutura da conta.

                    Das responsabilidades:

                    a) O usuário é o único responsável por todas as atividades realizadas em sua conta, incluindo o compartilhamento com terceiros. Recomendamos que o usuário avalie cuidadosamente os riscos associados ao compartilhamento da conta antes de tomar essa decisão.

                    b) Proteção da Integridade do Sistema: A Bannercotação não se responsabiliza por quaisquer problemas ou consequências resultantes do compartilhamento da conta com terceiros. Recomendamos que o usuário tome as medidas necessárias para proteger a segurança e a integridade de sua conta.

                    9. Comprovantes de pagamento
                    Neste Termo de Uso, gostaríamos de esclarecer as condições e regras relacionadas ao processo de pagamento e envio de comprovante de pagamento.

                    a) Autenticidade do Comprovante de Pagamento: Ao realizar o processo de pagamento e enviar o comprovante de pagamento para o suporte, você declara e garante que o comprovante de pagamento enviado é autêntico e verdadeiro. É responsabilidade do cliente fornecer um comprovante de pagamento legítimo e não alterado.

                    b) Detecção de Comprovante Fraudulento: Caso seja detectado que o comprovante de pagamento enviado é fraudulento, ou que dados foram alterados de forma a ludibriar o suporte, medidas serão tomadas para proteger a integridade do sistema e da comunidade de usuários. Nesse caso, sua conta pode ser banida por tempo indeterminado e sem aviso prévio.

                    c) Consequências da Violação: O banimento da conta, conforme mencionado acima, implica na perda permanente do acesso aos serviços oferecidos pela Bannercotação (com a conta atual do Usuário). Além disso, outras medidas legais podem ser tomadas, se necessário, para salvaguardar os interesses da empresa e dos usuários legítimos.

                    d) Responsabilidade do Cliente: Ao realizar o processo de pagamento e enviar o comprovante de pagamento, é de responsabilidade exclusiva do cliente garantir a autenticidade e veracidade das informações fornecidas. O cliente deve assegurar que os dados do comprovante de pagamento não sejam alterados ou manipulados de forma a enganar ou ludibriar o suporte.

                    10. Gerador de vídeos
                    Neste Termo de Uso, gostaríamos de esclarecer as condições e regras relacionadas ao uso da extensão, especialmente no que diz respeito à quantidade de vídeos gerados e aos modelos de acesso disponíveis.

                    a) Plano de Vídeos Ilimitado e Modelos com Restrições: Oferecemos um plano de vídeos ilimitado que permite que você, como cliente, possa gerar vídeos de forma ilimitada. No entanto, também disponibilizamos outros modelos de acesso com custos mais baixos, porém com restrições em relação à quantidade de vídeos que você pode gerar. A quantidade de vídeos permitida varia de acordo com o modelo de acesso escolhido.

                    b) Lentidão no Processamento de Vídeos: É importante estar ciente de que, em determinadas circunstâncias, pode ocorrer lentidão no processamento de um vídeo. Devido à natureza do processo de geração de vídeos, fatores como tamanho do arquivo, complexidade da edição e demanda do servidor podem afetar o tempo de processamento. Faremos o possível para otimizar a velocidade de processamento, mas não podemos garantir tempos de resposta imediatos em todas as situações.

                    c) Responsabilidade por Vídeos Gerados: Embora nosso objetivo seja fornecer uma experiência de geração de vídeos satisfatória, não nos responsabilizamos por qualquer vídeo gerado acidentalmente, mesmo que exceda sua cota permitida. É responsabilidade do cliente revisar e confirmar as configurações antes de iniciar o processo de geração de vídeos, evitando assim a produção de vídeos indesejados.

                    d) Regras e Proporcionalidade: Para os modelos de acesso com restrições, algumas regras são aplicadas. A quantidade de vídeos que você pode gerar está diretamente relacionada ao plano de vídeos escolhido.

                    11. Erros e bugs
                    Todo sistema é passível de falhas, logo, a Bannercotação não é uma exceção. Em alguns casos raros, bugs ou erros podem ser encontrados durante a exploração da aplicação.

                    Erros ou bugs que prejudicam você
                    Se, durante o uso da plataforma, você encontrar algo que não funciona da maneira correta e que de alguma forma prejudica sua produção, você deve entrar em contato conosco e, se possível, anexar prints do ocorrido.

                    Erros ou bugs que prejudicam a plataforma Bannercotação
                    O uso indevido de quaisquer erros ou bugs da plataforma Bannercotação é estritamente proibido. Caso, no nosso processo de análise, detectarmos alguma violação por parte do usuário, a Bannercotação tem o total direito de banir a conta sem aviso prévio.

                    12. Banners
                    Neste Termo de Uso, gostaríamos de fornecer informações detalhadas sobre os requisitos para a geração de banners e vídeos.

                    a) Inclusão da Logo da Banca nos Banners: Você está ciente de que a Bannercotação permite a geração de banners somente se estes possuírem pelo menos uma imagem da logo da sua banca. É obrigatório incluir a logo da banca nos banners gerados, conforme estabelecido pela empresa.

                    b) Requisito Válido para o Módulo de Vídeos: O requisito de inclusão da logo da banca também se aplica ao módulo de vídeos. Ao utilizar esse recurso, é necessário que pelo menos uma imagem da logo da banca seja visível no vídeo final gerado.

                    c) Geração de Banners para Bancas Cadastradas: Você está ciente de que pode gerar quantos banners quiser, desde que sejam destinados exclusivamente a bancas cadastradas no sistema. A geração de banners está restrita às bancas devidamente registradas e autorizadas na Bannercotação.

                    d) Restrição de Geração para Bancas Não Cadastradas: A geração de banners não é permitida para bancas que não estejam cadastradas no sistema da Bannercotação. Certifique-se de que todas as bancas para as quais você deseja gerar banners estejam devidamente registradas antes de utilizar o serviço.

                    13. Afiliados
                    As revendas devem ser realizadas somente através do nosso programa de afiliados. Não é permitida a revenda por outros meios externos ao programa. Seja um afiliado e tenha acesso a benefícios exclusivos para revender acesso ao nosso gerador de forma oficial. Entre em contato com o suporte para saber mais.

                    14. Modificações das mídias geradas para revenda
                    Não é permitido que você edite as mídias geradas pelos nossos motores de geração de banner e vídeo (ou quaisquer outros), com informações de outra casa de entretenimento esportivo no INTUITO de prativar concorrência, isto é, revenda do nosso próprio produto. As mídias devem ser utilizadas como fornecidas. Isso visa evitar a concorrência interna e proteger a integridade de nossos produtos e serviços. Tais medidas podem levar a Bannercotação a abrir um processo investigativo, para assim determinar as origens de tais modificações. Você está ciente de que qualquer violação desta política pode resultar em medidas disciplinares, tais como banimento ou bloqueio da conta, além de outras ações cabíveis. Além disso, a Bannercotação sente-se no direito de investigar e aplicar tais medidas para demais contas, independente da data de criação. Você entende também que esta é uma violação grave, e que podemos dar banimento instantâneo a qualquer momento, sem aviso prévio e podendo ter o direito de reembolso negado, como afirmado no tópico 17.

                    15. Proibição de uso de softwares ou interferência humana para burlar algoritmos da BannerCotação
                    a) Proibição de Uso de Softwares e Interferência Humana: É expressamente proibido o uso de softwares ou qualquer tipo de interferência humana para burlar ou manipular os algoritmos ou qualquer outra funcionalidade da plataforma da BannerCotação.

                    b) Violação dos Termos de Uso e Legislação Aplicável: Esta prática constitui uma violação dos termos de uso da plataforma e das leis aplicáveis.

                    c) Consequências por Violação: O descumprimento desta política pode resultar em ações legais e/ou na suspensão ou encerramento imediato da conta do usuário.

                    d) Medidas de Segurança e Integridade da Plataforma: A BannerCotação reserva-se o direito de adotar medidas técnicas para detectar e prevenir o uso dessas práticas.

                    e) Garantia da Integridade e Segurança da Plataforma: Tais medidas visam assegurar a integridade e segurança da plataforma para todos os usuários.

                    16. Remoção da conta
                    Neste Termo de Uso, gostaríamos de esclarecer nossa política em relação à remoção de conta do Usuário e os procedimentos envolvidos.

                    a) Reserva de Direito de Não Remover a Conta: Nos reservamos o direito de não remover a conta do Usuário em caso de violação dos termos de uso ou suspeita de violação. Embora tenhamos o compromisso de manter a integridade da Plataforma, a decisão de remover uma conta não é automática e será avaliada caso a caso, considerando a gravidade da violação ou suspeita.

                    b) Processamento da Solicitação de Remoção: Caso o Usuário solicite a remoção de sua conta e não tenha violado os termos de uso, a Plataforma poderá não remover imediatamente a conta e pode levar algum tempo para processar a solicitação. Isso se deve a processos internos de verificação e segurança, garantindo que a solicitação seja tratada adequadamente.

                    c) Notificação sobre a Remoção da Conta: Em caso de decisão de remoção da conta, o Usuário será notificado sobre a ação tomada e os motivos que levaram a essa decisão, sempre que possível. Faremos o possível para fornecer uma comunicação clara e transparente em relação à remoção da conta.

                    d) Salvaguarda de Dados e Informações Após a remoção da conta, a Plataforma tomará as medidas necessárias para proteger e salvaguardar os dados e informações pessoais do Usuário, de acordo com nossa política de privacidade. No entanto, é importante ressaltar que alguns dados ou informações podem permanecer em nossos registros por um período de tempo razoável, de acordo com as obrigações legais ou regulatórias aplicáveis.

                    17. Reembolso
                    Nesta política de reembolso, gostaríamos de esclarecer os termos e condições relacionados ao reembolso, proporcionando transparência e clareza aos nossos clientes.

                    a) Período de Solicitação de Reembolso: O cliente tem até 7 (sete) dias a partir da data de compra do produto ou serviço para solicitar um reembolso. Para ser elegível ao reembolso, é necessário que o uso do produto ou serviço adquirido não tenha violado os termos de uso estabelecidos.

                    b) Restrições de Reembolso: Caso o uso do produto ou serviço adquirido viole os termos de uso estabelecidos, a bannercotação irá abrir um processo de análise para decidir se cabe ou não reembolso, onde vários critérios serão levados em consideração. É responsabilidade do cliente garantir o uso adequado e em conformidade com os termos de uso durante o período de avaliação ou utilização do produto ou serviço.

                    18. Bloqueio da conta
                    Em caso de violação dos termos de uso da Plataforma, nos reservamos o direito de bloquear a conta do Usuário e banir o acesso à Plataforma. A decisão de bloqueio ou banimento será baseada na gravidade da violação, e poderá ser realizada de forma imediata, sem aviso prévio.

                    a) Processo Investigativo: Caso seja necessário, poderá ser aberto um processo investigativo para associar outras contas a esse Usuário, com o objetivo de garantir a integridade da Plataforma e evitar abusos contínuos. Durante o processo investigativo, poderemos tomar as medidas necessárias para proteger a comunidade de Usuários e a segurança da Plataforma.

                    b) Restituição de Valores: O Usuário reconhece que o bloqueio de conta e banimento podem ser realizados sem aviso prévio e não garantem a restituição de quaisquer valores eventualmente pagos pelo Usuário. Conforme descrito no tópico 17 dos Termos de Uso.

                    19 .Responsabilidade pelo conteúdo enviado pelo usuário
                    O Usuário reconhece que é expressamente proibido enviar ou publicar conteúdo ofensivo, racista, discriminatório, difamatório, ilegal ou qualquer outro conteúdo que possa violar os direitos de terceiros ou as leis aplicáveis. A empresa reserva-se o direito de determinar, a seu exclusivo critério, o que constitui conteúdo proibido.

                    a) Responsabilidade pelo Conteúdo: O Usuário reconhece e concorda que qualquer conteúdo ofensivo, difamatório, ilegal ou prejudicial que enviar ou publicar na Plataforma é de sua exclusiva responsabilidade. A empresa não assume qualquer responsabilidade pelo conteúdo gerado pelo Usuário. O Usuário será integralmente responsável por quaisquer consequências legais ou danos causados pelo conteúdo que enviar ou publicar.

                    b) A empresa reserva-se o direito de tomar medidas disciplinares, incluindo, mas não se limitando a, bloqueio de conta e banimento, caso o Usuário viole as políticas de conteúdo proibido. A decisão de aplicar tais ações disciplinares será tomada a critério exclusivo da empresa, sem a obrigação de fornecer aviso prévio ou justificativa.

                    20. Pagamento e acesso
                    O acesso à Plataforma da Bannercotação é concedido mediante o pagamento do valor correspondente para o plano escolhido, quando aplicável. O preço e os detalhes específicos de cada plano estão disponíveis em nosso site. Ao adquirir um plano pago, você terá acesso aos recursos e funcionalidades especificados para o período de tempo estabelecido no momento da compra.

                    a) Limitações de Acesso Vitalício: O Usuário reconhece e concorda que o pagamento do plano não garante um acesso vitalício à Plataforma. O acesso é concedido apenas pelo período de tempo estabelecido no momento da compra, de acordo com o plano escolhido. Após o término do período contratado, o acesso à Plataforma poderá ser suspenso, a menos que você renove seu plano ou adquira um novo.

                    b) Além dos planos pagos, também oferecemos um plano gratuito que pode ser utilizado por tempo indeterminado. O plano gratuito permite o acesso a determinados recursos e funcionalidades, conforme especificado em nosso site ou na descrição do plano. É importante observar que, ao optar pelo plano gratuito, alguns recursos disponíveis nos planos pagos podem estar limitados ou indisponíveis.

                    c) Pagamentos e Renovações: Os planos adquiridos não são renovados automaticamente ao término do período contratado. Caso deseje continuar utilizando a Plataforma após o término do seu plano, renovar o plano atual. Não realizamos a renovação automática, garantindo que você tenha o controle total sobre a continuidade do serviço.

                    21. Plano gratuito
                    Oferecemos um plano gratuito que pode ser utilizado por tempo indeterminado. No entanto, reservamo-nos o direito de fazer modificações no plano gratuito sem aviso prévio. Essas modificações podem afetar significativamente os benefícios, recursos e funcionalidades fornecidos ao Usuário.

                    a) Notificação de Modificações: Embora não seja obrigatório, faremos o possível para fornecer aviso prévio sobre quaisquer modificações no plano gratuito. No entanto, a falta de notificação prévia não implica que as modificações não possam ser implementadas imediatamente. É responsabilidade do Usuário verificar regularmente quaisquer atualizações ou modificações relacionadas ao plano gratuito.

                    b) As modificações no plano gratuito podem resultar em restrições adicionais, remoção de recursos ou funcionalidades anteriormente disponíveis ou qualquer outra alteração que afete a experiência do Usuário. Entendemos que essas modificações podem ter um impacto significativo na utilização da plataforma e faremos esforços razoáveis para minimizar quaisquer inconveniências causadas.

                    22. Teste gratuito
                    Reservamo-nos o direito de oferecer ou não um teste gratuito da Plataforma, a critério exclusivo da empresa. Caso seja disponibilizado, o teste gratuito permite ao Usuário explorar e avaliar os recursos e funcionalidades da Plataforma por um período determinado, conforme estabelecido pelo suporte ou diretamente pela plataforma. O Usuário será informado claramente sobre a duração do período de teste.

                    a) Ao utilizar a Plataforma durante o período de teste gratuito, o Usuário reconhece que está ciente dessa política e concorda em cumprir os termos e condições estabelecidos neste Termo de Uso, bem como quaisquer termos específicos aplicáveis ao teste gratuito.

                    b) Durante o período de teste gratuito, podem existir limitações nos recursos, funcionalidades ou acesso à Plataforma em comparação com os planos pagos. Essas limitações podem ser estabelecidas pela empresa com o intuito de fornecer uma amostra do serviço sem conceder acesso completo a todos os recursos disponíveis nos planos pagos.

                    c) Tanto a empresa quanto o Usuário têm o direito de cancelar o teste gratuito a qualquer momento, sem necessidade de justificativa. No caso de cancelamento por parte do Usuário antes do término do período de teste, o acesso à Plataforma será encerrado e não haverá cobrança ou obrigações financeiras associadas.

                    23. Versões beta
                    As versões beta são lançadas com o intuito de fornecer aos usuários acesso antecipado a novos recursos e funcionalidades em desenvolvimento, além de permitir que eles compartilhem feedback valioso para melhorar a qualidade do nosso serviço.No entanto, é fundamental que você compreenda as condições associadas às atualizações beta da Bannercotação antes de prosseguir. Neste Termo de Uso, gostaríamos de esclarecer que as atualizações beta podem não funcionar perfeitamente e podem apresentar erros, instabilidade ou outros problemas que podem afetar sua experiência de uso. Portanto, recomendamos que você leve isso em consideração antes de optar por utilizar as atualizações beta.

                    1. Responsabilidades do Usuário

                    Ao utilizar as atualizações beta da Bannercotação, você compreende e concorda que:

                    a) As atualizações beta são fornecidas "no estado em que se encontram" e não garantimos que elas estejam livres de erros, bugs, problemas de desempenho ou falhas de segurança. Você reconhece que esses problemas podem ocorrer e concorda em utilizá-las por sua própria conta e risco.

                    b) É sua responsabilidade fornecer feedback sobre as atualizações beta, incluindo relatar quaisquer erros, problemas ou sugestões de melhoria. Valorizamos seu feedback e trabalharemos para corrigir quaisquer problemas identificados, mas não podemos garantir um prazo para resolução ou implementação de alterações específicas.

                    c) Ao utilizar as atualizações beta, você concorda em compartilhar informações sobre sua experiência de uso, incluindo dados de desempenho, logs e outras informações relevantes que nos auxiliem a melhorar a qualidade do serviço.

                    24. Segurança dos Dados do Usuário
                    A segurança dos seus dados é uma prioridade para nós. Empregamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição acidental ou ilícita. Utilizamos práticas recomendadas da indústria para garantir a confidencialidade, integridade e disponibilidade dos dados que você nos fornece.

                    a) Não Exposição a Terceiros: Comprometemo-nos a não expor seus dados pessoais a terceiros, exceto quando expressamente autorizado por você ou conforme exigido por lei. Entretanto, é importante observar que, devido à natureza dos serviços prestados e aos riscos associados à transmissão de dados pela Internet, não podemos garantir a segurança absoluta dos dados durante a transmissão para ou a partir do nosso serviço.

                    b) Limitações de Gerenciamento: Embora tomemos medidas adequadas para proteger seus dados, é importante ressaltar que não temos controle sobre as ações de terceiros ou sobre os métodos que eles possam empregar para acessar, adquirir ou explorar indevidamente informações armazenadas em nossos sistemas. Não podemos assumir responsabilidade por ações de terceiros que possam comprometer a segurança dos seus dados, mesmo que tenhamos adotado medidas de segurança razoáveis.

                    c) Responsabilidades do Usuário: Ao utilizar os serviços da Bannercotação, você concorda em fornecer informações precisas e atualizadas, bem como em manter a confidencialidade de suas credenciais de acesso. Você é responsável por proteger a segurança de sua própria conta e deve notificar-nos imediatamente em caso de qualquer atividade suspeita ou não autorizada.

                    25. Bloqueio de criação de conta
                    Neste Termo de Uso, gostaríamos de informar sobre a possibilidade de bloqueio da criação de conta, caso o endereço IP de acesso esteja relacionado a outro usuário que tenha sido banido uma ou mais vezes, independentemente do motivo do banimento.

                    a) Bloqueio de Criação de Conta: Nos reservamos o direito de bloquear a criação de conta caso o endereço IP de acesso esteja relacionado a outro usuário que tenha sido banido uma ou mais vezes. Essa medida é tomada visando a proteção da integridade do sistema e a garantia de um ambiente seguro para todos os usuários.

                    b) Independência do Motivo do Banimento: O bloqueio da criação de conta baseado no relacionamento do endereço IP com usuários banidos é independente do motivo do banimento anterior. Independentemente da razão do banimento anterior, se o endereço IP estiver associado a uma conta banida, a criação de uma nova conta será bloqueada.

                    c) Identificação do Endereço IP: A identificação do endereço IP é realizada com o objetivo de detectar possíveis associações com contas banidas anteriormente. Essa verificação é realizada para garantir a aplicação consistente das políticas e proteger a comunidade de usuários, bem como o ecossistema da empresa.

                    d) Medidas de Segurança e Integridade: O bloqueio da criação de conta baseado no relacionamento do endereço IP com usuários banidos tem como finalidade garantir a segurança e a integridade da Plataforma. Essa medida contribui para evitar abusos e comportamentos inadequados, promovendo um ambiente saudável e seguro para todos os usuários.

                    26. As odds
                    Neste Termo de Uso, gostaríamos de informar sobre a fonte das odds dos jogos disponíveis em nossa plataforma.

                    a) Fonte das Odds: As odds apresentadas nos jogos disponíveis no Bannercotação não são originadas diretamente do site do cliente. Elas são baseadas em informações e dados coletados de outros provedores de jogos de azar renomadas e de grande reconhecimento no mercado.

                    b) Utilização de Fontes Confiáveis: Nos esforçamos para utilizar fontes confiáveis e atualizadas para fornecer as odds mais precisas e relevantes aos usuários da Bannercotação. No entanto, é importante ressaltar que as odds são fornecidas como referência e podem estar sujeitas a alterações e variações ao longo do tempo.

                    c) Responsabilidade do Usuário: O usuário reconhece que as odds apresentadas no Bannercotação são baseadas em informações provenientes de outras casas de jogos de azar.

                    d) Limitação de Responsabilidade: A Bannercotação não se responsabiliza pela precisão, atualização ou confiabilidade das odds apresentadas. A utilização das odds disponíveis no site é por conta e risco do usuário, e qualquer decisão tomada com base nessas informações é de sua inteira responsabilidade.

                    27. Presença da marca da bannercotação em alguns banners/vídeos
                    Alguns banners da bannercotação (assim como vídeos) podem conter a logomarca da bannercotação e você está ciente disso. No caso dos banners editáveis, você pode remover a qualquer monento.

                    Modificações
                    A Bannercotação pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão mais atual desses termos de serviço.

                    Lei aplicável
                    Estes termos e condições são regidos e interpretados de acordo com as leis da Bannercotação e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.

                    E por fim
                    Ao utilizar nossos serviços, entendemos que você LEU completamente esses termos, assim como CONCORDA com cada um deles.
                </p>
            </v-card-text>
            <v-card-actions class="justify-space-around">
                <v-flex xs6>
                    <v-btn
                        block 
                        @click="dialog = false"
                        text
                        color="error"
                    >
                        Rejeitar
                    </v-btn>
                </v-flex>
                <v-divider vertical></v-divider>
                <v-flex xs6>
                    <v-btn
                        block
                        @click="$emit('aceitarTermos')"
                        text
                        color="success"
                    >
                        Aceitar
                    </v-btn>
                </v-flex>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data: () => ({
        dialog: false
    })
}
</script>

<style>

</style>