Site navigation. Full-screen ink panel, numbered oversized links, socials + email pinned bottom.

```jsx
<MenuOverlay open={open} onClose={() => setOpen(false)} onNavigate={(it) => go(it.label)} />
```

Non-hovered items dim to 32% white — the hover-dim is the interaction, not underlines.
