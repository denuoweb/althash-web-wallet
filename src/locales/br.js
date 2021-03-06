export default {
  common: {
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    search: 'Procurar',
    copy: 'COPIAR',
    next: 'PRÓXIMO',
    question_mark: '? ',
    testnet: 'Testnet',
    mainnet: 'Htmlcoin Mainnet',
    menu: {
      create: 'Gerar Nova Wallet',
      create_from_mnemonic: 'Criar de Mnemonico',
      restore_from_mnemonic: 'Restaurar de Mnemonico',
      restore_from_wif: 'Restaurar de WIF',
      restore_from_mobile: 'Restaurar de Wallet Mobile',
      restore_from_key_file: 'Restaurar de Arquivo',
      restore_from_ledger: 'Restaurar de Ledger',
      view: 'Visualizar Informações da Wallet',
      dump_as_key_file: 'Arrastar arquivo chave',
      transactions: 'Visualizar Wallet Txs',
      safe_send: 'Envio Seguro',
      send: 'Enviar',
      request_payment: 'Solicitar Pagamento',
      create_token: 'Criar Token',
      create_contract: 'Criar Contrato',
      send_to_contract: 'Enviar para Contrato',
      call_contract: 'Procurar Contrato',
      settings: 'Configurações',
    },
    info: {
      address: 'Endereço',
      balance: 'Balanço',
      unconfirmed_balance: 'Balanço não Confirmado',
      priv_key: 'Chave Privada',
    },
    notify: {
      success: 'Sucesso',
      fail: 'Falhou',
      copy: 'Copiar',
      password: 'Senha',
      is_required: 'é requerida',
      parse: 'Analisar',
      file: 'Arquivo',
      password_is_not_same_as_the_old_one: 'Senha diferente da antiga',
      mnemonics_are_not_same_as_the_words_should_remember: 'Mnemoinco diferente das palavras que você deve lembrar',
      mnemonics_can_not_restore: 'Esse mnemônico não pode restaurar a wallet, verifique e tente novamente',
      address_is_not_same_as_the_old_one: 'Esse endereço não é igual ao antigo',
      from_address_is_not_same_as_the_wallet: 'Endereço de envio não é igual ao endereço da wallet',
      restore_wif_fail: 'Impossível restaurar a wallet a partir desse WIF',
      the_key_file_is_not_a_valid_format: 'Formato do arquivo chave inválido',
      restore_key_file_fail: 'Recuperação pelo arquivo chave falhou. Talvez a senha esteja incorreta',
      connect_ledger_fail: 'Falha ao conectar à Ledger. Reconecte sua ledger e tente novamente',
      token_contract_address_is_not_exists: 'Endereço de contrato do Token não existe, tente novamente',
    },
    mode: {
      normal: 'Normal',
      offline: 'Offline',
    }
  },
  mnemonic: {
    input_words: 'Digite suas palavras',
    label: 'M'
  },
  password: {
    enter: 'Digite sua senha',
    password: 'senha',
  },
  file_reader: {
    upload: 'Upload',
  },
  file_creator: {
    download: 'Clique aqui para baixar seu backup. Se o download não começar, você pode clicar com o botão direito e escolher "salvar como ..."',
  },
  ledger: {
    comm_fail: 'Falha ao conectar à Ledger. Reconecte sua ledger e tente novamente',
  },
  derive_path: {
    title: 'Escolhar o caminho',
    default: 'Caminho padrão',
    add_custom: 'Adicionar um caminho derivado',
    edit_custom: 'Editar um caminho derivado',
    del_custom: 'Deseja deletar esse caminho?',
    path_name: 'Nome do caminho',
    path: 'Caminho',
    prev_10: 'Voltar 10 endereços',
    next_10: 'Avançar 10 endereços',
  },
  safe_send: {
    title: 'Envio Seguro',
    from_address: 'Endereço de envio',
    to_address: 'Endereço de destino',
    amount: 'Quantidade',
    fee: 'Taxa',
    info: 'Você precisa de dois computadores(um online e um offline) e um dispositivo de armazenamento removível para finalizar o envio seguro. Se seguir as dicas abaixo, você não arriscará o vazamento da sua chave privada. Para o computador offline, vá em "Configurações"-"Modo", escolha "offline" e recupere sua wallet.',
    info1_online: 'Termine o formulário, salve o arquivo e copie para o computador offline. Termine o passo 2 no computador offline',
    info1_offline: 'Por favor, termine o passo 1 no computador online, copie o arquivo do computador on-line e vá para o passo 2',
    info2_online: 'Conclua esta etapa no computador offline, copie o arquivo do computador offline e vá para a etapa 3',
    info2_offline: 'Envie a cópia do arquivo do computador on-line e termine a assinatura, salve o arquivo e copie de volta para o computador on-line.',
    info3_online: 'Faça o upload do arquivo do computador off-line e conclua o envio seguro',
    info3_offline: 'Por favor, termine esta etapa no computador on-line',
  },
  send: {
    send_tokens: 'Enviar',
    enter_address: 'Digite seu endereço novamente (verificação dupla)',
    going_to_send: 'Você enviará ',
    to_address: 'ao endereço ',
    token_address: 'Endereço de Contrato do Token',
  },
  request_payment: {
    title: 'Solicitar pagamento',
  },
  create_token: {
    title: 'Criar Token',
    name: 'Nome do Token',
    symbol: 'Símbolo do Token',
    decimal: 'Decimais (São recomendados 8 decimais na HTMLCOIN)',
    total_supply: 'Fornecimento Máximo (UNIDADE: 1 Token)',
    confirm: 'Você confirma a criação do Token?',
  },
  create_contract: {
    title: 'Criar Contrato',
    confirm: 'Você confirma a publicação desse contrato?',
    compiler: 'Compilar',
  },
  send_to_contract: {
    title: 'Enviar ao Contrato',
    confirm: 'Você confirma?',
  },
  call_contract: {
    title: 'Encontrar Contrato',
    result: 'Resultado',
  },
  create: {
    title: 'Gerar Nova Wallet',
  },
  create_mnemonic: {
    title: 'Gerar Nova Wallet',
    remember: 'Lembre-se dos seguintes mnemônicos',
    remembered: 'Eu lembro de todos! Vamos checar',
  },
  restore: {
    title: 'Recuperar Wallet',
    mnemonic_warning: 'As palavras inseridas não são mnemônicos bip39. Se o seu endereço é gerado por esta carteira, por favor cancele esta caixa de diálogo e então verifique suas palavras(sem espaço, sem letras maiúsculas etc.). Se você conferiu suas palavras, continue.',
  },
  restore_wif: {
    title: 'Restaurar Wallet de WIF',
    priv_key: 'WIF',
  },
  restore_mobile: {
    title: 'Restaurar de Wallet Mobile',
  },
  restore_key_file: {
    title: 'Restaurar de Arquivo Chave',
    password_title: 'Insira sua senha para abrir sua wallet',
  },
  restore_ledger: {
    title: 'Restaurar de Ledger',
    usage: 'Tenha certeza que seu firmware e app estão atualizados. Conecte sua Ledger, abra o Html APP, e clique em "CONECTAR" para conectar.',
    download: 'Não tem o Html APP? Baixe em https://www.ledgerwallet.com/apps/manager',
    connect: 'CONECTAR',
  },
  view: {
    title: 'Visualizar Informações da Wallet',
  },
  view_tx: {
    title: 'Visualizar Wallet Txs',
    recent: 'Últimos 10 txs',
    tx: 'Tx: ',
    mined_at: 'Minerados em ',
    total_in: 'ENTRADAS: ',
    fee: 'TAXA: ',
    total_out: 'SAÍDAS: ',
  },
  dump_as_key_file: {
    title: 'Arrastar arquivo chave',
    password_title: 'Digite uma senha para encriptar sua wallet',
    warning: 'Relembre essa senha, caso esqueça esse arquivo de backup não poderá ser aberto',
  },
  config: {
    title: 'Configurações',
    lan: 'Idioma',
    network: 'Rede',
    mode: 'Modo',
  },
  warning: {
    title: 'Atenção',
    list: [
      'Não poderemos recuperar seu saldo caso visite um site phishing ou perca seu backup. Mantenha seus backups de senhas/mnemônicos.',
      'Não armazenamos suas chaves privadas e/ou mnemônicos nessa web wallet.',
      'Você como usuário é o responsável por seu saldo e por sua própria segurança.',
      'Tenha sempre um antivirus atualizado em seu computador.',
      'Mantenha suas senhas COM VOCÊ, não passe para qualquer outra pessoa.',
      'Se você restaurar de um Mnemônico, as palavras e senha devem ser exatamente corretas ou a wallet criará um outro endereço. Quando restaurando de um Mnemônico, confirme se o endereço do contrato está com você.',
    ]
  }
}
