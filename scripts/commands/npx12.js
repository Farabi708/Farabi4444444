const fs = require("fs");
module.exports = {
  config:{
	name: "npx12",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/CnJEHXS.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("gf")==0 || body.indexOf("bow")==0 || body.indexOf("গ্রুপ")==0 || body.indexOf("group")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("🤦🏻")==0 || body.indexOf("baby")==0 || body.indexOf("sona")==0) {
		var msg = {
				body: "🍁মানুষ কখনো কাউকে ভুলে না ।হয়তো দুরত্ব বারে গুরুত্ব কমে🍁",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
} 
