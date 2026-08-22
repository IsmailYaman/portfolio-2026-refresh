Pill-shaped, mono-uppercase button — use for every action on the site (CTA, "view all works", form submit).

```jsx
<Button variant="solid" size="md" arrow href="/work">View all works</Button>
<Button variant="outline">Get in touch</Button>
<Button variant="ghost" inverse>Back</Button>
```

Variants: `solid` (ink → n-700 on hover) is the primary; `outline` inverts to ink-on-paper on hover; `ghost` only shifts colour. Press nudges 1px down. Use `inverse` on dark sections. Never more than one `solid` per view.
