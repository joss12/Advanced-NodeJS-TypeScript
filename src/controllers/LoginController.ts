import { Request, Response, NextFunction } from "express";
import { get, controller, bodyValidator, post } from "./decorators";

@controller("/auth")
class LoginController {

  @get("/login")
  getLogin(_req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (
      email &&
      password &&
      email === "eg@email.com" &&
      password === "password"
    ) {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid username or password");
    }
  }

  @get('/logout')
  getLogout(req:Request, res:Response){
    req.session = undefined;
    res.redirect('/');
};
}
