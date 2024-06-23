// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: "A mall on mini-app", // describe your project in this field
  domain: "is-an.app", // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: "minimall", // desired subdomain name
  owner: {
    email: "wchhm8050@gmail.com",
  },
  record: {
    A: ["82.156.182.252"],
  },
});
