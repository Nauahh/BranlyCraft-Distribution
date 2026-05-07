// Avertissements de redemarrage a 4h du matin
// Messages envoyes a 3h50, 3h55, 3h59

const WARNINGS = {
    '3:50': '10 minutes',
    '3:55': '5 minutes',
    '3:59': '1 minute',
};

let lastWarningKey = '';

ServerEvents.tick(event => {
    if (event.server.tickCount % 20 !== 0) return;

    const LocalTime = Java.loadClass('java.time.LocalTime');
    const now = LocalTime.now();
    const hour = now.getHour();
    const minute = now.getMinute();

    const key = `${hour}:${minute}`;
    if (!WARNINGS[key] || lastWarningKey === key) return;
    lastWarningKey = key;

    const timeLeft = WARNINGS[key];
    const is1min = key === '3:59';

    event.server.players.forEach(player => {
        const bar = Text.of('  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  ').color('red');
        player.tell(bar);
        player.tell(
            Text.of('  ')
                .append(Text.of('⚠  ').color('red').bold())
                .append(Text.of('REDEMARRAGE').color('red').bold())
                .append(Text.of(' du serveur dans ').color('white'))
                .append(Text.of(timeLeft).color('red').bold())
                .append(Text.of(' !').color('white'))
        );
        player.tell(
            Text.of('  ')
                .append(Text.of('Pensez a sauvegarder votre progression.').color('gray').italic())
        );
        player.tell(bar);
    });

    if (is1min) {
        event.server.players.forEach(player => {
            const name = player.name.string;
            event.server.runCommandSilent(`title ${name} times 10 60 20`);
            event.server.runCommandSilent(`title ${name} title {"text":"\\u26a0  1 MINUTE  \\u26a0","color":"red","bold":true}`);
            event.server.runCommandSilent(`title ${name} subtitle {"text":"Redemarrage imminent du serveur","color":"white"}`);
        });
    }
});
