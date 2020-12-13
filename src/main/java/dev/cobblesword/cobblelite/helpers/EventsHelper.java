package dev.cobblesword.cobblelite.helpers;

import com.google.common.base.Preconditions;
import com.google.common.collect.LinkedHashMultimap;
import com.google.common.collect.SetMultimap;
import dev.cobblesword.cobblelite.CobbleLitePlugin;
import dev.cobblesword.cobblelite.common.Callback;
import org.bukkit.event.Event;
import org.bukkit.event.player.PlayerJoinEvent;

import javax.script.ScriptException;
import java.util.Iterator;
import java.util.Set;
import java.util.function.Consumer;

public class EventsHelper
{
    private final SetMultimap<Class, Consumer<Event>> handlers = LinkedHashMultimap.create();

    public <T extends Event> void on(String eventName, Consumer<T> runnable)
    {
        Class clazz;
        try {
            clazz = Class.forName(eventName, false, CobbleLitePlugin.class.getClassLoader());
            if (!Event.class.isAssignableFrom(clazz)) {
                throw new RuntimeException("Invalid event class");
            }
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        if (!handlers.put(clazz, (Consumer<Event>) runnable)) {
            throw new RuntimeException("duplicate handler registration");
        }
    }

    public <T extends Event> void emit(T event) throws ScriptException {
        Preconditions.checkArgument(event != null, "event");
        Set<Consumer<Event>> handlers = this.handlers.get(event.getClass());
        if (handlers == null || handlers.isEmpty()) {
            return;
        }

        for (Iterator<Consumer<Event>> iterator = handlers.iterator(); iterator.hasNext(); ) {
            Consumer<Event> next = iterator.next();
            try {
                long start = System.currentTimeMillis();
                next.accept(event);
                System.out.println(event.getEventName() + " took " + (System.currentTimeMillis() - start) + "ms to run");
            } catch (Throwable throwable) {
                iterator.remove();
            }
        }
    }
}
