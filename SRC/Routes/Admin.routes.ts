import express from 'express';
import { AdminController } from '../controller/Admin.controller';
import { DeleteAdmin, GetAdmin, SaveReqADMIN, UpdateReqADMIN } from '../types/request/Admin.request';
import { SaveUpdateResADMIN } from '../types/responses/admin.responses';

export class AdminRoutes {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.post('/getAdmin', async (req, res, next) => {
            try {
                const getreq: GetAdmin = req.body;
                const admin: SaveUpdateResADMIN = await new AdminController().getadmin(getreq);
                res.send(admin);
            } catch (error) {
                next(error);
            }
        });
        this.router.post('/saveadmin', async (req, res, next) => {
            try {
                const admin: SaveReqADMIN = req.body;
                const newAdmin: SaveUpdateResADMIN = await new AdminController().saveadmin(admin);
                res.status(200).json({
                    message: newAdmin
                });
            } catch (error) {
                next(error);
            }
        });
        this.router.put('/updateadmin', async (req, res, next) => {
            try {
                const admin: UpdateReqADMIN = req.body;
                const upadated_admin: SaveUpdateResADMIN = await new AdminController().updateAdmin(admin);
                const response = {
                    upadated_admin,
                };
                res.status(200).json({
                    message: response
                });
            } catch (error) {
                next(error);
            }
        });
        this.router.delete('/deleteadmin', async (req, res, next) => {
            try {
                const delreq: DeleteAdmin = req.body;
                const Deleted_admin = await new AdminController().deletadmin(delreq);
                res.status(200).json({
                    message: 'admin deleted'
                });
            } catch (error) {
                next(error);
            }
        });
        this.router.post('/getadminlist', async (req, res, next) => {
            try {
                const adminList: SaveUpdateResADMIN[] = await new AdminController().getadminList();
                res.status(200).json({
                    result: adminList
                });

            } catch (error) {
                next(error);
            }
        });
    }
}
export const AdminRoutesApi = new AdminRoutes().router;
