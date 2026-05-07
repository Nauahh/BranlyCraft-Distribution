PlayerEvents.loggedIn(event => {
    const player = event.player
    const name = player.name.string

    // Grand titre centré (fade_in=15t, stay=120t, fade_out=25t)
    event.server.runCommandSilent(`title ${name} times 15 120 25`)
    event.server.runCommandSilent(`title ${name} title {"text":"✦  BranlyCraft  ✦","color":"dark_purple","bold":true,"shadow":true}`)
    event.server.runCommandSilent(`title ${name} subtitle [{"text":"Bienvenue sur la ","color":"white"},{"text":"Saison 2","color":"gold","bold":true},{"text":"  ✦","color":"dark_purple"}]`)

    // Barre de séparation dans le chat
    const bar = Text.of('  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ').color('dark_purple')

    player.tell(Text.of('\n'))
    player.tell(bar)
    player.tell(
        Text.of('  ')
            .append(Text.of('✦').color('dark_purple').bold())
            .append(Text.of('  BranlyCraft').color('dark_purple').bold())
            .append(Text.of('  •  ').color('gray'))
            .append(Text.of('Saison 2  ').color('gold').bold())
            .append(Text.of('✦').color('dark_purple').bold())
    )
    player.tell(
        Text.of('  ')
            .append(Text.of('Bienvenue, ').color('white'))
            .append(Text.of(name).color('light_purple').bold())
            .append(Text.of(' !').color('white'))
    )
    player.tell(
        Text.of('  ')
            .append(Text.of('⚔  Bonne aventure parmi nous !').color('gold').italic())
    )
    player.tell(bar)
    player.tell(Text.of('\n'))
})
