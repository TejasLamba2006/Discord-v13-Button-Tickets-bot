module.exports = {
  prefix: "!",
  status: {
    		name: "your tickets!",
    		type: "watching"
  },
  ExpressServer: true, //If you wanted to make the website run or not
  Port: 3000, //Which port website gonna be hosted
   emojis: {
        giveaway: "🎉",
        special: "🔴",
        general: "870914038933098517"
  },
  ticketembed: {
    title: "Tickets",
    description: "To create a ticket, click the button that suits your request!",
    footer: "By Visa2Code"
  },
token: process.env.TOKEN || "",
mongo: process.env.MONGO || ""
};
