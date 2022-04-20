// Endpoints
let {
  GFORM_KEY,
  HUBPOT_KEY,
  MAILCHIMP_APIKEY,
  BLACKHAWK_ENDPOINT,
  MAILCHIMP_ENDPOINT,
} = require("./Endpoints");

let methods = {
  gravityforms: {
    method: "GET",
    url: BLACKHAWK_ENDPOINT,
    headers: {
      Authorization: GFORM_KEY,
    },
  },
  mailchimp: {
    method: "PUT",
    url: MAILCHIMP_ENDPOINT,
    headers: {
      Authorization: MAILCHIMP_APIKEY,
    },
  },
};

const hubSpotQueryParams = `properties=email&properties=firstname&properties=lastname&properties=phone&properties=tags`;

const HUBSPOT_ENDPOINT = `https://api.hubapi.com/crm/v3/objects/contacts?hapikey=08e15251-e03b-4bfd-9dea-4b13ccc47a04&${hubSpotQueryParams}`;

module.exports = {
  hubSpotQueryParams,
  methods,
  HUBSPOT_ENDPOINT,
  HUBPOT_KEY,
  MAILCHIMP_APIKEY,
};
