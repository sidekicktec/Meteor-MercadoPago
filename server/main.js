import { Meteor } from "meteor/meteor"
const cors = require("cors")
const mercadopago = require("mercadopago")

mercadopago.configure({
  access_token:
    "TEST-7885312129955349-123101-d71107c3157b8b9ed6314cfadc0addea-1276544213",
})

Meteor.startup(() => {
  Picker.route("/user/:nome/:idade", function (params, req, res, next) {
    // res.end(
    //   `{
    //     "numbers": {
    //       "nome": ${params.nome},
    //       "idade": ${parseInt(params.idade)}
    //     }
    //   }`
    // )

    res.setHeader("Content-Type", "application/json charset=utf-8")
    res.end(
      JSON.stringify({
        numbers: {
          nome: params.nome,
          idade: parseInt(params.idade),
        },
      })
    )

  })
})
