# Recreate Baseline Tennis Club & Academy

## Goal
Use the existing live preview and replace the current portfolio with the supplied Baseline landing page while preserving the project’s required TanStack shell. The visible experience will behave like the requested standalone HTML/CSS/JS site, with no backend or real form submission.

## Implementation
- Rebuild the `/` page as the complete Baseline experience: framed hero, trust carousel, programs, facilities, stats, testimonials, footer, fullscreen menu, and contact dialog.
- Apply the exact Onest typography, navy/blue palette, adaptive rem scaling rules, spacing, radii, breakpoints, and mobile layouts from the brief.
- Add the supplied court and player imagery through the project asset flow, using eager loading for the hero and lazy loading elsewhere.
- Implement the intro curtain and progress bar with the specified timing, then reveal the hero headline, tagline, and glass cards.
- Implement smooth scrolling with Lenis and plain browser animation logic for in-view reveals, clip-mask text, parallax, hover motion, and reduced-motion behavior.
- Build both carousels with wraparound controls, dots, automatic hero advancement, coach image crossfades, and re-triggered ghost-word animation.
- Implement accessible scroll locking, focus handling, Escape/backdrop closing, and keyboard focus states for the menu and contact dialog.
- Keep the visit request form as a local success simulation only, with no network request.
- Replace the page metadata with Baseline-specific title, description, Open Graph, and Twitter values.

## Validation
- Check the generated page for build and runtime errors.
- Verify loader exit, navigation, both carousels, menu, dialog, form success state, anchor scrolling, and keyboard closing.
- Inspect desktop and mobile screenshots for layout, image framing, text fit, overlap, and responsive behavior.

## Technical note
The project runtime requires its existing TanStack entry files, so the implementation will be self-contained within the single page route and global stylesheet rather than replacing the application with a raw root `index.html`. This preserves the requested visual and interaction behavior without breaking preview or publishing.
