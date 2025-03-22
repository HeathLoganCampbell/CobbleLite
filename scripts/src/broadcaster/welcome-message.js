Events.On('org.bukkit.event.player.PlayerMoveEvent', ( e ) => {
    var player = e.getPlayer();
    player.sendMessage("Hello world");
})