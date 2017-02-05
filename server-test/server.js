import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/:priority", (req, res) => {
  let json = null;

  switch (req.params.priority) {
    case "blockers":
      json = require("./jiraQuery").blockers;
      break;
    case "criticals":
      json = require("./jiraQuery").criticals;
      break;
    case "majors":
      json = require("./jiraQuery").majors;
      break;
    case "minors":
      json = require("./jiraQuery").minors;
      break;
    case "trivials":
      json = require("./jiraQuery").trivials;
      break;
    default:
      json = require("./jiraQuery").all;
      break;
  }

  return res.json(json);
});

app.listen(3001, () => {
  console.log("Example app listening on port 3001!");
});
