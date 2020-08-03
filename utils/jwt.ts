import jwt from 'jsonwebtoken';
import 'dotenv/config';


/**
 * this function generate tokein
 * @param {string} info 
 */

/* eslint-disable @typescript-eslint/no-explicit-any  */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types  */
export function getToken(info: any): string {
  return jwt.sign({ info }, process.env.JWT_SECRET || '');
}

/**
 * return token decode
 * @param {string} token 
 */

/* eslint-disable @typescript-eslint/ban-types */
export function decodeToken(token: string): string | object {
  return jwt.verify(token, process.env.JWT_SECRET || '');
}