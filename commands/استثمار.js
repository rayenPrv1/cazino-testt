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

exports.default = {
    name: "استثمار",
    run: (client, message, args, db) => __awaiter(void 0, void 0, void 0, function* () {
            let r = db.get(`room_${message.guild.id}`)
if (r) {
  if(message.channel.id !== r)return
}
   if (message.author.id === "800439674187022357") return message.reply(`you are blacklisted.`)
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let timeout = 150000;
        let daily = yield db.get(`asthmar_${message.author.id}`);
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = (0, parse_ms_1.default)(timeout - (Date.now() - daily));
            message.reply({
                content: `تعال استثمر بعد:\n> **${time.minutes} minutes, ${time.seconds} seconds** :hourglass:`,
            });
        }
          
        else {
            let balance = args[0];
            if (!balance)
                return message.reply({
                    content: `> الرجاء استخدام الأمر بالطريقة الصحيحة\n> \`${__1.default.prefix}استثمار المبلغ \``,
                });
            if (Number(balance) < 500)
                return message.reply({
                    content: "> اقل مبلغ للإستثمار هو 500",
                });
            if (Number(yield db.get(`credits_${message.author.id}`)) < Number(balance))
                return message.reply({
                    content: "> مافي استثمار بالدين الله يرزقك",
                });
            let cons = ["more", "less"];
            let con = cons[Math.floor(Math.random() * cons.length)]
        
             let degs = [
               0.02,0.02,0.02,0.02,
            ];
            let deg = degs[Math.floor(Math.random() * degs.length)];
            if (con == "more") {
                var num = parseFloat(balance);
                var bal = num + num * deg;
                var degString = yield degTOstring(deg);
                db.set(`asthmar_${message.author.id}`, Date.now());
                yield db.add(`credits_${message.author.id}`, bal + Number(balance));
                yield message.reply({
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
              كفوو استثمار ناجح بنسبة **${degString}** 🥳\nمبلغ الارباح: **${bal}$**\nرصيدك الحالي: **${yield db.get(`credits_${message.author.id}`)}$**`,
                          
                        },
                    ],
                });
            }
            
            else if (con == "less") {
                var num = parseFloat(balance);
                var bal = num + num * deg;
                var degString = yield degTOstring(deg);
                db.set(`asthmar_${message.author.id}`, Date.now());
                if (bal + Number(balance) >
                    Number(yield db.get(`credits_${message.author.id}`)))
                    yield db.set(`credits_${message.author.id}`, 0);
                else
                    yield db.subtract(`credits_${message.author.id}`, bal + Number(balance));
                yield message.reply({
                    embeds: [
                        {
                                                    color: "#086e45",
                            thumbnail: {
                                url: ((_e = client.user) === null || _e === void 0 ? void 0 : _e.avatarURL({ dynamic: true })) || "",
                            },
                            author: {
                                iconURL: ((_f = message.author) === null || _f === void 0 ? void 0 : _f.avatarURL({ dynamic: true })) || "",
                                name: message.author.tag,
                            },
                            timestamp: new Date(),
                            footer: {
                                iconURL: ((_g = message.guild) === null || _g === void 0 ? void 0 : _g.iconURL({ dynamic: true })) || "",
                                text: (_h = message.guild) === null || _h === void 0 ? void 0 : _h.name,
                            },
                            description: `القققمم استثمار خاسر بنسبة **${degString}** 😂💔\nمبلغ الخسارة: **${bal}$**\nرصيدك الحالي: **${yield db.get(`credits_${message.author.id}`)}$**`,
                        },
                    ],
                });
            }
        }
    }),
};
function degTOstring(deg) {
    return __awaiter(this, void 0, void 0, function* () {
        if (deg == 0.1)
            return "10%";
        else if (deg == 0.02)
            return "2%";
        else if (deg == 0.02)
            return "200%";
        else if (deg == 0.02)
            return "70%";
        else if (deg == 0.02)
            return "8%";
        else if (deg == 0.02)
            return "25%";
          else if (deg == 0.02)
            return "43%";
              else if (deg == 0.02)
            return "15%";
        else
            return `${deg}`;
    });
}
