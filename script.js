const defaultArticles = [
  {
    tag: "阶段总结",
    date: "2026-03-12",
    title: "根据最新简历回看，我这阶段的爬虫工作主要在做什么",
    excerpt: "把最近这段时间做过的事情重新梳理后，我发现自己的重心已经不只是“写爬虫”，而是围绕采集链路做完整闭环。",
    content: `
      <p>这次重新整理简历的时候，我自己也回头看了一下最近这段时间到底做了什么。刚开始学爬虫的时候，我关注的更多还是能不能把数据抓下来，但现在慢慢发现，真正的工作内容已经不只是写一个脚本这么简单了。</p>
      <p>现在我做的事情会更完整一些。前面要先看站点结构，判断到底是直接抓页面，还是走接口，还是必须上浏览器渲染。中间要处理请求头、Cookie、代理、重试这些问题，不然任务很容易不稳定。后面还要把数据做清洗、去重、分类，再入库给业务用。</p>
      <p>所以我现在对爬虫的理解也变了，不再只是“把数据抓到”就算结束，而是更看重这一整套流程能不能长期稳定跑下去。</p>
    `
  },
  {
    tag: "项目笔记",
    date: "2026-02-18",
    title: "房产站点采集里，我是怎么区分页面抓取和接口抓取的",
    excerpt: "不是每个站点都适合一套方案，很多时候先判断数据真正来自哪里，比后面写代码更重要。",
    content: `
      <p>做房产站点采集的时候，我现在会先花点时间看清楚数据到底是从哪里出来的，因为这个判断会直接影响后面代码怎么写。以前我有时候会先上手写，写着写着才发现方向不对，最后又得回头改。</p>
      <p>现在我一般会先看页面源码里有没有完整字段，如果有，那直接提取通常是最快的。如果页面上看到的数据其实是接口返回的，那就直接抓接口，效率会高很多。还有一些站点看起来是普通页面，实际上关键数据是动态跑出来的，这种时候再去考虑 Selenium 或者 Playwright。</p>
      <p>对我来说，这一步最重要的不是选哪个框架，而是先把数据来源看明白。这个事情想清楚了，后面很多代码其实就顺了。</p>
    `
  },
  {
    tag: "Playwright",
    date: "2025-12-22",
    title: "什么时候我会从 Selenium 换到 Playwright",
    excerpt: "新简历里补进了 Playwright，这个工具对我来说不是替代一切，而是在特定场景下更顺手。",
    content: `
      <p>我最近开始更多接触 Playwright，最开始也会下意识拿它和 Selenium 比，但后来感觉其实没必要非得分出谁完全替代谁。对我来说，它们更像是两种不同场景下的工具。</p>
      <p>有些页面异步加载比较多，或者浏览器上下文控制得更细一点的时候，我会觉得 Playwright 用起来更顺手，很多等待和操作也更自然一点。但 Selenium 也不是不能用，尤其是以前已经写过一批脚本的时候，继续沿用也很正常。</p>
      <p>所以我现在不会把这个问题想得太绝对，而是看具体站点是什么情况，再决定到底用哪个更省事。</p>
    `
  },
  {
    tag: "反爬处理",
    date: "2025-11-09",
    title: "请求头、Cookie、代理、重试、限速，这些策略在项目里到底怎么配合",
    excerpt: "反爬不是只靠代理池，很多问题是多个细节叠加出来的，排查时也不能只盯一个点。",
    content: `
      <p>我现在越来越觉得，反爬问题很多时候不是某一个点出错，而是一串小问题叠在一起。比如请求头少一点东西、Cookie 过期了、代理不稳定、频率又压得太快，这些单独看都不算特别大，但放在一起就很容易让任务跑崩。</p>
      <p>所以我现在排查这类问题的时候，不太会一上来就盯着代理池或者盯着某个参数看，而是把整条请求流程重新顺一遍。看看请求长什么样，Cookie 是怎么来的，频率是不是太快，失败的时候响应里到底返回了什么。</p>
      <p>对我来说，反爬处理更像是在做稳定性调试，很多时候拼的不是单点技巧，而是能不能把这些细节一起照顾到。</p>
    `
  },
  {
    tag: "数据处理",
    date: "2025-09-28",
    title: "抓到数据只是开始，字段标准化、分类归并和去重更花时间",
    excerpt: "很多人会把重点放在“抓下来”，但在业务里更难的是把数据处理成能直接使用的样子。",
    content: `
      <p>做项目之后我一个很明显的感受就是，抓数据其实只是第一步，后面的清洗和整理反而更花时间。因为原始数据拿回来以后，很多东西都不能直接用。</p>
      <p>比如不同站点同一个字段叫法不一样，有的字段格式乱，有的内容缺失，还有很多重复房源混在一起。如果这些东西不先整理好，后面不管是检索还是业务使用都会很难受。</p>
      <p>所以我现在会更重视数据处理这一段，因为它直接决定最后这批数据到底有没有用，而不是单纯看“抓没抓到”。</p>
    `
  },
  {
    tag: "问题记录",
    date: "2025-08-06",
    title: "接口明明有返回，代码却抓不到时，我会怎么排查",
    excerpt: "这种情况我现在基本都会先回到抓包和请求对比，而不是一上来就怀疑框架或者代码语法。",
    content: `
      <p>这个问题我碰到过很多次，就是浏览器里看接口明明好好的，结果自己代码一发就不对。刚开始遇到这种情况的时候，我也会怀疑是不是代码写错了，或者是不是框架有问题，但后来发现大多数时候不是这样。</p>
      <p>我现在更习惯先回去抓包，然后把浏览器里的正常请求和自己代码里的请求一点点对比。很多时候问题就出在一个小地方，比如请求头少了，Cookie 没带全，参数顺序不对，或者前面还有一步接口没先走。</p>
      <p>这种问题让我慢慢养成了一个习惯，就是先看请求本身到底差在哪里，而不是一出错就先怀疑代码语法。</p>
    `
  }
];

