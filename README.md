Transforms CSS stylesheets into Lit CSS literals.

# About
This plugin takes your SASS or CSS files and transforms them into Lit CSS literals when they are imported. For example:

```css
button {
    background: blue;
    color: white;
    padding: 3px 6px;
}
```

Would become:

```ts
import { css } from 'lit';

export default css`button {
  background: blue;
  color: white;
  padding: 3px 6px;
}`;
```

This is particularly beneficial when developing a component library. A separate SASS / CSS module could be imported to handle the styling of your Lit elements.

**Note:** When optimization is on in Parcel, your literals _will_ be minified. Traditionally Parcel struggles with these literals, so it was important to us that this was supported.

# Install

To install this transformer, add the following lines to your [`.parcelrc`](https://parceljs.org/features/plugins/#.parcelrc) file:

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.css": ["@anteris/parcel-transformer-lit-css"]
  }
}
```

Be aware that this will convert all CSS imports into CSS literals, so it may be a good idea to adopt a naming pattern such as `*.styles.css` for Lit-specific imports.