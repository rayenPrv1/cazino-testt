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
const { MessageEmbed } = require('discord.js')
const parse_ms_1 = __importDefault(require("parse-ms"));

module.exports = {
        name: "شراء",
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
        let daily = yield db.get(`buy_${message.author.id}`);
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = (0, parse_ms_1.default)(timeout - (Date.now() - daily));
            message.reply({
                content: `تعال اشتري مرا ثانيه بعد:\n> **${time.seconds} seconds** :hourglass:`,
            });
        }
      else {
              var _a, _b, _c, _d;
        let user = message.author;

    
        let author = db.get(`credits_${user.id}`)

 if (args.join(' ').toLocaleLowerCase() == 'بي سي') {
            if (author < 20000) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**احلامك كبيرة رح جمع بس**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})

             db.get(`nikes_${user.id}`)
            db.add(`nikes_${user.id}`, 1)
           db.set(`buy_${message.author.id}`, Date.now()) 
            db.subtract(`credits_${user.id}`, 20000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                                                  thumbnail: {
                                url: ("https://cdn.discordapp.com/attachments/1072954832299753593/1075129410690220132/1f4bb.png"),
                            },
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                   
                        },
                      
                        description: `**تمت عملية شراء بي سي مقابل 20000**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                      
                        },
                    },
                ],})         } else if (args.join(' ').toLocaleLowerCase() == 'سيارة') {
         
            if (author < 100000) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**احلامك كبيرة رح جمع بس**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})

             db.get(`car_${user.id}`)
            db.add(`car_${user.id}`, 1)
              db.set(`buy_${message.author.id}`, Date.now()) 
            db.subtract(`credits_${user.id}`, 100000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                                                                        thumbnail: {
                                url: ("https://cdn.discordapp.com/attachments/1026225902994075772/1075133931176869898/1f697_1.png"),
                                                                          },
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**تمت عملية شراء سيارة مقابل 100000**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})         } else if (args.join(' ').toLocaleLowerCase() == 'قصر') {
           
            if (author < 1200000) return message.reply({embeds: [
                    {
                                          color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**احلامك كبيرة رح جمع بس**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})

             db.get(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)
           db.set(`buy_${message.author.id}`, Date.now()) 
        
            db.subtract(`credits_${user.id}`,1200000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                                                  thumbnail: {
                                url: ("https://cdn.discordapp.com/attachments/1026225902994075772/1075132138397114378/european-castle-emoji-457x512-lt5bwqxk.png")},
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**تمت عملية شراء قصر مقابل 1200000**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})   
 }   else if (args.join(' ').toLocaleLowerCase() == 'قطار') {
           
            if (author < 25000000) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**احلامك كبيرة رح جمع بس**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})

             db.get(`Train_${user.id}`)
            db.add(`Train_${user.id}`, 1)
           db.set(`buy_${message.author.id}`, Date.now()) 
            db.subtract(`credits_${user.id}`,25000000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                                                thumbnail: {
                                url: ("https://cdn.discordapp.com/attachments/1026225902994075772/1075185321857269810/Train.PNG")},
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**تمت عملية شراء قطار مقابل 25000000**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})    
   
 
 
 
 }   else if (args.join(' ').toLocaleLowerCase() == 'طيارة') {
           
            if (author < 3000000) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**احلامك كبيرة رح جمع بس**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})

             db.get(`plane_${user.id}`)
            db.add(`plane_${user.id}`, 1)
           db.set(`buy_${message.author.id}`, Date.now()) 
            db.subtract(`credits_${user.id}`,3000000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                                     thumbnail: {
                                url: ("https://cdn.discordapp.com/attachments/1026225902994075772/1075135020634751067/small-airplane_1f6e9.png")},
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**تمت عملية شراء طائرة مقابل 3000000**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})    
 
    }   else if (args.join(' ').toLocaleLowerCase() == 'يخت') {
           
            if (author < 10000000 ) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**احلامك كبيرة رح جمع بس**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})

             db.get(`Yacht_${user.id}`)
            db.add(`Yacht_${user.id}`, 1)
           db.set(`buy_${message.author.id}`, Date.now()) 
            db.subtract(`credits_${user.id}`,10000000 )
message.reply({embeds: [
                    {
                                                color: "#086e45",
                             thumbnail: {
                                url: ("https://cdn.discordapp.com/attachments/1026225902994075772/1075135502140846120/26f5.png")},
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**تمت عملية شراء يخت مقابل 10000000 **`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})    
 
 
 //plane
 
 
 } else if (args.join(' ').toLocaleLowerCase() == 'شركة') {
           
            if (author < 7000000) return message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**احلامك كبيرة رح جمع بس**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})

             db.get(`company_${user.id}`)
            db.add(`company_${user.id}`, 1)
           db.set(`buy_${message.author.id}`, Date.now()) 
            db.subtract(`credits_${user.id}`,7000000)
message.reply({embeds: [
                    {
                                                color: "#086e45",
                                           thumbnail: {
                                url: ("https://cdn.discordapp.com/attachments/1026225902994075772/1075137056755417218/1f3e2.png")},
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `**تمت عملية شراء شركة مقابل 7000000**`,
                        timestamp: new Date(),
                        footer: {
                            iconURL: ((_c = message.guild) === null || _c === void 0 ? void 0 : _c.iconURL({ dynamic: true })) || "",
                            text: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.name,
                        },
                    },
                ],})        } else {
            if (message.content.toLowerCase() === `#شراء` || message.content.toLowerCase() === "شراء") {
            message.reply({embeds: [
                    {
                                                color: "#086e45",
                        author: {
                            name: message.author.username,
                            iconURL: message.author.avatarURL({ dynamic: true }) || "",
                        },
                        description: `** ادخل ما تريد شرائه\nاو اكتب  #متجر لترى ماذا يحتوي المتجر**`,
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