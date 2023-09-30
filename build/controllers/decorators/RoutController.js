"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RootController {
    getRout(req, res) {
        if (req.session && req.session.loggedIn) {
            res.send(`
            <div>
            <div>You are logged in</div>
            <a href="/auth/logout">Logout</a>
            </div>
            `);
        }
        else {
            res.send(`
            <div>
            <div>You are not logged in</div>
            <a href="/auth/login">Login</a>
            </div>
            `);
        }
    }
    ;
}
