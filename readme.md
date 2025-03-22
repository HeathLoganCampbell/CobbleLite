# CobbleLite
*A simple Experiment to demonstrate how we can connect Java and javascript like ArkJs*

## Featurs added
* Types, so that your javascript has auto complete :)

## Example
```javascript
// Whenever a player moves a message is sent
Events.On('org.bukkit.event.player.PlayerMoveEvent', ( e ) => {
    var player = e.getPlayer();
    player.sendMessage("Freeze! in the name of the law.");
})
```

### Cool features that could be added?
- Packet Listeners?
- Event Support
- Command support with tab complete
- Minigames?
- custom items?
    - With custom stats
        - Damage
        - Protection
        - Effect
- World uploading to database
- Advtures
- NPCs

## Future improvement
* Wrap Bukkit class, and make a dummy plugin per file, that the events get registered to
* Add a polyfill header.js
