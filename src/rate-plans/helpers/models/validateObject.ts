/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
//External
import { validate } from 'class-validator';
//Models
import { RatePlansDTO } from 'src/rate-plans/models/rate-plans.dto';
//Const/vars
let stackFieldsErrors: any;

/**
   * @description Validation of all the properties of the Rate Plan class.
   * @param {object} obj object type
   * @returns an array object with the specific errors (constraints) of each class property
   * @example  [
    "productType must be one of the following values: STANDARD, FRAGILE, COLD"
    ]
   */
export const validateObject = async (obj: RatePlansDTO) => {
  stackFieldsErrors = [];

  try {
    await validate(obj).then((errors) => {
      errors.map((e) => {
        for (let key in e.constraints) {
          stackFieldsErrors.push(e.constraints[key]);
        }
      });
    });

    return stackFieldsErrors;
  } catch (error) {
    console.error(
      `ERROR in function validateObject(). Caused by ${error} . Specific stack is ${error.stack} `,
    );
  }
};
