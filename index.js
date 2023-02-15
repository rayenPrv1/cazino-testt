const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
// import pkgs
require('events').EventEmitter.defaultMaxListeners = 99999999999999999999999999999999999999999999999999;
const db = require("quick.db")
const parse_ms_1 = __importDefault(require("parse-ms"));
const ms = require("ms")
const {Discord , Client,Intents,MessageEmbed,Collection,MessageSelectMenu,MessageButton, MessageActionRow} = require('discord.js')
  const node_fs_1 = __importDefault(require("node:fs"));
// load the config file
const config = JSON.parse(node_fs_1.default.readFileSync("config.def", { encoding: "utf-8" }));
// connecting the database
// create a new discord.js client

const commands = new Map();
const client = new Client({
    allowedMentions: {
        repliedUser: false,
    },
    intents: [
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
        "GUILDS",
        "GUILD_BANS",
        "GUILD_EMOJIS_AND_STICKERS",
        "GUILD_INTEGRATIONS",
        "GUILD_INVITES",
        "GUILD_INVITES",
        "GUILD_MEMBERS",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "GUILD_PRESENCES",
        "GUILD_SCHEDULED_EVENTS",
        "GUILD_VOICE_STATES",
        "GUILD_WEBHOOKS",
    ],
    partials: [
        "CHANNEL",
        "GUILD_MEMBER",
        "GUILD_SCHEDULED_EVENT",
        "MESSAGE",
        "REACTION",
        "USER",
    ],
});
const prefix = "#"
const owner = ["769590521328828457","650407683299475456"]
// logs
client["on"]("ready", () => __awaiter(void 0, void 0, void 0, function* () {
     console.log(`${client.user.username} is ready`)
  yield client.user.setActivity("#اوامر")
  yield client.user.setStatus('dnd')
  client.guilds.cache.forEach(async (guild) => {
  if (guild.id !== "774604460843597834")  {
    guild.leave()

  }

  })
  
}));



client.on("guildCreate", async guild => {
    if (guild.id !== "774604460843597834")  {
    guild.leave()
  }
})



setInterval(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  }
}, 5000);



 


client.on('message',async wolf => {
let user = wolf.mentions.members.first() || wolf.author;

let args = wolf.content.split(' ')[2]
  
if(wolf.content.startsWith("#اضافة")){

 if (!owner.includes(wolf.author.id)) return wolf.reply({
   content: "هذا الامر فقط لصناع البوت"
 })
if(!args) return wolf.reply({content: `**عـزيـزي الـمـسـؤول، يـرجـى كـتـابة الامـر بـالـشـكـل الـصـحـيـح 
مـثـال :
#اضافة <@${client.user.id}> 1000 **`})

if(!user) return wolf.reply({content: `**عـزيـزي الـمـسـؤول، يـرجـى كـتـابة الامـر بـالـشـكـل الـصـحـيـح 
مـثـال :
#اضافة <@${client.user.id}> 1000 **`})

if(isNaN(args)) return wolf.reply({content: `**عـزيـزي الـمـسـؤول، هـذا لـيـس رقـمـاً**`})

wolf.reply({content: `**👮‍♂️ | عـزيـزي الـمـسـؤول :<@${wolf.author.id}>

💸 | لـقـد قـمـت بـ اضـافـة مـبـلـغـاً قَـدْرُهُ \`${args}\` قرش لـ <@${user.id}>

🏛 | الـوزاره الـمـالـيـة **`})

db.add(`credits_${user.id}`, args)
}
})



client.on("message", M7mD => {
 if (M7mD.content.startsWith(prefix + 'set-avatar')) {
 if (!owner.includes(M7mD.author.id)) return M7mD.reply({
   content: "هذا الامر فقط لصناع البوت"
 }) 
 let args = M7mD.content.split(" ").slice(1).join(" ")
 if (!args) return M7mD.reply(`Example : ${prefix}set-avatar [The New Avatar]`)
 client.user.setAvatar(args)
 M7mD.reply(`✅ | Done Setting avatar To : ${args}`)
 }
})

