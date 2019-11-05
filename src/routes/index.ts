import {Request, Response, Application, NextFunction } from "express";


export class Register {
    public app: Application;

    constructor(app: Application) { 
        this.app = app;
    }
    public setRoutes() {
        this.app.get( "/", ( req: Request, res: Response ) => res.render( "index" ) );
    }
}
