const axios = require("axios");

const init = require("../config/init.js");
//console.log("init response", init);
function connections(Method) {
  axios(Method.POST)
    .then(function (response) {
      const json = JSON.stringify(response.data);
      console.log("POST Method", JSON.parse(json));
    })
    .catch(function (error) {
      const error_message = {
        "Status code": `${error.response.status}`,
        Method: `${error.response.config.method}`,
        Message: `${error.response.data.title}`,
      };
      console.log("POST Error:", error_message, "\n");
    });

  axios(Method.PUT)
    .then(function (response) {
      const get = JSON.stringify(response.data);
      const json = JSON.parse(get);
      const contact = {
        "email address": json.email_address,
        "First name ": json.merge_fields.FNAME,
        "Last name ": json.merge_fields.LNAME,
        "Phone ": json.merge_fields.PHONE
          ? json.merge_fields.PHONE
          : "No phone provided",
        "tags ": json.tags[0].name,
      };
      console.log("PUT Method", contact, "\n");
    })
    .catch(function (error) {
      const error_message = {
        Status: error.response.status,
        Message: error.response.statusText,
      };
      console.log("PUT Error:", error_message);
    });
}

function AddContactsToMailChimp(data) {
  var put_data = JSON.stringify({
    email_address: data.email,
    status_if_new: "subscribed",
    merge_fields: {
      FNAME: data.first_name,
      LNAME: data.last_name,
      PONE: data.phone,
    },
    tags: [data.tags],
  });

  var post_data = JSON.stringify({
    email_address: data.email,
    status: "subscribed",
    merge_fields: {
      FNAME: data.first_name,
      LNAME: data.last_name,
      PONE: data.phone,
    },
    tags: [data.tags],
  });

  var config_put = {
    method: "put",
    url: `https://us4.api.mailchimp.com/3.0/lists/eea1b8ea96/members/${data.email}`,
    headers: {
      Authorization: "Bearer bb83f6be6e565b59ea47e4e195323ab0-us4",
      "Content-Type": "application/json",
    },
    data: put_data,
  };
  //console.log("config_put", config_put)

  var config_post = {
    method: "post",
    url: `https://us4.api.mailchimp.com/3.0/lists/eea1b8ea96/members/`,
    headers: {
      Authorization: "Bearer bb83f6be6e565b59ea47e4e195323ab0-us4",
      "Content-Type": "application/json",
    },
    data: post_data,
  };
  //console.log("config_post", config);

  const Method = {
    PUT: config_put,
    POST: config_post,
  };
  //console.log("Methods", Method);

  connections(Method);
}

module.exports = {
  AddContactsToMailChimp,
};