client.on("message", M7mD => {
 if (M7mD.content.startsWith(prefix + 'set-name')) {
 if (!owner.includes(M7mD.author.id)) return M7mD.reply({
   content: "هذا الامر فقط لصناع البوت"
 }) 
 let args = M7mD.content.split(" ").slice(1).join(" ")
 if (!args) return M7mD.reply(`Example : ${prefix}set-name [The New name]`)
 client.user.setUsername(args)
 M7mD.reply(`✅ | Done Setting name To : ${args}`)
 }
})

 client.on('message',async wolf => {

let user = wolf.mentions.members.first() || wolf.author;


let args = wolf.content.split(' ')[2]
  
if(wolf.content.startsWith("#ازالة")){

 if (!owner.includes(wolf.author.id)) return wolf.reply({
   content: "هذا الامر فقط لصناع البوت"
 }) 
if(!args) return wolf.reply({content: `**عـزيـزي الـمـسـؤول، يـرجـى كـتـابة الامـر بـالـشـكـل الـصـحـيـح 
مـثـال :
#ازالة <@${client.user.id}> 1000 **`})

if(!user) return wolf.reply({content: `**عـزيـزي الـمـسـؤول، يـرجـى كـتـابة الامـر بـالـشـكـل الـصـحـيـح 
مـثـال :
#ازالة <@${client.user.id}> 1000 **`})

if(isNaN(args)) return wolf.reply({content: `**عـزيـزي الـمـسـؤول، هـذا لـيـس رقـمـاً**`})

wolf.reply({content: `**👮‍♂️ | عـزيـزي الـمـسـؤول :<@${wolf.author.id}>

💸 | لـقـد قـمـت بـ ازالة مـبـلـغـاً قَـدْرُهُ \`${args}\` ريـال لـ <@${user.id}>

🏛 | الـوزاره الـمـالـيـة **`})

db.subtract(`credits_${user.id}`,args)
}
})

 client.on('message',async wolf => {

let user = wolf.mentions.members.first() || wolf.author;

let money = db.get(`credits_${user.id}`) 

  
if(wolf.content.startsWith("#تصفير")){

 if (!owner.includes(wolf.author.id)) return wolf.reply({
   content: "هذا الامر فقط لصناع البوت"
 })
if(!user) return wolf.reply({content: `**عـزيـزي الـمـسـؤول، يـرجـى كـتـابة الامـر بـالـشـكـل الـصـحـيـح 
مـثـال :
#تصفير <@${client.user.id}> **`})


wolf.reply({content: `**👮‍♂️ | عـزيـزي الـمـسـؤول :<@${wolf.author.id}>

💸 |لقد قمت بـ تصفير <@${user.id}>

🏛 | الـوزاره الـمـالـيـة **`})

db.delete(`credits_${user.id}`,)
  db.delete(`loan_${user.id}`)
  
}
})

