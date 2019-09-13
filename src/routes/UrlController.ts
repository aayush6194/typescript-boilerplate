import { NextFunction, Request, Response } from "express";
import { urlModel } from '../models';
import handle from '../utils/errorHandler';
import * as Uid from 'uuid/v4';

class UrlController {

  static async findUrl (email : string){
    let [ url, urlErr] = await handle(urlModel.findOne({ email }));

    if (!url) throw new Error('URL already Exists');
    if (urlErr) throw new Error(urlErr);
    return url;
  }

   static async shroten(req : Request, res : Response, next : NextFunction) : Promise<any>{
    try {
    }
    catch (err){
      next(err);
    }
  }
}

export default UrlController;