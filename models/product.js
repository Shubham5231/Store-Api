const mongoose = require('mongoose');

const prodtuctsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
  },
  price: {
    type: Number,
    required: [true, 'product price must be provided'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  cratedAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported',
    },
    // enum:['ikea','liddy','caressa','marcos']
  },
});

module.exports = mongoose.model('Product', prodtuctsSchema);

// const mongoose = require('mongoose');
// const Joi = require('joi');

// const prodtuctsSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'product name must be provided'],
//   },
//   price: {
//     type: Number,
//     required: [true, 'product price must be provided'],
//   },
//   featured: {
//     type: Boolean,
//     default: false,
//   },
//   rating: {
//     type: Number,
//     default: 4.5,
//   },
//   cratedAt: {
//     type: Date,
//     default: Date.now(),
//   },
//   company: {
//     type: String,
//     enum: {
//       values: ['ikea', 'liddy', 'caressa', 'marcos'],
//       message: '{VALUE} is not supported',
//     },
//   },
// });

// // Define Joi schema for validation
// const joiProductSchema = Joi.object({
//   name: Joi.string().required().messages({
//     'any.required': 'Product name must be provided',
//   }),
//   price: Joi.number().required().messages({
//     'any.required': 'Product price must be provided',
//   }),
//   featured: Joi.boolean(),
//   rating: Joi.number(),
//   cratedAt: Joi.date(),
//   company: Joi.string().valid('ikea', 'liddy', 'caressa', 'marcos').messages({
//     'any.only': '{VALUE} is not supported',
//   }),
// });

// // Validate data before saving
// const validateProduct = (data) => {
//   return joiProductSchema.validate(data, { abortEarly: false });
// };

// module.exports = mongoose.model('Product', prodtuctsSchema);
