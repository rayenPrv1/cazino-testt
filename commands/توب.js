
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
const __1 = __importDefault(require(".."));

const { Client, Message, MessageEmbed } = require('discord.js')
const db = require('quick.db')

exports.default = {
    name: "توب",
  

    /**
     * @param { Client } Client
     * @param { Message } Message
     * @param { String[] } Args
     */

    run: async(Client, Message, Args, db) => __awaiter(void 0, void 0, void 0, function* () {
            let rc = db.get(`room_${Message.guild.id}`)
if (rc) {
  if(Message.channel.id !== rc)return
}
   if (Message.author.id === "800439674187022357") return Message.reply(`you are blacklisted.`)
      if (Message.author.id === "677926913897005064") return Message.reply(`you are blacklisted.`)
      if (Message.author.id === "953399423919079474") return Message.reply(`you are blacklisted.`)
      if (Message.author.id === "998277856796880966") return Message.reply(`you are blacklisted.`)
       let Balance = db.all().filter(Data => Data.ID.startsWith(`credits`)).sort((A, B) => B.data - A.data)
       if(!Balance.length) return Message.channel.send('كلهم فقراء بس انا غني 👑')
       Balance.length = '10';
       var FinalLeaderboard = '';
       for(var I in Balance) {
          if(Balance[I].data === null) Balance[I].data = '0';
          FinalLeaderboard += `** #${Balance.indexOf(Balance[I]) + 1} | ${Client.users.cache.get(Balance[I].ID.split('_')[1]) ? Client.users.cache.get(Balance[I].ID.split('_')[1]).tag : 'Unknown User#0000'}** **\`${Balance[I].data.toLocaleString()}$\` **\n`;
       }
       const Embed = new MessageEmbed()
            .setAuthor(`اغنى عشر لاعبين على مستوى السيرفرات`, Client.user.displayAvatarURL({ dynamic: true }))
          .setColor('#086e45')
          .setDescription(`${FinalLeaderboard}`)
          .setFooter(Client.user.username, Client.user.displayAvatarURL({ dynamic: true }))
       Message.reply({
         embeds: [Embed]
       })
    })
}
