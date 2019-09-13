import  { NextFunction, Request, Response } from "express";
import UrlController from './UrlController';


const SetRoutes = (app : any) => {
  //Main Controller
  app    
    .post('/shorten', UrlController.shorten);
}

export { SetRoutes };