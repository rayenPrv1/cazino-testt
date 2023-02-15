
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
const {Discord, MessageEmbed} = require("discord.js")
exports.default = {
  name: "زواجي",
run: async(client, message, args, db) => __awaiter(void 0, void 0, void 0, function* () {
        let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}
   if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
      if (message.author.id === "677926913897005064") return message.reply(`you are blacklisted.`)
      if (message.author.id === "953399423919079474") return message.reply(`you are blacklisted.`)
      if (message.author.id === "998277856796880966") return message.reply(`you are blacklisted.`)
          var _a, _b, _c, _d, _e, _f, _g, _h;

   let user = message.mentions.members.first() || message.author
 if(!user) return message.reply(`> الرجاء استخدام الامر بالطريقه التالية 
    
#زواجي \`منشن شخص\``)
   if (user.id === "800439674187022357") return message.reply(`this user is blacklisted.`)
      if (user.id === "677926913897005064") return message.reply(`this user is blacklisted..`)
      if (user.id === "953399423919079474") return message.reply(`this user is blacklisted..`)
      if (user.id === "998277856796880966") return message.reply(`this user is blacklisted.`)
    let xp = db.all().filter(data => data.ID.split(`_${user.id}`)[1]).sort((a, b) => b.data - a.data)
        xp.length = 10;
        var hello= "";
        var zwjh= "";
        var mhr= "";
        var i = 0;
        for (i in xp) {
          hello += `<@${xp[i].ID.split('_')[1]}>`;
        };
        for (i in xp) {
          zwjh += `<@${xp[i].ID.split('_')[2]}>`;
        };
        for (i in xp) {
          mhr += `${xp[i].ID.split('_')[3]}`;
        };
    if(hello === "") return message.reply(`> هذا الشخص ليس متزوج`)
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
              معلومات الزواج الخاصة بـ <@!${user.id}> :\nالزوج: **${hello}**\n من\n الزوجة: **${zwjh}\n المهر: **${mhr}$** **`,
                        },
                    ],
                })
        })
}
