/* Simple demo – cycles logo colour every 6 seconds (Pro experience) */
const colors = ["#4F46E5", "#0D9488", "#9333EA", "#16A34A"];
let idx = 0;
setInterval(() => {
  document.querySelectorAll(".chameleon-icon").forEach(el => {
    el.style.color = colors[idx % colors.length];
  });
  idx++;
}, 6000);
