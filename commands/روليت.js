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
const parse_ms_1 = __importDefault(require("parse-ms"));
const __1 = __importDefault(require(".."));
const Discord = require("discord.js")
  exports.default = {
    name: "روليت",
    run: (client, message, args, db) => __awaiter(void 0, void 0, void 0, function* () {
            let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}
    if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
      if (message.author.id === "677926913897005064") return message.reply(`you are blacklisted.`)
      if (message.author.id === "953399423919079474") return message.reply(`you are blacklisted.`)
      if (message.author.id === "998277856796880966") return message.reply(`you are blacklisted.`)
        let timeout = 120000;
        let daily = yield db.get(`games_${message.author.id}`);
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = (0, parse_ms_1.default)(timeout - (Date.now() - daily));
            message.reply({
                content: `تعال العب بعد:\n> **${time.minutes} minutes ${time.seconds} seconds** :hourglass:`,
            });
        }
else {
        let user = message.author;

        function isOdd(num) {
            if ((num % 2) == 0) return false;
            else if ((num % 2) == 1) return true;
        }

        let colour = args[0];
        let money = parseInt(args[1]);
        let moneydb =  db.fetch(`credits_${user.id}`)

        let random = Math.floor((Math.random() * 10));
        let moneyhelp = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`** حدد اللون والمبلغ | #روليت <لون> <مبلغ>**`);

        let moneymore = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(` **راهن على قد فلوسك لا تصرعني **`);

        let colorbad = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`** حدد اللون  🔴 ⚫️ 🟡 🟢 
احمر[1.5x] (سهل)
 اسود [2x] (صعب)
 اصفر [5x] (صعب جدا)
 اخضر [ 15x ] (نادر)\nمثال :\n#روليت <لون> <مبلغ> **`);

        if (!colour) return message.reply({
          embeds: [colorbad]
        });
        colour = colour.toLowerCase()
        if (!money) return message.reply({
          embeds: [moneyhelp]
        });
        if (money > moneydb) return message.reply({
          embeds: [moneymore]
        });

        if (colour == "b" || colour.includes("اسود")) colour = 0;
        else if (colour == "r" || colour.includes("احمر")) colour = 1;
           else if (colour == "y" || colour.includes("اصفر")) colour = 2;
        else if (colour == "g" || colour.includes("اخضر")) colour = 3;
        else return  message.reply({
          embeds: [colorbad]
        });
if (Number(money) > 100000)
            return message.reply({
                content: `> لا تستطيع اللعب بمبالغ اعلى من 100 الف`,
            });
        
                            db.set(`games_${message.author.id}`, Date.now());
        if (random == 1 && colour == 3) { // Green
            money *= 15
            db.add(`credits_${user.id}`, money)
            let moneyEmbed1 = new Discord.MessageEmbed()
                .setColor("#086e45")
                .setDescription(`** يا حضك في الروليت ربحت  ${money}  \n\nالمضاعفة: 15x**`);
            message.reply({
              embeds: [moneyEmbed1]
            })
        } else if   (random == 3 && colour == 2) { // Yellow
            money *= 5
            db.add(`credits_${user.id}`, money)
            let moneyEmbed4 = new Discord.MessageEmbed()
                .setColor("#086e45")
                .setDescription(`** 🟡 كفوو فزت ب  ${money}  \n\nالمضاعفة: 5x**`);
            message.reply({
              embeds: [moneyEmbed4]
            })
        } else if (isOdd(random) && colour == 1) { // Red
            money = parseInt(money * 1.5)
            db.add(`credits_${user.id}`, money)

            let moneyEmbed2 = new Discord.MessageEmbed()
                .setColor("#086e45")
                .setDescription(`**🔴 كفووو فزت  ${money}\n\nالمضاعفة: 1.5x**`);
            message.reply({
              embeds: [moneyEmbed2]
            })
        } else if (!isOdd(random) && colour == 0) { // Black
            money = parseInt(money * 2)
            db.add(`credits_${user.id}`, money)

            let moneyEmbed3 = new Discord.MessageEmbed()
                .setColor("#086e45")
                .setDescription(`**⬛ يا جمالك بالاسود فزت ب  ${money} \n\nالمضاعفة: 2x**`);
            message.reply({
              embeds: [moneyEmbed3]
            })
        } else { // Wrong
            db.subtract(`credits_${user.id}`, money)
            let moneyEmbed4 = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(` **القممم خسرت ${money} \n\nالمضاعفة: 0x**`);
            message.reply({
              embeds: [moneyEmbed4]
            })
        }
          db.add(`games_${user.id}`, 1)
}
    })
}