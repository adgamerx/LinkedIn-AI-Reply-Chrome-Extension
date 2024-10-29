var content = function() {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  var _a, _b;
  function defineContentScript(definition2) {
    return definition2;
  }
  const logoIcon = "data:image/svg+xml,%3csvg%20width='42'%20height='42'%20viewBox='0%200%2042%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_dd_3_37)'%3e%3crect%20x='5'%20y='1'%20width='32'%20height='32'%20rx='16'%20fill='white'/%3e%3cpath%20d='M28.4667%2018.7333C28.4667%2018.8866%2028.4063%2019.0335%2028.2989%2019.1419C28.1915%2019.2502%2028.0458%2019.3111%2027.8938%2019.3111H26.7482V20.4667C26.7482%2020.6199%2026.6879%2020.7668%2026.5804%2020.8752C26.473%2020.9836%2026.3273%2021.0444%2026.1754%2021.0444C26.0235%2021.0444%2025.8778%2020.9836%2025.7703%2020.8752C25.6629%2020.7668%2025.6026%2020.6199%2025.6026%2020.4667V19.3111H24.4569C24.305%2019.3111%2024.1593%2019.2502%2024.0519%2019.1419C23.9445%2019.0335%2023.8841%2018.8866%2023.8841%2018.7333C23.8841%2018.5801%2023.9445%2018.4331%2024.0519%2018.3248C24.1593%2018.2164%2024.305%2018.1555%2024.4569%2018.1555H25.6026V17C25.6026%2016.8467%2025.6629%2016.6998%2025.7703%2016.5914C25.8778%2016.4831%2026.0235%2016.4222%2026.1754%2016.4222C26.3273%2016.4222%2026.473%2016.4831%2026.5804%2016.5914C26.6879%2016.6998%2026.7482%2016.8467%2026.7482%2017V18.1555H27.8938C28.0458%2018.1555%2028.1915%2018.2164%2028.2989%2018.3248C28.4063%2018.4331%2028.4667%2018.5801%2028.4667%2018.7333ZM14.719%2012.9555H15.8646V14.1111C15.8646%2014.2643%2015.925%2014.4113%2016.0324%2014.5196C16.1398%2014.628%2016.2855%2014.6889%2016.4375%2014.6889C16.5894%2014.6889%2016.7351%2014.628%2016.8425%2014.5196C16.9499%2014.4113%2017.0103%2014.2643%2017.0103%2014.1111V12.9555H18.1559C18.3078%2012.9555%2018.4535%2012.8947%2018.561%2012.7863C18.6684%2012.678%2018.7287%2012.531%2018.7287%2012.3778C18.7287%2012.2245%2018.6684%2012.0776%2018.561%2011.9692C18.4535%2011.8609%2018.3078%2011.8%2018.1559%2011.8H17.0103V10.6444C17.0103%2010.4912%2016.9499%2010.3442%2016.8425%2010.2359C16.7351%2010.1275%2016.5894%2010.0667%2016.4375%2010.0667C16.2855%2010.0667%2016.1398%2010.1275%2016.0324%2010.2359C15.925%2010.3442%2015.8646%2010.4912%2015.8646%2010.6444V11.8H14.719C14.5671%2011.8%2014.4214%2011.8609%2014.314%2011.9692C14.2065%2012.0776%2014.1462%2012.2245%2014.1462%2012.3778C14.1462%2012.531%2014.2065%2012.678%2014.314%2012.7863C14.4214%2012.8947%2014.5671%2012.9555%2014.719%2012.9555ZM23.8841%2021.6222H23.3113V21.0444C23.3113%2020.8912%2023.2509%2020.7442%2023.1435%2020.6359C23.0361%2020.5275%2022.8904%2020.4667%2022.7385%2020.4667C22.5866%2020.4667%2022.4409%2020.5275%2022.3334%2020.6359C22.226%2020.7442%2022.1657%2020.8912%2022.1657%2021.0444V21.6222H21.5928C21.4409%2021.6222%2021.2952%2021.6831%2021.1878%2021.7914C21.0804%2021.8998%2021.02%2022.0467%2021.02%2022.2C21.02%2022.3532%2021.0804%2022.5002%2021.1878%2022.6085C21.2952%2022.7169%2021.4409%2022.7778%2021.5928%2022.7778H22.1657V23.3555C22.1657%2023.5088%2022.226%2023.6557%2022.3334%2023.7641C22.4409%2023.8724%2022.5866%2023.9333%2022.7385%2023.9333C22.8904%2023.9333%2023.0361%2023.8724%2023.1435%2023.7641C23.2509%2023.6557%2023.3113%2023.5088%2023.3113%2023.3555V22.7778H23.8841C24.036%2022.7778%2024.1817%2022.7169%2024.2892%2022.6085C24.3966%2022.5002%2024.4569%2022.3532%2024.4569%2022.2C24.4569%2022.0467%2024.3966%2021.8998%2024.2892%2021.7914C24.1817%2021.6831%2024.036%2021.6222%2023.8841%2021.6222ZM26.4124%2013.5333L16.4375%2023.5946C16.2226%2023.8111%2015.9313%2023.9328%2015.6276%2023.9328C15.3239%2023.9328%2015.0326%2023.8111%2014.8178%2023.5946L13.3356%2022.101C13.2292%2021.9937%2013.1448%2021.8663%2013.0872%2021.7261C13.0296%2021.5859%2013%2021.4356%2013%2021.2838C13%2021.1321%2013.0296%2020.9818%2013.0872%2020.8416C13.1448%2020.7014%2013.2292%2020.574%2013.3356%2020.4667L23.3113%2010.4054C23.4177%2010.298%2023.544%2010.2129%2023.683%2010.1548C23.822%2010.0967%2023.971%2010.0668%2024.1215%2010.0668C24.2719%2010.0668%2024.4209%2010.0967%2024.5599%2010.1548C24.699%2010.2129%2024.8253%2010.298%2024.9317%2010.4054L26.4124%2011.8989C26.5188%2012.0062%2026.6032%2012.1336%2026.6608%2012.2738C26.7184%2012.4141%2026.748%2012.5644%2026.748%2012.7161C26.748%2012.8679%2026.7184%2013.0182%2026.6608%2013.1584C26.6032%2013.2986%2026.5188%2013.426%2026.4124%2013.5333ZM25.6026%2012.7165L24.1211%2011.2222L21.8298%2013.5333L23.3113%2015.0276L25.6026%2012.7165Z'%20fill='%232563EB'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_dd_3_37'%20x='0'%20y='0'%20width='42'%20height='42'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeMorphology%20radius='1'%20operator='erode'%20in='SourceAlpha'%20result='effect1_dropShadow_3_37'/%3e%3cfeOffset%20dy='4'/%3e%3cfeGaussianBlur%20stdDeviation='3'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_3_37'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeMorphology%20radius='2'%20operator='erode'%20in='SourceAlpha'%20result='effect2_dropShadow_3_37'/%3e%3cfeOffset%20dy='2'/%3e%3cfeGaussianBlur%20stdDeviation='2'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.1%200'/%3e%3cfeBlend%20mode='normal'%20in2='effect1_dropShadow_3_37'%20result='effect2_dropShadow_3_37'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect2_dropShadow_3_37'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
  const insertIcon = "data:image/svg+xml,%3csvg%20width='15'%20height='17'%20viewBox='0%200%2015%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.1%2012.3666V1.43331C6.1%201.05553%206.228%200.739087%206.484%200.483976C6.74%200.228865%207.05644%200.100864%207.43333%200.0999756C7.81111%200.0999756%208.128%200.227976%208.384%200.483976C8.64%200.739976%208.76756%201.05642%208.76667%201.43331V12.3666L12.6333%208.49998C12.8778%208.25553%2013.1889%208.13331%2013.5667%208.13331C13.9444%208.13331%2014.2556%208.25553%2014.5%208.49998C14.7444%208.74442%2014.8667%209.05553%2014.8667%209.43331C14.8667%209.81109%2014.7444%2010.1222%2014.5%2010.3666L8.36667%2016.5C8.1%2016.7666%207.78889%2016.9%207.43333%2016.9C7.07778%2016.9%206.76667%2016.7666%206.5%2016.5L0.366666%2010.3666C0.122222%2010.1222%200%209.81109%200%209.43331C0%209.05553%200.122222%208.74442%200.366666%208.49998C0.611111%208.25553%200.922222%208.13331%201.3%208.13331C1.67778%208.13331%201.98889%208.25553%202.23333%208.49998L6.1%2012.3666Z'%20fill='%23666D80'/%3e%3c/svg%3e";
  const generateIcon = "data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.456%2011.6075L2.45599%200.607504C2.28356%200.521271%202.08988%200.486719%201.89827%200.508009C1.70665%200.529299%201.52528%200.605523%201.37599%200.727504C1.23341%200.846997%201.12699%201.00389%201.0687%201.18055C1.0104%201.35721%201.00254%201.54662%201.04599%201.7275L4.00599%2012.4975L1.00599%2023.2375C0.965214%2023.3886%200.960455%2023.5471%200.992092%2023.7003C1.02373%2023.8535%201.09088%2023.9972%201.18815%2024.1198C1.28541%2024.2423%201.41008%2024.3403%201.55212%2024.4059C1.69416%2024.4715%201.84962%2024.5029%202.00599%2024.4975C2.16253%2024.4966%202.31667%2024.4589%202.45599%2024.3875L24.456%2013.3875C24.6198%2013.3036%2024.7573%2013.1761%2024.8532%2013.0191C24.9492%2012.862%2025%2012.6816%2025%2012.4975C25%2012.3135%2024.9492%2012.133%2024.8532%2011.9759C24.7573%2011.8189%2024.6198%2011.6914%2024.456%2011.6075ZM3.55599%2021.6075L5.76599%2013.4975H15.006V11.4975H5.76599L3.55599%203.3875L21.766%2012.4975L3.55599%2021.6075Z'%20fill='white'/%3e%3c/svg%3e";
  const regenerateIcon = "data:image/svg+xml,%3csvg%20width='17'%20height='24'%20viewBox='0%200%2017%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.5%203.24541V0L4.25%204.32724L8.5%208.65459V5.40903C12.006%205.40903%2014.875%208.32995%2014.875%2011.9C14.875%2012.9818%2014.6094%2014.0098%2014.131%2014.929L15.6719%2016.4978C16.5217%2015.1454%2017%2013.5766%2017%2011.9C17%207.14005%2013.1749%203.24541%208.5%203.24541ZM8.5%2018.391C4.9937%2018.391%202.125%2015.4698%202.125%2011.9C2.125%2010.8182%202.39062%209.79046%202.8687%208.87081L1.32812%207.30224C0.478072%208.60041%200%2010.2232%200%2011.9C0%2016.6599%203.82511%2020.5546%208.5%2020.5546V23.8L12.75%2019.4728L8.5%2015.1454V18.391Z'%20fill='white'/%3e%3c/svg%3e";
  const definition = defineContentScript({
    matches: ["*://*.linkedin.com/*"],
    main() {
      const modalHtml = `
      <div id="custom-modal" style="position: fixed; inset: 0; background: rgba(0, 0, 0, 0.5); display: none; justify-content: center; align-items: center; z-index: 4000;">
        <div id="modal-content" style="background: white; border-radius: 8px; width: 100%; max-width: 570px; padding: 20px;">
          <div id="messages" style="margin-top: 10px; max-height: 200px; overflow-y: auto; padding: 10px; display: flex; flex-direction: column;"></div>
          <div style="margin-bottom: 10px;">
            <input id="input-text" type="text" placeholder="Enter your prompt..." style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;"/>
          </div>
          <div style="text-align: right; margin-top: 12px;">
            <button id="insert-btn" style="background: #fff; color: #666D80; padding: 8px 16px; border: 2px solid #666D80; border-radius: 4px; cursor: pointer; display: none; margin-right: 10px;">
              <img src="${insertIcon}" alt="Insert" style="vertical-align: middle; margin-right: 5px; width: 14px; height: 14px;"> 
              <b>Insert</b>
            </button>
            <button id="generate-btn" style="background: #007bff; color: white; padding: 8px 16px; border: 2px solid #007bff; border-radius: 4px; cursor: pointer;">
              <img src="${generateIcon}" alt="Generate" style="vertical-align: middle; margin-right: 5px; width: 14px; height: 14px"> 
              <b>Generate</b>
            </button>
          </div>
        </div>
      </div>
    `;
      document.body.insertAdjacentHTML("beforeend", modalHtml);
      const modal = document.getElementById("custom-modal");
      const generateBtn = document.getElementById("generate-btn");
      const insertBtn = document.getElementById("insert-btn");
      const inputText = document.getElementById("input-text");
      const messagesDiv = document.getElementById("messages");
      let lastGeneratedMessage = "";
      let parentElement = null;
      document.addEventListener("click", (event) => {
        const target = event.target;
        if (target.matches(".msg-form__contenteditable") || target.closest(".msg-form__contenteditable")) {
          parentElement = target.closest(".msg-form__container") || target.closest(".msg-form__contenteditable");
          const contentContainer = parentElement == null ? void 0 : parentElement.closest(
            ".msg-form_msg-content-container"
          );
          if (parentElement && contentContainer) {
            contentContainer.classList.add("msg-form_msg-content-container--is-active");
            parentElement.setAttribute("data-artdeco-is-focused", "true");
          }
          if (parentElement && !parentElement.querySelector(".edit-icon")) {
            parentElement.style.position = "relative";
            const icon = document.createElement("img");
            icon.className = "edit-icon";
            icon.src = logoIcon;
            icon.alt = "Edit";
            icon.style.position = "absolute";
            icon.style.bottom = "5px";
            icon.style.right = "5px";
            icon.style.width = "48px";
            icon.style.height = "48px";
            icon.style.cursor = "pointer";
            icon.style.zIndex = "999";
            parentElement.appendChild(icon);
            icon.addEventListener("click", (e) => {
              e.stopPropagation();
              modal.style.display = "flex";
            });
          }
        }
      });
      const generateMessage = () => {
        const messages = [
          "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
        ];
        return messages[0];
      };
      generateBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const inputValue = inputText.value.trim();
        if (!inputValue) return;
        const userMessageDiv = document.createElement("div");
        userMessageDiv.textContent = inputValue;
        Object.assign(userMessageDiv.style, {
          backgroundColor: "#DFE1E7",
          color: "#666D80",
          borderRadius: "12px",
          padding: "10px",
          marginBottom: "5px",
          textAlign: "right",
          maxWidth: "80%",
          alignSelf: "flex-end",
          marginLeft: "auto"
        });
        messagesDiv.appendChild(userMessageDiv);
        generateBtn.disabled = true;
        generateBtn.textContent = "Loading...";
        generateBtn.style.backgroundColor = "#666D80";
        setTimeout(() => {
          lastGeneratedMessage = generateMessage();
          const generatedMessageDiv = document.createElement("div");
          generatedMessageDiv.textContent = lastGeneratedMessage;
          Object.assign(generatedMessageDiv.style, {
            backgroundColor: "#DBEAFE",
            color: "#666D80",
            borderRadius: "12px",
            padding: "10px",
            marginBottom: "5px",
            textAlign: "left",
            maxWidth: "80%",
            alignSelf: "flex-start",
            marginRight: "auto"
          });
          messagesDiv.appendChild(generatedMessageDiv);
          messagesDiv.scrollTop = messagesDiv.scrollHeight;
          generateBtn.disabled = false;
          generateBtn.style.backgroundColor = "#007bff";
          generateBtn.style.color = "white";
          generateBtn.innerHTML = `<img src="${regenerateIcon}" alt="Regenerate" style="vertical-align: middle; margin-right: 5px; width: 16px; height: 16px"> <b>Regenerate</b>`;
          inputText.value = "";
          insertBtn.style.display = "inline-block";
        }, 500);
      });
      insertBtn.addEventListener("click", () => {
        if (lastGeneratedMessage && parentElement) {
          parentElement.removeAttribute("aria-label");
          const placeholderElement = parentElement.querySelector(".msg-form__placeholder");
          if (placeholderElement) {
            placeholderElement.remove();
          }
          let existingParagraph = parentElement.querySelector("p");
          if (!existingParagraph) {
            existingParagraph = document.createElement("p");
            parentElement.appendChild(existingParagraph);
          }
          existingParagraph.textContent = "";
          existingParagraph.textContent = lastGeneratedMessage;
          const inputEvent = new Event("input", { bubbles: true });
          parentElement.dispatchEvent(inputEvent);
          insertBtn.style.display = "none";
          modal.style.display = "none";
        }
      });
    }
  });
  content;
  const browser = (
    // @ts-expect-error
    ((_b = (_a = globalThis.browser) == null ? void 0 : _a.runtime) == null ? void 0 : _b.id) == null ? globalThis.chrome : (
      // @ts-expect-error
      globalThis.browser
    )
  );
  function print$1(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger$1 = {
    debug: (...args) => print$1(console.debug, ...args),
    log: (...args) => print$1(console.log, ...args),
    warn: (...args) => print$1(console.warn, ...args),
    error: (...args) => print$1(console.error, ...args)
  };
  const __vite_import_meta_env__ = { "BASE_URL": "/", "BROWSER": "chrome", "CHROME": true, "COMMAND": "serve", "DEV": true, "EDGE": false, "ENTRYPOINT": "content", "FIREFOX": false, "MANIFEST_VERSION": 3, "MODE": "development", "OPERA": false, "PROD": false, "SAFARI": false, "SSR": false, "VITE_CJS_IGNORE_WARNING": "true" };
  const _WxtLocationChangeEvent = class _WxtLocationChangeEvent extends Event {
    constructor(newUrl, oldUrl) {
      super(_WxtLocationChangeEvent.EVENT_NAME, {});
      this.newUrl = newUrl;
      this.oldUrl = oldUrl;
    }
  };
  __publicField(_WxtLocationChangeEvent, "EVENT_NAME", getUniqueEventName("wxt:locationchange"));
  let WxtLocationChangeEvent = _WxtLocationChangeEvent;
  function getUniqueEventName(eventName) {
    var _a2;
    const entrypointName = typeof __vite_import_meta_env__ === "undefined" ? "build" : "content";
    return `${(_a2 = browser == null ? void 0 : browser.runtime) == null ? void 0 : _a2.id}:${entrypointName}:${eventName}`;
  }
  function createLocationWatcher(ctx) {
    let interval;
    let oldUrl;
    return {
      /**
       * Ensure the location watcher is actively looking for URL changes. If it's already watching,
       * this is a noop.
       */
      run() {
        if (interval != null) return;
        oldUrl = new URL(location.href);
        interval = ctx.setInterval(() => {
          let newUrl = new URL(location.href);
          if (newUrl.href !== oldUrl.href) {
            window.dispatchEvent(new WxtLocationChangeEvent(newUrl, oldUrl));
            oldUrl = newUrl;
          }
        }, 1e3);
      }
    };
  }
  const _ContentScriptContext = class _ContentScriptContext {
    constructor(contentScriptName, options) {
      __publicField(this, "isTopFrame", window.self === window.top);
      __publicField(this, "abortController");
      __publicField(this, "locationWatcher", createLocationWatcher(this));
      this.contentScriptName = contentScriptName;
      this.options = options;
      this.abortController = new AbortController();
      if (this.isTopFrame) {
        this.listenForNewerScripts({ ignoreFirstEvent: true });
        this.stopOldScripts();
      } else {
        this.listenForNewerScripts();
      }
    }
    get signal() {
      return this.abortController.signal;
    }
    abort(reason) {
      return this.abortController.abort(reason);
    }
    get isInvalid() {
      if (browser.runtime.id == null) {
        this.notifyInvalidated();
      }
      return this.signal.aborted;
    }
    get isValid() {
      return !this.isInvalid;
    }
    /**
     * Add a listener that is called when the content script's context is invalidated.
     *
     * @returns A function to remove the listener.
     *
     * @example
     * browser.runtime.onMessage.addListener(cb);
     * const removeInvalidatedListener = ctx.onInvalidated(() => {
     *   browser.runtime.onMessage.removeListener(cb);
     * })
     * // ...
     * removeInvalidatedListener();
     */
    onInvalidated(cb) {
      this.signal.addEventListener("abort", cb);
      return () => this.signal.removeEventListener("abort", cb);
    }
    /**
     * Return a promise that never resolves. Useful if you have an async function that shouldn't run
     * after the context is expired.
     *
     * @example
     * const getValueFromStorage = async () => {
     *   if (ctx.isInvalid) return ctx.block();
     *
     *   // ...
     * }
     */
    block() {
      return new Promise(() => {
      });
    }
    /**
     * Wrapper around `window.setInterval` that automatically clears the interval when invalidated.
     */
    setInterval(handler, timeout) {
      const id = setInterval(() => {
        if (this.isValid) handler();
      }, timeout);
      this.onInvalidated(() => clearInterval(id));
      return id;
    }
    /**
     * Wrapper around `window.setTimeout` that automatically clears the interval when invalidated.
     */
    setTimeout(handler, timeout) {
      const id = setTimeout(() => {
        if (this.isValid) handler();
      }, timeout);
      this.onInvalidated(() => clearTimeout(id));
      return id;
    }
    /**
     * Wrapper around `window.requestAnimationFrame` that automatically cancels the request when
     * invalidated.
     */
    requestAnimationFrame(callback) {
      const id = requestAnimationFrame((...args) => {
        if (this.isValid) callback(...args);
      });
      this.onInvalidated(() => cancelAnimationFrame(id));
      return id;
    }
    /**
     * Wrapper around `window.requestIdleCallback` that automatically cancels the request when
     * invalidated.
     */
    requestIdleCallback(callback, options) {
      const id = requestIdleCallback((...args) => {
        if (!this.signal.aborted) callback(...args);
      }, options);
      this.onInvalidated(() => cancelIdleCallback(id));
      return id;
    }
    /**
     * Call `target.addEventListener` and remove the event listener when the context is invalidated.
     *
     * Includes additional events useful for content scripts:
     *
     * - `"wxt:locationchange"` - Triggered when HTML5 history mode is used to change URL. Content
     *   scripts are not reloaded when navigating this way, so this can be used to reset the content
     *   script state on URL change, or run custom code.
     *
     * @example
     * ctx.addEventListener(document, "visibilitychange", () => {
     *   // ...
     * });
     * ctx.addEventListener(document, "wxt:locationchange", () => {
     *   // ...
     * });
     */
    addEventListener(target, type, handler, options) {
      var _a2;
      if (type === "wxt:locationchange") {
        if (this.isValid) this.locationWatcher.run();
      }
      (_a2 = target.addEventListener) == null ? void 0 : _a2.call(
        target,
        type.startsWith("wxt:") ? getUniqueEventName(type) : type,
        // @ts-expect-error: Event don't match, but that's OK, EventTarget doesn't allow custom types in the callback
        handler,
        {
          ...options,
          signal: this.signal
        }
      );
    }
    /**
     * @internal
     * Abort the abort controller and execute all `onInvalidated` listeners.
     */
    notifyInvalidated() {
      this.abort("Content script context invalidated");
      logger$1.debug(
        `Content script "${this.contentScriptName}" context invalidated`
      );
    }
    stopOldScripts() {
      window.postMessage(
        {
          type: _ContentScriptContext.SCRIPT_STARTED_MESSAGE_TYPE,
          contentScriptName: this.contentScriptName
        },
        "*"
      );
    }
    listenForNewerScripts(options) {
      let isFirst = true;
      const cb = (event) => {
        var _a2, _b2;
        if (((_a2 = event.data) == null ? void 0 : _a2.type) === _ContentScriptContext.SCRIPT_STARTED_MESSAGE_TYPE && ((_b2 = event.data) == null ? void 0 : _b2.contentScriptName) === this.contentScriptName) {
          const wasFirst = isFirst;
          isFirst = false;
          if (wasFirst && (options == null ? void 0 : options.ignoreFirstEvent)) return;
          this.notifyInvalidated();
        }
      };
      addEventListener("message", cb);
      this.onInvalidated(() => removeEventListener("message", cb));
    }
  };
  __publicField(_ContentScriptContext, "SCRIPT_STARTED_MESSAGE_TYPE", "wxt:content-script-started");
  let ContentScriptContext = _ContentScriptContext;
  function initPlugins() {
  }
  function print(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  const result = (async () => {
    try {
      initPlugins();
      const { main, ...options } = definition;
      const ctx = new ContentScriptContext("content", options);
      return await main(ctx);
    } catch (err) {
      logger.error(
        `The content script "${"content"}" crashed on startup!`,
        err
      );
      throw err;
    }
  })();
  return result;
}();
content;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3NhbmRib3gvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uLy4uL2Fzc2V0cy9pY29uLnN2ZyIsIi4uLy4uLy4uL2Fzc2V0cy9pbnNlcnQuc3ZnIiwiLi4vLi4vLi4vYXNzZXRzL2dlbmVyYXRlLnN2ZyIsIi4uLy4uLy4uL2Fzc2V0cy9yZWdlbmVyYXRlLnN2ZyIsIi4uLy4uLy4uL2VudHJ5cG9pbnRzL2NvbnRlbnQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvYnJvd3Nlci9jaHJvbWUubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3NhbmRib3gvdXRpbHMvbG9nZ2VyLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC9jbGllbnQvY29udGVudC1zY3JpcHRzL2N1c3RvbS1ldmVudHMubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2NsaWVudC9jb250ZW50LXNjcmlwdHMvbG9jYXRpb24td2F0Y2hlci5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvY2xpZW50L2NvbnRlbnQtc2NyaXB0cy9jb250ZW50LXNjcmlwdC1jb250ZXh0Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVmaW5lQ29udGVudFNjcmlwdChkZWZpbml0aW9uKSB7XG4gIHJldHVybiBkZWZpbml0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnJTIwd2lkdGg9JzQyJyUyMGhlaWdodD0nNDInJTIwdmlld0JveD0nMCUyMDAlMjA0MiUyMDQyJyUyMGZpbGw9J25vbmUnJTIweG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY2clMjBmaWx0ZXI9J3VybCglMjNmaWx0ZXIwX2RkXzNfMzcpJyUzZSUzY3JlY3QlMjB4PSc1JyUyMHk9JzEnJTIwd2lkdGg9JzMyJyUyMGhlaWdodD0nMzInJTIwcng9JzE2JyUyMGZpbGw9J3doaXRlJy8lM2UlM2NwYXRoJTIwZD0nTTI4LjQ2NjclMjAxOC43MzMzQzI4LjQ2NjclMjAxOC44ODY2JTIwMjguNDA2MyUyMDE5LjAzMzUlMjAyOC4yOTg5JTIwMTkuMTQxOUMyOC4xOTE1JTIwMTkuMjUwMiUyMDI4LjA0NTglMjAxOS4zMTExJTIwMjcuODkzOCUyMDE5LjMxMTFIMjYuNzQ4MlYyMC40NjY3QzI2Ljc0ODIlMjAyMC42MTk5JTIwMjYuNjg3OSUyMDIwLjc2NjglMjAyNi41ODA0JTIwMjAuODc1MkMyNi40NzMlMjAyMC45ODM2JTIwMjYuMzI3MyUyMDIxLjA0NDQlMjAyNi4xNzU0JTIwMjEuMDQ0NEMyNi4wMjM1JTIwMjEuMDQ0NCUyMDI1Ljg3NzglMjAyMC45ODM2JTIwMjUuNzcwMyUyMDIwLjg3NTJDMjUuNjYyOSUyMDIwLjc2NjglMjAyNS42MDI2JTIwMjAuNjE5OSUyMDI1LjYwMjYlMjAyMC40NjY3VjE5LjMxMTFIMjQuNDU2OUMyNC4zMDUlMjAxOS4zMTExJTIwMjQuMTU5MyUyMDE5LjI1MDIlMjAyNC4wNTE5JTIwMTkuMTQxOUMyMy45NDQ1JTIwMTkuMDMzNSUyMDIzLjg4NDElMjAxOC44ODY2JTIwMjMuODg0MSUyMDE4LjczMzNDMjMuODg0MSUyMDE4LjU4MDElMjAyMy45NDQ1JTIwMTguNDMzMSUyMDI0LjA1MTklMjAxOC4zMjQ4QzI0LjE1OTMlMjAxOC4yMTY0JTIwMjQuMzA1JTIwMTguMTU1NSUyMDI0LjQ1NjklMjAxOC4xNTU1SDI1LjYwMjZWMTdDMjUuNjAyNiUyMDE2Ljg0NjclMjAyNS42NjI5JTIwMTYuNjk5OCUyMDI1Ljc3MDMlMjAxNi41OTE0QzI1Ljg3NzglMjAxNi40ODMxJTIwMjYuMDIzNSUyMDE2LjQyMjIlMjAyNi4xNzU0JTIwMTYuNDIyMkMyNi4zMjczJTIwMTYuNDIyMiUyMDI2LjQ3MyUyMDE2LjQ4MzElMjAyNi41ODA0JTIwMTYuNTkxNEMyNi42ODc5JTIwMTYuNjk5OCUyMDI2Ljc0ODIlMjAxNi44NDY3JTIwMjYuNzQ4MiUyMDE3VjE4LjE1NTVIMjcuODkzOEMyOC4wNDU4JTIwMTguMTU1NSUyMDI4LjE5MTUlMjAxOC4yMTY0JTIwMjguMjk4OSUyMDE4LjMyNDhDMjguNDA2MyUyMDE4LjQzMzElMjAyOC40NjY3JTIwMTguNTgwMSUyMDI4LjQ2NjclMjAxOC43MzMzWk0xNC43MTklMjAxMi45NTU1SDE1Ljg2NDZWMTQuMTExMUMxNS44NjQ2JTIwMTQuMjY0MyUyMDE1LjkyNSUyMDE0LjQxMTMlMjAxNi4wMzI0JTIwMTQuNTE5NkMxNi4xMzk4JTIwMTQuNjI4JTIwMTYuMjg1NSUyMDE0LjY4ODklMjAxNi40Mzc1JTIwMTQuNjg4OUMxNi41ODk0JTIwMTQuNjg4OSUyMDE2LjczNTElMjAxNC42MjglMjAxNi44NDI1JTIwMTQuNTE5NkMxNi45NDk5JTIwMTQuNDExMyUyMDE3LjAxMDMlMjAxNC4yNjQzJTIwMTcuMDEwMyUyMDE0LjExMTFWMTIuOTU1NUgxOC4xNTU5QzE4LjMwNzglMjAxMi45NTU1JTIwMTguNDUzNSUyMDEyLjg5NDclMjAxOC41NjElMjAxMi43ODYzQzE4LjY2ODQlMjAxMi42NzglMjAxOC43Mjg3JTIwMTIuNTMxJTIwMTguNzI4NyUyMDEyLjM3NzhDMTguNzI4NyUyMDEyLjIyNDUlMjAxOC42Njg0JTIwMTIuMDc3NiUyMDE4LjU2MSUyMDExLjk2OTJDMTguNDUzNSUyMDExLjg2MDklMjAxOC4zMDc4JTIwMTEuOCUyMDE4LjE1NTklMjAxMS44SDE3LjAxMDNWMTAuNjQ0NEMxNy4wMTAzJTIwMTAuNDkxMiUyMDE2Ljk0OTklMjAxMC4zNDQyJTIwMTYuODQyNSUyMDEwLjIzNTlDMTYuNzM1MSUyMDEwLjEyNzUlMjAxNi41ODk0JTIwMTAuMDY2NyUyMDE2LjQzNzUlMjAxMC4wNjY3QzE2LjI4NTUlMjAxMC4wNjY3JTIwMTYuMTM5OCUyMDEwLjEyNzUlMjAxNi4wMzI0JTIwMTAuMjM1OUMxNS45MjUlMjAxMC4zNDQyJTIwMTUuODY0NiUyMDEwLjQ5MTIlMjAxNS44NjQ2JTIwMTAuNjQ0NFYxMS44SDE0LjcxOUMxNC41NjcxJTIwMTEuOCUyMDE0LjQyMTQlMjAxMS44NjA5JTIwMTQuMzE0JTIwMTEuOTY5MkMxNC4yMDY1JTIwMTIuMDc3NiUyMDE0LjE0NjIlMjAxMi4yMjQ1JTIwMTQuMTQ2MiUyMDEyLjM3NzhDMTQuMTQ2MiUyMDEyLjUzMSUyMDE0LjIwNjUlMjAxMi42NzglMjAxNC4zMTQlMjAxMi43ODYzQzE0LjQyMTQlMjAxMi44OTQ3JTIwMTQuNTY3MSUyMDEyLjk1NTUlMjAxNC43MTklMjAxMi45NTU1Wk0yMy44ODQxJTIwMjEuNjIyMkgyMy4zMTEzVjIxLjA0NDRDMjMuMzExMyUyMDIwLjg5MTIlMjAyMy4yNTA5JTIwMjAuNzQ0MiUyMDIzLjE0MzUlMjAyMC42MzU5QzIzLjAzNjElMjAyMC41Mjc1JTIwMjIuODkwNCUyMDIwLjQ2NjclMjAyMi43Mzg1JTIwMjAuNDY2N0MyMi41ODY2JTIwMjAuNDY2NyUyMDIyLjQ0MDklMjAyMC41Mjc1JTIwMjIuMzMzNCUyMDIwLjYzNTlDMjIuMjI2JTIwMjAuNzQ0MiUyMDIyLjE2NTclMjAyMC44OTEyJTIwMjIuMTY1NyUyMDIxLjA0NDRWMjEuNjIyMkgyMS41OTI4QzIxLjQ0MDklMjAyMS42MjIyJTIwMjEuMjk1MiUyMDIxLjY4MzElMjAyMS4xODc4JTIwMjEuNzkxNEMyMS4wODA0JTIwMjEuODk5OCUyMDIxLjAyJTIwMjIuMDQ2NyUyMDIxLjAyJTIwMjIuMkMyMS4wMiUyMDIyLjM1MzIlMjAyMS4wODA0JTIwMjIuNTAwMiUyMDIxLjE4NzglMjAyMi42MDg1QzIxLjI5NTIlMjAyMi43MTY5JTIwMjEuNDQwOSUyMDIyLjc3NzglMjAyMS41OTI4JTIwMjIuNzc3OEgyMi4xNjU3VjIzLjM1NTVDMjIuMTY1NyUyMDIzLjUwODglMjAyMi4yMjYlMjAyMy42NTU3JTIwMjIuMzMzNCUyMDIzLjc2NDFDMjIuNDQwOSUyMDIzLjg3MjQlMjAyMi41ODY2JTIwMjMuOTMzMyUyMDIyLjczODUlMjAyMy45MzMzQzIyLjg5MDQlMjAyMy45MzMzJTIwMjMuMDM2MSUyMDIzLjg3MjQlMjAyMy4xNDM1JTIwMjMuNzY0MUMyMy4yNTA5JTIwMjMuNjU1NyUyMDIzLjMxMTMlMjAyMy41MDg4JTIwMjMuMzExMyUyMDIzLjM1NTVWMjIuNzc3OEgyMy44ODQxQzI0LjAzNiUyMDIyLjc3NzglMjAyNC4xODE3JTIwMjIuNzE2OSUyMDI0LjI4OTIlMjAyMi42MDg1QzI0LjM5NjYlMjAyMi41MDAyJTIwMjQuNDU2OSUyMDIyLjM1MzIlMjAyNC40NTY5JTIwMjIuMkMyNC40NTY5JTIwMjIuMDQ2NyUyMDI0LjM5NjYlMjAyMS44OTk4JTIwMjQuMjg5MiUyMDIxLjc5MTRDMjQuMTgxNyUyMDIxLjY4MzElMjAyNC4wMzYlMjAyMS42MjIyJTIwMjMuODg0MSUyMDIxLjYyMjJaTTI2LjQxMjQlMjAxMy41MzMzTDE2LjQzNzUlMjAyMy41OTQ2QzE2LjIyMjYlMjAyMy44MTExJTIwMTUuOTMxMyUyMDIzLjkzMjglMjAxNS42Mjc2JTIwMjMuOTMyOEMxNS4zMjM5JTIwMjMuOTMyOCUyMDE1LjAzMjYlMjAyMy44MTExJTIwMTQuODE3OCUyMDIzLjU5NDZMMTMuMzM1NiUyMDIyLjEwMUMxMy4yMjkyJTIwMjEuOTkzNyUyMDEzLjE0NDglMjAyMS44NjYzJTIwMTMuMDg3MiUyMDIxLjcyNjFDMTMuMDI5NiUyMDIxLjU4NTklMjAxMyUyMDIxLjQzNTYlMjAxMyUyMDIxLjI4MzhDMTMlMjAyMS4xMzIxJTIwMTMuMDI5NiUyMDIwLjk4MTglMjAxMy4wODcyJTIwMjAuODQxNkMxMy4xNDQ4JTIwMjAuNzAxNCUyMDEzLjIyOTIlMjAyMC41NzQlMjAxMy4zMzU2JTIwMjAuNDY2N0wyMy4zMTEzJTIwMTAuNDA1NEMyMy40MTc3JTIwMTAuMjk4JTIwMjMuNTQ0JTIwMTAuMjEyOSUyMDIzLjY4MyUyMDEwLjE1NDhDMjMuODIyJTIwMTAuMDk2NyUyMDIzLjk3MSUyMDEwLjA2NjglMjAyNC4xMjE1JTIwMTAuMDY2OEMyNC4yNzE5JTIwMTAuMDY2OCUyMDI0LjQyMDklMjAxMC4wOTY3JTIwMjQuNTU5OSUyMDEwLjE1NDhDMjQuNjk5JTIwMTAuMjEyOSUyMDI0LjgyNTMlMjAxMC4yOTglMjAyNC45MzE3JTIwMTAuNDA1NEwyNi40MTI0JTIwMTEuODk4OUMyNi41MTg4JTIwMTIuMDA2MiUyMDI2LjYwMzIlMjAxMi4xMzM2JTIwMjYuNjYwOCUyMDEyLjI3MzhDMjYuNzE4NCUyMDEyLjQxNDElMjAyNi43NDglMjAxMi41NjQ0JTIwMjYuNzQ4JTIwMTIuNzE2MUMyNi43NDglMjAxMi44Njc5JTIwMjYuNzE4NCUyMDEzLjAxODIlMjAyNi42NjA4JTIwMTMuMTU4NEMyNi42MDMyJTIwMTMuMjk4NiUyMDI2LjUxODglMjAxMy40MjYlMjAyNi40MTI0JTIwMTMuNTMzM1pNMjUuNjAyNiUyMDEyLjcxNjVMMjQuMTIxMSUyMDExLjIyMjJMMjEuODI5OCUyMDEzLjUzMzNMMjMuMzExMyUyMDE1LjAyNzZMMjUuNjAyNiUyMDEyLjcxNjVaJyUyMGZpbGw9JyUyMzI1NjNFQicvJTNlJTNjL2clM2UlM2NkZWZzJTNlJTNjZmlsdGVyJTIwaWQ9J2ZpbHRlcjBfZGRfM18zNyclMjB4PScwJyUyMHk9JzAnJTIwd2lkdGg9JzQyJyUyMGhlaWdodD0nNDInJTIwZmlsdGVyVW5pdHM9J3VzZXJTcGFjZU9uVXNlJyUyMGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQiclM2UlM2NmZUZsb29kJTIwZmxvb2Qtb3BhY2l0eT0nMCclMjByZXN1bHQ9J0JhY2tncm91bmRJbWFnZUZpeCcvJTNlJTNjZmVDb2xvck1hdHJpeCUyMGluPSdTb3VyY2VBbHBoYSclMjB0eXBlPSdtYXRyaXgnJTIwdmFsdWVzPScwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxMjclMjAwJyUyMHJlc3VsdD0naGFyZEFscGhhJy8lM2UlM2NmZU1vcnBob2xvZ3klMjByYWRpdXM9JzEnJTIwb3BlcmF0b3I9J2Vyb2RlJyUyMGluPSdTb3VyY2VBbHBoYSclMjByZXN1bHQ9J2VmZmVjdDFfZHJvcFNoYWRvd18zXzM3Jy8lM2UlM2NmZU9mZnNldCUyMGR5PSc0Jy8lM2UlM2NmZUdhdXNzaWFuQmx1ciUyMHN0ZERldmlhdGlvbj0nMycvJTNlJTNjZmVDb2xvck1hdHJpeCUyMHR5cGU9J21hdHJpeCclMjB2YWx1ZXM9JzAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAuMSUyMDAnLyUzZSUzY2ZlQmxlbmQlMjBtb2RlPSdub3JtYWwnJTIwaW4yPSdCYWNrZ3JvdW5kSW1hZ2VGaXgnJTIwcmVzdWx0PSdlZmZlY3QxX2Ryb3BTaGFkb3dfM18zNycvJTNlJTNjZmVDb2xvck1hdHJpeCUyMGluPSdTb3VyY2VBbHBoYSclMjB0eXBlPSdtYXRyaXgnJTIwdmFsdWVzPScwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxMjclMjAwJyUyMHJlc3VsdD0naGFyZEFscGhhJy8lM2UlM2NmZU1vcnBob2xvZ3klMjByYWRpdXM9JzInJTIwb3BlcmF0b3I9J2Vyb2RlJyUyMGluPSdTb3VyY2VBbHBoYSclMjByZXN1bHQ9J2VmZmVjdDJfZHJvcFNoYWRvd18zXzM3Jy8lM2UlM2NmZU9mZnNldCUyMGR5PScyJy8lM2UlM2NmZUdhdXNzaWFuQmx1ciUyMHN0ZERldmlhdGlvbj0nMicvJTNlJTNjZmVDb2xvck1hdHJpeCUyMHR5cGU9J21hdHJpeCclMjB2YWx1ZXM9JzAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAuMSUyMDAnLyUzZSUzY2ZlQmxlbmQlMjBtb2RlPSdub3JtYWwnJTIwaW4yPSdlZmZlY3QxX2Ryb3BTaGFkb3dfM18zNyclMjByZXN1bHQ9J2VmZmVjdDJfZHJvcFNoYWRvd18zXzM3Jy8lM2UlM2NmZUJsZW5kJTIwbW9kZT0nbm9ybWFsJyUyMGluPSdTb3VyY2VHcmFwaGljJyUyMGluMj0nZWZmZWN0Ml9kcm9wU2hhZG93XzNfMzcnJTIwcmVzdWx0PSdzaGFwZScvJTNlJTNjL2ZpbHRlciUzZSUzYy9kZWZzJTNlJTNjL3N2ZyUzZVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnJTIwd2lkdGg9JzE1JyUyMGhlaWdodD0nMTcnJTIwdmlld0JveD0nMCUyMDAlMjAxNSUyMDE3JyUyMGZpbGw9J25vbmUnJTIweG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGglMjBkPSdNNi4xJTIwMTIuMzY2NlYxLjQzMzMxQzYuMSUyMDEuMDU1NTMlMjA2LjIyOCUyMDAuNzM5MDg3JTIwNi40ODQlMjAwLjQ4Mzk3NkM2Ljc0JTIwMC4yMjg4NjUlMjA3LjA1NjQ0JTIwMC4xMDA4NjQlMjA3LjQzMzMzJTIwMC4wOTk5NzU2QzcuODExMTElMjAwLjA5OTk3NTYlMjA4LjEyOCUyMDAuMjI3OTc2JTIwOC4zODQlMjAwLjQ4Mzk3NkM4LjY0JTIwMC43Mzk5NzYlMjA4Ljc2NzU2JTIwMS4wNTY0MiUyMDguNzY2NjclMjAxLjQzMzMxVjEyLjM2NjZMMTIuNjMzMyUyMDguNDk5OThDMTIuODc3OCUyMDguMjU1NTMlMjAxMy4xODg5JTIwOC4xMzMzMSUyMDEzLjU2NjclMjA4LjEzMzMxQzEzLjk0NDQlMjA4LjEzMzMxJTIwMTQuMjU1NiUyMDguMjU1NTMlMjAxNC41JTIwOC40OTk5OEMxNC43NDQ0JTIwOC43NDQ0MiUyMDE0Ljg2NjclMjA5LjA1NTUzJTIwMTQuODY2NyUyMDkuNDMzMzFDMTQuODY2NyUyMDkuODExMDklMjAxNC43NDQ0JTIwMTAuMTIyMiUyMDE0LjUlMjAxMC4zNjY2TDguMzY2NjclMjAxNi41QzguMSUyMDE2Ljc2NjYlMjA3Ljc4ODg5JTIwMTYuOSUyMDcuNDMzMzMlMjAxNi45QzcuMDc3NzglMjAxNi45JTIwNi43NjY2NyUyMDE2Ljc2NjYlMjA2LjUlMjAxNi41TDAuMzY2NjY2JTIwMTAuMzY2NkMwLjEyMjIyMiUyMDEwLjEyMjIlMjAwJTIwOS44MTEwOSUyMDAlMjA5LjQzMzMxQzAlMjA5LjA1NTUzJTIwMC4xMjIyMjIlMjA4Ljc0NDQyJTIwMC4zNjY2NjYlMjA4LjQ5OTk4QzAuNjExMTExJTIwOC4yNTU1MyUyMDAuOTIyMjIyJTIwOC4xMzMzMSUyMDEuMyUyMDguMTMzMzFDMS42Nzc3OCUyMDguMTMzMzElMjAxLjk4ODg5JTIwOC4yNTU1MyUyMDIuMjMzMzMlMjA4LjQ5OTk4TDYuMSUyMDEyLjM2NjZaJyUyMGZpbGw9JyUyMzY2NkQ4MCcvJTNlJTNjL3N2ZyUzZVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnJTIwd2lkdGg9JzI1JyUyMGhlaWdodD0nMjUnJTIwdmlld0JveD0nMCUyMDAlMjAyNSUyMDI1JyUyMGZpbGw9J25vbmUnJTIweG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGglMjBkPSdNMjQuNDU2JTIwMTEuNjA3NUwyLjQ1NTk5JTIwMC42MDc1MDRDMi4yODM1NiUyMDAuNTIxMjcxJTIwMi4wODk4OCUyMDAuNDg2NzE5JTIwMS44OTgyNyUyMDAuNTA4MDA5QzEuNzA2NjUlMjAwLjUyOTI5OSUyMDEuNTI1MjglMjAwLjYwNTUyMyUyMDEuMzc1OTklMjAwLjcyNzUwNEMxLjIzMzQxJTIwMC44NDY5OTclMjAxLjEyNjk5JTIwMS4wMDM4OSUyMDEuMDY4NyUyMDEuMTgwNTVDMS4wMTA0JTIwMS4zNTcyMSUyMDEuMDAyNTQlMjAxLjU0NjYyJTIwMS4wNDU5OSUyMDEuNzI3NUw0LjAwNTk5JTIwMTIuNDk3NUwxLjAwNTk5JTIwMjMuMjM3NUMwLjk2NTIxNCUyMDIzLjM4ODYlMjAwLjk2MDQ1NSUyMDIzLjU0NzElMjAwLjk5MjA5MiUyMDIzLjcwMDNDMS4wMjM3MyUyMDIzLjg1MzUlMjAxLjA5MDg4JTIwMjMuOTk3MiUyMDEuMTg4MTUlMjAyNC4xMTk4QzEuMjg1NDElMjAyNC4yNDIzJTIwMS40MTAwOCUyMDI0LjM0MDMlMjAxLjU1MjEyJTIwMjQuNDA1OUMxLjY5NDE2JTIwMjQuNDcxNSUyMDEuODQ5NjIlMjAyNC41MDI5JTIwMi4wMDU5OSUyMDI0LjQ5NzVDMi4xNjI1MyUyMDI0LjQ5NjYlMjAyLjMxNjY3JTIwMjQuNDU4OSUyMDIuNDU1OTklMjAyNC4zODc1TDI0LjQ1NiUyMDEzLjM4NzVDMjQuNjE5OCUyMDEzLjMwMzYlMjAyNC43NTczJTIwMTMuMTc2MSUyMDI0Ljg1MzIlMjAxMy4wMTkxQzI0Ljk0OTIlMjAxMi44NjIlMjAyNSUyMDEyLjY4MTYlMjAyNSUyMDEyLjQ5NzVDMjUlMjAxMi4zMTM1JTIwMjQuOTQ5MiUyMDEyLjEzMyUyMDI0Ljg1MzIlMjAxMS45NzU5QzI0Ljc1NzMlMjAxMS44MTg5JTIwMjQuNjE5OCUyMDExLjY5MTQlMjAyNC40NTYlMjAxMS42MDc1Wk0zLjU1NTk5JTIwMjEuNjA3NUw1Ljc2NTk5JTIwMTMuNDk3NUgxNS4wMDZWMTEuNDk3NUg1Ljc2NTk5TDMuNTU1OTklMjAzLjM4NzVMMjEuNzY2JTIwMTIuNDk3NUwzLjU1NTk5JTIwMjEuNjA3NVonJTIwZmlsbD0nd2hpdGUnLyUzZSUzYy9zdmclM2VcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyUyMHdpZHRoPScxNyclMjBoZWlnaHQ9JzI0JyUyMHZpZXdCb3g9JzAlMjAwJTIwMTclMjAyNCclMjBmaWxsPSdub25lJyUyMHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoJTIwZD0nTTguNSUyMDMuMjQ1NDFWMEw0LjI1JTIwNC4zMjcyNEw4LjUlMjA4LjY1NDU5VjUuNDA5MDNDMTIuMDA2JTIwNS40MDkwMyUyMDE0Ljg3NSUyMDguMzI5OTUlMjAxNC44NzUlMjAxMS45QzE0Ljg3NSUyMDEyLjk4MTglMjAxNC42MDk0JTIwMTQuMDA5OCUyMDE0LjEzMSUyMDE0LjkyOUwxNS42NzE5JTIwMTYuNDk3OEMxNi41MjE3JTIwMTUuMTQ1NCUyMDE3JTIwMTMuNTc2NiUyMDE3JTIwMTEuOUMxNyUyMDcuMTQwMDUlMjAxMy4xNzQ5JTIwMy4yNDU0MSUyMDguNSUyMDMuMjQ1NDFaTTguNSUyMDE4LjM5MUM0Ljk5MzclMjAxOC4zOTElMjAyLjEyNSUyMDE1LjQ2OTglMjAyLjEyNSUyMDExLjlDMi4xMjUlMjAxMC44MTgyJTIwMi4zOTA2MiUyMDkuNzkwNDYlMjAyLjg2ODclMjA4Ljg3MDgxTDEuMzI4MTIlMjA3LjMwMjI0QzAuNDc4MDcyJTIwOC42MDA0MSUyMDAlMjAxMC4yMjMyJTIwMCUyMDExLjlDMCUyMDE2LjY1OTklMjAzLjgyNTExJTIwMjAuNTU0NiUyMDguNSUyMDIwLjU1NDZWMjMuOEwxMi43NSUyMDE5LjQ3MjhMOC41JTIwMTUuMTQ1NFYxOC4zOTFaJyUyMGZpbGw9J3doaXRlJy8lM2UlM2Mvc3ZnJTNlXCIiLCJpbXBvcnQgbG9nb0ljb24gZnJvbSBcIn4vYXNzZXRzL2ljb24uc3ZnXCI7XG5pbXBvcnQgaW5zZXJ0SWNvbiBmcm9tIFwifi9hc3NldHMvaW5zZXJ0LnN2Z1wiO1xuaW1wb3J0IGdlbmVyYXRlSWNvbiBmcm9tIFwifi9hc3NldHMvZ2VuZXJhdGUuc3ZnXCI7XG5pbXBvcnQgcmVnZW5lcmF0ZUljb24gZnJvbSBcIn4vYXNzZXRzL3JlZ2VuZXJhdGUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbnRlbnRTY3JpcHQoe1xuICBtYXRjaGVzOiBbXCIqOi8vKi5saW5rZWRpbi5jb20vKlwiXSxcbiAgbWFpbigpIHtcbiAgICAvLyBIVE1MIHRlbXBsYXRlIGZvciB0aGUgY3VzdG9tIG1vZGFsIHRoYXQgd2lsbCBiZSBpbmplY3RlZCBpbnRvIHRoZSBwYWdlXG4gICAgY29uc3QgbW9kYWxIdG1sID0gYFxuICAgICAgPGRpdiBpZD1cImN1c3RvbS1tb2RhbFwiIHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpOyBkaXNwbGF5OiBub25lOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgei1pbmRleDogNDAwMDtcIj5cbiAgICAgICAgPGRpdiBpZD1cIm1vZGFsLWNvbnRlbnRcIiBzdHlsZT1cImJhY2tncm91bmQ6IHdoaXRlOyBib3JkZXItcmFkaXVzOiA4cHg7IHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDU3MHB4OyBwYWRkaW5nOiAyMHB4O1wiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlc1wiIHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDsgbWF4LWhlaWdodDogMjAwcHg7IG92ZXJmbG93LXk6IGF1dG87IHBhZGRpbmc6IDEwcHg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHg7XCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJpbnB1dC10ZXh0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcHJvbXB0Li4uXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTsgcGFkZGluZzogOHB4OyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBib3JkZXItcmFkaXVzOiA0cHg7XCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodDsgbWFyZ2luLXRvcDogMTJweDtcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJpbnNlcnQtYnRuXCIgc3R5bGU9XCJiYWNrZ3JvdW5kOiAjZmZmOyBjb2xvcjogIzY2NkQ4MDsgcGFkZGluZzogOHB4IDE2cHg7IGJvcmRlcjogMnB4IHNvbGlkICM2NjZEODA7IGJvcmRlci1yYWRpdXM6IDRweDsgY3Vyc29yOiBwb2ludGVyOyBkaXNwbGF5OiBub25lOyBtYXJnaW4tcmlnaHQ6IDEwcHg7XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbnNlcnRJY29ufVwiIGFsdD1cIkluc2VydFwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTsgbWFyZ2luLXJpZ2h0OiA1cHg7IHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7XCI+IFxuICAgICAgICAgICAgICA8Yj5JbnNlcnQ8L2I+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJnZW5lcmF0ZS1idG5cIiBzdHlsZT1cImJhY2tncm91bmQ6ICMwMDdiZmY7IGNvbG9yOiB3aGl0ZTsgcGFkZGluZzogOHB4IDE2cHg7IGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7IGJvcmRlci1yYWRpdXM6IDRweDsgY3Vyc29yOiBwb2ludGVyO1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Z2VuZXJhdGVJY29ufVwiIGFsdD1cIkdlbmVyYXRlXCIgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyBtYXJnaW4tcmlnaHQ6IDVweDsgd2lkdGg6IDE0cHg7IGhlaWdodDogMTRweFwiPiBcbiAgICAgICAgICAgICAgPGI+R2VuZXJhdGU8L2I+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBtb2RhbCB0byB0aGUgZW5kIG9mIHRoZSBkb2N1bWVudCBib2R5XG4gICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgbW9kYWxIdG1sKTtcblxuICAgIC8vIENhY2hlIG1vZGFsIGVsZW1lbnRzIGZvciBsYXRlciB1c2VcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VzdG9tLW1vZGFsXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IGdlbmVyYXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnZW5lcmF0ZS1idG5cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgY29uc3QgaW5zZXJ0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnNlcnQtYnRuXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IGlucHV0VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGV4dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IG1lc3NhZ2VzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlc1wiKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIC8vIFN0b3JlIHRoZSBsYXN0IGdlbmVyYXRlZCBtZXNzYWdlIGFuZCByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBlbGVtZW50XG4gICAgbGV0IGxhc3RHZW5lcmF0ZWRNZXNzYWdlID0gXCJcIjtcbiAgICBsZXQgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRldGVjdCBjbGlja3Mgb24gTGlua2VkSW4gbWVzc2FnZSBpbnB1dCBhcmVhc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgaWYgKFxuICAgICAgICB0YXJnZXQubWF0Y2hlcyhcIi5tc2ctZm9ybV9fY29udGVudGVkaXRhYmxlXCIpIHx8XG4gICAgICAgIHRhcmdldC5jbG9zZXN0KFwiLm1zZy1mb3JtX19jb250ZW50ZWRpdGFibGVcIilcbiAgICAgICkge1xuICAgICAgICBwYXJlbnRFbGVtZW50ID1cbiAgICAgICAgICB0YXJnZXQuY2xvc2VzdChcIi5tc2ctZm9ybV9fY29udGFpbmVyXCIpIHx8XG4gICAgICAgICAgdGFyZ2V0LmNsb3Nlc3QoXCIubXNnLWZvcm1fX2NvbnRlbnRlZGl0YWJsZVwiKTtcblxuICAgICAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gcGFyZW50RWxlbWVudD8uY2xvc2VzdChcbiAgICAgICAgICBcIi5tc2ctZm9ybV9tc2ctY29udGVudC1jb250YWluZXJcIlxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmIGNvbnRlbnRDb250YWluZXIpIHtcbiAgICAgICAgICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtc2ctZm9ybV9tc2ctY29udGVudC1jb250YWluZXItLWlzLWFjdGl2ZVwiKTtcbiAgICAgICAgICBwYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtYXJ0ZGVjby1pcy1mb2N1c2VkXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50ICYmICFwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1pY29uXCIpKSB7XG4gICAgICAgICAgcGFyZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblxuICAgICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgIGljb24uY2xhc3NOYW1lID0gXCJlZGl0LWljb25cIjtcbiAgICAgICAgICBpY29uLnNyYyA9IGxvZ29JY29uO1xuICAgICAgICAgIGljb24uYWx0ID0gXCJFZGl0XCI7XG4gICAgICAgICAgaWNvbi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgICAgICBpY29uLnN0eWxlLmJvdHRvbSA9IFwiNXB4XCI7XG4gICAgICAgICAgaWNvbi5zdHlsZS5yaWdodCA9IFwiNXB4XCI7XG4gICAgICAgICAgaWNvbi5zdHlsZS53aWR0aCA9IFwiNDhweFwiO1xuICAgICAgICAgIGljb24uc3R5bGUuaGVpZ2h0ID0gXCI0OHB4XCI7XG4gICAgICAgICAgaWNvbi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICAgICAgICBpY29uLnN0eWxlLnpJbmRleCA9IFwiOTk5XCI7XG4gICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBGdW5jdGlvbiB0byBnZW5lcmF0ZSBhIGRlZmF1bHQgbWVzc2FnZVxuICAgIGNvbnN0IGdlbmVyYXRlTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICBcIlRoYW5rIHlvdSBmb3IgdGhlIG9wcG9ydHVuaXR5ISBJZiB5b3UgaGF2ZSBhbnkgbW9yZSBxdWVzdGlvbnMgb3IgaWYgdGhlcmUncyBhbnl0aGluZyBlbHNlIEkgY2FuIGhlbHAgeW91IHdpdGgsIGZlZWwgZnJlZSB0byBhc2suXCIsXG4gICAgICBdO1xuICAgICAgcmV0dXJuIG1lc3NhZ2VzWzBdO1xuICAgIH07XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgdGhlICdHZW5lcmF0ZScgYnV0dG9uXG4gICAgZ2VuZXJhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXRUZXh0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCB1c2VyTWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB1c2VyTWVzc2FnZURpdi50ZXh0Q29udGVudCA9IGlucHV0VmFsdWU7XG4gICAgICBPYmplY3QuYXNzaWduKHVzZXJNZXNzYWdlRGl2LnN0eWxlLCB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjREZFMUU3XCIsXG4gICAgICAgIGNvbG9yOiBcIiM2NjZEODBcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEycHhcIixcbiAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCI1cHhcIixcbiAgICAgICAgdGV4dEFsaWduOiBcInJpZ2h0XCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjgwJVwiLFxuICAgICAgICBhbGlnblNlbGY6IFwiZmxleC1lbmRcIixcbiAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgICB9KTtcbiAgICAgIG1lc3NhZ2VzRGl2LmFwcGVuZENoaWxkKHVzZXJNZXNzYWdlRGl2KTtcblxuICAgICAgZ2VuZXJhdGVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgZ2VuZXJhdGVCdG4udGV4dENvbnRlbnQgPSBcIkxvYWRpbmcuLi5cIjtcbiAgICAgIGdlbmVyYXRlQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzY2NkQ4MFwiO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGFzdEdlbmVyYXRlZE1lc3NhZ2UgPSBnZW5lcmF0ZU1lc3NhZ2UoKTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkTWVzc2FnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdlbmVyYXRlZE1lc3NhZ2VEaXYudGV4dENvbnRlbnQgPSBsYXN0R2VuZXJhdGVkTWVzc2FnZTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihnZW5lcmF0ZWRNZXNzYWdlRGl2LnN0eWxlLCB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNEQkVBRkVcIixcbiAgICAgICAgICBjb2xvcjogXCIjNjY2RDgwXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEycHhcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNXB4XCIsXG4gICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICBtYXhXaWR0aDogXCI4MCVcIixcbiAgICAgICAgICBhbGlnblNlbGY6IFwiZmxleC1zdGFydFwiLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVzc2FnZXNEaXYuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVkTWVzc2FnZURpdik7XG4gICAgICAgIG1lc3NhZ2VzRGl2LnNjcm9sbFRvcCA9IG1lc3NhZ2VzRGl2LnNjcm9sbEhlaWdodDtcblxuICAgICAgICBnZW5lcmF0ZUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBnZW5lcmF0ZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDdiZmZcIjtcbiAgICAgICAgZ2VuZXJhdGVCdG4uc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgIGdlbmVyYXRlQnRuLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7cmVnZW5lcmF0ZUljb259XCIgYWx0PVwiUmVnZW5lcmF0ZVwiIHN0eWxlPVwidmVydGljYWwtYWxpZ246IG1pZGRsZTsgbWFyZ2luLXJpZ2h0OiA1cHg7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHhcIj4gPGI+UmVnZW5lcmF0ZTwvYj5gO1xuXG4gICAgICAgIGlucHV0VGV4dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGluc2VydEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgIH0sIDUwMCk7XG4gICAgfSk7XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgdGhlICdJbnNlcnQnIGJ1dHRvblxuICAgIGluc2VydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGxhc3RHZW5lcmF0ZWRNZXNzYWdlICYmIHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpO1xuXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tc2ctZm9ybV9fcGxhY2Vob2xkZXJcIik7XG4gICAgICAgIGlmIChwbGFjZWhvbGRlckVsZW1lbnQpIHtcbiAgICAgICAgICBwbGFjZWhvbGRlckVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZXhpc3RpbmdQYXJhZ3JhcGggPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuICAgICAgICBpZiAoIWV4aXN0aW5nUGFyYWdyYXBoKSB7XG4gICAgICAgICAgZXhpc3RpbmdQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGV4aXN0aW5nUGFyYWdyYXBoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV4aXN0aW5nUGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZXhpc3RpbmdQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBsYXN0R2VuZXJhdGVkTWVzc2FnZTtcblxuICAgICAgICBjb25zdCBpbnB1dEV2ZW50ID0gbmV3IEV2ZW50KFwiaW5wdXRcIiwgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICBwYXJlbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQoaW5wdXRFdmVudCk7XG5cbiAgICAgICAgaW5zZXJ0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxufSk7XG4iLCJleHBvcnQgY29uc3QgYnJvd3NlciA9IChcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBnbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWU/LmlkID09IG51bGwgPyBnbG9iYWxUaGlzLmNocm9tZSA6IChcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgZ2xvYmFsVGhpcy5icm93c2VyXG4gIClcbik7XG4iLCJmdW5jdGlvbiBwcmludChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgaWYgKGltcG9ydC5tZXRhLmVudi5NT0RFID09PSBcInByb2R1Y3Rpb25cIikgcmV0dXJuO1xuICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYXJncy5zaGlmdCgpO1xuICAgIG1ldGhvZChgW3d4dF0gJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIG1ldGhvZChcIlt3eHRdXCIsIC4uLmFyZ3MpO1xuICB9XG59XG5leHBvcnQgY29uc3QgbG9nZ2VyID0ge1xuICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUuZGVidWcsIC4uLmFyZ3MpLFxuICBsb2c6ICguLi5hcmdzKSA9PiBwcmludChjb25zb2xlLmxvZywgLi4uYXJncyksXG4gIHdhcm46ICguLi5hcmdzKSA9PiBwcmludChjb25zb2xlLndhcm4sIC4uLmFyZ3MpLFxuICBlcnJvcjogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUuZXJyb3IsIC4uLmFyZ3MpXG59O1xuIiwiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gXCJ3eHQvYnJvd3NlclwiO1xuZXhwb3J0IGNsYXNzIFd4dExvY2F0aW9uQ2hhbmdlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKG5ld1VybCwgb2xkVXJsKSB7XG4gICAgc3VwZXIoV3h0TG9jYXRpb25DaGFuZ2VFdmVudC5FVkVOVF9OQU1FLCB7fSk7XG4gICAgdGhpcy5uZXdVcmwgPSBuZXdVcmw7XG4gICAgdGhpcy5vbGRVcmwgPSBvbGRVcmw7XG4gIH1cbiAgc3RhdGljIEVWRU5UX05BTUUgPSBnZXRVbmlxdWVFdmVudE5hbWUoXCJ3eHQ6bG9jYXRpb25jaGFuZ2VcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlRXZlbnROYW1lKGV2ZW50TmFtZSkge1xuICBjb25zdCBlbnRyeXBvaW50TmFtZSA9IHR5cGVvZiBpbXBvcnQubWV0YS5lbnYgPT09IFwidW5kZWZpbmVkXCIgPyBcImJ1aWxkXCIgOiBpbXBvcnQubWV0YS5lbnYuRU5UUllQT0lOVDtcbiAgcmV0dXJuIGAke2Jyb3dzZXI/LnJ1bnRpbWU/LmlkfToke2VudHJ5cG9pbnROYW1lfToke2V2ZW50TmFtZX1gO1xufVxuIiwiaW1wb3J0IHsgV3h0TG9jYXRpb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuL2N1c3RvbS1ldmVudHMubWpzXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25XYXRjaGVyKGN0eCkge1xuICBsZXQgaW50ZXJ2YWw7XG4gIGxldCBvbGRVcmw7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogRW5zdXJlIHRoZSBsb2NhdGlvbiB3YXRjaGVyIGlzIGFjdGl2ZWx5IGxvb2tpbmcgZm9yIFVSTCBjaGFuZ2VzLiBJZiBpdCdzIGFscmVhZHkgd2F0Y2hpbmcsXG4gICAgICogdGhpcyBpcyBhIG5vb3AuXG4gICAgICovXG4gICAgcnVuKCkge1xuICAgICAgaWYgKGludGVydmFsICE9IG51bGwpIHJldHVybjtcbiAgICAgIG9sZFVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICBpbnRlcnZhbCA9IGN0eC5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGxldCBuZXdVcmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAobmV3VXJsLmhyZWYgIT09IG9sZFVybC5ocmVmKSB7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFd4dExvY2F0aW9uQ2hhbmdlRXZlbnQobmV3VXJsLCBvbGRVcmwpKTtcbiAgICAgICAgICBvbGRVcmwgPSBuZXdVcmw7XG4gICAgICAgIH1cbiAgICAgIH0sIDFlMyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gXCJ3eHQvYnJvd3NlclwiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3NhbmRib3gvdXRpbHMvbG9nZ2VyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0VW5pcXVlRXZlbnROYW1lIH0gZnJvbSBcIi4vY3VzdG9tLWV2ZW50cy5tanNcIjtcbmltcG9ydCB7IGNyZWF0ZUxvY2F0aW9uV2F0Y2hlciB9IGZyb20gXCIuL2xvY2F0aW9uLXdhdGNoZXIubWpzXCI7XG5leHBvcnQgY2xhc3MgQ29udGVudFNjcmlwdENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50U2NyaXB0TmFtZSwgb3B0aW9ucykge1xuICAgIHRoaXMuY29udGVudFNjcmlwdE5hbWUgPSBjb250ZW50U2NyaXB0TmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGlmICh0aGlzLmlzVG9wRnJhbWUpIHtcbiAgICAgIHRoaXMubGlzdGVuRm9yTmV3ZXJTY3JpcHRzKHsgaWdub3JlRmlyc3RFdmVudDogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuc3RvcE9sZFNjcmlwdHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saXN0ZW5Gb3JOZXdlclNjcmlwdHMoKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIFNDUklQVF9TVEFSVEVEX01FU1NBR0VfVFlQRSA9IFwid3h0OmNvbnRlbnQtc2NyaXB0LXN0YXJ0ZWRcIjtcbiAgaXNUb3BGcmFtZSA9IHdpbmRvdy5zZWxmID09PSB3aW5kb3cudG9wO1xuICBhYm9ydENvbnRyb2xsZXI7XG4gIGxvY2F0aW9uV2F0Y2hlciA9IGNyZWF0ZUxvY2F0aW9uV2F0Y2hlcih0aGlzKTtcbiAgZ2V0IHNpZ25hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5hYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuICB9XG4gIGFib3J0KHJlYXNvbikge1xuICAgIHJldHVybiB0aGlzLmFib3J0Q29udHJvbGxlci5hYm9ydChyZWFzb24pO1xuICB9XG4gIGdldCBpc0ludmFsaWQoKSB7XG4gICAgaWYgKGJyb3dzZXIucnVudGltZS5pZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vdGlmeUludmFsaWRhdGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNpZ25hbC5hYm9ydGVkO1xuICB9XG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0ludmFsaWQ7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbnRlbnQgc2NyaXB0J3MgY29udGV4dCBpcyBpbnZhbGlkYXRlZC5cbiAgICpcbiAgICogQHJldHVybnMgQSBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGNiKTtcbiAgICogY29uc3QgcmVtb3ZlSW52YWxpZGF0ZWRMaXN0ZW5lciA9IGN0eC5vbkludmFsaWRhdGVkKCgpID0+IHtcbiAgICogICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGNiKTtcbiAgICogfSlcbiAgICogLy8gLi4uXG4gICAqIHJlbW92ZUludmFsaWRhdGVkTGlzdGVuZXIoKTtcbiAgICovXG4gIG9uSW52YWxpZGF0ZWQoY2IpIHtcbiAgICB0aGlzLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgY2IpO1xuICAgIHJldHVybiAoKSA9PiB0aGlzLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgY2IpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgbmV2ZXIgcmVzb2x2ZXMuIFVzZWZ1bCBpZiB5b3UgaGF2ZSBhbiBhc3luYyBmdW5jdGlvbiB0aGF0IHNob3VsZG4ndCBydW5cbiAgICogYWZ0ZXIgdGhlIGNvbnRleHQgaXMgZXhwaXJlZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgZ2V0VmFsdWVGcm9tU3RvcmFnZSA9IGFzeW5jICgpID0+IHtcbiAgICogICBpZiAoY3R4LmlzSW52YWxpZCkgcmV0dXJuIGN0eC5ibG9jaygpO1xuICAgKlxuICAgKiAgIC8vIC4uLlxuICAgKiB9XG4gICAqL1xuICBibG9jaygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnNldEludGVydmFsYCB0aGF0IGF1dG9tYXRpY2FsbHkgY2xlYXJzIHRoZSBpbnRlcnZhbCB3aGVuIGludmFsaWRhdGVkLlxuICAgKi9cbiAgc2V0SW50ZXJ2YWwoaGFuZGxlciwgdGltZW91dCkge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgaGFuZGxlcigpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjbGVhckludGVydmFsKGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnNldFRpbWVvdXRgIHRoYXQgYXV0b21hdGljYWxseSBjbGVhcnMgdGhlIGludGVydmFsIHdoZW4gaW52YWxpZGF0ZWQuXG4gICAqL1xuICBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgaGFuZGxlcigpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjbGVhclRpbWVvdXQoaWQpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lYCB0aGF0IGF1dG9tYXRpY2FsbHkgY2FuY2VscyB0aGUgcmVxdWVzdCB3aGVuXG4gICAqIGludmFsaWRhdGVkLlxuICAgKi9cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgIH0pO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShpZCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgYHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrYCB0aGF0IGF1dG9tYXRpY2FsbHkgY2FuY2VscyB0aGUgcmVxdWVzdCB3aGVuXG4gICAqIGludmFsaWRhdGVkLlxuICAgKi9cbiAgcmVxdWVzdElkbGVDYWxsYmFjayhjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gcmVxdWVzdElkbGVDYWxsYmFjaygoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNpZ25hbC5hYm9ydGVkKSBjYWxsYmFjayguLi5hcmdzKTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsIGB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29udGV4dCBpcyBpbnZhbGlkYXRlZC5cbiAgICpcbiAgICogSW5jbHVkZXMgYWRkaXRpb25hbCBldmVudHMgdXNlZnVsIGZvciBjb250ZW50IHNjcmlwdHM6XG4gICAqXG4gICAqIC0gYFwid3h0OmxvY2F0aW9uY2hhbmdlXCJgIC0gVHJpZ2dlcmVkIHdoZW4gSFRNTDUgaGlzdG9yeSBtb2RlIGlzIHVzZWQgdG8gY2hhbmdlIFVSTC4gQ29udGVudFxuICAgKiAgIHNjcmlwdHMgYXJlIG5vdCByZWxvYWRlZCB3aGVuIG5hdmlnYXRpbmcgdGhpcyB3YXksIHNvIHRoaXMgY2FuIGJlIHVzZWQgdG8gcmVzZXQgdGhlIGNvbnRlbnRcbiAgICogICBzY3JpcHQgc3RhdGUgb24gVVJMIGNoYW5nZSwgb3IgcnVuIGN1c3RvbSBjb2RlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjdHguYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHtcbiAgICogICAvLyAuLi5cbiAgICogfSk7XG4gICAqIGN0eC5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCBcInd4dDpsb2NhdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAqICAgLy8gLi4uXG4gICAqIH0pO1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJ3eHQ6bG9jYXRpb25jaGFuZ2VcIikge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgdGhpcy5sb2NhdGlvbldhdGNoZXIucnVuKCk7XG4gICAgfVxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyPy4oXG4gICAgICB0eXBlLnN0YXJ0c1dpdGgoXCJ3eHQ6XCIpID8gZ2V0VW5pcXVlRXZlbnROYW1lKHR5cGUpIDogdHlwZSxcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IEV2ZW50IGRvbid0IG1hdGNoLCBidXQgdGhhdCdzIE9LLCBFdmVudFRhcmdldCBkb2Vzbid0IGFsbG93IGN1c3RvbSB0eXBlcyBpbiB0aGUgY2FsbGJhY2tcbiAgICAgIGhhbmRsZXIsXG4gICAgICB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIHNpZ25hbDogdGhpcy5zaWduYWxcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQWJvcnQgdGhlIGFib3J0IGNvbnRyb2xsZXIgYW5kIGV4ZWN1dGUgYWxsIGBvbkludmFsaWRhdGVkYCBsaXN0ZW5lcnMuXG4gICAqL1xuICBub3RpZnlJbnZhbGlkYXRlZCgpIHtcbiAgICB0aGlzLmFib3J0KFwiQ29udGVudCBzY3JpcHQgY29udGV4dCBpbnZhbGlkYXRlZFwiKTtcbiAgICBsb2dnZXIuZGVidWcoXG4gICAgICBgQ29udGVudCBzY3JpcHQgXCIke3RoaXMuY29udGVudFNjcmlwdE5hbWV9XCIgY29udGV4dCBpbnZhbGlkYXRlZGBcbiAgICApO1xuICB9XG4gIHN0b3BPbGRTY3JpcHRzKCkge1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgdHlwZTogQ29udGVudFNjcmlwdENvbnRleHQuU0NSSVBUX1NUQVJURURfTUVTU0FHRV9UWVBFLFxuICAgICAgICBjb250ZW50U2NyaXB0TmFtZTogdGhpcy5jb250ZW50U2NyaXB0TmFtZVxuICAgICAgfSxcbiAgICAgIFwiKlwiXG4gICAgKTtcbiAgfVxuICBsaXN0ZW5Gb3JOZXdlclNjcmlwdHMob3B0aW9ucykge1xuICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICBjb25zdCBjYiA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRhdGE/LnR5cGUgPT09IENvbnRlbnRTY3JpcHRDb250ZXh0LlNDUklQVF9TVEFSVEVEX01FU1NBR0VfVFlQRSAmJiBldmVudC5kYXRhPy5jb250ZW50U2NyaXB0TmFtZSA9PT0gdGhpcy5jb250ZW50U2NyaXB0TmFtZSkge1xuICAgICAgICBjb25zdCB3YXNGaXJzdCA9IGlzRmlyc3Q7XG4gICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgaWYgKHdhc0ZpcnN0ICYmIG9wdGlvbnM/Lmlnbm9yZUZpcnN0RXZlbnQpIHJldHVybjtcbiAgICAgICAgdGhpcy5ub3RpZnlJbnZhbGlkYXRlZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgY2IpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiByZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBjYikpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGVmaW5pdGlvbiIsInByaW50IiwibG9nZ2VyIiwiX2EiLCJfYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sV0FBUyxvQkFBb0JBLGFBQVk7QUFDOUMsV0FBT0E7QUFBQSxFQUNUO0FDRmUsUUFBQSxXQUFBO0FDQUEsUUFBQSxhQUFBO0FDQUEsUUFBQSxlQUFBO0FDQUEsUUFBQSxpQkFBQTtBQ0tmLFFBQUEsYUFBZSxvQkFBb0I7QUFBQSxJQUNqQyxTQUFTLENBQUMsc0JBQXNCO0FBQUEsSUFDaEMsT0FBTztBQUVMLFlBQU0sWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFTSSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSVYsWUFBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVN6QixlQUFBLEtBQUssbUJBQW1CLGFBQWEsU0FBUztBQUdqRCxZQUFBLFFBQVEsU0FBUyxlQUFlLGNBQWM7QUFDOUMsWUFBQSxjQUFjLFNBQVMsZUFBZSxjQUFjO0FBQ3BELFlBQUEsWUFBWSxTQUFTLGVBQWUsWUFBWTtBQUNoRCxZQUFBLFlBQVksU0FBUyxlQUFlLFlBQVk7QUFDaEQsWUFBQSxjQUFjLFNBQVMsZUFBZSxVQUFVO0FBR3RELFVBQUksdUJBQXVCO0FBQzNCLFVBQUksZ0JBQW9DO0FBRy9CLGVBQUEsaUJBQWlCLFNBQVMsQ0FBQyxVQUFzQjtBQUN4RCxjQUFNLFNBQVMsTUFBTTtBQUVyQixZQUNFLE9BQU8sUUFBUSw0QkFBNEIsS0FDM0MsT0FBTyxRQUFRLDRCQUE0QixHQUMzQztBQUNBLDBCQUNFLE9BQU8sUUFBUSxzQkFBc0IsS0FDckMs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
