package dev.cobblesword.cobblelite.common;

@FunctionalInterface
public interface Callback<T>
{
    public void done(T t);
}
