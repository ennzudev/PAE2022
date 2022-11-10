const SessionModel = require("./model");

class SessionController {
  postOne(req, res) {
    const Session = new SessionModel();
    Session.createOne(req.body).then((resp) => {
      res.json({ token: resp });
    });
  }

  getOne(req, res) {
    const Session = new SessionModel();
    Session.validateOne(req.headers["authorization"]).then((resp) => {
      resp ? res.sendStatus(200) : res.sendStatus(403);
    });
  }
}

module.exports = new SessionController();