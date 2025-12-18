// Autenticação simplificada - você pode personalizar isso conforme necessário
const test = async (z, bundle) => {
  // Implemente a lógica de teste de autenticação aqui
  // Por enquanto, apenas retorna sucesso
  return { status: 'ok' };
};

module.exports = {
  config: {
    type: 'session',
    fields: [
      {
        key: 'apiKey',
        label: 'API Key',
        type: 'string',
        required: true,
        helpText: 'Sua chave API para autenticação.'
      }
    ],
    test,
    connectionLabel: '{{apiKey}}',
  },
  befores: [],
  afters: [],
};
