export default {
  title: 'Get id params object',
  additionalProperties: false,
  required: ['cityId', 'month'],
  type: 'object',
  properties: {
    cityId: {
      description: 'City id',
      type: 'integer',
      minimum: 0,
    },
    month: {
      description: 'Month of year',
      type: 'integer',
      range: [0, 12],
    },
  },
};
