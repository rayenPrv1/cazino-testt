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
const { MessageEmbed } = require('discord.js');  
const parse_ms_1 = __importDefault(require("parse-ms"));
const countri = ["تركيا","المغرب","السعودية","فرنسا","أمريكا","كندا","إسبانيا","الصين","أستراليا", "يابان", "الارجنتين", "لندن", "سويسرا ", "هولندا", "بلجيكا"]
exports.default = {
  name: "صاروخ",

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

    let timeout = 150000;
        let daily = yield db.get(`saroq_${message.author.id}`);
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = (0, parse_ms_1.default)(timeout - (Date.now() - daily));
            message.reply({
                content: `تقدر تلعب  بعد:\n> **${time.minutes} minutes, ${time.seconds} seconds** :hourglass:`,
            });
        }
  else {
          let money = (yield db.get(`credits_${message.author.id}`)) || 0;

  if (!args[0]) return message.reply(":x: **يرجى ادخال مبلغ الصاروخ**")
if (isNaN(args[0])) return message.reply(":x: **هذا ليس مبلغ**")
if (args[0] > Number(money)) return message.reply("**مبلغ الصاروخ فوق ميزانيتك**")
    if (args[0] < 5000) return message.reply("لا تستطيع اللعب بمبلغ اقل من 5000")
      if (args[0] > 750000) return message.reply("لا تستطيع اللعب بمبالغ اكثر من 750 الف")

db.set(`saroq_${message.author.id}`, Date.now());
  let cons = ["more", "less"];
    let con = cons[Math.floor(Math.random() * cons.length)]
              let random1 = countri[Math.floor(Math.random() *countri.length)]
  if (con == "more") {
   let nr = Math.floor(args[0] * 2)
db.add(`credits_${message.author.id}`, nr)
    let embedw = new MessageEmbed()
    .setColor("#086e45")  
      .setAuthor({
                                name: message.author.username,
                                iconURL: message.author.avatarURL({ dynamic: true }) || "",
                            })
     .setDescription(` :partying_face: كفوو صاروخ ناجح :\nمبلغ الارباح: **${nr}$**\nالدولة : ${random1}\nرصيدك السابق: **${money}$**\nرصيدك الحالي: **${yield db.get(`credits_${message.author.id}`)}$**`)
  message.reply({embeds: [embedw]})
  }
   if (con == "less") {
     let num = Math.floor(db.subtract(`credits_${message.author.id}`, args[0]))
      let embedl = new MessageEmbed()
          .setColor("#086e45")  

      .setAuthor({
                                name: message.author.username,
                                iconURL: message.author.avatarURL({ dynamic: true }) || "",
                            })
     .setDescription(`القققممم صاروخ خاسر :joy::broken_heart:\nرصيدك السابق: **${money}$**\nرصيدك الحالي: **${yield db.get(`credits_${message.author.id}`)}$**`)
      message.reply({embeds: [embedl]})
   }
  }
})
}