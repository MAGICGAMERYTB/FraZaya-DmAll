const Discord = require('discord.js')
const params = require('./params.json')
const moment = require('moment')
const { red, blue, green, magenta, yellow } = require('console-log-colors').color;
const client = new Discord.Client({
    intents: 32767,
    partials: [
        'CHANNEL',
        'GUILD_MEMBER',
        'GUILD_SCHEDULED_EVENT',
        'MESSAGE',
        'REACTION',
        'USER'
    ]
});

//

moment.locale('fr')
let time = blue(`[${moment().format('LTS')}] `)
//time = blue(`[${moment().format('LTS')}] `)

//

client.on('ready', async () => {

    try {
        console.log(magenta(`\n\n        ███████ ██████   █████  ███████  █████  ██    ██  █████      ██████  ███    ███      █████  ██      ██      
        ██      ██   ██ ██   ██    ███  ██   ██  ██  ██  ██   ██     ██   ██ ████  ████     ██   ██ ██      ██      
        █████   ██████  ███████   ███   ███████   ████   ███████     ██   ██ ██ ████ ██     ███████ ██      ██      
        ██      ██   ██ ██   ██  ███    ██   ██    ██    ██   ██     ██   ██ ██  ██  ██     ██   ██ ██      ██      
        ██      ██   ██ ██   ██ ███████ ██   ██    ██    ██   ██     ██████  ██      ██     ██   ██ ███████ ███████ 
                                        Dev by`), blue(`FraZaYa#9999\n\n`),
        yellow(`            Login as`), blue(client.user.tag + '\n'),
        yellow(`            Server :`), blue(client.guilds.cache.get(params.id.server).name))

    } catch (error) {
        console.log(
        yellow(`            Server :`), blue('Non trouvé'))
    }

    try {
        console.log(yellow(`             User :`), blue(client.users.cache.get(params.id.user).tag))
    } catch (error) {
        console.log(
        yellow(`             User :`), blue('Non trouvé'))
    }

    try {
        console.log(yellow(`             Prefix :`), blue(params.prefix))
    } catch (error) {
        console.log(
        yellow(`             Prefix :`), blue('Non trouvé'))
    }

    console.log('\n\n')
    console.log(time, yellow("Toutes les informations seront loggés ici."))
    
});

client.on('messageCreate', async msg => {

    if(msg.content.startsWith(params.prefix)) msg.delete()

    if(msg.content === `${params.prefix}check`){
        console.log(blue(`[${moment().format('LTS')}] `), yellow(`Message détecté par le bot ✅`))
    }
    if(msg.content.startsWith(`${params.prefix}start`)){
        let message = msg.content.slice(params.prefix.length + 5)
        
        let memberCount =  0
        msg.guild.members.cache.forEach(members => {

            let embed = new Discord.MessageEmbed()
            .setDescription(`${message}\n\n*[FraZaYa Raider](https://github.com/frazaya/FraZaya-DmAll)*`)

            members.send({embeds: [embed]}).then(member => {
                memberCount ++
                console.log(blue(`[${moment().format('LTS')}] `), magenta(`[${memberCount}/${msg.guild.memberCount}]`), yellow(`Envoyé !`))
            }).catch(err => {
                memberCount ++
                console.log(blue(`[${moment().format('LTS')}] `), magenta(`[${memberCount}/${msg.guild.memberCount}]`), red(`Erreur !`))
            })
        })
    }   

});

client.login(params.token).catch(err => {
    console.log(red(`Une erreur est survenue : tu n'a pas mis un bon`), blue(`token`), red(`ou pas activé les`), blue(`intents`), red('.'), red(`\nL'erreur détaillée :`), yellow(err))
})
