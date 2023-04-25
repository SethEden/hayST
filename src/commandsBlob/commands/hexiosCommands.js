/**
 * @file hexiosCommands.js
 * @module hexiosCommands
 * @description Contains all of the commands for the hexios plugin.
 * @requires module:plugin.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../../constants/plugin.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.hexios.commandsBlob.commands.hexiosCommands.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + sys.ccommandsBlob + bas.cDot +
  wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function buildApiActionFunction
 * @description Creates a function that can be used to generate an api action function that will
 * execute an action against an API interface of some kind.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a list of meta-data that should be used for construction of the api action.
 * inputData[0] = 'buildApiActionFunction'
 * inputData[1] = api call
 * inputData[2] = call header
 * inputData[3] = call body
 * inputData[4] = call footer
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,object>} An array that contains a boolean to indicate that the application should not exit,
 * and a JSON response body object.
 * @author Seth Hollingsead
 * @date 2023/04/20
 */
async function buildApiActionFunction(inputData, inputMetaData) {
  let functionName = buildApiActionFunction.name;
  await loggers.consoleLog(namespacePrefix + functionName, msg.cBEGIN_Function);
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, {}];

  await loggers.consoleLog(namespacePrefix + functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await loggers.consoleLog(namespacePrefix + functionName, msg.cEND_Function);
  return returnData;
}

export default {
  buildApiActionFunction
}