// HubSpot endpoint
let hubspot_endpoint = `https://api.hubapi.com/crm/v3/objects/contacts?hapikey=08e15251-e03b-4bfd-9dea-4b13ccc47a04`;

// Blackhawk endpoint
let blackhawk_endpoint = `https://blackhawk.group/wp-json/gf/v2/forms/1/entries`;

// MailChimp endpoint
let mailchimp_endpoint = `https://us20.api.mailchimp.com/3.0/lists/ce61ac7d58/members/`;

let mailchimp_endpoint_mining_with_brad = `https://us4.api.mailchimp.com/3.0/lists/c9bf94e6b7/members/`;

let init = {
  GFORM_KEY: process.env.GFORM_KEY,
  HUBPOT_KEY: process.env.HUBPOT_KEY,
  MINING_WITH_BRAD_KEY: "bb83f6be6e565b59ea47e4e195323ab0-us4",

  HUBSPOT_ENDPOINT: hubspot_endpoint,

  BLACKHAWK_ENDPOINT: blackhawk_endpoint,

  MAILCHIMP_ENDPOINT: mailchimp_endpoint,

  MINING_WITH_BRAD_ENDPOINT: mailchimp_endpoint_mining_with_brad,
};

module.exports = {
  init,
};