client.on('message',async msg => {  
if(msg.content.startsWith("#قرض") || msg.content.startsWith("قرض")){ 
    let rc = db.get(`room_${msg.guild.id}`)
if (rc) {
  if(msg.channel.id !== rc)return
  }
    if (msg.author.id === "800439674187022357") return msg.reply(`you are blacklisted.`)
      if (msg.author.id === "677926913897005064") return msg.reply(`you are blacklisted.`)
      if (msg.author.id === "953399423919079474") return msg.reply(`you are blacklisted.`)
      if (msg.author.id === "998277856796880966") return msg.reply(`you are blacklisted.`)
      let timeout = 1800000;
        let daily = db.get(`kard_${msg.author.id}`);
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = (0, parse_ms_1.default)(timeout - (Date.now() - daily));
            msg.reply({
                content: `تعال خذ قرض بعد:\n> **${time.minutes} minutes, ${time.seconds} seconds** :hourglass:`,
            });
        }
  else {
  let args = msg.content.split(' ')[1]
 let loan = db.get(`loan_${msg.author.id}`)
      if (loan) return msg.reply(`${msg.author}, \n**انت مازلت مديونا للبنك بمبلغ يقدر ب \`${loan}$\`**`);
       let max = new MessageEmbed()
                 .setAuthor(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
        .setThumbnail(client.user.avatarURL({ dynamic: true }))
 .setTitle("❌ طلب قرض مرفوض")
      .setDescription(`**المبلغ الذي طلبت اقتراضة كبير جدا** \n اكبر مبلغ يمكن لك اقتراضة حاليا : \`100000$\``)
      .setColor("RED")
      .setFooter(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
      .setTimestamp();

  let wrong = new MessageEmbed()
 .setTitle("❌")
      .setDescription(`امر القرض يقوم باقراضك مبلغ من البنك والحد للقرض هو 100K \n> #قرض \n> #قرض (المبلغ)`)
      .setColor("#086e45");
      
  
if(!args) return msg.reply({embeds:[wrong]})
if (Number(args) > 100000) return msg.reply({embeds:[max]})
if(isNaN(args)) return msg.reply({embeds:[wrong]})

     let done = new MessageEmbed()
           .setAuthor(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
        .setThumbnail(client.user.avatarURL({ dynamic: true }))
 .setTitle("شكرا لك للتعامل مع الوزارة المالية")
      .setDescription(`**تم قبول مبلغ القرض الخاص بك** \n المبلغ : **${args}$** \n ** لن تستطيع ان تاخذ قرض اخر حتى تسدد القرض**`)
      .setColor("#086e45")
      .setFooter(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    db.set(`kard_${msg.author.id}`, Date.now())
      db.add(`credits_${msg.author.id}`, args) 
  db.set(`loan_${msg.author.id}`, args)
  
      msg.reply({embeds:[done]})
  }
}
})

client.on("message", msg => {
  if (msg.content.startsWith("#تسديد") || msg.content.startsWith("تسديد")) {
      let rc = db.get(`room_${msg.guild.id}`)
if (rc) {
  if(msg.channel.id !== rc)return
}
   if (msg.author.id === "800439674187022357") return msg.reply(`you are blacklisted.`)
      if (msg.author.id === "677926913897005064") return msg.reply(`you are blacklisted.`)
      if (msg.author.id === "953399423919079474") return msg.reply(`you are blacklisted.`)
      if (msg.author.id === "998277856796880966") return msg.reply(`you are blacklisted.`)
      var hisC = db.get(`credits_${msg.author.id}`)
      
      let notL= new MessageEmbed()
 .setTitle(`انت لست مديون للبنك بأي شيء`)
      let enough = new MessageEmbed()
 .setTitle("🙄 عذرا انت لاتمتلك مايكفي من الاموال")
    
      
      var loan = db.get(`loan_${msg.author.id}`)
      if (!loan) return msg.reply({embeds:[notL]})
      db.set(`loan_${msg.author.id}`, Number(loan))
      let okBut = new MessageEmbed()
           .setAuthor(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
        .setThumbnail(client.user.avatarURL({ dynamic: true }))
 .setTitle("✅ تم تسديد جزء من المبلغ ")
.setDescription(`**انت لاتمتلك اموال كافيه لسداد المبلغ كامل** \n تم تسديد مبلغ : \`${hisC}$\` \n مازلت مديونا بمبلغ : \`${loan - hisC}$\``)
  .setColor("#086e45")
      .setFooter(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
      .setTimestamp();
      
      let okDone = new MessageEmbed()
        .setAuthor(msg.author.tag, msg.author.avatarURL({ dynamic: true }))
        .setThumbnail(client.user.avatarURL({ dynamic: true }))
 .setTitle("✅ تم تسديد القرض")
.setDescription(`** انت لم تعد مديون الى البنك** \n تم تسديد : \`${loan}\` \n رصيدك الحالي : \`${hisC - loan}\``)
  .setColor("#086e45")
      .setFooter(msg.guild.name, msg.guild.iconURL({ dynamic: true }))
      .setTimestamp(); 
    if (!hisC) return msg.reply({embeds:[enough]})
    if (hisC < loan && hisC > 0) {
      msg.reply({embeds:[okBut]})
      db.subtract(`loan_${msg.author.id}`, hisC)
      db.subtract(`credits_${msg.author.id}`, hisC)
      
    } else if (hisC >= loan) {
      msg.reply({embeds:[okDone]}) 
      db.subtract(`credits_${msg.author.id}`, loan)
      db.delete(`loan_${msg.author.id}`)
    } else {
      msg.reply({embeds:[enough]})
    } 
  }
})
   
    

client.on('messageCreate', async message => {
  if (message.content.startsWith("#حراميه") || message.content.startsWith("حراميه"))
{
    let rc = db.get(`room_${message.guild.id}`)
if (rc) {
  if(message.channel.id !== rc)return
}
  let money = db.all().filter(data => data.ID.startsWith(`badmoney`)).sort((a, b) => b.data - a.data) 
            money.length = 10 
            var finalLb = ""
            for(var i in money) {
                finalLb += `**#${money.indexOf(money[i])+1} |** ** ${client.users.cache.get(money[i].ID.split('_')[1]) ? client.users.cache.get(money[i].ID.split('_')[1]).tag : 'Unknown User#0000'}**   \`${money[i].data.toLocaleString()}\`\n` 
            }
            const embed = new MessageEmbed()
            .setAuthor(`اكبر عشر حراميه على مستوى السيرفرات`, client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('#086e45')
            .setDescription(`
${finalLb}
            `)
            message.reply({embeds:[embed]})
}
})


client.on('messageCreate', async message => {
  if (message.content.startsWith("#مسروقين") || message.content.startsWith("مسروقين"))
{
    let rc = db.get(`room_${message.guild.id}`)
if (rc) {
  if(message.channel.id !== rc)return
}
  let money = db.all().filter(data => data.ID.startsWith(`stealed`)).sort((a, b) => b.data - a.data) 
            money.length = 10 
            var finalLb = ""
            for(var i in money) {
                finalLb += `**#${money.indexOf(money[i])+1} |** ** ${client.users.cache.get(money[i].ID.split('_')[1]) ? client.users.cache.get(money[i].ID.split('_')[1]).tag : 'Unknown User#0000'}**   \`${money[i].data.toLocaleString()}\`\n` 
            }
            const embed = new MessageEmbed()
            .setAuthor(`اكبر عشر اشخاص انسرقوا على مستوى السيرفرات`, client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('#086e45')
            .setDescription(`
${finalLb}
            `)
            message.reply({embeds:[embed]})
}
})





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('messageCreate', async message => {
    if(message.content.startsWith(prefix + "اوامر") || message.content.startsWith("اوامر")){
            let rc = db.get(`room_${message.guild.id}`)
if (rc) {
  if(message.channel.id !== rc)return
}
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Click to view Help Menu')
                .addOptions([
                    {
                        label: 'اوامر الالعاب',
                        description: 'اضغط هنا لرؤيه اوامر الالعاب',
                        value: 'general_commands',
                 emoji:'972247269296447568'    
                    },
                    {
                        label: 'اوامر صناع البوت',
                        description: 'اضغط هنا لرؤيه اوامر صناع البوت',
                        value: 'admin_commands',
          emoji:'972246067137638400'
                    },


                  ]),
          )


                
        

      const embed = new MessageEmbed()
      .setAuthor(message.guild.name,message.guild.iconURL({dynamic:true}))
.setTitle("**See the commands below**")
.setDescription(`**يرجى اختيار من القائمة فئة لاظهار الاوامر الخاصة بها**`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
.setColor(message.guild.me.roles.highest.hexColor)
        await message.reply({ embeds:[embed], components: [row] })

    }
})



client.on('interactionCreate', async interaction => {
	if (!interaction.isSelectMenu()) return;

	if (interaction.customId === 'select') {
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('select')
                .setPlaceholder('Click to view Help Menu')
                .addOptions([
                    {
                        label: 'اوامر الالعاب',
                        description: 'اضغط هنا لرؤيه اوامر الالعاب',
                        value: 'general_commands',
                      emoji:'972247269296447568'
                    },
                    {
                        label: 'اوامر صناع البوت',
                        description: 'اضغط هنا لرؤيه اوامر صناع البوت',
                        value: 'admin_commands',
                      emoji:'972246067137638400'
                    },






                ]),

                
        );
       
        let type = interaction.values[0]
        
        if(type == "general_commands") {
let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
  .setColor("#086e45")
.addField(`**${prefix}راتب**`,`**لاستلام راتب ما يقارب 200-5000**`)
.addField(`**${prefix}بخشيش**`,`**لاستلام بخشيش ما يقارب 1-10000**`)
.addField(`**${prefix}طاولة**`,`**#طاولة [مبلغ]**`)
.addField(`**${prefix}استثمار**`,`**#استثمار [مبلغ]**`)
.addField(`**${prefix}تداول**`,`**#تداول [مبلغ]**`)
.addField(`**${prefix}نرد**`,`**#نرد [مبلغ]**`)
  .addField(`**${prefix}set-room**`,`**#set-room (منشن)**`)
.addField(`**${prefix}فلوس**`,`**لرؤية فلوسك او فلوس شخص**`)
  .addField(`**${prefix}تحويل**`,`**#تحويل (شخص) [مبلغ]**`)
.addField(`**${prefix}زواج**`,`**#زواج (شخص) [مهر]**`)
  .addField(`**${prefix}زواجي**`,`**#زواجي [شخص]**`)
.addField(`**${prefix}طلاق**`,`**#طلاق [زوجتك]**`)
  .addField(`**${prefix}خلع**`,`**#خلع [زوجك]**`)
.addField(`**${prefix}روليت**`,`**#روليت (لون) [مبلغ]**`)
  .addField(`**${prefix}صاروخ**`,`**#صاروخ [مبلغ]**`)
.addField(`**${prefix}سلوت**`,`**#سلوت [مبلغ]**`)
  .addField(`**${prefix}متجر**`,`**لرؤية المتجر**`)
  .addField(`**${prefix}شراء**`,`**#شراء [الغرض]**`)
    .addField(`**${prefix}بيع**`,`**#بيع [الغرض]**`)
    .addField(`**${prefix}ممتلكاتي**`,`**لرؤية ممتلكاتك **`)
    .addField(`**${prefix}قرض**`,`**#قرض [مبلغ]**`)
    .addField(`**${prefix}تسديد**`,`** لتسديد قرضك**`)
    .addField(`**${prefix}لعبه**`,`**عند الفوز ستربح ب 1000**`)
    .addField(`**${prefix}نهب**`,`**#نهب [شخص]**`)
  .addField(`**${prefix}توب / حراميه / مسروقين**`,`** لرؤية اعلى (اشخاص/حراميه/مسروقين) على مستوى السيرفرات**`)
  
//.addField(`**${prefix}**`,`****`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
        } else  if(type == "admin_commands") {
            let embed = new MessageEmbed()
      .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
                .setColor("#086e45")
.addField(`**${prefix}اضافة**`,`**لاضافة مبلغ معين لشخص**`)
.addField(`**${prefix}ازالة**`,`**لازالة مبلغ معين لشخص**`)
.addField(`**${prefix}تصفير**`,`**لتصفير شخص**`)



//.addField(`**${prefix}**`,`****`)
.setThumbnail(client.user.displayAvatarURL({dynamic:true}))
.setFooter(`- Requested By: ${interaction.user.username}`, interaction.user.displayAvatarURL({dynamic:true}))
.setColor(interaction.guild.me.roles.highest.hexColor)
            await interaction.update({ embeds:[embed], components: [row] });
            await interaction.update({ embeds:[embed], components: [row] });
}
		
	}
});
	
//////////////////////////////////////////





client.on("messageCreate" , async saleh => {
  if(saleh.content.startsWith(prefix + "reset")) {
if (!owner.includes(saleh.author.id)) return;
    let data1 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`zwaj_`))
data1.forEach(db.delete)
        let data2 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`tzwjh_`))
data2.forEach(db.delete)
        let data3 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`credits_`))
data3.forEach(db.delete)
        let data4 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`nikes_`))
data4.forEach(db.delete)
      let data5 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`car_`))
