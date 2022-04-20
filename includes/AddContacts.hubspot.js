const axios = require("axios");

let properties = {
  HUBSPOT_ENDPOINT: `https://api.hubapi.com/crm/v3/objects/contacts?hapikey=08e15251-e03b-4bfd-9dea-4b13ccc47a04`,
};

function AddContactsToHubSpot(data) {
  let string = JSON.stringify({
    email: data.email,
    firstnam: data.first_name,
    lastname: data.last_name,
    phone: data.phone,
    tags: data.tags,
  });
  let json = JSON.parse(string);
  Object.values(json).map((contact) => {
    var hubspot_data_add = JSON.stringify({
      properties: {
        email: json.email,
        firstnam: json.first_name,
        lastname: json.last_name,
        phone: json.phone,
        tags: json.tags,
      },
    });

    var hubspot_config_add = {
      method: "POST",
      url: properties.HUBSPOT_ENDPOINT,
      headers: {
        "Content-Type": "application/json",
      },
      data: hubspot_data_add,
    };

    axios(hubspot_config_add)
      .then(function (response) {
        console.log("POST CONTACTS", JSON.stringify(response.data));
      })
      .catch(function (error) {
        let res = error.response;
        let results = {
          status: res.status,
          message: res.data.message,
        };

        console.log(`
        Status code: ${results.status}
        Message: ${results.message}
        `);
      });
  });
}

module.exports = {
  AddContactsToHubSpot,
};
