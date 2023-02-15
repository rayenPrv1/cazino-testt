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

const { MessageEmbed } = require('discord.js');


exports.default = {
        name: "متجر",
    run: (client, message, args, db) => __awaiter(void 0, void 0, void 0, function* () {
            let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}
          var _a, _b, _c, _d;
   if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
      if (message.author.id === "677926913897005064") return message.reply(`you are blacklisted.`)
      if (message.author.id === "953399423919079474") return message.reply(`you are blacklisted.`)
      if (message.author.id === "998277856796880966") return message.reply(`you are blacklisted.`)
        message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**بي سي: 20000 [#شراء/#بيع بي سي]\nسيارة: 100000 [#شراء/#بيع سيارة]\nقصر: 1200000 [#شراء/#بيع قصر]\n طيارة: 3000000 [#شراء/#بيع طيارة]\n شركة: 7000000 [#شراء/#بيع شركة]**\n**يخت: 10000000 [#شراء/#بيع يخت]**\n**قطار: 25000000 [#شراء/#بيع قطار]**`,
                        timestamp: new Date(),

      
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],
                      })
    })
}