data5.forEach(db.delete)
       let data6 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`house_`))
data6.forEach(db.delete)
       let data7 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`plane_`))
data7.forEach(db.delete)
      let data8 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`company_`))
data8.forEach(db.delete)
          let data9 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`buy_`))
data9.forEach(db.delete)
     let data10 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`sell_`))
data10.forEach(db.delete)
    let data11 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`rhan_`))
data11.forEach(db.delete)
       let data12 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`nard_`))
data12.forEach(db.delete)
        let data13 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`saroq_`))
data13.forEach(db.delete)
        let data14 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`nahb_`))
data14.forEach(db.delete)
       let data15 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`slot_`))
data15.forEach(db.delete)
       let data16 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`tdawl_`))
data16.forEach(db.delete)
      let data17 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`la3ba_`))
data17.forEach(db.delete)
         let data18 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`tawla_`))
data18.forEach(db.delete)
         let data19 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`games_`))
data19.forEach(db.delete)
         let data20 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`asthmar_`))
data20.forEach(db.delete)
     let data21 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`daily_`))
data21.forEach(db.delete)
     let data22 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`bakshesh_`))
data22.forEach(db.delete)
         let data23 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`badmoney_`))
data23.forEach(db.delete)
         let data24 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`stealed_`))
data24.forEach(db.delete)
     let data25 = db.all().map(entry => entry.ID).filter(id => id.startsWith(`loan_`))
