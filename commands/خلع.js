
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
Object.defineProperty(exports, "__esModule", { value: true });


const {MessageEmbed, Discord} = require("discord.js")
const {MessageButton, MessageActionRow} = require("discord.js")
exports.default = {
  name: "خلع",
run: async(client, message, args, db) => {
        let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}
    if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
      if (message.author.id === "677926913897005064") return message.reply(`you are blacklisted.`)
      if (message.author.id === "953399423919079474") return message.reply(`you are blacklisted.`)
      if (message.author.id === "998277856796880966") return message.reply(`you are blacklisted.`)
 let user = message.mentions.members.first()
 if(!user) return message.reply(`> الرجاء منشن الزوج`)
 
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
          hello += `${xp[i].ID.split('_')[1]}`;
        };
        for (i in xp) {
          zwjh += `${xp[i].ID.split('_')[2]}`;
        };
        for (i in xp) {
          mhr += `${xp[i].ID.split('_')[3]}`;
        };
    if(hello === "") return message.reply(`> انتي لستي متزوجة!`)
        if(message.author.id === zwjh) {
        }
        if(message.author.id === hello) return message.reply(`> الخلع للنساء فقط!`)
    if(zwjh === "") return message.reply(`> انت لست متزوجة!`)
message.reply(`تم خلع 
 
 الزوج: <@!${hello}>
 من 
 الزوجه: <@!${zwjh}>`)
        db.delete(`zwaj_${hello}_${zwjh}_${mhr}`)
        db.delete(`tzwjh_${zwjh}`)
        }
};