const storageKey = "crawler_blog_custom_articles";
const articleGrid = document.getElementById("article-grid");
const articleCount = document.getElementById("article-count");
const modal = document.getElementById("article-modal");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const toggleNoteFormButton = document.getElementById("toggle-note-form");
const noteEditor = document.getElementById("note-editor");
const noteForm = document.getElementById("note-form");
const noteFormMessage = document.getElementById("note-form-message");
const noteDateInput = document.getElementById("note-date");

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function formatContent(text) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function loadCustomArticles() {
  try {
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCustomArticles(articles) {
  localStorage.setItem(storageKey, JSON.stringify(articles));
}

function getArticles() {
  return [...loadCustomArticles(), ...defaultArticles];
}

function updateArticleCount(count) {
  articleCount.textContent = `共 ${count} 篇`;
}

function renderArticles() {
  const articles = getArticles();
  articleGrid.innerHTML = articles
    .map(
      (article, index) => `
        <article class="article-card" data-index="${index}">
          <div class="article-card-main">
            <div class="article-meta">
              <p class="article-tag">${article.tag}</p>
              <p class="article-date">${article.date}</p>
            </div>
            <h3>${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <button type="button">阅读全文</button>
          </div>
        </article>
      `
    )
    .join("");
  updateArticleCount(articles.length);
}

function openModal(index) {
  const articles = getArticles();
  const article = articles[index];
  if (!article) {
    return;
  }

  modalTag.textContent = article.tag;
  modalTitle.textContent = article.title;
  modalContent.innerHTML = article.content;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function handleNoteSubmit(event) {
  event.preventDefault();
  const formData = new FormData(noteForm);
  const title = String(formData.get("title") || "").trim();
  const tag = String(formData.get("tag") || "").trim();
  const date = String(formData.get("date") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim();
  const contentText = String(formData.get("content") || "").trim();

  if (!title || !tag || !date || !excerpt || !contentText) {
    noteFormMessage.textContent = "请先把内容填写完整。";
    return;
  }

  const customArticles = loadCustomArticles();
  customArticles.unshift({
    tag,
    date,
    title,
    excerpt,
    content: formatContent(contentText)
  });
  saveCustomArticles(customArticles);
  noteForm.reset();
  noteDateInput.value = new Date().toISOString().slice(0, 10);
  noteFormMessage.textContent = "笔记已保存到当前浏览器。";
  renderArticles();
}

function toggleNoteForm() {
  const isHidden = noteEditor.classList.toggle("is-hidden");
  toggleNoteFormButton.textContent = isHidden ? "添加笔记" : "收起表单";
  if (!isHidden) {
    noteFormMessage.textContent = "";
    document.getElementById("note-title").focus();
  }
}

noteDateInput.value = new Date().toISOString().slice(0, 10);
renderArticles();

toggleNoteFormButton.addEventListener("click", toggleNoteForm);
noteForm.addEventListener("submit", handleNoteSubmit);

articleGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".article-card");
  if (!card) {
    return;
  }
  openModal(Number(card.dataset.index));
});

modal.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeModal();
  }
});

modalClose.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});
