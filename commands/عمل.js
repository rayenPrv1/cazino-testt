const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const ms = require("parse-ms");
const Jwork = require('./works.json');
const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];

exports.default = {
  name: "عمل",
run: async(client, message, args, db) => __awaiter(void 0, void 0, void 0, function* () {
        let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}


        let user = message.author;
        let author = await db.fetch(`work_${user.id}`)

        let timeout = 1800000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor("GREEN")
			    .setDescription(`**استنا كده ${time.minutes} دقيقه ${time.seconds} ثانيه وابقي تعالي تاني**`)
            message.channel.send(timeEmbed)
        } else {
            let amount = Math.floor(Math.random() * 8000) + 1;
            let embed1 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(` **${JworkR} ${amount}**`)
            message.channel.send(embed1)

            db.add(`works_${user.id}`, 1)
            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        };
    }
};
