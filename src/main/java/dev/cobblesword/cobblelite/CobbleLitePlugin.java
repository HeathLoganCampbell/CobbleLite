package dev.cobblesword.cobblelite;

import org.bukkit.plugin.java.JavaPlugin;

public class CobbleLitePlugin extends JavaPlugin
{
    private CobbleLite cobbleLite;

    @Override
    public void onEnable()
    {
        cobbleLite = new CobbleLite(this.getDataFolder());
    }

    @Override
    public void onDisable()
    {

    }
}
