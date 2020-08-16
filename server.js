const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/getUser", async (req, res) => {
  const QUERY = `mutation AddOrder($title: String!) {
    insert_orders(objects: {title: $title}) {
      returning {
        id
        title
      }
    }
  }`;

  console.log("reached here", req.body.session_variables);
  const A = await fetch("http://localhost:8081/v1/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: QUERY,
      variables: {
        title: "From Action",
      },
    }),
    headers: {
      ...req.body.session_variables,
      "X-hasura-admin-secret": "myadminsecretkey",
    },
  });
  const B = await A.json();
  console.log(B);

  return res.json({
    uuid: req.body.input.uuid,
    firstName: "Dmytro",
    lastName: "Mezhenskyi",
  });
});

app.post("/buyit", async (req, res) => {
  console.log("req", req.body);
  return res.json({
    field1: "world",
  });
});

app.listen(PORT);
