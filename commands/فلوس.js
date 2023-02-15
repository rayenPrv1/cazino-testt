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
exports.default = {
    name: "فلوس",
    run: (client, message, args, db) => __awaiter(void 0, void 0, void 0, function* () {
            let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}
   if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
      if (message.author.id === "677926913897005064") return message.reply(`you are blacklisted.`)
      if (message.author.id === "953399423919079474") return message.reply(`you are blacklisted.`)
      if (message.author.id === "998277856796880966") return message.reply(`you are blacklisted.`)
        var _a, _b, _c;
        let user = ((_a = message.mentions.members) === null || _a === void 0 ? void 0 : _a.first()) ||
            ((_b = message.guild) === null || _b === void 0 ? void 0 : _b.members.cache.get(args[0])) ||
            message.member;
        let money = (yield db.get(`credits_${user === null || user === void 0 ? void 0 : user.user.id}`)) || 0;
       if (user.id === "800439674187022357") return message.reply(`this user is blacklisted.`)
      if (user.id === "677926913897005064") return message.reply(`this user is blacklisted..`)
      if (user.id === "953399423919079474") return message.reply(`this user is blacklisted..`)
      if (user.id === "998277856796880966") return message.reply(`this user is blacklisted.`)
            if (user.user.bot) return message.reply(`**البوتات ليس لديها رصيد**`)
        message.reply({
            embeds: [
                {
                    title: `${client.user.username}`,
                    thumbnail: { url: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "" },
                    color: "#086e45",
                    description: (user === null || user === void 0 ? void 0 : user.user.id) == message.author.id
                        ? `**مجموع فلوسك هو:\n${money}$**`
                        : `**مجموع فلوس <@!${user === null || user === void 0 ? void 0 : user.user.id}> هو:\n${money}$**`,
                    footer: { text: `لعرض الأوامر #اوامر` },
                },
            ],
        });
    }),
};
