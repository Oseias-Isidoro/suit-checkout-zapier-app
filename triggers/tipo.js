module.exports = {
  key: 'tipo',
  noun: 'Tipo',

  display: {
    label: 'Novo Tipo',
    description: 'Trigger para eventos baseados em tipo (venda, carrinho, assinatura).'
  },

  operation: {
    inputFields: [
      {
        key: 'tipo',
        label: 'Tipo',
        required: true,
        type: 'string',
        choices: {
          'venda': 'Venda',
          'carrinho': 'Carrinho',
          'assinatura': 'Assinatura'
        },
        helpText: 'Selecione o tipo de evento que deseja monitorar.'
      }
    ],
    
    perform: (z, bundle) => {
      // Esta é uma função placeholder - você pode implementar a lógica real aqui
      // Por exemplo, fazer uma chamada à sua API
      return Promise.resolve([{
        id: Date.now(),
        tipo: bundle.inputData.tipo,
        timestamp: new Date().toISOString()
      }]);
    },

    sample: {
      id: 123456,
      tipo: 'venda',
      timestamp: '2024-01-01T00:00:00.000Z'
    }
  }
};

