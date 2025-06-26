import { createApp, h } from "vue";
import KompasidPaywall from "./components/KompasPaywall.vue";

/* internal mount helper */
function mount(el: HTMLElement, props?: Record<string, any>) {
  const app = createApp({ render: () => h(KompasidPaywall, props) });
  app.mount(el);
  return () => app.unmount();
}

/** Inline embed */
function mountInline(options: { target: string | HTMLElement; props?: Record<string, any>; }) {
  const el =
    typeof options.target === "string"
      ? document.querySelector(options.target)
      : options.target;
  if (!el) throw new Error("Target element not found");
  return mount(el as HTMLElement, options.props);
}

/** Popup modal */
function openPopup(props?: Record<string, any>) {
  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;display:grid;place-items:center;" +
    "background:rgba(0,0,0,.45);z-index:9999";
  document.body.appendChild(overlay);

  const cleanup = mount(overlay, props);
  const close = () => { cleanup(); overlay.remove(); };

  window.addEventListener("keydown", e => e.key === "Escape" && close(), { once: true });
  return { close };
}

/* attach to global */
const KompasPaywall = { mountInline, openPopup };
if (typeof window !== "undefined") (window as any).KompasPaywall = KompasPaywall;

export default KompasPaywall;
export { mountInline, openPopup };
