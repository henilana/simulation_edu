const MongoClient = require("mongodb").MongoClient;
const mongo = require("mongodb");
const url = "mongodb://localhost:27017/";
const myDb = "edusim";
const edusimUUID = "edusimUUID";

function  chooseRoleUpdate(req, res) {
  //  check authentication
    MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, db) {
      if (err) {
        return res.sendStatus(500);
      }
      const dbo = db.db(myDb);
      dbo
        .collection(edusimUUID)
        .updateOne(
         {UUID:req.body.UUID,_id: new mongo.ObjectId(req.body._id)},
          { $set: { playerName: req.body.playerName } },
          function(err, result) {
            if (err) {
              return res.sendStatus(500);
            }
            else if (!result.result.n) {
              return res.sendStatus(404);
            } else {
               return res.sendStatus(200);
            }
          }
        );
    });
  }

function chooseRoleGet(req, res) {
  //  check authentication
  req.query.UUID = parseInt(req.query.UUID);
  
  MongoClient.connect(url, function(err, db) {
    if (err) {
      return res.sendStatus(500);
    }
    const dbo = db.db(myDb);
    dbo
      .collection(edusimUUID)
      .find(req.query.UUID)
      .toArray(function(err, currentsimulation) {
        if (err) {
          return res.status(500);
        }
        res.status(200);
        return res.send(currentsimulation);
      });
  });
}
module.exports.chooseRoleUpdate = chooseRoleUpdate;
module.exports.chooseRoleGet = chooseRoleGet;
