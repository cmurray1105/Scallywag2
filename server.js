import path from "path";
import express from "express";
const db = require("./db/queries");

const bodyParser = require("body-parser");
const PORT = process.env.HTTP_PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("just gonna send it");
});
app.get("/flower", (req, res) => {
  res.json({
    name: "Dandelion",
    colour: "Blue-ish",
  });
});
app.get("/products", (req, res) => {
  // console.log('server', req.query.product)
  db.getProducts(req.query.product, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result)
      res.send(result);
    }
  });
});
app.post("/addOrder", (req, res) => {
  console.log("query", req.body);
  let currentDate = new Date().toISOString().slice(0, 19).replace("T", " ");
  console.log("del date", req.body.deliveryDate.slice(0, 19).replace("T", " "));
  const order = [
    req.body.address,
    req.body.customerName,
    "Liberty Hill",
    currentDate,
    req.body.deliveryDate.slice(0, 19).replace("T", " "),
    req.body.neighborhood,
    req.body.email,
    req.body.phone,
  ];
  // console.log("order:", order)
  let id;
  db.addDelivery(order, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      // console.log("RESULT FROM ADDING", results.insertId)
      let id = results.insertId;
      for (let item in req.body.cartItems) {
        let params = [
          req.body.cartItems[item].id,
          id,
          req.body.cartItems[item].quantity,
        ];
        db.addItemToOrder(params, (err, secondResult) => {
          // console.log("callback called")
          if (err) {
            res.send(err);
          } else {
            console.log("sent: ", secondResult);
          }
        });
      }
      res.send(results);
    }
  });
});
app.post("/updateQuantity", (req, res) => {
  console.log(req.body.quantity, req.body.productName);
  let quantity = [req.body.quantity.toString(), req.body.productName];
  db.updateQuantity(quantity, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/getOrders", (req, res) => {
  db.getOrders((err, result) => {
    console.log("RESULTTTTT1", result);
    // result = result[0]
    if (err) {
      console.log(err);
    } else {
      console.log("type", result);
      // res.send(result)
      let orders = {};

      for (let item in result) {
        console.log("ITEM: ", result[item]);
        if (!orders[result[item].id]) {
          orders[result[item].id] = {
            customer: result[item].name,
            address: result[item].street_address,
            deliveryDate: result[item].scheduled_delivery,
            neighborhood: result[item].neighborhood,
            email: result[item].email,
            phone: result[item].phone,
            products: [
              {
                productName: result[item].product_name,
                quantity: result[item].quantity,
                price: result[item].price,
              },
            ],
          };
        } else {
          orders[result[item].id].products.push({
            productName: result[item].product_name,
            quantity: result[item].quantity,
            price: result[item].price,
          });
        }
      }
      res.send(orders);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}. cwm`);
});
