mobs.onMobKilled(CHICKEN, function () {
    mobs.kill(
    mobs.target(ALL_PLAYERS)
    )
})
mobs.onMobKilled(SHEEP, function () {
    mobs.kill(
    mobs.target(ALL_PLAYERS)
    )
})
mobs.onMobKilled(VILLAGER, function () {
    player.say("Attacking you wild Life eh")
    player.say(":|")
    player.say("-_-")
    mobs.kill(
    mobs.target(LOCAL_PLAYER)
    )
})
mobs.onMobKilled(COW, function () {
    mobs.kill(
    mobs.target(ALL_PLAYERS)
    )
})
blocks.onBlockBroken(LOG_OAK, function () {
    player.say("Attacking the woodland eh")
    player.say("Well you asked for it")
    mobs.kill(
    mobs.target(LOCAL_PLAYER)
    )
})
loops.forever(function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
})
loops.forever(function () {
    gameplay.timeSet(gameplay.time(MIDNIGHT))
    music.playSound(Sound.Creeper)
})
mobs.onMobKilled(mobs.monster(IRON_GOLEM), function () {
    mobs.spawn(mobs.monster(IRON_GOLEM), player.position())
    mobs.spawn(mobs.monster(IRON_GOLEM), player.position())
    mobs.spawn(mobs.monster(IRON_GOLEM), player.position())
    mobs.spawn(mobs.monster(IRON_GOLEM), player.position())
    mobs.spawn(mobs.monster(IRON_GOLEM), player.position())
})
player.onChat("Help", function () {
    mobs.spawn(mobs.monster(CREEPER), pos(0, 0, 0))
})
mobs.onMobKilled(WOLF, function () {
    mobs.kill(
    mobs.target(ALL_PLAYERS)
    )
})
player.onChat("Pigstep", function () {
    music.playMusic(MusicDisc.Pigstep)
})
mobs.onMobKilled(PIG, function () {
    mobs.kill(
    mobs.target(ALL_PLAYERS)
    )
})
blocks.place(BED, player.position())
