# Trishul, Vajra & Astra button animations

Open `index.html` in a browser. No installation or build step is needed.

Use the artwork selector at the top left to switch between **Trishul**, **Vajra**, and **Astra**. Each artwork supports all three forms:

- **Twin Rise**: two upright forms emerge from the center.
- **United Reach**: two horizontal forms extend in opposite directions with joined handles.
- **Open Core**: the horizontal reveal also dissolves the button into its top and bottom lines, showing the continuous handle through the center.

**Open Core** is selected by default. The full button returns when the interaction ends. The mandala has its own clear area, with form controls above it and captions below it.

In both horizontal versions, the two handles remain joined at the button's exact center while the shafts extend outward and the tips point in opposite directions. Existing direct links ending in `#original`, `#joined`, or `#open-center` still work. Add `?weapon=vajra` or `?weapon=astra` before the hash to select an artwork, for example `index.html?weapon=vajra#open-center`.

Hover over **Button** to reveal the pair. Trishul has waving red and saffron silk, Vajra has pulsing blue lightning, and Astra has moving flames and embers. Move away to retract them. On a touch screen, tap to open and tap again to close. Keyboard focus also opens the reveal; Escape closes it.

The page stays idle on load and when changing artwork or form, waiting for interaction with **Button**. **Replay animation** explicitly plays a short demonstration; the **Breeze**, **Charge**, or **Flame** control changes the corresponding effect speed. Reduced-motion preferences are respected.

The artwork is recreated as animated SVG from the three supplied images; **Your reference** displays the image for the selected artwork. All assets are local and the demo works offline.
# Button-Animation
