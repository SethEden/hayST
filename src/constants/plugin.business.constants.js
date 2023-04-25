/**
 * @file plugin.business.constants.js
 * @module plugin.business.constants
 * @description A file to hold all of the plugin business rules constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/04/20
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, num, wrd} = hayConst;

// ********************************
// hexios rules in order
// ********************************
export const cmapHeaderMetaDataToBusinessRule = wrd.cmap + gen.cApi + wrd.cMetaData + wrd.cTo + wrd.cBusiness + wrd.cRule; // mapHeaderMetaDataToBusinessRule