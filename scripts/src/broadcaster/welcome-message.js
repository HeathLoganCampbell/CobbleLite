Events.On('PlayerJoinEvent', ( e ) => {
    var player = e.getPlayer();
    player.sendMessage(CC.BLUE + "Hello world");
})