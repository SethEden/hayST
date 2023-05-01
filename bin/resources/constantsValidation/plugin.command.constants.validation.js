/**
 * @file plugin.command.constants.validation.js
 * @module plugin.command.constants.validation
 * @description Contains all validations for named plugin command constants.
 * @requires module:plugin.command.constants
 * @author Seth Hollingsead
 * @date 2023/04/25
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_cmd from '../../constants/plugin.command.constants.js';

export const pluginCommandConstantsValidation = [
  // ********************************
  // hexiosCommands commands in order
  // ********************************
  {Name: 'cbuildApiActionFunction', Actual: plg_cmd.cbuildApiActionFunction, Expected: 'buildApiActionFunction'}
];