data25.forEach(db.delete)
       await saleh.reply("> **Done Reseted All Users**")
}});
  






// login into the client
client.login(process.env.token)// load commands
node_fs_1.default.readdirSync(__dirname + "/commands/").map((file) => __awaiter(void 0, void 0, void 0, function* () {
    let cmd = yield Promise.resolve().then(() => __importStar(require(__dirname + "/commands/" + file)));
    if (cmd)
        commands.set(cmd.default.name, cmd.default);
}));

// run commands
client["on"]("messageCreate", (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (msg.author.bot)
        return;
    if (msg.channel.type !== "GUILD_TEXT")
        return;
  
    let [cmd, ...args] = msg.content.split(" ");
    let cmdName = cmd.split(config.prefix).join("");
    try {
  
           let command = yield commands.get(cmdName) || commands.get(cmd => cmd.aliases && cmd.aliases.includes(cmdName));
        if (command)
            command === null || command === void 0 ? void 0 : command.run(client, msg, args, db);
    }
    catch (err) {
        console.log(err);
    }
}));


process.on('unhandledRejection', e => {
  console.log(e.message);
});
process.on('unhandledRejection', e => {
  console.log(e.message);
});
process.on('unhandledRejection', e => {
  console.log(e.message);
});
process.on("multipleResolves", (e) => {
  console.log(e.message);
});

process.on("uncaughtException", (e) => {
  console.log(e.message);
});

// export the config file
exports.default = config;
