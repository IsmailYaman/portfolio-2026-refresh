Endless type ticker used as a section divider (services, disciplines, "let's work together").

```jsx
<Marquee items={["Branding", "Web design", "UI/UX design"]} speed={28} />
<Marquee items={["Let’s work together"]} outline inverse reverse />
```

Duplicated strip + translateX(-50%) loop, linear, never paused. Respect `prefers-reduced-motion` (the token file zeroes the duration).
