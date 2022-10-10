WAConnection
WABaileys
WABot

import { MessageType, MessageOptions, Mimetype } from '@adiwajshing/baileys'
// Sending gifs
await sock.sendMessage(
    id, 
    { 
        video: fs.readFileSync("gambar/bot.js"), 
        caption: "hello!",
        gifPlayback: true
    }
)

await sock.sendMessage(
    id, 
    { 
        video: "gambar/bot.js", 
        caption: "hello!",
        gifPlayback: true
    }
)

// send an audio file
await sock.sendMessage(
    id, 
    { audio: { url: ".gambar/bot.js" }, mimetype: 'audio/mp4' }
    { url: "Media/audio.mp3" }, // can send mp3, mp4, & ogg
)

// send a buttons message with image header!
const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Owner'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'List Menu'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Jadi Bot'}, type: 1}
]

const buttonMessage = {
    image: {url: 'https://example.com/image.jpeg'},
    caption: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 4
}

const sendMsg = await sock.sendMessage(id, buttonMessage)

//send a template message with an image **attached**!
const templateButtons = [
  {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
  {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
  {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

const buttonMessage = {
    text: "┌❏ *WA BOT MATCHBOX*
│➛ User : %name%
│➛ Level : Platinum l「 392/1365 」 
│➛ Money : 100
│➛ Exp : 100
│➛ Limit : 50
│➛ Tipe : Gratisan
└❏ Upgrade Ke Premium Sekarang! 

┌❏ *INDONESIA TIME*
│➛ WIB : %hour_of_day%:%minute%:%second%
│➛ WITA : tidak terdeteksi
└❏ WIT : tidak terdeteksi
                          
┌❏ *TODAY*
│➛ Hai %name%, Selamat Bergembira
│➛Jam : %hour_of_day%:%minute%:%second%
│➛Hari : %day_of_week%
└❏ Tanggal : %day_of_month%-%month%-%year%

┌❏ *DEVICE*
│➛Whatsapp : 22.07.12
│➛Merk HP : Samsung
│➛Versi HP : 12.0
│➛Versi OS : 11.08.3
│➛RAM : 512GB
│➛MCC : 510
└❏ MNC : 01 

┌─❑「 *BOT INFO* 」
│➛Owner : @62 858-6805-5463
│➛Mode : Public
│➛Prefix :  .
│➛Total Hit : 172638773
│➛Personal Chat : %reply_count_contacts%
│➛Total All Chat : 109740
│➛Group Chat : %reply_count_groups%
│➛Browser : Chrome
│➛Server : Baileys
│➛Version : 3.5.2
│➛Speed : %processing_time%
└❏ Silahkan Menguji Bot

┌❏『 Utama menu 』
├➢ #help 
├➢ #menu
├➢ #care
├➢ #grubofficial
├➢ #Store
├➢ #donasi
├➢ #scbot
├➢ #chatowner
├➢ #iklan1
├➢ #iklan2
├➢ #iklan3
├➢ #mygrup
├➢ #owner
├➢ #list
├➢ #getprem
└❏ 
┌❏『 Keyboard 』
├➢ #funkeyboard
├➢ #facemojikeyboard
├➢ #magickeyboard
├➢ #default
└❏
┌❏『 Daftar 』
├➢ #daftar <nama|umur>
├➢ #register <nama|umur>
├➢ #runtime
├➢ #tes
├➢ #iklan
├➢ #join <link gc>
├➢ #peraturan
├➢ #rules
├➢ #registered
└❏ 
┌❏『 Absen menu 』
├➢ #absen
├➢ #cekabsen
├➢ #hapusabsen
├➢ #mulaiabsen [teks]
└❏ 
┌❏『 Exp & Limit 』
├➢ #peti
├➢ #buy<jumlah limit>
├➢ #buy <jumlah limit>
├➢ #buyall
├➢ #cheat (Limit)
├➢ #daily
├➢ #claim
├➢ #dompet
├➢ #gift @user <jumlah>
├➢ #kerja (Limit)
├➢ #leaderboard
├➢ #lb
├➢ #gift2 @user <limit>
├➢ #payexp @user <amount>
├➢ #paylimit @user <amount>
├➢ #topmoney
├➢ #unreg <sn>
├➢ #unregister <sn>
└❏ 
┌❏『 Play Menu』
├➢ #playmusic
├➢ #playaudio
├➢ #playvideo
├➢ #playgames
├➢ #playimage
├➢ #playcharge
├➢ #playpause
├➢ #playphising
├➢ #playsteps
├➢ #playwifi
├➢ #playhorse
└❏ 
┌❏『 Adventure Menu (new) 』
├➢ #mancing
├➢ #judi <jumlah>
├➢ #berburu
├➢ #adventure
├➢ #petualang
├➢ #berpetualang
├➢ #work
├➢  #feed [pet type]
├➢ #gaji
├➢ #gajian
├➢ #hunt
├➢ #inv
├➢ #leveljob
├➢ #levelup
├➢ #nebang
├➢ #nyampah
├➢ #open <crate>
├➢ #gacha <crate>
├➢ #shop <sell|buy> <args>
├➢ #toko <sell|buy> <args>
├➢ #shop <sell|buy> <args>
├➢ #toko <sell|buy> <args>
├➢ #slots
├➢ #menanam
├➢ #transfer <Args>
├➢ #tukarcoin <Jumlah>
├➢ #tukarcoin <jumlah>
├➢ #tukarall
├➢ #tukarxp <Jumlah>
├➢ #tukarxp <jumlah>
├➢ #tukarsemua
├➢ #tukarmoney <Jumlah>
├➢ #tukarmoney <jumlah>
├➢ #tukarall
├➢ #use <item> <jumlah>
├➢ #heal
└❏ 
┌❏『 Aft Menu 』
├➢ #aftglow
├➢ #aftcryptocurrently
├➢ #aftcrypto1
├➢ #aftcrypto2
├➢ #aftcrypto3
├➢ #aftcloud
├➢ #aftff
├➢ #aftmlbb
├➢ #aftserti
├➢ #aftrainbow
├➢ #aftplaystore
├➢ #aftstell1
├➢ #aftstell2
├➢ #aftstell3
├➢ #aftstell4
├➢ #aftstell5 
├➢ #aftstell6
├➢ #aftwater1
├➢ #aftwater2
├➢ #aftwater3
├➢ #aftwater4
├➢ #aftwater5
├➢ #aftwater6
├➢ #aftlava1
├➢ #aftlava2
├➢ #aftlava3
├➢ #aftlava4
├➢ #aftlava5
├➢ #aftlava6
├➢ #aftlava7
├➢ #aftgaming1
├➢ #aftgaming2
├➢ #aftgaming3
├➢ #aftgaming4
├➢ #aftgaming5
├➢ #aftgaming6
├➢ #aftgaming7
├➢ #aftgaming8
├➢ #aftgaming9
├➢ #aftgaming10
├➢ #aftescape1
├➢ #aftescape2
├➢ #aftescape3
├➢ #aftescape4
├➢ #aftescape5
├➢ #aftescape6
├➢ #aftescape7
├➢ #aftgarden1
├➢ #aftgarden2
├➢ #aftgarden3
├➢ #aftgarden4
├➢ #aftgarden5
├➢ #aftgarden6
├➢ #aftgarden7
├➢ #afttree1
├➢ #afttree2
├➢ #afttree3
├➢ #afttree4
├➢ #afttree5
├➢ #afttree6
├➢ #afttree7
├➢ #aftyellow1
├➢ #aftyellow2
├➢ #aftyellow3
├➢ #aftyellow4
├➢ #aftyellow5
├➢ #aftyellow6
├➢ #aftyellow7
├➢ #aftred1
├➢ #aftred2
├➢ #aftred3
├➢ #aftred4
├➢ #aftred5
├➢ #aftred6
└❏ 
┌❏『 Pm Menu 』
├➢ #pmrainy_day
├➢ #pmrainy-night
├➢ #pmreconstruction
├➢ #pmred-and-blue
├➢ #pmred-lights
├➢ #pmred-wine
├➢ #pmreflection
├➢ #pmreplacing_billboard_advert
├➢ #pmreproduction
├➢ #pmretail_park
├➢ #pmretro-black
├➢ #pmretro-comic
├➢ #pmrinse
├➢ #pmriverside_billboard
├➢ #pmromantic_etude
├➢ #pmroses
├➢ #pmscratched-photo
├➢ #pmscribble
├➢ #pmscroll
├➢ #pmsharp-paint
├➢ #pmshine-stripes
├➢ #pmshiny-color
├➢ #pmshooting-stars
├➢ #pmshop_poster
├➢ #pmshopping_center
├➢ #pmshopping-arcade
├➢ #pmsidewalk
├➢ #pmsinger
├➢ #pmsip
├➢ #pmsketch-practicing
├➢ #pmskydiver
├➢ #pmsnow_in_london
├➢ #pmsnowboard
├➢ #pmsoak
├➢ #pmsoda
├➢ #pmsolarization
├➢ #pmsoppy
├➢ #pmsparklers
├➢ #pmsparkles
├➢ #pmsparkling-snow
├➢ #pmspecial_billboard
├➢ #pmsphinx
├➢ #pmspray
├➢ #pmspring_memories
├➢ #pmspring-flowers
├➢ #pmstacco
├➢ #pmstadium
├➢ #pmstardust
├➢ #pmstars
├➢ #pmstatic-noise
├➢ #pmstencil
├➢ #pmstone-age
├➢ #pmstreet_artist
├➢ #pmstreet_exhibition
├➢ #pmstriped-jeans
├➢ #pmsummer-dust
├➢ #pmsummoning-spirits
├➢ #pmsunburst
├➢ #pmsunray
├➢ #pmsuperman
├➢ #pmsupernova
├➢ #pmsurfer
├➢ #pmswedish_billboard
├➢ #pmtablet
├➢ #pmtaipei
├➢ #pmthe_first_man_on_the_moon
├➢ #pmthe_gun
├➢ #pmthe_kiss
├➢ #pmthe-frame
├➢ #pmtintbrush
├➢ #pmtokyo-crossing
├➢ #pmtoonic
├➢ #pmtorn_billboard
├➢ #pmtraffic-lights
├➢ #pmtrain_station
├➢ #pmtrain-station-poster
├➢ #pmtram
├➢ #pmtravellers-sketch
├➢ #pmtriangular
├➢ #pmtruck
├➢ #pmtruck-advert
├➢ #pmtub
├➢ #pmtulips
├➢ #pmtv_girl
├➢ #pmtwilight
├➢ #pmtwo_cats
├➢ #pmtwo_female_fans
├➢ #pmultra-paint
├➢ #pmunderground-poster
├➢ #pmurban
├➢ #pmurban_billboard
├➢ #pmvhs
├➢ #pmvibration
├➢ #pmvictoria_beckham
├➢ #pmvideo-game
├➢ #pmvintage_frame
├➢ #pmvintage_table
├➢ #pmvintage-photos
├➢ #pmvintage-scooter
├➢ #pmvitrage-window
├➢ #pmvogue
├➢ #pmwall
├➢ #pmwall_banner
├➢ #pmwall_painting
├➢ #pmwall-mural
├➢ #pmwall-painting
├➢ #pmwall-poster
├➢ #pmwanted_wizard
├➢ #pmwarhol
├➢ #pmwarhol-dots
├➢ #pmwarrior
├➢ #pmwatchinng
├➢ #pmwatercolor
├➢ #pmwatercolor
├➢ #pmwatercolour-painting
├➢ #pmwatercolours
├➢ #pmwaterway
├➢ #pmwaves
├➢ #pmwayback
├➢ #pmweave
├➢ #pmwedding-day
├➢ #pmwet
├➢ #pmwild-brush
├➢ #pmwine-label
├➢ #pmwinter-princess
├➢ #pmwitch
├➢ #pmwoman_pilot
├➢ #pmwood
├➢ #pmworker-by-the-billboard
├➢ #pmwoven-sketch
├➢ #pmxmas_tree
├➢ #pmyellow_wall
├➢ #pmyo
├➢ #pm100_dollars
├➢ #pm2colors-canvas
├➢ #pm3d-wall
├➢ #pmabstract-rays
├➢ #pmairbrush
├➢ #pmangry_granny
├➢ #pmapples
├➢ #pmapplying_makeup
├➢ #pmaqua
├➢ #pmart_exhibition
├➢ #pmart_gallery
├➢ #pmart_painting
├➢ #pmart-admirer
├➢ #pmart-experts
├➢ #pmartist
├➢ #pmartist_in_the_dark
├➢ #pmartistic-filter
├➢ #pmaruga
├➢ #pmat-the-beach
├➢ #pmat-the-gallery
├➢ #pmaurora
├➢ #pmauto-enhance
├➢ #pmautumn-frame
├➢ #pmax
├➢ #pmbad_santa
├➢ #pmbathe
├➢ #pmbeauty-boost
├➢ #pmbehind_the_fence
├➢ #pmbicycle
├➢ #pmbiker
├➢ #pmbillboard
├➢ #pmbillboard_workers
├➢ #pmblack-and-white-mural
├➢ #pmblack-mamba
├➢ #pmblack-pen
├➢ #pmblack-pencils
├➢ #pmblueprint
├➢ #pmboardings
├➢ #pmbodybuilder
├➢ #pmbrass-frame
├➢ #pmbricks
├➢ #pmbride
├➢ #pmbride_in_grass
├➢ #pmbroadway
├➢ #pmbrugge
├➢ #pmbrush-strokes
├➢ #pmbubbles
├➢ #pmbuilding_painters
├➢ #pmbunnies
├➢ #pmbunny_ears
├➢ #pmburned-bread
├➢ #pmroses-and-marshmallows
├➢ #pmburning-fire
├➢ #pmcafe
├➢ #pmcanvas
├➢ #pmcappuccino
├➢ #pmcaptivity
├➢ #pmcard-with-flowers
├➢ #pmcartoon
├➢ #pmcartoonizer
├➢ #pmcastle
├➢ #pmchampagne
├➢ #pmche-guevara
├➢ #pmchinese_opera
├➢ #pmchris_pirillo
├➢ #pmchristmass_tree_balls
├➢ #pmcinema
├➢ #pmcircle-of-colors
├➢ #pmcity
├➢ #pmcity-billboard
├➢ #pmcitylight
├➢ #pmclasiketch
├➢ #pmclassic-art
├➢ #pmcoal-sketch
├➢ #pmcoffee_break
├➢ #pmcolor-checkers
├➢ #pmcolored-pencils
├➢ #pmcolored-pens
├➢ #pmcolored-sketch
├➢ #pmcolored-squares
├➢ #pmcolored-texture
├➢ #pmcolorful-tiles
├➢ #pmcolorful-wood
└❏
┌❏『 Cheat & Hack Menu 』
├➢ #cheatkuota
├➢ #cheatpulsa
├➢ #cheatfollowers
├➢ #cheatmlbb
├➢ #cheatgenshin
├➢ #cheatpubg
├➢ #cheatff
├➢ #cheatdragonsea
├➢ #cheatsims
├➢ #cheatamong
├➢ #hackfb
├➢ #hackig
├➢ #hackwa
├➢ #hacktwitter
├➢ #hackyt
├➢ #hackgoogle
├➢ #hackphising
├➢ #hackdomain
├➢ #hackgmail
├➢ #hackakun
├➢ #hackemail
├➢ #hackdomainfree
├➢ #domaingratis
├➢ #saldoovogratis
├➢ #saldodanagratis
├➢ #saldoshopeegratis
├➢ #saldogopaygratis
├➢ #saldomotiongratis
├➢ #topupff
├➢ #topupmlbb
├➢ #topupgenshin
├➢ #topuppubg
├➢ #topupsims2
├➢ #storemenu
├➢ #f,a,q
├➢ #website
├➢ #websitegratis
├➢ #tokoonlinegratis
└❏  
┌❏『 Kristen Menu 』
├➢ #yohanes
├➢ #korintus
├➢ #timotius
├➢ #matius
├➢ #markus
├➢ #lukas
├➢ #yudas
├➢ #filipus
├➢ #petrus
├➢ #barnabas
├➢ #andreas
├➢ #nekodemus
├➢ #ibrani
├➢ #nazaret
├➢ #mariamagdalena
├➢ #yeremia
├➢ #korintus
├➢ #galatia
├➢ #filemon
├➢ #yudas
├➢ #wahyu
├➢ #nehemia
├➢ #ayub
├➢ #mazmur
├➢ #yehezkiel
├➢ #yesaya
├➢ #yoel
├➢ #amos
├➢ #obaja
├➢ #ibrani
├➢ #tesalonika
├➢ #namagbi
├➢ #namagkmi
├➢ #namagkj
├➢ #namagpib
├➢ #namagki
├➢ #namagitj
├➢ #namagkpm
├➢ #namagmb
├➢ #namagkpa
├➢ #namagpibt
├➢ #namagkt
├➢ #namagklb
├➢ #namagkps
├➢ #namagpps
├➢ #namagks
├➢ #namagmih
├➢ #namagepsultra
└❏  
┌❏『 Amv Menu 』
├➢ #amvglow
├➢ #amvcryptocurrently
├➢ #amvcrypto1
├➢ #amvcrypto2
├➢ #amvcrypto3
├➢ #amvcloud
├➢ #amvff
├➢ #amvmlbb
├➢ #amvserti
├➢ #amvrainbow
├➢ #amvplaystore
├➢ #amvstell1
├➢ #amvstell2
├➢ #amvstell3
├➢ #amvstell4
├➢ #amvstell5 
├➢ #amvstell6
├➢ #amvwater1
├➢ #amvwater2
├➢ #amvwater3
├➢ #amvwater4
├➢ #amvwater5
├➢ #amvwater6
├➢ #amvlava1
├➢ #amvlava2
├➢ #amvlava3
├➢ #amvlava4
├➢ #amvlava5
├➢ #amvlava6
├➢ #amvlava7
├➢ #amvgaming1
├➢ #amvgaming2
├➢ #amvgaming3
├➢ #amvgaming4
├➢ #amvgaming5
├➢ #amvgaming6
├➢ #amvgaming7
├➢ #amvgaming8
├➢ #amvgaming9
├➢ #amvgaming10
├➢ #amvescape1
├➢ #amvescape2
├➢ #amvescape3
├➢ #amvescape4
├➢ #amvescape5
├➢ #amvescape6
├➢ #amvescape7
├➢ #amvgarden1
├➢ #amvgarden2
├➢ #amvgarden3
├➢ #amvgarden4
├➢ #amvgarden5
├➢ #amvgarden6
├➢ #amvgarden7
├➢ #amvtree1
├➢ #amvtree2
├➢ #amvtree3
├➢ #amvtree4
├➢ #amvtree5
├➢ #amvtree6
├➢ #amvtree7
├➢ #amvyellow1
├➢ #amvyellow2
├➢ #amvyellow3
├➢ #amvyellow4
├➢ #amvyellow5
├➢ #amvyellow6
├➢ #amvyellow7
├➢ #amvred1
├➢ #amvred2
├➢ #amvred3
├➢ #amvred4
├➢ #amvred5
├➢ #amvred6
└❏  
┌❏『 Tutorial MatchBox 』
├➢ #tutorial
├➢ #script
└❏  
┌❏『 Browser Menu 』
├➢ #ucbrowser
├➢ #ucbrowsermini
├➢ #operamini
├➢ #firefox 
├➢ #duckduckgo
├➢ #puffin
├➢ #novaweb
├➢ #novardpdesktop
└❏  
┌❏『 Hadiah Menu 』
├➢ #bonus
├➢ #hadiah
├➢ #buygift
├➢ #freegift <kode>
├➢ #gift <kode> (Limit)
├➢ #runtime
└❏  
┌❏『 Apk downloader 』
├➢ #apkpure
└❏  
┌❏ 『 Cheat & hack Menu 』
├➢ #cheat diamond ff
├➢ #cheat diamond ml
├➢ #cheat uc pubg
├➢ #cheat cash among us
├➢ #cheat Simcity buildit
├➢ #cheat pulsa (limit) (premium)
├➢ #hack akun ff (limit) (premium)
├➢ #hack akun ml (limit) (premium)
├➢ #hack akun pubg (limit) (premium) 
├➢ #hack akun instagram (limit) (premium)
├➢ #hack akun facebook (limit) (premium)
├➢ #cheat kuota all operator (premium)al
├➢ #cheat shopeepay
├➢ #cheat Dana
├➢ #cheat Gopay
├➢ #cheat Ovo
├➢ #Sadap Whatsapp orang lain
├➢ #cheat followers ig
├➢ #cheat like ig
├➢ #cheat views ig
├➢ #cheat 4000 jam tayang youtube
├➢ #cheat subs youtube
├➢ #cheat like youtube
├➢ #cheat akun tiktok
├➢ #cheat followers tiktok
├➢ #cheat like tiktok
├➢ #cheat views tiktok
├➢ #filecheat
├➢ #cheat pulsa unlimited (premium)
├➢ #cheat kuota unlimited (premium)
└❏ 
┌❏『 Nsfw Menu 』
├➢ #filebokep
├➢ #ahegao  (Limit)
├➢ #ass  (Limit)
├➢ #bdsm  (Limit)
├➢ #blowjob  (Limit)
├➢ #bokep  (Limit)
├➢ #cersex <query> (Limit)
├➢ #cuckold 
├➢ #ero  (Limit)
├➢ #gifhentai (Limit)
├➢ #hentai  (Limit)
├➢ #waifu18  (Limit)
├➢ #hentaigif  (Limit)
├➢ #indohot
├➢ #kodenuklir (Limit)
├➢ #mstrb  (Limit)
├➢ #nekolatest (Limit)
├➢ #nekopoi (Limit)
├➢ #nhsearch <query> (Limit)
├➢ #nhentaisearch <query> (Limit)
├➢ #nhpdf <code> (Limit)
├➢ #neko
├➢ #orgy  (Limit)
├➢ #panties  (Limit)
├➢ #porno (-10 Limit) (Limit)
├➢ #sange (Limit)
├➢ #nsfwneko  (Limit)
├➢ #tentacles 
├➢ #thighs 
├➢ #uniform 
├➢ #yuri (Limit)
├➢ #crott (new) (-100 Limit)
├➢ #dientot (new) (-100 Limit)
└❏  
┌❏『 Siaran menu 』
├➢ #trans7
├➢ #transtv
├➢ #mnctv
├➢ #rcti
├➢ #inews
├➢ #gtv
├➢ #indosiar
├➢ #cartoonnetwork
├➢ #nick.jr
├➢ #nicklodeon
├➢ #disney junior
├➢ #boomerang
├➢ #tvn
├➢ #nhkworld
├➢ #national geographic 
├➢ #disney movies
├➢ #hbo family
├➢ #hbo 
├➢ #miaomi
├➢ #mcn premium
├➢ #metrotv
├➢ #mnc news
├➢ #tvn
├➢ #hits
├➢ #animalplanet
├➢ #spotv
├➢ #mnc soccer channel
├➢ #bbc
├➢ #blomberg
├➢ #hbo hits
├➢ #tvri
├➢ #besmart
├➢ #rtv
├➢ #nhk japan
├➢ #hbo go
├➢ #hbo global
├➢ #nhkworld internasional
├➢ #celectial classic movie
├➢ #celectial movie
├➢ #scm
├➢ #life tv
├➢ #muslim tv
├➢ #thrill
├➢ #youtubetv (premium) (limit)
├➢ #disney music
├➢ #animax
└❏  
┌❏『 Google Menu 』
├➢ #googleassisten <Reply>
├➢ #googlesearch <Reply>
├➢ #googleform <judul>|<form 1>
├➢ #gmail <check>|<akun>
├➢ #googlescript <link>
├➢ #googlewordpress <Reply>
├➢ #googletranslate <teks>
├➢ #googleclassroom <teks>|<Joined>
├➢ #googlesites <teks>
├➢ #googleads <teks>
├➢ #googlemaps 
├➢ #googlego
├➢ #googledrive
├➢ #googlekalender
├➢ #googlemeet
├➢ #googlelens
├➢ #gboard 
├➢ #googleearth
├➢ #googlespreadseth
├➢ #googledocs
├➢ #snapseed
├➢ #googlehome
├➢ #googlebot (premium)
├➢ #googledevice
├➢ #googlesoftware
├➢ #googleslide
├➢ #googlefamilylink
├➢ #surveyberhadiahgoogle
├➢ #googlestreetviews
├➢ #messages
├➢ #jamboard
├➢ #googlebisnis
├➢ #googlekeep
├➢ #googlemapsgo
├➢ #googleduo
├➢ #googleone
├➢ #googlefit
├➢ #carrierservice
├➢ #googlesocratic
├➢ #photoscan
├➢ #Blogger
├➢ #chromeremotedesktop
├➢ #gallerygo
├➢ #googletv
├➢ #googlewareos
├➢ #googletasks
├➢ #walpaper
├➢ #androidauto
├➢ #toontastic
├➢ #googlepodcast
├➢ #amplifier
├➢ #kormojobs
├➢ #googleanalytics
├➢ #googleappsdevice
├➢ #webview
├➢ #chromesanary
├➢ #googleadmin
├➢ #voiceacces
├➢ #googlecloud
├➢ #googlegames
├➢ #grasshopper
├➢ #googleplayconsole
├➢ #googlearts
├➢ #androiddevicepolice
├➢ #spechservice
├➢ #androidaccebility
├➢ #currents
├➢ #layanandukungangoogle
├➢ #googledonasi
├➢ #googlepay
├➢ #alatpemulihandata
├➢ #googlecloudsearch
├➢ #accebilityscanner
├➢ #googlepixelbuds
├➢ #readalong
├➢ #lookout
├➢ #actionbloks
├➢ #crowdsource
├➢ #datatransfertools
├➢ #googlebrailback
├➢ #composematerialkatalog
├➢ #googlei/o2019
├➢ #creativepreview
├➢ #googleaiy
├➢ #googleperangkat
├➢ #googleprimer
└❏  
┌❏『 Jadwal tayang 』
├➢ #jadwalmnctv
├➢ #jadwalgtv
├➢ #jadwalmetrotv
├➢ #jadwaltranstv
├➢ #jadwaltrans7
└❏  
┌❏『 Database 』
├➢ #addvn <text>
├➢ #addmsg <text>
├➢ #addvideo <text>
├➢ #addaudio <text>
├➢ #addimg <text>
├➢ #addsticker <text>
├➢ #delcmd <text>
├➢ #delvn <text>
├➢ #delmsg <text>
├➢ #delvideo <text>
├➢ #delaudio <text>
├➢ #delimg <text>
├➢ #delsticker <text>
├➢ #getvn <text>
├➢ #getmsg <text>
├➢ #getvideo <text>
├➢ #getaudio <text>
├➢ #getimg <text>
├➢ #getsticker <text>
├➢ #infocmd <text>
├➢ #listcmd <text>
├➢ #listvn
├➢ #listmsg
├➢ #listvideo
├➢ #listaudio
├➢ #listimg
├➢ #liststicker
├➢ #unlockcmd
├➢ #lockcmd
├➢ #setcmd <text>
└❏  
┌❏『 Kristen Menu 』
├➢ #Alkitab
├➢ #Namagereja
├➢ #Carigereja
└❏  
┌❏『 Group Menu 』
├➢ #group *open / close*
├➢ #add 62********** 
├➢ #afk <alasan>
├➢ #listbot
├➢ #save @mention <ContactName>
├➢ #demote @user
├➢ #enable <option>
├➢ #disable <option>
├➢ #getpp @user
├➢ #getsider
├➢ #group <open/close>
├➢ #infogrup
├➢ #infgc
├➢ #infogrup
├➢ #kick @user
├➢ #kickall
├➢ #leave
├➢ #keluar
├➢ #leavegc
├➢ #leavegcall
├➢ #leavegroup
├➢ #linkgroup
├➢ #linkgroup
├➢ #listadmin
├➢ #here
├➢ #listonline
├➢ #enable <option>
├➢ #disable <option>
├➢ #pengumuman [teks]
├➢ #announce [teks]
├➢ #hidetag [teks]
├➢ #promote @user
├➢ #pm @user
├➢ #resend (Limit)
├➢ #revoke
├➢ #setpp
├➢ #setdesk <teks>
├➢ #setname <nama>
├➢ #setpptext
├➢ #seticontext
├➢ #bataschat (maks 15K chat)
├➢ #siapa <pertanyaan>?
├➢ #siapakah <pertanyaan>?
├➢ #simulate <event> [@mention]
├➢ #tagall (Limit)
├➢ #tagme
├➢ #tampar @user (Limit)
├➢ #totalpesan
├➢ #welcome on|off
├➢ #leave on|off
├➢ #setwelcome <text> / <reply>
├➢ #setleave <text> / <reply>
├➢ #antitoxic  on|off
├➢ #warn <angka 1 sampai 5000>
├➢ #groupbubar
├➢ #bot on|off <admin only>
└❏  
┌❏『 Anime Menu 』
├➢ #anime <query>
├➢ #anime <judul>
├➢ #animelink
├➢ #baka 
├➢ #character <nama>
├➢ #ppcouple
├➢ #ppcp
├➢ #husbu 
├➢ #kusonime <judul>
├➢ #loli
├➢ #manga <judul>
├➢ #mangalink
├➢ #manhwalink
├➢ #megumin
├➢ #nekolatest (Limit)
├➢ #nekopoi (Limit)
├➢ #quoteanime
├➢ #randomanime
├➢ #waifu 
├➢ #wait (caption|reply image)
├➢ #wallpaperanime (Limit)
├➢ #wibu  (Limit)
└❏  
┌❏ 『 Gtwlah Menu 』
├➢ #jodohin
├➢ #jodoh <nama>|<nama doi>
├➢ #pesankosong (Limit)
└❏  
┌❏『 Custom sticker 』
├➢ #stickercustom
└❏  
┌❏『 Creator Menu 』
├➢ #ffserti2 <teks>
├➢ #gayserti <teks>
├➢ #surgaserti <teks>
├➢ #advancedglow <teks> (Limit)
├➢ #aglitertext (Limit)
├➢ #amongus <teks> (Limit)
├➢ #attp <teks>
├➢ #attp2 (Limit)
├➢ #attp3 <teks>
├➢ #avengers <teks|teks> (Limit)
├➢ #banner <text> (Limit)
├➢ #logo <text> (Limit)
├➢ #battlefield <teks|teks> (Limit)
├➢ #bloodtext <teks> (Limit)
├➢ #bplogo <teks> (Limit)
├➢ #breakwall <teks> (Limit)
├➢ #burningtext (Limit)
├➢ #burnpaper <teks> (Limit)
├➢ #carbontext <teks> (Limit)
├➢ #cloudtext <teks> (Limit)
├➢ #coffecup <teks> (Limit)
├➢ #coffetext <teks> (Limit)
├➢ #s
├➢ #sgif
├➢ #sticker <teks> (Limit)
├➢ #ctrigger <text> (Limit)
├➢ #crossfire <teks> (Limit)
├➢ #cstahta <teks> (Limit)
├➢ #ctrigger <text> (Limit)
├➢ #darkneon <teks> (Limit)
├➢ #dropwater <teks> (Limit)
├➢ #dropwater2 <teks> (Limit)
├➢ #editodserti <teks>
├➢ #ephoto <effect|teks> (Limit)
├➢ #ephoto <effect|teks> (Limit)
├➢ #fbplaybutton <teks> (Limit)
├➢ #fflogo <teks> (Limit)
├➢ #fflogo2 <teks> (Limit)
├➢ #ffserti1 <teks> (Limit)
├➢ #firetext <teks> (Limit)
├➢ #firework <teks> (Limit)
├➢ #flametext <teks> (Limit)
├➢ #flamming <teks> (Limit)
├➢ #football <nama|nomer> (Limit)
├➢ #gaminglogo <teks> (Limit)
├➢ #haramserti teks
├➢ #getexif
├➢ #glitch teks|teks
├➢ #glitertext <teks|teks> (Limit)
├➢ #glow <teks> (Limit)
├➢ #glowtext <teks> (Limit)
├➢ #glowtext2 <teks> (Limit)
├➢ #gneon <teks>
├➢ #goldtext <teks> (Limit)
├➢ #gplaybutton <teks> (Limit)
├➢ #gradient <teks> (Limit)
├➢ #greyscale (reply) (Limit)
├➢ #gsuggesti <teks|teks|teks> (Limit)
├➢ #gtattp <teks|teks> (Limit)
├➢ #harrypotter <teks> (Limit)
├➢ #hekerserti <teks>
├➢ #hitler (reply) (Limit)
├➢ #honey <teks> (Limit)
├➢ #horny (caption|reply media) (Limit)
├➢ #invert (reply) (Limit)
├➢ #joke (reply) (Limit)
├➢ #jokerlogo <teks> (Limit)
├➢ #kiss
├➢ #lionlogo <teks|teks> (Limit)
├➢ #logobp <teks>
├➢ #lolbanner <teks> (Limit)
├➢ #lovecoffe <teks> (Limit)
├➢ #naruto <teks> (Limit)
├➢ #neon <teks> (Limit)
├➢ #neontext <teks> (Limit)
├➢ #nexustext <teks|teks|teks> (Limit)
├➢ #ninjalogo <teks|teks> (Limit)
├➢ #pantaitext <teks> (Limit)
├➢ #phcommand <name|pesan>
├➢ #phcomment <username|command> (Limit)
├➢ #phlogo <text|text>
├➢ #photooxy <effect|teks> (Limit)
├➢ #picture (reply) (Limit)
├➢ #gplaybutton <teks>
├➢ #pubglogo teks|teks
├➢ #pubglogo <teks|teks> (Limit)
├➢ #pubgserti <teks>
├➢ #pubgserti2 <teks>
├➢ #quotemaker (tulisan)|(name)
├➢ #rainbowglow <teks> (Limit)
├➢ #rainbowshine <teks> (Limit)
├➢ #realisticcloud (Limit)
├➢ #run (reply media) (Limit)
├➢ #sandw <teks>
├➢ #sbburn <teks> (Limit)
├➢ #semoji2 <teks>
├➢ #semoji3 [tipe] <emoji>
├➢ #sepia (reply) (Limit)
├➢ #sfire (Limit)
├➢ #stickerfire
├➢ #shaketext (Limit)
├➢ #stikermeme <teks atas>|<teks bawah> (Limit)
├➢ #smim <reply imagenya>
├➢ #smim2
├➢ #smim3
├➢ #smooke <teks> (Limit)
├➢ #snowtext <teks|teks> (Limit)
├➢ #snowtext2 <teks> (Limit)
├➢ #sticker
├➢ #stikerline <url> (Limit)
├➢ #stikertelegram <url> (Limit)
├➢ #circle
├➢ #stikerly <pencarian> (Limit)
├➢ #stikermeme <teks atas>|<teks bawah> (Limit)
├➢ #stag <reply sticker>
├➢ #stickertag <replay sticker>
├➢ #stikertag <reply sticker>
├➢ #stickfilter (caption|reply media) (Limit)
├➢ #stickmaker (caption|reply media) (Limit)
├➢ #stikerline <url> (Limit)
├➢ #stikerly <pencarian> (Limit)
├➢ #stikertelegram <url> (Limit)
├➢ #style <query|teks> (Limit)
├➢ #tahta <teks> (Limit)
├➢ #inu <teks> (Limit)
├➢ #telestick <teks>
├➢ #text3d <teks>
├➢ #text3d2 <teks>
├➢ #textburn <teks> (Limit)
├➢ #thundertext <teks> (Limit)
├➢ #toimg (reply)
├➢ #tololserti <teks> (Limit)
├➢ #tovideo (reply stiker)
├➢ #toxictext <teks> (Limit)
├➢ #trigger
├➢ #trumpcomment <teks> (Limit)
├➢ #ttp <teks>
├➢ #ttp2 (Limit)
├➢ #ttp3 <teks>
├➢ #ttp4 <teks>
├➢ #ttp5 <teks>
├➢ #ttp6 <teks>
├➢ #ttpdark <teks> (Limit)
├➢ #ultah <teks> (Limit)
├➢ #underwater <teks> (Limit)
├➢ #valorant <teks|teks|teks> (Limit)
├➢ #wallgravity <teks|teks> (Limit)
├➢ #wanted (reply) (Limit)
├➢ #warface <teks> (Limit)
├➢ #wasted
├➢ #water <teks>
├➢ #whitecube <teks> (Limit)
├➢ #wm <packname>|<author>
├➢ #wolflogo <text|text>
├➢ #wolfmetal <teks> (Limit)
├➢ #wooden <teks> (Limit)
├➢ #woodenboard <teks> (Limit)
├➢ #woodtext <teks> (Limit)
└❏  
┌❏『 Fun menu 』
├➢ #angka <0-9>
├➢ #asahotak
├➢ #caklontong
├➢ #cantikcek (Limit)
├➢ #cari <query>
├➢ #casino <jumlah>
├➢ #dadu
├➢ #dadu2
├➢ #dare
├➢ #family100
├➢ #gantengcek (Limit)
├➢ #gaycek (Limit)
├➢ #iqtest
├➢ #kuis
├➢ #math <mode>
├➢ #math2
├➢ #siapakahaku
├➢ #slot  (Limit)
├➢ #suit
├➢ #tebakanime
├➢ #tebakbendera
├➢ #tebakgambar
├➢ #tebakkata
├➢ #tebakkimia
├➢ #tebaklagu (Limit)
├➢ #tebaktebakan
├➢ #tekateki
├➢ #tololcek (Limit)
├➢ #truth
├➢ #twister
└❏  
┌❏『 Image Menu 』
├➢ #8bit (reply) (Limit)
├➢ #bintang <teks> (Limit)
├➢ #bokehtext <teks> (Limit)
├➢ #cewek
├➢ #circle (reply) (Limit)
├➢ #cod <teks|teks> (Limit)
├➢ #ppcouple
├➢ #ppcp
├➢ #cowok
├➢ #cup1 <teks> (Limit)
├➢ #darkjokes
├➢ #estetik 
├➢ #futureneon <teks> (Limit)
├➢ #glasses  (Limit)
├➢ #helloween <text> (Limit)
├➢ #heroml <nama> (Limit)
├➢ #image <query> (Limit)
├➢ #pinterest <query> (Limit)
├➢ #jahy  (Limit)
├➢ #kpop <query>
├➢ #ktp <nik|prov|kabu|name|ttl|jk|jl|rtrw|lurah|camat|agama|nikah|kerja|warga|until|url> (Limit)
├➢ #leavetext <teks> (Limit)
├➢ #logomarvel <teks|teks> (Limit)
├➢ #makanan
├➢ #manga  (Limit)
├➢ #marvellogo <text|text>
├➢ #mem
├➢ #metalicglow <teks> (Limit)
├➢ #neon1 <teks> (Limit)
├➢ #pinterest <query> (Limit)
├➢ #pinterest2 <query> (Limit)
├➢ #pussy  (Limit)
├➢ #quotesimg <teks> (Limit)
├➢ #spiderman <teks|teks> (Limit)
├➢ #splaybutton <teks>
├➢ #summer <teks> (Limit)
├➢ #trash (reply) (Limit)
├➢ #wallpaper  (Limit)
├➢ #wallpaperq <query> (Limit)
├➢ #wpcyberspace
├➢ #wpteknologi
├➢ #wpprogramming
├➢ #wpmuslim
├➢ #wppegunungan
├➢ #wpmobile  (Limit)
├➢ #wpnsfwmobile  (Limit)
├➢ #zettairyouiki  (Limit)
├➢ #zettairyouiki  (Limit)
└❏  
┌❏『 Video Menu 』
├➢ #intromaker
├➢ #shaunthesheep
└❏  
┌❏『 Anonymous Chat 』
├➢ #start
├➢ #leave
├➢ #next
└❏  
┌❏『 Virus tapi bukan virus 』
├➢ #katalog
├➢ #lokasi
└❏  
┌❏『 Audio Menu 』
├➢ #bass
├➢ #blown
├➢ #deep
├➢ #earrape
├➢ #fast
├➢ #fat
├➢ #nightcore
├➢ #reverse
├➢ #robot
├➢ #slow
├➢ #smooth
├➢ #tupai
├➢ #bass
├➢ #toptt (reply) (Limit)
├➢ #tovn (reply) (Limit)
├➢ #tovn
├➢ #tupai
├➢ #bass [vn]
├➢ #blown [vn]
├➢ #deep [vn]
├➢ #earrape [vn]
├➢ #fast [vn]
├➢ #fat [vn]
├➢ #nightcore [vn]
├➢ #reverse [vn]
├➢ #robot [vn]
├➢ #slow [vn]
├➢ #smooth [vn]
├➢ #tupai [vn]
└❏  
┌❏ 『 OTHER 』
├➢ #berat (Limit)
├➢ #fast (reply audio) (Limit)
├➢ #getvn <query>
├➢ #kodebahasa
├➢ #listvn
├➢ #reverse (reply audio) (Limit)
├➢ #slow (reply audio) (Limit)
├➢ #tts <lang> <teks>
├➢ #vngemas (reply audio) (Limit)
└❏  
┌❏『 Random menu 』
├➢ #bacot
├➢ #bucin
├➢ #ceritahorror
├➢ #faktaunik
├➢ #galau
├➢ #gombal
├➢ #hug
├➢ #katailham
├➢ #murothal
├➢ #kisahnabi <nama> (Limit)
├➢ #pantun
├➢ #puisi
├➢ #syair
├➢ #quotes
├➢ #katabijak
├➢ #quran
├➢ #renungan
├➢ #sholawat
├➢ #tahlil
├➢ #up2urp
└❏  
┌❏『 primbon menu 』
├➢ #artinama <nama> (Limit)
├➢ #cekjodoh <pasangan> (Limit)
├➢ #ceksifat <nama>
├➢ #masadepan
├➢ #nomorhoki <no hp> (Limit)
├➢ #tgljadian <nama> (Limit)
├➢ #zodiac *2000 12 13*
└❏  
┌❏『 edukasi menu 』 
├➢ #brainly <soal> (Limit)
├➢ #belajar <soal> (Limit)
├➢ #mtk <soal> (Limit)
├➢ #ips <soal> (Limit)
├➢ #ppkn <soal> (Limit)
├➢ #inggris <soal> (Limit)
├➢ #pertanyaan <soal> (Limit)
└❏  
┌❏『 music menu 』
├➢ #whatmusic
└❏ 
┌❏『 Simi menu 』
├➢ #simi2 <chat>
├➢ #s2 <chat>
└❏ 
┌❏『 Kerang menu』
├➢ #howgay siapa?
├➢ #howpintar siapa?
├➢ #howcantik siapa?
├➢ #howganteng siapa?
├➢ #howgabut siapa?
├➢ #howgila siapa?
├➢ #howlesbi siapa?
├➢ #howstress siapa?
├➢ #howbucin siapa?
├➢ #howjones siapa?
├➢ #howsadboy siapa?
├➢ apakah <teks>?
├➢ #apakah <pertanyaan>
├➢ #artimimpi [mimpi]
├➢ benarkah <teks>?
├➢ bisakah <teks>?
├➢ #bisakah <pertanyaan>
├➢ #howgay siapa?
├➢ #howpintar siapa?
├➢ #howcantik siapa?
├➢ #howganteng siapa?
├➢ #howgabut siapa?
├➢ #howgila siapa?
├➢ #howlesbi siapa?
├➢ #howstress siapa?
├➢ #howbucin siapa?
├➢ #howjones siapa?
├➢ #howsadboy siapa?
├➢ kapan <text>?
├➢ kapankah <text>?
├➢ #kapan <pertanyaan>
├➢ #kapankah <pertanyaan>
├➢ siapa <text>?
├➢ siapakah <text>?
├➢ siapa <pertanyaan>?
├➢ siapakah <pertanyaan>?
├➢ siapa <teks>?
├➢ siapakah <teks>?
└❏ 
┌❏『 Random menu 』
├➢ #fb <hd/sd|url> (Limit)
├➢ #image [gambar] | [jumlah]
├➢ #ighighlight <username>
├➢ #igstory <username>
├➢ #joox <judul> (Limit)
├➢ #pinterestdl <url>
├➢ #pinterestvideo <url> (Limit)
├➢ #snackvideo <url> (Limit)
├➢ #spotify <url>
├➢ #tiktokaudio <url>
├➢ #ttaudio <url>
├➢ #twittermp4 <url> (Limit)
├➢ #twittera <url> (Limit)
├➢ #zippyshare <url>
├➢ #zippy <url>
└❏  
┌❏『 News menu 』
├➢ #berita
├➢ #news
├➢ #infobmkg (Limit)
├➢ #infogempa (Limit)
└❏  
┌❏『 Spammer menu 』
├➢ #danacinta <no hp> (Limit)
├➢ #spamstc
├➢ #pizzahut <no hp> (Limit)
├➢ #suratto <nomor|pesan> (Limit)
├➢ #spam <nomor|pesan>
├➢ #spamwa <nomor|pesan>
├➢ #mmmn <teks> (Limit)
├➢ #spamcall <no hp> (Limit)
├➢ #spamchat <teks> (Limit)
├➢ #spamgmail <@email|pesan> (Limit)
├➢ #spam <nomor|pesan>
├➢ #spamwa <nomor|pesan>
├➢ #spamsms <no hp> (Limit)
└❏  
┌❏『 Tools Menu 』
├➢ #buatgrup
├➢ #aksara <opsi> <teks> (Limit)
├➢ #akungratis (Limit)
├➢ #freeaccount (Limit)
├➢ #alay <teks>
├➢ #base64
├➢ #binary <teks>
├➢ #calc <angka> (Limit)
├➢ #kalk <angka> (Limit)
├➢ #calculator <angka> (Limit)
├➢ #kalkulator <angka> (Limit)
├➢ #caricowok
├➢ #carigrup <pencarian>
├➢ #caripesan <pesan>|<jumlah>
├➢ #caristicker <query> (Limit)
├➢ #covidindo
├➢ #create <nama|nomor> (Limit)
├➢ #cuaca <daerah> (Limit)
├➢ #effect_senyum
├➢ #hd (caption|reply media)
├➢ #enhance (caption|reply media)
├➢ #enphoto <efek> <teks>|[teks2]|[teks3]
├➢ #film <query> (Limit)
├➢ #filmanime <film> (Limit)
├➢ #caripesan <pesan>|<jumlah>
├➢ #getsticker
├➢ #getstiker
├➢ #gimage <query>
├➢ #image <query>
├➢ #githubsearch <pencarian>
├➢ #hackweb <judul|desk|wm|url>
├➢ #hadis
├➢ #hash <teks>
├➢ #halah <teks>
├➢ #hilih <teks>
├➢ #huluh <teks>
├➢ #heleh <teks>
├➢ #holoh <teks>
├➢ #huruf <teks>
├➢ #ifilter (Limit)
├➢ #imagetobase64 (caption|reply) (Limit)
├➢ #tobraille
├➢ #infogempa
├➢ #inspect <chat.whatsapp.com>
├➢ #ip <alamat ip>
├➢ #ipcheck <alamat ip>
├➢ #ipcek <alamat ip>
├➢ #kodepos <kecamatan> (Limit)
├➢ #peta <wilayah> (Limit)
├➢ #lokasi <wilayah> (Limit)
├➢ #maps <wilayah> (Limit)
├➢ #peta <wilayah> (Limit)
├➢ #lokasi <wilayah> (Limit)
├➢ #maps <wilayah> (Limit)
├➢ #skullmask
├➢ #memeg<apa|apa>
├➢ #mention <teks>
├➢ #modapk
├➢ #nickff
├➢ #nightcore
├➢ #ninja <nama>
├➢ #nonton <film> (Limit)
├➢ #nsfwcek (reply/caption) (Limit)
├➢ #ocr (Limit)
├➢ #pastebin <opsional> (Limit)
├➢ #profile [@user]
├➢ #purba <teks>
├➢ #qr <teks>
├➢ #qrcode <teks>
├➢ #readmore <teks>|<teks>
├➢ #spoiler <teks>|<teks>
├➢ #readqr (Limit)
├➢ #repeat <teks> (Limit)
├➢ #repeat2 <teks> (Limit)
├➢ #reverse <teks>
├➢ #save <nama>
├➢ #scan [nomor]
├➢ #sha256
├➢ #sholat <daerah>
├➢ #sid <link> (Limit)
├➢ #short <link> (Limit)
├➢ #kecepatan
├➢ #ping
├➢ #speed
├➢ #surah <no surat>
├➢ #teruskan <teks>
├➢ #textpro <efek> <teks>|[teks2]
├➢ #tinyurl <link> (Limit)
├➢ #short2 <link> (Limit)
├➢ #tomp3 (reply video) (Limit)
├➢ #translate <lang> <teks>
├➢ #upload (caption|reply media)
├➢ #upload2 (caption|reply media)
├➢ #virvid
├➢ #waktu <daerah>
├➢ #yts <pencarian>
├➢ #ytsearch <pencarian>
├➢ #zodiac *2002 02 25*
└❏  
┌❏『 Numpang bot 』
├➢ #jadibot (Limit)
├➢ #listjadibot
└❏  
┌❏『 Premium & VIP menu 』
├➢ #cerpen  (Limit)
├➢ #getcode
├➢ #hack (Limit)
├➢ #join <link gc>
├➢ #autojoin <link gc>
├➢ #spam <nomor|pesan>
├➢ #spamwa <nomor|pesan>
├➢ #stickernowm
├➢ #stickergifnowm
├➢ #sgifnowm
├➢ #stickerwa <teks> (Limit)
└❏  
┌❏『 Pkt Menu 』
├➢ #pktglow
├➢ #pkycryptocurrently
├➢ #pktcrypto1
├➢ #pktcrypto2
├➢ #pktcrypto3
├➢ #pktcloud
├➢ #pktff
├➢ #pktmlbb
├➢ #aftserti
├➢ #aftrainbow
├➢ #aftplaystore
├➢ #aftstell1.1
├➢ #aftstell2.2
├➢ #aftstell3.3
├➢ #aftstell4.4
├➢ #aftstell5.5
├➢ #aftstell6.6
├➢ #aftwater1.1
├➢ #aftwater2.2
├➢ #aftwater3.3
├➢ #aftwater4.4
├➢ #aftwater5.5
├➢ #aftwater6.6
├➢ #aftlava1.1
├➢ #aftlava2.2
├➢ #aftlava3.3
├➢ #aftlava4.4
├➢ #aftlava5.5
├➢ #aftlava6.6
├➢ #aftlava7.7
├➢ #aftgaming1.1
├➢ #aftgaming2.2
├➢ #aftgaming3.3
├➢ #aftgaming4.4
├➢ #aftgaming5.5
├➢ #aftgaming6.6
├➢ #aftgaming7.7
├➢ #aftgaming8.8
├➢ #aftgaming9.9
├➢ #aftgaming10.10
├➢ #aftescape1.1
├➢ #aftescape2.2
├➢ #aftescape3.4
├➢ #aftescape4.4
├➢ #aftescape5.5
├➢ #aftescape6.6
├➢ #aftescape7.7
├➢ #aftgarden1.1
├➢ #aftgarden2.2
├➢ #aftgarden3.3
├➢ #aftgarden4.4
├➢ #aftgarden5.5
├➢ #aftgarden6.6
├➢ #aftgarden7.7
├➢ #afttree1.1
├➢ #afttree2.2
├➢ #afttree3.3
├➢ #afttree4.4
├➢ #afttree5.5
├➢ #afttree6.6
├➢ #afttree7.7
├➢ #aftyellow1.1
├➢ #aftyellow2.2
├➢ #aftyellow3.3
├➢ #aftyellow4.4
├➢ #aftyellow5.5
├➢ #aftyellow6.6
├➢ #aftyellow7.7
├➢ #aftred1.1
├➢ #aftred2.2
├➢ #aftred3.3
├➢ #aftred4.4
├➢ #aftred5.5
├➢ #aftred6.6
└❏  
┌❏『 Owner menu 』
├➢ #whitelist nomor,nomor
├➢ #addowner [@user]
├➢ #addprem [@user]
├➢ #addprems 1 minggu <nomor>
├➢ #addprems 30 days <nomor>
├➢ #addprems vip<nomor>
├➢ #backup
├➢ #balas [nomor] [teks]
├➢ #banchat
├➢ #ban
├➢ #broadcast <teks>
├➢ #bc <teks>
├➢ #block <@user>
├➢ #blocklist
├➢ #broadcastgroup <teks>
├➢ #bcgc <teks>
├➢ #plugins
├➢ #cheatiket
├➢ #cheatxp
├➢ #deletechat
├➢ #deletechat group
├➢ #mutechat
├➢ #mutechat group
├➢ #clearall
├➢ #debounce
├➢ #delowner <@user>
├➢ #enable <option>
├➢ #disable <option>
├➢ #expired <hari>
├➢ #alljoin
├➢mode
├➢ #oadd @user
├➢ #odemote @user
├➢ #okick @user
├➢ #oleave
├➢ #okeluar
├➢ #opengumuman [teks]
├➢ #ohidetag [teks]
├➢ #opromote @user
├➢ #oadmin @user
├➢ #o^ @user
├➢ #premlist
├➢ #resetlimit
├➢ #resetprefix
├➢ #say <teks>
├➢ #sendbug <nomor>
├➢ #sendtroli <nomor>
├➢ #setbotbio
├➢ #setbotname
├➢ #setbye <teks>
├➢ #setmenu <teks>
├➢ #setmenubefore <teks>
├➢ #setmenuheader <teks>
├➢ #setmenubody <teks>
├➢ #setmenufooter <teks>
├➢ #setmenuafter <teks>
├➢ #setprefix <prefix>
├➢ #setwelcome <teks>
├➢ #simulate <event> [@mention]
├➢ #berhenti
├➢ #stop
├➢ #unbanchat
├➢ #ban
├➢ #unblock <@user>
├➢ #unwarn @mention
├➢ #upsw [text] (Reply Media)
├➢ #upsw <teks>
├➢ #warn @mention
└❏  
┌❏ 『 Host menu 』
├➢ #broadcastjadibot <teks>
├➢ #bcbot <teks>
├➢ #resetlimit
├➢ #restart
├➢ #roload
├➢ #update2
└❏  
┌❏『 Information 』
├➢ #apikey
├➢ #bannedlist
├➢ #boost
├➢ #refresh
├➢ #bug <laporan>
├➢ #report <laporan>
├➢ #channel
├➢ #del
├➢ #delete
├➢ #gcbot
├➢ #groups
├➢ #grouplist
├➢ #info
├➢ #listdonasi
├➢ #mystat
├➢ #owner
├➢ #creator
├➢ #owner
├➢ #partner
├➢ #ping
├➢ #rank
├➢ #request <fitur>
├➢ #shoppay
├➢ #ping
├➢ #speed
├➢ #websetapi
└❏  
┌❏『 Sewabot 』
├➢ #Sewabot
├➢ #payment
├➢ #batal
├➢ #store 
└❏  
┌❏『 Pemilik Bot 』
├➢ #Bot *on/off*
├➢ #addfitur
├➢ #addprem
├➢ #whitelist nomor,nomor
├➢ #addowner [@user]
├➢ #addprem nomor
├➢ #backup
├➢ #ban
├➢ #ban
├➢ #broadcastgrup <teks>
├➢ #broadcast <teks>
├➢ #bcgc
├➢ #broadcastnown <teks>
├➢ #clearchat
├➢ #clearchat all
├➢ #clearchat Group
├➢ #clearchat chat
├➢ #deletechat chat
├➢ #deletechat group
├➢ #deletechat all
├➢ #deletechat
├➢ #mutechat chat
├➢ #mutechat all
├➢ #mutechat group
├➢ #mutechat
├➢ #getdb <teks>
├➢ #getdatabase <teks>
├➢ #delowner <teks>
├➢ #delprem <teks>
├➢ #on <opsi>
├➢ #off <opsi>
├➢ #expired <hari>
├➢ #getplugin <teks>
├➢ #buatgrup
├➢ #jadikatalog
├➢ #kickall
├➢ #premlist
├➢ #premlist
├➢ #oadd @user
├➢ #o+ @user
├➢ #opromote @user
├➢ #oadmin @user
├➢ #o^ @user
├➢ #otagall
├➢ #premlist
├➢ #resetlimit
├➢ #restart 
├➢ #sf <teks>
├➢ #setbotbio
├➢ #setbotname 
├➢ #setbye <teks>
├➢ #setmenu <teks>
├➢ #setmenubefore <teks>
├➢ #setmenuheader <teks>
├➢ #setmenufooter <teks>
├➢ #setmenubody <teks>
├➢ #setmenuafter <teks>
├➢ #setwelcome <teks>
├➢ #simulate <event> [@mention]
├➢ #titlein <nama>
├➢ #unban
├➢ #ban
├➢ #unwarn [@mention]
├➢ #upsw [teks] (reply media)
├➢ #upsw <teks>
├➢ #virtex 
├➢ #warn @mention
└❏  
┌❏『 Verify menu 』
├➢ #verify5thn
├➢ #verify6thn
├➢ #verify7thn
├➢ #verify8thn
├➢ #verify9thn
├➢ #verify10thn
├➢ #verify11thn
├➢ #verifi12thn
├➢ #verify13thn
├➢ #verify14thn
├➢ #verify15thn
├➢ #verify16thn
├➢ #verify17thn
├➢ #verify18thn
├➢ #verify19thn
├➢ #verify20thn
├➢ #verify21thn
├➢ #verify22thn
├➢ #verify23thn
├➢ #verify24thn
├➢ #verify25thn
├➢ #verify26thn
├➢ #verify27thn
├➢ #verify28thn
├➢ #verify29thn
├➢ #verify30thn
├➢ #verify31thn
├➢ #verify32thn
├➢ #verify33thn
├➢ #verify34thn
├➢ #verify35thn
├➢ #verify36thn
├➢ #verify37thn
├➢ #verify38thn
├➢ #verify39thn
├➢ #verify40thn
└❏  
┌❏『 Terapkan 5M 』
│➵ Memakai masker
│➵ Mencuci tangan
│➵ Menjaga jarak
│➵ Menjauhi kerumunan
│➵ Membatasi mobilitas
└❏  
┌❏『 Peraturan 』
│➵ Bot ini tidak menyimpan media/foto yang anda kirimkan
│➵ Gunakan bot ini sebaik mungkin
│➵ Jangan spam fitur/command bot
│➵ Bot ini hanya untuk hiburan semata, dan *tidak untuk dimakan*
│➵ Bot ini sekedar bot, tidak dapet berbicara/melakukan hall yang berlebihan seperti manusia
│➵ Nomer Anda Hanya Disimpan Di Database Selama 6 Bulan Saja
│➵ Mohon perhatikan dalam penggunaan bot kami
└❏  
┌❏『 Hukuman 』
│ Owner berhak memberikan teguran hingga sanksi terhadap user yang melanggar peraturan di atas
│ Melanggar peraturan di atas dapat mendapatkan sanksi seperti banned/block user
└❏
┌❏『 Thanks Too 』
│➵ *MY GOD (JESUS)*
│➵ *RIMURUBOTZ* 〔 Original Sc 〕
│➵ *LORD RYNZ* 〔 Support 〕
│➵ *ADIWAJSHING* 〔 Modules 〕
│➵ *MEGAWATI* 〔 Support 〕
│➵ *BAILEYS GITHUB* 〔 Baileys 〕
│➵ *KURRXD*   〔 Original Sc 〕
│➵ *BOTCAHX* 〔 Original Sc 〕
│➵ *TIO PERNAMA* 〔 Support 〕
│➵ *SWSBOT* 〔 Support 〕
│➵ 𝐑𝐈𝐄𝐋𝐁𝐎𝐓𝐙 | 𝐕𝟏☠︎︎ 〔 Support 〕
│➵ *BACOTBOT* 〔 Support 〕
│➵ *NAYLACHAN* 〔 Support 〕
│➵ *NEKOBOT* 〔 Support 〕
│➵ *NUCLAIRE* 〔 Original Sc 〕
│➵ *ZEEONE OFC* 〔 Original Sc 〕
│➵ *ASUBOT* 〔 Support 〕
│➵ *ALPINBOT* 〔 Original Sc 〕
│➵ 𝐙𝐈𝐆𝐗𝐘"𝐁𝐎𝐓 〔 Support 〕
│➵ *ARIELBOT* 〔 Recode 〕
│➵ *ALPHABOT-MD* 〔 Recode 〕
│➵ *MhankBarBar* 〔 None Modules 〕
│➵ *NURUTOMO* 〔 None Modules 〕
│➵ *ARUGAZ* 〔 Support 〕
│➵ *PIYOBOT* 〔 None Modules 〕
│➵ *DikaArdnt* 〔 Recode 〕
│➵ *BOCHILGAMING* 〔 Support 〕
│➵ *SHIRAORIBOT-MD* 〔 Support 〕
│➵ *THORIQAZZIKRA* 〔 Support 〕
│➵ *HISOKA-BOT* 〔 Support 〕
│➵ *ＪＡＮＣＵＴＧＡＮＺ* 〔 Original Sc 〕
│➵ *FIRMAN Botz* 〔 Recode 〕
│➵ *MORPHY BOTZ* 〔 Support 〕
│➵ *KentBot* 〔 Recode 〕
│➵ *Xyna Botz* 〔 Support 〕
│➵ *Ahsan Adianul* 〔 Support 〕
│➵ *KlamkaBotz* 〔 Support 〕
│➵ *DyrotBotz-MD* 〔 Support 〕
│➵ *OscarBotz* 〔 Support 〕
│➵ *MaulBot* 〔 Support 〕
│➵ *NANDYBOTMD* 〔 Support 〕
│➵ *BarnekelBot* 〔 Support 〕
│➵ *Gorgebot-MD* 〔 Support 〕
│➵ *Luna-Botz* 〔 Support 〕
│➵ *MuzzaBot* 〔 Recode 〕
│➵ *MechaBotz* 〔 Recode 〕
│➵ *ElektroBot* 〔 Support 〕
│➵ *BotolBot* 〔 Original Sc 〕
│➵ *Haruka Botz* 〔 None Modules 〕
│➵ *ZIKRIBOTWA* 〔 Support 〕
│➵ *RaFaTaBOTZ* 〔 Original Sc 〕
│➵ *Siegrin* 〔 Original Sc 〕
│➵ *BY MatchBox* 〔 This Bot 〕
└❏  

*➡︎ BOT INI HANYA AUTO REPLY YANG HANYA BERFUNGSI DI PRIVATE DAN TIDAK BERFUNGSI DI GROUP*
*➡︎ BOT INI HANYA AKAN BERFUNGSI JIKA MENGGUNAKAN NYA DENGAN WAKTU JEDA 5 DETIK*
",
    footer: 'Hello World',
    templateButtons: templateButtons,
    image: {url: 'https://example.com/image.jpeg'}
}

const sendMsg = await sock.sendMessage(id, templateMessage)
