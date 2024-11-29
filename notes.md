# Astro

## Styles

pages can be styled using both an imported global.css file and a <style> tag.

When conflicting styles are defined both globally and in a page’s local <style> tag, the local styles should overwrite any global styles. 


# Scripts

code at the frontmatter is ran at build-time whereas code within <script> tags
(written or imported) is sent to the browser to enable client-side interactivity