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
const parse_ms_1 = __importDefault(require("parse-ms"));
const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "بيع",
    run: (client, message, args, db) => __awaiter(void 0, void 0, void 0, function* () {
            let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}
         if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
      if (message.author.id === "677926913897005064") return message.reply(`you are blacklisted.`)
      if (message.author.id === "953399423919079474") return message.reply(`you are blacklisted.`)
      if (message.author.id === "998277856796880966") return message.reply(`you are blacklisted.`)
      let timeout = 10000;
        let daily = yield db.get(`sell_${message.author.id}`);
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = (0, parse_ms_1.default)(timeout - (Date.now() - daily));
            message.reply({
                content: `تعال بيع بعد :\n> **  ${time.seconds} seconds ** :hourglass:`,
            });
        }
      else {
             var _a, _b, _c, _d;
        let user = message.author;

        if (args.join(' ').toLocaleLowerCase() == 'بي سي') {
      
            let nikees = db.get(`nikes_${user.id}`)

            if (nikees < 1) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**ما عندك بي سي دز بس**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 

            db.get(`nikes_${user.id}`)
            db.subtract(`nikes_${user.id}`, 1)

                  db.set(`sell_${message.author.id}`, Date.now()) 

            db.add(`credits_${user.id}`, 20000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `💻 **كفوو بعت بي سي مقابل 20000** 💻`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})         } else if (args.join(' ').toLocaleLowerCase() == 'سيارة') {
  
            let cars = db.get(`car_${user.id}`)

            if (cars < 1) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**مسوي خوي ؟ ما عندك سيارة دز**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 

            db.get(`car_${user.id}`)
            db.subtract(`car_${user.id}`, 1)

                          db.set(`sell_${message.author.id}`, Date.now()) 

            db.add(`credits_${user.id}`, 100000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `🚗 **كفوو بعت السيارة مقابل 100000** 🚗`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})         } else if (args.join(' ').toLocaleLowerCase() == 'قصر') {
        
            let houses = db.get(`house_${user.id}`)

            if (houses < 1) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**مسوي غني انت و راسك**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 

            db.get(`house_${user.id}`)
            db.subtract(`house_${user.id}`, 1)

                           db.set(`sell_${message.author.id}`, Date.now()) 

            db.add(`credits_${user.id}`, 1200000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `🏰 **كفوو بعت القصر مقابل 1200000** 🏰`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})        
        
        
        } else if (args.join(' ').toLocaleLowerCase() == 'يخت') {
  

            let Yacht = db.get(`Yacht_${user.id}`)

            if (Yacht < 1) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**مسوي غني انت و راسك**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 


            db.get(`Yacht_${user.id}`)
            db.subtract(`Yacht_${user.id}`, 1)
                  db.set(`sell_${message.author.id}`, Date.now()) 

            db.add(`credits_${user.id}`, 10000000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `⛵ **كفوو بعت يخت مقابل 10000000** ⛵`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 
        
   
        
        } else if (args.join(' ').toLocaleLowerCase() == 'طيارة') {
  

            let plane = db.get(`plane_${user.id}`)

            if (plane < 1) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**مسوي غني انت و راسك**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 


            db.get(`plane_${user.id}`)
            db.subtract(`plane_${user.id}`, 1)
                  db.set(`sell_${message.author.id}`, Date.now()) 

            db.add(`credits_${user.id}`, 3000000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        }, //company
                        description: `✈️ **كفوو بعت الطائرة مقابل 3000000** ✈️`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 
           } else if (args.join(' ').toLocaleLowerCase() == 'قطار') {
  

            let Train = db.get(`Train_${user.id}`)

            if (Train < 1) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**مسوي غني انت و راسك**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 


            db.get(`Train_${user.id}`)
            db.subtract(`Train_${user.id}`, 1)
                  db.set(`sell_${message.author.id}`, Date.now()) 

            db.add(`credits_${user.id}`, 25000000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        }, //company
                        description: `🚇 **كفوو بعت قطار مقابل 25000000** 🚇`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 
        } else if (args.join(' ').toLocaleLowerCase() == 'شركة') {
  

            let plane = db.get(`company_${user.id}`)

            if (plane < 1) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**ما عندك شركة دز**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 


            db.get(`company_${user.id}`)
            db.subtract(`company_${user.id}`, 1)
                  db.set(`sell_${message.author.id}`, Date.now()) 

            db.add(`credits_${user.id}`, 7000000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `🏬 **كفوو بعت الشركة مقابل 7000000** 🏬`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 
        } else {
            if (message.content.toLowerCase() === `#بيع` || message.content.toLowerCase() === `بيع`) {
 
                return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**يرجى كتابة #متجر لترى المتوفر **`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 

            } else {
              return  message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**يرجى كتابة #متجر لترى المتوفر ** `,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],}) 
            }
        }
      }
    })
}