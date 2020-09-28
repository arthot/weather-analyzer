export default {
  title: 'Get id params object',
  additionalProperties: false,
  required: ['cityId', 'month'],
  properties: {
    cityId: {
      description: 'City id',
      type: 'integer',
      min: 0,
    },
    month: {
      description: 'Month of year',
      type: 'integer',
      min: 0,
      max: 12,
    },
  },
};