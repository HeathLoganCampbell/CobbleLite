// This file makes the developing experience of the scripts a bit nicer by adding auto complete
declare global {
    const Events: {
        On(event: 'org.bukkit.event.player.AsyncPlayerChatEvent', callback: (e: AsyncPlayerChatEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerAdvancementDoneEvent', callback: (e: PlayerAdvancementDoneEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerAnimationEvent', callback: (e: PlayerAnimationEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerBedEnterEvent', callback: (e: PlayerBedEnterEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerBedLeaveEvent', callback: (e: PlayerBedLeaveEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerBucketEntityEvent', callback: (e: PlayerBucketEntityEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerBucketEvent', callback: (e: PlayerBucketEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerChangedMainHandEvent', callback: (e: PlayerChangedMainHandEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerChangedWorldEvent', callback: (e: PlayerChangedWorldEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerChannelEvent', callback: (e: PlayerChannelEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerChatEvent', callback: (e: PlayerChatEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerChatTabCompleteEvent', callback: (e: PlayerChatTabCompleteEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerCommandPreprocessEvent', callback: (e: PlayerCommandPreprocessEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerCommandSendEvent', callback: (e: PlayerCommandSendEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerDropItemEvent', callback: (e: PlayerDropItemEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerEditBookEvent', callback: (e: PlayerEditBookEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerEggThrowEvent', callback: (e: PlayerEggThrowEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerExpChangeEvent', callback: (e: PlayerExpChangeEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerExpCooldownChangeEvent', callback: (e: PlayerExpCooldownChangeEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerFishEvent', callback: (e: PlayerFishEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerGameModeChangeEvent', callback: (e: PlayerGameModeChangeEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerHarvestBlockEvent', callback: (e: PlayerHarvestBlockEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerHideEntityEvent', callback: (e: PlayerHideEntityEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerInputEvent', callback: (e: PlayerInputEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerInteractEntityEvent', callback: (e: PlayerInteractEntityEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerInteractEvent', callback: (e: PlayerInteractEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerItemBreakEvent', callback: (e: PlayerItemBreakEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerItemConsumeEvent', callback: (e: PlayerItemConsumeEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerItemDamageEvent', callback: (e: PlayerItemDamageEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerItemHeldEvent', callback: (e: PlayerItemHeldEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerItemMendEvent', callback: (e: PlayerItemMendEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerJoinEvent', callback: (e: PlayerJoinEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerKickEvent', callback: (e: PlayerKickEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerLevelChangeEvent', callback: (e: PlayerLevelChangeEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerLinksSendEvent', callback: (e: PlayerLinksSendEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerLocaleChangeEvent', callback: (e: PlayerLocaleChangeEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerLoginEvent', callback: (e: PlayerLoginEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerMoveEvent', callback: (e: PlayerMoveEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerPickupItemEvent', callback: (e: PlayerPickupItemEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerQuitEvent', callback: (e: PlayerQuitEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerRecipeBookClickEvent', callback: (e: PlayerRecipeBookClickEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerRecipeBookSettingsChangeEvent', callback: (e: PlayerRecipeBookSettingsChangeEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerRecipeDiscoverEvent', callback: (e: PlayerRecipeDiscoverEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerResourcePackStatusEvent', callback: (e: PlayerResourcePackStatusEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerRespawnEvent', callback: (e: PlayerRespawnEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerRiptideEvent', callback: (e: PlayerRiptideEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerShearEntityEvent', callback: (e: PlayerShearEntityEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerShowEntityEvent', callback: (e: PlayerShowEntityEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerSignOpenEvent', callback: (e: PlayerSignOpenEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerSpawnChangeEvent', callback: (e: PlayerSpawnChangeEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerSpawnLocationEvent', callback: (e: PlayerSpawnLocationEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerStatisticIncrementEvent', callback: (e: PlayerStatisticIncrementEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerSwapHandItemsEvent', callback: (e: PlayerSwapHandItemsEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerTakeLecternBookEvent', callback: (e: PlayerTakeLecternBookEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerToggleFlightEvent', callback: (e: PlayerToggleFlightEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerToggleSneakEvent', callback: (e: PlayerToggleSneakEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerToggleSprintEvent', callback: (e: PlayerToggleSprintEvent) => void): void;
        On(event: 'org.bukkit.event.player.PlayerVelocityEvent', callback: (e: PlayerVelocityEvent) => void): void;
    };

    class AsyncPlayerChatEvent { /* ... */ }
    class PlayerAdvancementDoneEvent { /* ... */ }
    class PlayerAnimationEvent { /* ... */ }
    class PlayerBedEnterEvent { /* ... */ }
    class PlayerBedLeaveEvent { /* ... */ }
    class PlayerBucketEntityEvent { /* ... */ }
    class PlayerBucketEvent { /* ... */ }
    class PlayerChangedMainHandEvent { /* ... */ }
    class PlayerChangedWorldEvent { /* ... */ }
    class PlayerChannelEvent { /* ... */ }
    class PlayerChatEvent { /* ... */ }
    class PlayerChatTabCompleteEvent { /* ... */ }
    class PlayerCommandPreprocessEvent { /* ... */ }
    class PlayerCommandSendEvent { /* ... */ }
    class PlayerDropItemEvent { /* ... */ }
    class PlayerEditBookEvent { /* ... */ }
    class PlayerEggThrowEvent { /* ... */ }
    class PlayerExpChangeEvent { /* ... */ }
    class PlayerExpCooldownChangeEvent { /* ... */ }
    class PlayerFishEvent { /* ... */ }
    class PlayerGameModeChangeEvent { /* ... */ }
    class PlayerHarvestBlockEvent { /* ... */ }
    class PlayerHideEntityEvent { /* ... */ }
    class PlayerInputEvent { /* ... */ }
    class PlayerInteractEntityEvent { /* ... */ }
    class PlayerInteractEvent { /* ... */ }
    class PlayerItemBreakEvent { /* ... */ }
    class PlayerItemConsumeEvent { /* ... */ }
    class PlayerItemDamageEvent { /* ... */ }
    class PlayerItemHeldEvent { /* ... */ }
    class PlayerItemMendEvent { /* ... */ }
    class PlayerJoinEvent { /* ... */ }
    class PlayerKickEvent { /* ... */ }
    class PlayerLevelChangeEvent { /* ... */ }
    class PlayerLinksSendEvent { /* ... */ }
    class PlayerLocaleChangeEvent { /* ... */ }
    class PlayerLoginEvent { /* ... */ }
    class PlayerMoveEvent 
    {
        getPlayer(): Player;
    }
    class PlayerPickupItemEvent { /* ... */ }
    class PlayerQuitEvent { /* ... */ }
    class PlayerRecipeBookClickEvent { /* ... */ }
    class PlayerRecipeBookSettingsChangeEvent { /* ... */ }
    class PlayerRecipeDiscoverEvent { /* ... */ }
    class PlayerResourcePackStatusEvent { /* ... */ }
    class PlayerRespawnEvent { /* ... */ }
    class PlayerRiptideEvent { /* ... */ }
    class PlayerShearEntityEvent { /* ... */ }
    class PlayerShowEntityEvent { /* ... */ }
    class PlayerSignOpenEvent { /* ... */ }
    class PlayerSpawnChangeEvent { /* ... */ }
    class PlayerSpawnLocationEvent { /* ... */ }
    class PlayerStatisticIncrementEvent { /* ... */ }
    class PlayerSwapHandItemsEvent { /* ... */ }
    class PlayerTakeLecternBookEvent { /* ... */ }
    class PlayerToggleFlightEvent { /* ... */ }
    class PlayerToggleSneakEvent { /* ... */ }
    class PlayerToggleSprintEvent { /* ... */ }
    class PlayerVelocityEvent { /* ... */ }

    // Define the Player class with the sendMessage method
    class Player {
        // Methods from the Spigot API for Player class
        sendMessage(message: string): void;
        getName(): string;
        getDisplayName(): string;
        setDisplayName(name: string): void;
        getLocation(): MinecraftLocation;
        teleport(location: MinecraftLocation): void;
        getHealth(): number;
        setHealth(health: number): void;
        getFoodLevel(): number;
        setFoodLevel(foodLevel: number): void;
        getLevel(): number;
        setLevel(level: number): void;
        getExp(): number;
        setExp(exp: number): void;
        getPlayerListName(): string;
        setPlayerListName(name: string): void;
        getUniqueId(): string;
        isOnline(): boolean;
        getWorld(): World;
        setOp(isOp: boolean): void;
        isOp(): boolean;
        hidePlayer(player: Player): void;
        showPlayer(player: Player): void;
        getLastPlayed(): number;
        getFirstPlayed(): number;
        setFlying(flying: boolean): void;
        setFlySpeed(speed: number): void;
        getFlySpeed(): number;
        setWalkSpeed(speed: number): void;
        getWalkSpeed(): number;
        getBedSpawnLocation(): Location;
        setBedSpawnLocation(location: Location): void;
        getInventory(): Inventory;
        getEyeLocation(): Location;
        getTargetBlock(materials: Set<Material>, maxDistance: number): Block;
        setGameMode(mode: GameMode): void;
        getGameMode(): GameMode;
        setItemInHand(item: ItemStack): void;
        getItemInHand(): ItemStack;
        setDisplayName(displayName: string): void;
        setCustomName(name: string): void;
        getCustomName(): string;
        getHealthScale(): number;
        setHealthScale(scale: number): void;
        getMaxHealth(): number;
        setMaxHealth(maxHealth: number): void;
        getTotalExperience(): number;
        setTotalExperience(exp: number): void;
        giveExp(amount: number): void;
        giveExpLevels(levels: number): void;
        getInventory(): Inventory;
        getEnderChest(): Inventory;
        getInventory(): Inventory;
        getFoodLevel(): number;
        getRemainingAir(): number;
        setRemainingAir(air: number): void;
        getSaturation(): number;
        setSaturation(saturation: number): void;
        getActivePotionEffects(): Collection<PotionEffect>;
        addPotionEffect(effect: PotionEffect): void;
        removePotionEffect(type: PotionEffectType): void;
    }

    class MinecraftLocation {
        constructor(x: number, y: number, z: number);
        getX(): number;
        getY(): number;
        getZ(): number;
    }

    class World {
        // World-related methods
        getName(): string;
    }

    enum GameMode {
        SURVIVAL,
        CREATIVE,
        ADVENTURE,
        SPECTATOR
    }

    class ItemStack 
    {
        constructor(material: Material, amount: number);
        getType(): Material;
        setType(material: Material): void;
        getAmount(): number;
        setAmount(amount: number): void;
        getDurability(): number;
        setDurability(durability: number): void;
        getItemMeta(): ItemMeta | null;
        setItemMeta(meta: ItemMeta): void;
    }

    class Block
    {
        getType(): Material;
        setType(material: Material): void;
        getLocation(): Location;
        getState(): BlockState;
    }

    class PotionEffect {
        constructor(type: PotionEffectType, duration: number, amplifier: number);
        getType(): PotionEffectType;
        getDuration(): number;
        getAmplifier(): number;
        getAmbient(): boolean;
        isSplash(): boolean;
    }

    class Inventory {
        getSize(): number;
        getItem(slot: number): ItemStack | null;
        setItem(slot: number, item: ItemStack): void;
        addItem(item: ItemStack): void;
        removeItem(item: ItemStack): void;
        contains(item: ItemStack): boolean;
        clear(): void;
        getContents(): ItemStack[];
    }

    class PermissionAttachment {}
    class Scoreboard {}
    class Material {}
    class Collection<T> {
        add(item: T): boolean;
        remove(item: T): boolean;
        contains(item: T): boolean;
        size(): number;
        clear(): void;
        toArray(): T[];
    }

    class ItemMeta {
        setDisplayName(name: string): void;
        getDisplayName(): string;
        setLore(lore: string[]): void;
        getLore(): string[];
        addEnchant(enchantment: Enchantment, level: number): void;
        getEnchants(): Map<Enchantment, number>;
    }

    class Enchantment {
    }

    // TeleportCause Enum
    enum TeleportCause {
        PLUGIN,
        COMMAND,
        TELEPORT
    }

    // Placeholder for PotionEffectType class
    class PotionEffectType {}
}

export {};