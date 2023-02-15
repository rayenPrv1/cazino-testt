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
    name: "ممتلكاتي",
    aliases: ['املاك', 'أملاك','موجودات'],
    run: async (client, message, args, db)  => __awaiter(void 0, void 0, void 0, function* () {
            let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r) return;
}
         if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
      if (message.author.id === "677926913897005064") return message.reply(`you are blacklisted.`)
      if (message.author.id === "953399423919079474") return message.reply(`you are blacklisted.`)
      if (message.author.id === "998277856796880966") return message.reply(`you are blacklisted.`)
              var _a, _b, _c, _d, _e, _f, _g, _h;
      let user = message.mentions.members.first() || message.author;
 let pc = db.get(`nikes_${user.id}`)
      let car = db.get(`car_${user.id}`)
      let house = db.get(`house_${user.id}`)
           let plane = db.get(`plane_${user.id}`)
                 let company = db.get(`company_${user.id}`)
      let Yacht = db.get(`Yacht_${user.id}`)
      let Train = db.get(`Train_${user.id}`)

if (pc === null) pc = '0';
if (car === null) car = '0';
      if (plane === null) plane = '0';
            if (house === null) house = '0';
      if (Yacht === null) Yacht = '0';
        if (Train === null) Train = '0';
            if (company === null) company = '0';
      if (!user) return message.reply(`:x: يرجى منشن شخص`)
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
>       - | **بي سي:** \`${pc}\`
>       - | **سيارة:** \`${car}\`
>       - | **قصر:** \`${house}\`
>       - | **طيارة:** \`${plane}\`
>       - | **شركة:** \`${company}\`
>       - | **يخت:** \`${Yacht}\`
>       - | **قطار:** \`${Train}\`
`,
                        },
                    ],
                });})
}

//Train