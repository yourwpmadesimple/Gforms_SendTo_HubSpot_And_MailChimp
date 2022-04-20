const axios = require("axios");

const { AddContactsToHubSpot } = require("./AddContacts.hubspot");
const { AddContactsToMailChimp } = require("./AddContacts.mailchimp");

let properties = {
  BLACKHAWK_AUTH:
    "Basic Y2tfZTJiZjg1N2E1ZWM1MTdkMmYxZmU3ODAzOTQ5NTBhOTNmZDllYmExNjpjc19iNTA3N2FlZmIxZmU4OWY3OTZlNTQ0N2ZjYzdjNjMwMGUyMDQ0ZjRl",
  BLACKHAWK_ENDPOINT: "https://blackhawk.group/wp-json/gf/v2/forms/1/entries",
};

//Get Graviy Forms Contact From Blackhawk Get a Free Quote Form
function GetData() {
  var config = {
    method: "get",
    url: properties.BLACKHAWK_ENDPOINT,
    headers: {
      Authorization: properties.BLACKHAWK_AUTH,
    },
  };
  // Get Hub
  const hubSpotPost = () => {
    axios(config)
      .then(function (response) {
        let data = JSON.stringify(response.data);
        let entry = JSON.parse(data);
        entry.entries.map((contact) => {
          const properties = {
            email: contact["3"],
            first_name: contact["1.3"],
            last_name: contact["1.6"],
            phone: contact["8"],
            tags: contact["7"],
          };
          //console.log(properties);

          // Send GravityForms Leads To HubSpot
          AddContactsToHubSpot(properties);
        });
      })
      .catch(function (error) {
        console.log(`gravityFormsObj Line 52: ${error.response.data}`);
      });
  };
  hubSpotPost();
}

// Send Data
function SendData() {
  var config = {
    method: "get",
    url: properties.BLACKHAWK_ENDPOINT,
    headers: {
      Authorization: properties.BLACKHAWK_AUTH,
    },
  };
  // HubSpot Post
  const mailChimpPost = () => {
    axios(config)
      .then(function (response) {
        let data = JSON.stringify(response.data);
        let entry = JSON.parse(data);
        entry.entries.map((contact) => {
          const properties = {
            email: contact["3"],
            first_name: contact["1.3"],
            last_name: contact["1.6"],
            phone: contact["8"],
            tags: contact["7"],
          };
          //console.log(properties);

          AddContactsToMailChimp(properties);

          const GravityFormsEntries = {
            email: properties.email,
            first_name: properties.first_name,
            last_name: properties.last_name,
            phone: properties.phone,
            tags: properties.tags,
          };
          console.log("GF Entries", GravityFormsEntries);
        });
      })
      .catch(function (error) {
        console.log(`gravityFormsObj Line 52: ${error}`);
      });
  };
  mailChimpPost();
}

module.exports = {
  SendData,
};
