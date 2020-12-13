package dev.cobblesword.cobblelite;

import com.google.common.collect.ImmutableSet;
import dev.cobblesword.cobblelite.common.EventType;
import dev.cobblesword.cobblelite.helpers.ConsoleHelper;
import dev.cobblesword.cobblelite.helpers.EventsHelper;
import org.bukkit.Bukkit;
import org.bukkit.event.Event;
import org.bukkit.event.EventException;
import org.bukkit.event.EventPriority;
import org.bukkit.event.Listener;
import org.bukkit.event.block.*;
import org.bukkit.event.enchantment.EnchantItemEvent;
import org.bukkit.event.enchantment.PrepareItemEnchantEvent;
import org.bukkit.event.entity.*;
import org.bukkit.event.hanging.HangingBreakByEntityEvent;
import org.bukkit.event.hanging.HangingBreakEvent;
import org.bukkit.event.hanging.HangingPlaceEvent;
import org.bukkit.event.inventory.*;
import org.bukkit.event.player.*;
import org.bukkit.event.server.*;
import org.bukkit.event.vehicle.*;
import org.bukkit.event.weather.LightningStrikeEvent;
import org.bukkit.event.weather.ThunderChangeEvent;
import org.bukkit.event.weather.WeatherChangeEvent;
import org.bukkit.event.world.*;
import org.bukkit.plugin.EventExecutor;

