console.clear()
const Discord = require("discord.js");
const chalk = require('chalk');
const config = require(`./botconfig.js`)
const prefix = config.prefix;


//dont remove or edit this line
console.log(chalk.red('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+='))
  console.log(chalk.cyan(`Made by Tejas Lamba#1924`))
  console.log(chalk`{yellowBright Credits } | {blueBright Visa2Code} | {cyanBright https://discord.gg/xBm2KDMRmx}`)
  console.log(`Join Above for Support!`)
  console.log(chalk.red('=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+='))
  //til here dont touch above anything
if (config.ExpressServer) {
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send({
  Working: "online"
  })
})
 console.log(chalk.greenBright(`Web Server Started`))
app.listen(3000)
}

const client = new Discord.Client({
   intents : [
     Discord.Intents.FLAGS.GUILDS ,
     Discord.Intents.FLAGS.GUILD_MEMBERS ,
     Discord.Intents.FLAGS.GUILD_BANS ,
     Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS ,
     Discord.Intents.FLAGS.GUILD_INTEGRATIONS ,
     Discord.Intents.FLAGS.GUILD_WEBHOOKS ,
     Discord.Intents.FLAGS.GUILD_INVITES ,
     Discord.Intents.FLAGS.GUILD_VOICE_STATES ,
     Discord.Intents.FLAGS.GUILD_PRESENCES ,
     Discord.Intents.FLAGS.GUILD_MESSAGES ,
     Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS ,
     Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING ,
     Discord.Intents.FLAGS.DIRECT_MESSAGES , 
     Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS ,
     Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING ,
    //all intents require for bot to run
  ],
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]

});
require("dotenv").config()

const { Database } = require("quickmongo");
const db = new Database(config.mongo)
const randomstring = require("randomstring");

let support = new Discord.MessageButton()
.setStyle(`LINK`)
.setLabel(`Support`)
.setEmoji(`884336184438968320`)
.setURL(`https://discord.gg/xBm2KDMRmx`)

let inviteme = new Discord.MessageButton()
.setStyle(`LINK`)
.setLabel(`Invite Me!`)
.setEmoji(`884336555949428756`)
.setURL(`https://discord.gg/xBm2KDMRmx`)

let globalbuttons = new Discord.MessageActionRow().addComponents(support, inviteme)

//parse users tag and convert it to a channelName
function getChannelName(user) {
 const user1 = `${user.username}#${user.discriminator}`

  let value = user1.replace("#", "-").toLowerCase();
  
  value = value.replace(/ /g, "-");
  return value;
}

//checks if a ticket is already open
function hasTicket(g, interaction) {
  let channelName = getChannelName(interaction.user);
  let ticket = g.channels.cache.find((ch) => ch.name == channelName);
  if (ticket) {
    interaction.editReply({ content: `You already have a ticket. <#${ticket.id}>`})
    return true;
  } else {
    return false;
  }
}



async function checktoken(token){
  if (!token) {
       console.log(chalk.redBright(`NO TOKEN PROVIDED`))
      process.exit()
    }
    
    if(token.length != "NzQ4MDg3OTA3NTE2MTUzODg5.X0YVJw.Wk6lEEwy158ZQ3wvKx3uvdnoWGA".length) {
      console.log(chalk.redBright(`INAVLID TOKEN`))
      process.exit()
    }
    
  let testclient = new Discord.Client({
   intents : [
     Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING ,
  ]
});
  try {
    await testclient.login(token)
    testclient.on("ready", () => testclient.destroy() )
    
   
    
  } catch {
    console.log(chalk.redBright("INVALID TOKEN"))
    process.exit()
  }
}
checktoken(config.token)



async function configcheck(config) {
  if (!config.prefix) {
    console.log(chalk.redBright("Fill botconfig.js"))
    return true
    }
  if (!config.status.name) {
    console.log(chalk.redBright("Fill botconfig.js"))
    return true
    }
  if (!config.status.type) {
    console.log(chalk.redBright("Fill botconfig.js"))
    return true
    }
}

let goodconfig = configcheck(config)

if(!goodconfig) {
   process.exit()
   return;
 }
 
//-----------------Global Embeds--------------\\


const sfatsembed = new Discord.MessageEmbed()
    .setDescription(`this server needs to set up their staff roles first! \`${prefix}setstaff\``)
    .setColor(0x5865F2)

