const { check } = require("express-validator");
const { formValidation } = require("../others");

const validations = {
  cartSaveValidation: [
 

    check("productId")
      .notEmpty()
      .withMessage("Please enter Product ID"),

      check("productVarientId")
      .notEmpty()
      .withMessage("Please enter Product Varient ID"),

      
    check("quantity")
    .notEmpty()
    .withMessage("Please enter Quantity"),

   


    formValidation,
  ],
};

module.exports = validations;
