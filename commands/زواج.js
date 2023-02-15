"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const { Message, Client , MessageEmbed } = require("discord.js");
const ms = require("ms")
exports.default = {
    name: "زواج",
    run: async (client, message, args, db , mongoose)  => __awaiter(void 0, void 0, void 0, function* () {
            let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}
   if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
      if (message.author.id === "677926913897005064") return message.reply(`you are blacklisted.`)
      if (message.author.id === "953399423919079474") return message.reply(`you are blacklisted.`)
      if (message.author.id === "998277856796880966") return message.reply(`you are blacklisted.`)
        var _a, _b, _c, _d, _e, _f, _g, _h;

 let args = message.content.split(" ").slice(2);
  let user = message.mentions.members.first()
  let member = db.fetch(`credits_${message.author.id}`)
 
if(!user) return message.reply(`> الرجاء استخدام الامر بالطريقه التالية 
#زواج \`منشن الزوجة\` \`المهر\``)
      
            if (user.id === "800439674187022357") return message.reply(`this user is blacklisted.`)
      if (user.id === "677926913897005064") return message.reply(`this user is blacklisted..`)
      if (user.id === "953399423919079474") return message.reply(`this user is blacklisted..`)
      if (user.id === "998277856796880966") return message.reply(`this user is blacklisted.`)
      if(!args) return message.reply(`> الرجاء استخدام الامر بالطريقه التالية 

#زواج \`المنشن\` \`المبلغ\``)
       if(isNaN(args)) 
 return message.reply(`> الرجاء استخدام الامر بالطريقه التالية 

 #زواج \`المنشن\` \`المبلغ\``)
    if (member < args) return message.reply(`> لا تستطيع التزوج بالدين`)
    if(message.author.id === user.id) return message.reply(`> لا تستطيع تزوج نفسك`)
    if(args < 800000) return message.reply(`لا تستطيع تزوج اقل من 800000!`)
    if(user.id === message.author.bot) return message.reply(`>لا تستطيع تزوج البوت`)
    let xp = db.all().filter(data => data.ID.split(`_${message.author.id}`)[1]).sort((a, b) => b.data - a.data)
        xp.length = 10;
        var hello= "";
    var zwjh= "";
        var i = 0;
        for (i in xp) {
          hello += `${xp[i].ID.split('_')[1]}`;
        };
    for (i in xp) {
          zwjh += `<@${xp[i].ID.split('_')[2]}>`;
        };
    if(message.author.id === zwjh) return message.reply(`> ما تكفيك زوجة وحده ؟`)
  if(message.author.id === hello) return message.reply(`> ماعندنا تعدد`)
    if (user.id === hello) return message.reply("> هذا الشخص متزوج")


    if (zwjh) return message.reply("> راحت عليك متزوجة")
    var author = user.id
    db.set(`zwaj_${message.author.id}_${user.id}_${args}`, message.author.id)
    db.set(`tzwjh_${user.id}`, [`${user.id}`])
    var amount = args
    db.subtract(`credits_${message.author.id}`, amount)
      message.reply({
                    embeds: [
                        {
                                                    color: "#086e45",
                            thumbnail: {
                                url: ((_a = client.user) === null || _a === void 0 ? void 0 : _a.avatarURL({ dynamic: true })) || "",
                            },
                            author: {
                                iconURL: ((_b = message.author) === null || _b === void 0 ? void 0 : _b.avatarURL({ dynamic: true })) || "",
                                name: message.author.tag,
                            },
                            timestamp: new Date(),
                            footer: {
                                iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                                text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                            },
                            description: `
              تم عقد الزواج من: ✅\nالزوج: **<@!${message.author.id}>**\n من\n الزوجة: **<@!${user.id}>\n المهر: **${args}$**\n لعرض معلومات زواجكم : #زواجي **`,
                        },
                    ],
                });

})
}

