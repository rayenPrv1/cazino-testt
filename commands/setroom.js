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
    name: "set-room",
    run: async (client, message, args, db , mongoose)  => __awaiter(void 0, void 0, void 0, function* () {
      if (!message.member.permissions.has("MANAGE_GUILD")) return;
      let rd =  db.get(`room_${message.guild.id}`)
if (rd === null) rd = 'لم يتم تحديد روم';
if(!args[0]) return message.reply(`**يرجة كتابة ايدي الروم البنك او منشنه مع الامر\n روم البنك الحالي :\n <#${rd}>**`)
const channelObject = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
  if(!channelObject) return message.reply(`**لا استطيع ايجاد هذا الروم!**`)
 // Gets the channel object
 if (!channelObject.type === "GUILD_TEXT") return message.reply(`**لا تستطيع اضافة روم ليس كتابيا!!**`)
          try{
         db.set(`room_${message.guild.id}`, channelObject.id)
message.reply(`✅ **| تم تحديد روم البنك بنجاح**`)

      } catch (err){
        message.reply(`Error!!`)
console.log(err)
      }
       })
    }
