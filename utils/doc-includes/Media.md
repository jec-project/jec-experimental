```javascript
import {Media} from "jec-experimental";

@Media({
  "urlPatterns": ["/assets/*"],
  "rootPath": "path/to/my/assets/",
  "cors": "http://localhost:3001",
  "cacheControl": "public, max-age=31536000",
  "defaultLocale": "en_US",
  "locales": [
    "en_US",
    "fr_FR"
  ],
  "rules": [
    {
      "matchRef": "(max-width: 600px)",
      "path": "max-width-600px"
    },
    {
      "matchRef": null,
      "path": "larger-than-600px"
    }
  ]
})
export class StaticResources() {}
```