const channelsetup = new Discord.MessageEmbed()
    .setDescription(`This server needs to set up their ticket channels first! \`${prefix}setchannels\``)
    .setColor(0x5865F2)

    const colldown1 = new Discord.MessageEmbed()
        .setDescription(`Your order is executed after 5 seconds, and it will be closed`)
        .setColor(0x5865F2)



client.on('ready', async () => {
  console.log(chalk.greenBright(`Token Working`))
    console.log(chalk.greenBright(`Logging in to bot...`))
  
  console.log(chalk.bgRed(chalk.greenBright(`Logged into ${client.user.username}`)))

  client.user.setActivity(config.status.name, { type: config.status.type.toUpperCase() })
});
  

client.on("messageCreate", async(message) =>{
  if (message.author.bot || !message.guild) return;
  let args = message.content.toLowerCase().split(" ");
  let command = args.shift()
  if (command == prefix + `help`) {
    let embed = new Discord.MessageEmbed()
      .setTitle(`Bot commands list`)
      .setDescription(`> \`${prefix}send\` - Send a message to open tickets
> \`${prefix}add\` - Adds a member to a specific ticket
> \`${prefix}remove\` - Removes a member to a specific ticket.
> \`${prefix}delete\` - Delete a specific ticket
> \`${prefix}close\` - Close a specific ticket
> \`${prefix}open\` - Open a specific ticket
> \`${prefix}rename\` - Rename a specific ticket
> \`${prefix}setchannels\` - set channels relating to ticket log and category
> \`${prefix}setstaff\` - set staff roles`)
.addField(`My Source Code`, `[Click Me!](https://github.com/TajuModding/Discord-v13-Button-Tickets-bot)`, false)
      .setTimestamp()
      .setColor(0x5865F2)
      .setFooter(`All rights belong to https://discord.gg/xBm2KDMRmx`)
    message.reply({ embeds: [embed], components: [globalbuttons] })

    
  }
  if (command == prefix + `add`) {
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply({content: `:x: This command requires \`MANAGE_MESSAGES\` permission.`});
    let args = message.content.split(' ').slice(1).join(' ');
    let channel = message.mentions.channels.first() || message.channel;
    const sfats = await db.get(`Staff_${message.guild.id}`)

    

    if (!sfats) return message.reply({ embeds: [sfatsembed] })
    if (await db.get(`ticket_${channel.id}_${message.guild.id}`)) {
      let member = message.mentions.members.first() || message.guild.members.cache.get(args || message.guild.members.cache.find(x => x.user.username === args || x.user.username === args));
      if (!member) return message.reply({ content: `Mention a member of its ID`});
      try {
        channel.updateOverwrite(member.user, {
          VIEW_CHANNEL: true,
          SEND_MESSAGES: true,
          ATTACH_FILES: true,
          READ_MESSAGE_HISTORY: true,
        }).then(() => {
          const sucess1 = new Discord.MessageEmbed()
    .setDescription(`${member} has been successfully added to ${channel}`)
    .setColor(0x5865F2)
          message.reply({ embed: [sucess1] });

        });
      }
      catch (e) {
        return message.channel.send({ content: `An error occurred, please try again!` });
      }
    }
  }
  if (command == prefix + `remove`) {
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply({ content: `:x: This command requires \`MANAGE_MESSAGES\` permission.` });
    let args = message.content.split(' ').slice(1).join(' ');
    let channel = message.mentions.channels.first() || message.channel;
    const sfats = await db.get(`Staff_${message.guild.id}`)
    if (!sfats) return message.reply({ embed: [sfatsembed] })
    if (await db.get(`ticket_${channel.id}_${message.guild.id}`)) {
      let member = message.mentions.members.first() || message.guild.members.cache.get(args || message.guild.members.cache.find(x => x.user.username === args || x.user.username === args));
      if (!member) return message.reply({ content: `Mention a member of its ID`});
      try {
        channel.updateOverwrite(member.user, {
          VIEW_CHANNEL: false,
        }).then(() => {


          const removep = new Discord.MessageEmbed()
            .setDescription(`Successfully delete ${member} from ${channel}`)
            .setColor(0x5865F2)

          message.reply({ embeds: [removep] });
        });
      }
      catch (e) {
        return message.channel.send({content: `An error occurred, please try again!`});
      }
    }
  }
  if (command == prefix + 'delete') {
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply({content: `:x: This command requires \`MANAGE_MESSAGES\` permission.`});
    let channel = message.mentions.channels.first() || message.channel;
    const sfats = await db.get(`Staff_${message.guild.id}`)
    if (!sfats) return message.reply({ embed: [sfatsembed] })
    if (await db.get(`ticket_${channel.id}_${message.guild.id}`)) {
        
      message.reply({ embeds: [colldown1] })
      setTimeout(async () => {

          channel.delete()
      }, 5000)
    }
  }
  if (command == prefix + 'close') {
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply({content: `:x: This command requires \`MANAGE_MESSAGES\` permission.`});
    let channel = message.mentions.channels.first() || message.channel;
    const sfats = await db.get(`Staff_${message.guild.id}`)
    if (!sfats) return message.reply({ embeds: [sfatsembed] })
  
      let msg = await message.reply({ embeds: [colldown1] })
      setTimeout(async () => {
        try {
          msg.delete()
          const close = new Discord.MessageEmbed()
          .setDescription(`Ticket has been closed by <@!${message.author.id}>`)
          .setColor(`YELLOW`)
          channel.send({ embeds: [close] })
          let type = 'member'
          await Promise.all(channel.permissionOverwrites.filter(o => o.type === type).map(o => o.delete()));
          channel.setName(`closed-ticket`)

        } catch (e) {
          return message.channel.send({content: `An error occurred, please try again!`});
        }
      }, 1000)
    
  }

  if (command == prefix + 'open') {
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply({content: `:x: This command requires \`MANAGE_MESSAGES\` permission.`});
    let channel = message.mentions.channels.first() || message.channel;
    const sfats = await db.get(`Staff_${message.guild.id}`)
    if (!sfats) return message.reply({ embeds: [sfatsembed] })
    if (await db.get(`ticket_${channel.id}_${message.guild.id}`)) {
      let msg = await message.reply({ embeds: [colldown1] })
      setTimeout(async () => {
        try {
          msg.delete()
          channel.send({ embed: { description: `Ticket opened by <@!${message.author.id}>`, color: `GREEN` } })
          let meember = client.users.cache.get(await db.get(`ticket_${channel.id}_${message.guild.id}`).ticket_by);
          channel.updateOverwrite(meember, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            ATTACH_FILES: true,
            READ_MESSAGE_HISTORY: true,
          })
          channel.updateOverwrite((await db.get(`Staff_${message.guild.id}.Admin`)), {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            ATTACH_FILES: true,
            READ_MESSAGE_HISTORY: true,
          })
          channel.updateOverwrite((await db.get(`Staff_${message.guild.id}.Moder`)), {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            ATTACH_FILES: true,
            READ_MESSAGE_HISTORY: true,
          })
          channel.setName(`ticket-${await db.get(`ticket_${channel.id}_${message.guild.id}`).count}`)

        } catch (e) {
          return message.channel.send({ content: `An error occurred, please try again!` });
        }
      }, 1000)
    }
  }
  if (command == prefix + 'rename' || command == prefix + 'setname') {
    if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply({content: `:x: This command requires \`MANAGE_MESSAGES\` permission.`});
    let channel = message.mentions.channels.first() || message.channel;
    const sfats = await db.get(`Staff_${message.guild.id}`)
    if (!sfats) return message.reply({ embeds: [sfatsembed] })
    if (await db.get(`ticket_${channel.id}_${message.guild.id}`)) {
      let args = message.content.split(' ').slice(1).join(' ');
      if (!args) return message.reply({ embed: { description: `Please select the name you want for the ticket`, color: 0x5865F2 } })
      channel.setName(args)
      message.delete()

    }
  }
  if (command == prefix + 'setstaff'){
    
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ content: `:x: This command requires \`ADMINISTRATOR\` permission.`});
    
    const Admin = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
    const Moder = message.guild.roles.cache.get(args[1]);
    if (!Admin || !Moder) {
    
      let main = new Discord.MessageEmbed()
     .setDescription(`Please mention an Admin role (or iD) first, *then* a Mod role (or iD) with this command! `)
      return message.reply({ embeds: [main] })
    }
    
    await db.set(`Staff_${message.guild.id}.Admin`, Admin.id)
    await db.set(`Staff_${message.guild.id}.Moder`, Moder.id)
    message.react("✅")
  }
  if (command == prefix + 'setchannels'){
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({ content: `:x: This command requires \`ADMINISTRATOR\` permission.` });
     let main = new Discord.MessageEmbed()
    .setTitle(`Error`)
     .setDescription(`Please mention a categoryid with this command! `)
     
    if (args.length != 1) return message.reply({ embeds: [main] })
    
   
    const cat = message.guild.channels.cache.get(args[0]);
  
    if (cat.type !== "GUILD_CATEGORY") return message.channel.send({ content: "The input should be a category"});
   
    await db.set(`Channels_${message.guild.id}.Cat`, cat.id)
    message.react("✅")
  }

  if (command == prefix + 'send' || command == prefix + 'ticket') {
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.reply({ content: `:x: This command requires \`ADMINISTRATOR\` permission.` });
    const sfats = await db.get(`Staff_${message.guild.id}`) 
    const sfas = await db.get(`Channels_${message.guild.id}`)
    if (!sfats || sfats === null) return message.reply({ embeds: [sfatsembed] })
    if (!sfas || sfas === null) return message.reply({ embeds: [channelsetup] })
    let idd = randomstring.generate({ length: 20 })
    let args = message.content.split(' ').slice(1).join(' ');
    if (!args) args = `Tickets`

    let specialbtn = new Discord.MessageButton()
    .setStyle(`SECONDARY`)
    .setLabel('Special Support')
    .setEmoji(config.emojis.special)
    .setCustomId("ss")


    let genbtn = new Discord.MessageButton()
    .setStyle(`SECONDARY`)
    .setLabel('General Support')
    .setEmoji(config.emojis.general)
    .setCustomId("gs")


    let prizebtn = new Discord.MessageButton()
    .setStyle(`SECONDARY`)
    .setLabel('Giveaway Claim')
    .setEmoji(config.emojis.giveaway)
    .setCustomId("gc")
 

    let trow = new Discord.MessageActionRow().addComponents(specialbtn, genbtn, prizebtn)

    message.delete()
    
    let embed = new Discord.MessageEmbed()
      .setTitle(config.ticketembed.title)
      .setDescription(config.ticketembed.description)
      .setThumbnail(message.guild.iconURL())
      .setTimestamp()
      .setColor(0x5865F2)
      .setFooter(`${message.guild.name}-${config.ticketembed.footer}`, message.guild.iconURL())
    let msg = await message.channel.send({ 
      embeds: [embed], 
      components: [trow] 
      })

      msg.pin()
      
      
    
  }
})
//ephemeral
client.on("interactionCreate", async (interaction) => {

if(!interaction.isButton()) return;

if (interaction.customId == `ss`) {

  await interaction.reply({ content: `Your ticket is being processed. Please wait `, ephemeral: true})
    if (hasTicket(interaction.guild, interaction)) {
      return;
    }

   

 
   interaction.guild.channels.create(getChannelName(interaction.user), {
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: ['VIEW_CHANNEL'],
          },
          {
            id: (await db.get(`Staff_${interaction.guild.id}.Admin`)),
            allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`,`MANAGE_MESSAGES`],
          },
          {
            id: interaction.member.id,
            allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`],
          },
        ], parent: (await db.get(`Channels_${interaction.guild.id}.Cat`)), position: 1, topic: `${interaction.member.id}`, reason: "All rights reserved to Visa2Code"
      }).then(async channel => {
        channel = channel
        
      
        await interaction.editReply(`
  **Your ticket has been successfully opened** <#${channel.id}>`, true)
            
        const embedticket = new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle("Specialised Support")
          .setFooter(`Ticket opened at`)
          .setColor(0x5865F2)
          .setDescription(`Support will be with you soon.\n
  To close this ticket, interact with 🔒`)
        
        let bu1tton = new Discord.MessageButton()
          .setStyle(`SECONDARY`)
          .setLabel('Close')
          .setCustomId(`cl`)
          .setEmoji(`🔒`)
          
          
        channel.send({ content: `Welcome <@!${interaction.member.user.id}>`,  embeds: [embedticket], components: [new Discord.MessageActionRow().addComponents(bu1tton)] }).then(msg => {
          msg.pin()
        })
        })
}
if (interaction.customId == `gs`) {
    await interaction.reply({ content: `Your ticket is being processed. Please wait `, ephemeral: true})
    if (hasTicket(interaction.guild, interaction)) {
      return;
    }

   
 
   interaction.guild.channels.create(getChannelName(interaction.user), {
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: ['VIEW_CHANNEL'],
          },
          {
            id: (await db.get(`Staff_${interaction.guild.id}.Admin`)),
            allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`,`MANAGE_MESSAGES`],
          },
          {
            id: interaction.member.id,
            allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`],
          },
        ], parent: (await db.get(`Channels_${interaction.guild.id}.Cat`)), position: 1, topic: `${interaction.member.id}`, reason: "All rights reserved to Visa2Code"
      }).then(async channel => {
        channel = channel
        
      
        await interaction.editReply(`
  **Your ticket has been successfully opened** <#${channel.id}>`, true)
            
        const embedticket = new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle("General Support")
          .setFooter(`Ticket opened at`)
          .setColor(0x5865F2)
          .setDescription(`Support will be with you soon.\n
  To close this ticket, interact with 🔒`)
        
        let bu1tton = new Discord.MessageButton()
          .setStyle(`SECONDARY`)
          .setLabel('Close')
          .setCustomId(`cl`)
          .setEmoji(`🔒`)
          
          
        channel.send({ content: `Welcome <@!${interaction.member.user.id}>`,  embeds: [embedticket], components: [new Discord.MessageActionRow().addComponents(bu1tton)] }).then(msg => {
          msg.pin()
        })
        })
}
if (interaction.customId == `gc`) {
  await interaction.reply({ content: `Your ticket is being processed. Please wait `, ephemeral: true})
    if (hasTicket(interaction.guild, interaction)) {
      return;
    }

   
 
   interaction.guild.channels.create(getChannelName(interaction.user), {
        permissionOverwrites: [
          {
            id: interaction.guild.roles.everyone,
            deny: ['VIEW_CHANNEL'],
          },
          {
            id: (await db.get(`Staff_${interaction.guild.id}.Admin`)),
            allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`,`MANAGE_MESSAGES`],
          },
          {
            id: interaction.member.id,
            allow: ['VIEW_CHANNEL', `READ_MESSAGE_HISTORY`, `ATTACH_FILES`, `SEND_MESSAGES`],
          },
        ], parent: (await db.get(`Channels_${interaction.guild.id}.Cat`)), position: 1, topic: `${interaction.member.id}`, reason: "All rights reserved to Visa2Code"
      }).then(async channel => {
        channel = channel
        
      
        await interaction.editReply(`
  **Your ticket has been successfully opened** <#${channel.id}>`, true)
            
        const embedticket = new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle("Giveaway Claim")
          .setFooter(`Ticket opened at`)
          .setColor(0x5865F2)
          .setDescription(`Support will be with you soon.\n
  To close this ticket, interact with 🔒`)
        
        let bu1tton = new Discord.MessageButton()
          .setStyle(`SECONDARY`)
          .setLabel('Close')
          .setCustomId(`cl`)
          .setEmoji(`🔒`)
          
          
        channel.send({ content: `Welcome <@!${interaction.member.user.id}>`,  embeds: [embedticket], components: [new Discord.MessageActionRow().addComponents(bu1tton)] }).then(msg => {
          msg.pin()
        })
        })
}

if (interaction.customId == `cl`) {
  interaction.reply({ content: `Your order is executed after 5 seconds, and it will be closed`, ephemeral: true})
     let no = new Discord.MessageButton()
          .setStyle(`SECONDARY`)
          .setLabel('No')
          .setCustomId(`no`)


           let yes = new Discord.MessageButton()
          .setStyle(`DANGER`)
          .setLabel('Yes')
          .setCustomId(`yes`)

          let row = new Discord.MessageActionRow().addComponents(no, yes)


   let ch = interaction.channel
            if (!ch) return;
            setTimeout(async () => {
              try {
                const closemebed = new Discord.MessageEmbed()
                .setDescription(`The ticket has already been closed <@!${interaction.member.id}> \n \n Do you want to delete it?`)
                .setColor(`YELLOW`)
                
                ch.send({ embeds: [closemebed], components: [row] })
               
               
                

               const member = client.users.cache.get(ch.topic)
               
                ch.permissionOverwrites.edit(member.id,{
                   VIEW_CHANNEL: false
                   }
                )
                
                ch.setName(`closed-ticket`)
                
              } catch (e) {
                interaction.editReply({ content: `An error occurred, please try again!`, ephemeral: true})
                console.log(e)
                
              }
            }, 4000)
}

if (interaction.customId == `yes`) {
  const closemebed = new Discord.MessageEmbed()
                .setDescription(`Ticket will be deleted in 5 seconds`)
                .setColor(`YELLOW`)

              interaction.reply({ embeds: [closemebed] })

                 setTimeout(async () => {
              try {
                    interaction.channel.delete()
              } catch (e) {
                interaction.editReply({ content: `An error occurred, please try again!`, ephemeral: true})
                console.log(e)
                
              }
                  }, 4000)
}
if (interaction.customId == `no`) {
 
    interaction.message.delete()
  
}

});



  client.login(config.token)
