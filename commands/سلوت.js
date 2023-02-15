
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
const slotItems = ["🍇", "🍉", "🍍", "🍎", "🍒", "🥝", "🍊", "🍌", "🍓", "🍋", "🍐", "🥭"];
const db = require("quick.db");
const { MessageEmbed } = require('discord.js');  
const parse_ms_1 = __importDefault(require("parse-ms"));
exports.default = {
  name: "سلوت",       
    run: async (client, message, args) => __awaiter(void 0, void 0, void 0, function* () {
            let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}
         if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
      if (message.author.id === "677926913897005064") return message.reply(`you are blacklisted.`)
      if (message.author.id === "953399423919079474") return message.reply(`you are blacklisted.`)
      if (message.author.id === "998277856796880966") return message.reply(`you are blacklisted.`) 
let timeout = 120000;
        let daily = yield db.get(`slot_${message.author.id}`);
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = (0, parse_ms_1.default)(timeout - (Date.now() - daily));
            message.reply({
                content: `تعال العب بعد:\n> **${time.minutes} minutes ${time.seconds} seconds** :hourglass:`,
            });
        }
      else {
    let user = message.author;
    let moneydb = db.fetch(`credits_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`** العب على قد فلوسك لا تصرعني **`);

    let moneyhelp = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`> الرجاء استخدام الأمر بالطريقة الصحيحة\n> #المبلغ> سلوت>`); 

    if (!money) return message.reply({
      embeds: [moneyhelp],
    });
    if (money > moneydb) return message.reply({
      embeds: [moneymore],
    });

  if (Number(money) > 500000)
            return message.reply({
                content: `> لا تستطيع اللعب بمبالغ اعلى من 500 الف`,
            });
        
    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 3
        win = true;
    }
                        yield db.set(`slot_${message.author.id}`, Date.now());

    if (win) {
      
        let slotsEmbed1 = new MessageEmbed()
          .setThumbnail('https://cdn.discordapp.com/attachments/1026225902994075772/1075156278546010303/clash_goblin_win.GIF')
            .setDescription(`**${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n كفوو فزت ب  ${money}**`)

     	.setTimestamp()
            .setColor("#086e45")
        message.reply({
          embeds: [slotsEmbed1],
        })
        db.add(`credits_${user.id}`, money)
    } else {
        let slotsEmbed = new MessageEmbed()
       	.setThumbnail('https://cdn.discordapp.com/attachments/1026225902994075772/1075156053584515112/ghost_ripdead64.GIF')
            .setDescription(`**${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\القممم خسرت ${money}**`)
        

         	.setTimestamp()
            .setColor("#086e45")

        message.reply({
          embeds: [slotsEmbed],
        })
        db.subtract(`credits_${user.id}`, money)
    }
      }
      })
}