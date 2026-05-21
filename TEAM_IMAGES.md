# Replacing Team Member Images

Team member images are imported locally from:

```txt
src/assets/team/
```

Current placeholder files:

```txt
kwame-asante.svg
abena-mensah.svg
kofi-baidoo.svg
ama-serwaa.svg
yaw-boakye.svg
esi-owusu.svg
```

To use real photos, replace any of those files with a JPG/PNG photo and update the matching import in:

```txt
src/pages/Team.jsx
```

Example:

```jsx
import kwameAsante from "../assets/team/kwame-asante.jpg";
```

Recommended image size: square photo, at least 800px by 800px.
