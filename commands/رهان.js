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
const { Client, Intents, Interaction, MessageEmbed, Collection, MessageActionRow, MessageButton, MessageSelectMenu,Modal ,TextInputComponent } = require('discord.js')
const parse_ms_1 = __importDefault(require("parse-ms"));
let playing = []
exports.default = {
    name: "رهان",
    run: (client, message, args, db) => __awaiter(void 0, void 0, void 0, function* () {

  let timeout = 600000;
        let daily = yield db.get(`rhan_${message.author.id}`);
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = (0, parse_ms_1.default)(timeout - (Date.now() - daily));
            message.reply({
                content: `تقدر تلعب بعد:\n> **${time.minutes} minutes, ${time.seconds} seconds** :hourglass:`,
            });
        }
        

  else {
const row = new MessageActionRow().addComponents(
  new MessageButton() 
  .setCustomId("press")
.setEmoji("✅")
.setStyle("SUCCESS"))
          let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            let timeout1 = 600000;
        let daily1 = yield db.get(`rhan_${member.id}`);
        if (daily1 !== null && timeout1 - (Date.now() - daily1) > 0) {
            let time = (0, parse_ms_1.default)(timeout1 - (Date.now() - daily1));
            message.reply({
                content: `هذا الشخص يتسطيع اللعب بعد:\n> **${time.minutes} minutes, ${time.seconds} seconds** :hourglass:`,
            });
        }

    else {
if(!member){
  return message.reply({embeds:[new MessageEmbed().setTitle(`**🎯 رهان**`).setDescription(`أرجو استخدام الأمر بالطريقة الصحيحة\n\`#رهان @شخص\` 5000\nثم اجعل الذي تراهن معه يضغط زر الموافقة قبل انتهاء الوقت`).setTimestamp().setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() }).setAuthor({ name:  message.author.tag, iconURL: message.author.displayAvatarURL()}).setThumbnail(client.user.displayAvatarURL())]})}
      if(!args[1] || isNaN(args[1])){
          return message.reply({embeds:[new MessageEmbed().setTitle("**🎯 رهان**").setDescription(`**يرجى كتابة مبلغ لا يقل عن 5000**`).setTimestamp().setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() }).setAuthor({ name:  message.author.tag, iconURL: message.author.displayAvatarURL()}).setThumbnail(client.user.displayAvatarURL())]})
      }
   
      if(message.author.id === member.id) {
          return message.reply({embeds:[new MessageEmbed().setTitle(`**🎯 رهان**`).setDescription(`**لا يمكنك الرهان مع نفسك 🙄**`).setTimestamp().setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() }).setAuthor({ name:  message.author.tag, iconURL: message.author.displayAvatarURL()}).setThumbnail(client.user.displayAvatarURL())
]})}
      var x = args[1]*1;
if (Number(yield db.get(`credits_${message.author.id}`)) < Number(x))
                return message.reply({
                    content: "> مافي رهان بالدين الله يرزقك",
                });
     if (Number(yield db.get(`credits_${member.id}`)) < Number(x))
                return message.reply({
                    content: "> **ليس لدى من ستراهن معه مبلغ كافي**",
                });
      if (Number(x) < 5000) return message.reply("لا تستطيع اللعب بمبلغ اقل من 5000")
      if (Number(x) > 1000000) return message.reply("لا تستطيع اللعب بمبالغ اكثر من 1000000")
let mess = message.reply({content:`**${member} ضد ${message.author}**`,embeds:[new MessageEmbed().setTitle("**🎯 رهان**").setDescription(`${member} اضغط الزر\nاذا لم يضغط خلال 15 ثانية فسيتم انهاء اللعبة`).setTimestamp().setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() }).setAuthor({ name:  message.author.tag, iconURL: message.author.displayAvatarURL()}).setThumbnail(client.user.displayAvatarURL())], components:[row]})
      
         const filter1 = i => i.user.id === member.id;
   const collector = message.channel.createMessageComponentCollector({ componentType: "BUTTON", filter1, max: 1, time: 15000 })
                   collector.on("collect", i => {
                            i.deferUpdate();
                    if (i.user.id != member) return;
                  
let member1 = r()
let bot = r()
         if(member1 > bot){
 db.add(`credits_${message.author.id}`, x)
       db.subtract(`credits_${member.id}`, x)
db.set(`rhan_${member.id}`, Date.now())
           db.set(`rhan_${message.author.id}`, Date.now())
message.reply({embeds:[new MessageEmbed().setTitle(`**🎯 رهان**`).setDescription(`**تم اختيار رقم ${bot} ل||${member}||
و تم اختيار رقم ${member1} ل||${message.author}||
و بناء على ذلك، الرقم الاعلى هو ${member1}
مبروك ل ||${message.author}||**`).setTimestamp().setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() }).setAuthor({ name:  message.author.tag, iconURL: message.author.displayAvatarURL()}).setThumbnail            (client.user.displayAvatarURL())
]})

      } else if(member1 < bot){ 
 db.add(`credits_${member.id}`, x)
db.set(`rhan_${member.id}`, Date.now())
           db.set(`rhan_${message.author.id}`, Date.now())
 db.subtract(`credits_${message.author.id}`, x)
message.reply({embeds:[new MessageEmbed().setTitle(`**🎯 رهان**`).setDescription(`**تم اختيار رقم ${bot} ل||${member}||
و تم اختيار رقم ${member1} ل||${message.author}||
و بناء على ذلك، الرقم الاعلى هو ${bot}
مبروك ل ||${member}||**`).setTimestamp().setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() }).setAuthor({ name:  message.author.tag, iconURL: message.author.displayAvatarURL()}).setThumbnail            (client.user.displayAvatarURL())
]})


      } else {

message.reply({embeds:[new MessageEmbed().setTitle(`**🎯 رهان**`).setDescription(`**تم اختيار رقم ${bot} ل||${member}||
و تم اختيار رقم ${member1} ل||${message.author}||
و بناء على ذلك فالاثنان متعادلان**`).setTimestamp().setFooter({ text: message.guild.name, iconURL: message.guild.iconURL() }).setAuthor({ name:  message.author.tag, iconURL: message.author.displayAvatarURL()}).setThumbnail            (client.user.displayAvatarURL())
]})   }  
          collector.on("end", (c, i) => {
   if(i === "time")   {   
                       row.components.forEach((c) => c.setDisabled(true));
      mess.edit({ content:"**انتهى الوقت للاسف**",components: [row] }).catch((e) => {console.log(e)});

   
   } 
          })
                   })
    }
  }
    })
    }
function r() {
  let min = "1"
  let max = "100"
return Math.floor(Math.random()*(max-min)+min) 
         }   
