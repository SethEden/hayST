/**
 * @file plugin.command.constants.js
 * @module plugin.command.constants
 * @description A file to hold all of the plugin commands constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, num, wrd} = hayConst;

// ********************************
// hexios commands in order
// ********************************
export const cbuildApiActionFunction = wrd.cbuild + gen.cApi + wrd.cAction + wrd.cFunction; // buildApiActionFunction