import javax.script.Bindings;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.*;
import java.nio.file.*;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class CobbleLite
{
    private static Set<Class<? extends Event>> bukkitEvents = ImmutableSet.of(
            AsyncPlayerChatEvent.class,
            AsyncPlayerPreLoginEvent.class,
            BlockBreakEvent.class,
            BlockBurnEvent.class,
            BlockCanBuildEvent.class,
            BlockDamageEvent.class,
            BlockDispenseEvent.class,
            BlockExpEvent.class,
            BlockFormEvent.class,
            BlockFadeEvent.class,
            BlockFromToEvent.class,
            BlockGrowEvent.class,
            BlockIgniteEvent.class,
            BlockPhysicsEvent.class,
            BlockPistonExtendEvent.class,
            BlockPistonRetractEvent.class,
            BlockPlaceEvent.class,
            BlockRedstoneEvent.class,
            BlockSpreadEvent.class,
            BrewEvent.class,
            ChunkLoadEvent.class,
            ChunkPopulateEvent.class,
            ChunkUnloadEvent.class,
            CraftItemEvent.class,
            CreatureSpawnEvent.class,
            CreeperPowerEvent.class,
            EnchantItemEvent.class,
            EntityBlockFormEvent.class,
            EntityBreakDoorEvent.class,
            EntityChangeBlockEvent.class,
            EntityCombustByBlockEvent.class,
            EntityCombustByEntityEvent.class,
            EntityCombustEvent.class,
            EntityCreatePortalEvent.class,
            EntityDamageByBlockEvent.class,
            EntityDamageByEntityEvent.class,
            EntityDamageEvent.class,
            EntityDeathEvent.class,
            EntityExplodeEvent.class,
            EntityInteractEvent.class,
            EntityPortalEnterEvent.class,
            EntityPortalEvent.class,
            EntityPortalExitEvent.class,
            EntityRegainHealthEvent.class,
            EntityShootBowEvent.class,
            EntityTameEvent.class,
            EntityTargetEvent.class,
            EntityTargetLivingEntityEvent.class,
            EntityTeleportEvent.class,
            EntityUnleashEvent.class,
            ExpBottleEvent.class,
            ExplosionPrimeEvent.class,
            FoodLevelChangeEvent.class,
            FurnaceBurnEvent.class,
            FurnaceExtractEvent.class,
            FurnaceSmeltEvent.class,
            HangingBreakByEntityEvent.class,
            HangingBreakEvent.class,
            HangingPlaceEvent.class,
            HorseJumpEvent.class,
            InventoryClickEvent.class,
            InventoryCloseEvent.class,
            InventoryCreativeEvent.class,
            InventoryDragEvent.class,
            InventoryInteractEvent.class,
            InventoryMoveItemEvent.class,
            InventoryOpenEvent.class,
            InventoryPickupItemEvent.class,
            ItemDespawnEvent.class,
            ItemSpawnEvent.class,
            LeavesDecayEvent.class,
            LightningStrikeEvent.class,
            MapInitializeEvent.class,
            NotePlayEvent.class,
            PigZapEvent.class,
            PlayerAchievementAwardedEvent.class,
            PlayerAnimationEvent.class,
            PlayerBedEnterEvent.class,
            PlayerBedLeaveEvent.class,
            PlayerBucketEmptyEvent.class,
            PlayerBucketFillEvent.class,
            PlayerChangedWorldEvent.class,
            PlayerChannelEvent.class,
            PlayerChatEvent.class,
            PlayerChatTabCompleteEvent.class,
            PlayerCommandPreprocessEvent.class,
            PlayerDeathEvent.class,
            PlayerDropItemEvent.class,
            PlayerEditBookEvent.class,
            PlayerEggThrowEvent.class,
            PlayerExpChangeEvent.class,
            PlayerFishEvent.class,
            PlayerGameModeChangeEvent.class,
            PlayerInteractAtEntityEvent.class,
            PlayerInteractEntityEvent.class,
            PlayerInteractEvent.class,
            PlayerInventoryEvent.class,
            PlayerItemBreakEvent.class,
            PlayerItemConsumeEvent.class,
            PlayerItemHeldEvent.class,
            PlayerJoinEvent.class,
            PlayerKickEvent.class,
            PlayerLeashEntityEvent.class,
            PlayerLevelChangeEvent.class,
            PlayerLoginEvent.class,
            PlayerMoveEvent.class,
            PlayerPickupItemEvent.class,
            PlayerPortalEvent.class,
            PlayerPreLoginEvent.class,
            PlayerQuitEvent.class,
            PlayerRegisterChannelEvent.class,
            PlayerRespawnEvent.class,
            PlayerShearEntityEvent.class,
            PlayerStatisticIncrementEvent.class,
            PlayerTeleportEvent.class,
            PlayerToggleFlightEvent.class,
            PlayerToggleSneakEvent.class,
            PlayerToggleSprintEvent.class,
            PlayerUnleashEntityEvent.class,
            PlayerUnregisterChannelEvent.class,
            PlayerVelocityEvent.class,
            PluginDisableEvent.class,
            PluginEnableEvent.class,
            PortalCreateEvent.class,
            PotionSplashEvent.class,
            PrepareItemCraftEvent.class,
            PrepareItemEnchantEvent.class,
            ProjectileHitEvent.class,
            ProjectileLaunchEvent.class,
            RemoteServerCommandEvent.class,
            ServerCommandEvent.class,
            ServerListPingEvent.class,
            ServiceRegisterEvent.class,
            ServiceUnregisterEvent.class,
            SheepDyeWoolEvent.class,
            SheepRegrowWoolEvent.class,
            SignChangeEvent.class,
            SlimeSplitEvent.class,
            SpawnChangeEvent.class,
            StructureGrowEvent.class,
            ThunderChangeEvent.class,
            VehicleBlockCollisionEvent.class,
            VehicleCreateEvent.class,
            VehicleDamageEvent.class,
            VehicleDestroyEvent.class,
            VehicleEnterEvent.class,
            VehicleEntityCollisionEvent.class,
            VehicleExitEvent.class,
            VehicleMoveEvent.class,
            VehicleUpdateEvent.class,
            WeatherChangeEvent.class,
            WorldInitEvent.class,
            WorldLoadEvent.class,
            WorldSaveEvent.class,
            WorldUnloadEvent.class
    );

    private HashSet<Path> loadedScripts = new HashSet<>();
    private ScriptEngine scriptEngine;
    private WatchKey watchKey;
    private EventsHelper eventsHelper = new EventsHelper();

    public CobbleLite(File file)
    {
        scriptEngine = new ScriptEngineManager().getEngineByName("JavaScript");

        File directory = new File(file, "scripts");
        while(directory.mkdirs()) {}

        EventExecutor executor = new ScriptEventExecutor();
        bukkitEvents.stream().forEach(clazz -> {
            Bukkit.getServer().getPluginManager().registerEvent(clazz, new Listener() {
            }, EventPriority.NORMAL, executor, CobbleLitePlugin.getProvidingPlugin(CobbleLitePlugin.class), false);
        });

        FileFilter fileFilter = pathname -> {
            if (!pathname.isFile() || pathname.getName().charAt(0) == '.') {
                return false;
            }

            String extension = pathname.getName().toLowerCase();
            int index = extension.lastIndexOf('.');
            if (index > -1) {
                extension = extension.substring(index + 1);
            }
            return !extension.equals(pathname.getName()) && extension.equals("js");
        };

        watcher(directory, fileFilter);
    }

    public void watcher(File directory, FileFilter fileFilter)
    {
        try {
            WatchService service = FileSystems.getDefault().newWatchService();
            Path path = directory.toPath();
            watchKey = path.register(service, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_DELETE, StandardWatchEventKinds.ENTRY_MODIFY);
            Bukkit.getScheduler().runTaskTimerAsynchronously(CobbleLitePlugin.getProvidingPlugin(CobbleLitePlugin.class), () -> {
                WatchKey watchKey = service.poll();
                if (watchKey != null) {
                    try {
                        watchKey.pollEvents().forEach(event -> {
                            WatchEvent.Kind<?> kind = event.kind();
                            Path changed = (Path) event.context();
                            Path full = path.resolve(changed);
                            File file = full.toFile();
                            if (!fileFilter.accept(file)) {
                                return;
                            }

                            if (kind == StandardWatchEventKinds.ENTRY_CREATE || kind == StandardWatchEventKinds.ENTRY_MODIFY) {
                                loadFile(file);
                            } else if (kind == StandardWatchEventKinds.ENTRY_DELETE) {
                            }
                        });
                    } finally {
                        watchKey.reset();
                    }
                }
            }, 100L, 100L);
        } catch (IOException e) {
            e.printStackTrace();
        }

        for (File file : directory.listFiles(fileFilter)) {
            System.out.println(file.getName() + " loading...");
            loadFile(file);
            System.out.println(file.getName() + " loaded");
        }
    }

    private void loadFile(File file) {
        Bindings context = scriptEngine.createBindings();
        context.put("__DIRECTORY__", file.getParentFile().toPath().toAbsolutePath().toString().concat(File.separator));
        context.put("Events", eventsHelper);
        context.put("Console", new ConsoleHelper());
        context.put("Server", Bukkit.getServer());
        context.put("plugin", this);

        Path path = file.toPath();
        try (FileReader reader = new FileReader(file)) {
            long start = System.currentTimeMillis();
            scriptEngine.eval(reader, context);
            System.out.println("Loaded script " + file.getName()  + " in " + (System.currentTimeMillis() - start) + "ms");

            if(loadedScripts.contains(path))
            {
                System.out.println("\"" + file.getName() + "\" was reloaded!");
            }
            else
            {
                loadedScripts.add(path);
            }
        } catch (IOException e) {
            if (e instanceof FileNotFoundException) {
                return;
            }
            e.printStackTrace();
        } catch (ScriptException e) {
            if (loadedScripts.remove(path)) {
                System.out.println("\"" + file.getName() + "\" was forcefully unloaded!");
            }
            e.printStackTrace();
        }
    }

    private final class ScriptEventExecutor implements EventExecutor {
        @Override
        public void execute(Listener listener, Event event) throws EventException {
                try {
                    eventsHelper.emit(event);
                } catch (ScriptException e) {
//                    entry.getValue().cleanup();
//                    iterator.remove();
                    throw new EventException(e, e.getMessage());
                }
        }
    }
}
