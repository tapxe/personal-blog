const defaultArticles = [
  {
    tag: "阶段总结",
    date: "2026-03-12",
    title: "根据最新简历回看，我这阶段的爬虫工作主要在做什么",
    excerpt: "把最近这段时间做过的事情重新梳理后，我发现自己的重心已经不只是“写爬虫”，而是围绕采集链路做完整闭环。",
    content: `
      <p>这次重新整理简历，我把最近这段时间做过的内容又回头梳理了一遍。和刚开始相比，我现在做的事情已经不只是写一个 Spider 把数据抓下来，而是更完整地参与到了采集流程里。</p>
      <ul>
        <li>站点结构分析：先判断目标站是页面提取、接口抓取，还是需要动态渲染。</li>
        <li>采集规则编写：用 Scrapy、Requests 等方式处理列表页、详情页和接口数据。</li>
        <li>反爬处理：围绕请求头、Cookie、代理、重试、限速等策略优化稳定性。</li>
        <li>数据清洗与入库：做字段标准化、地区分类、关键词提取和房源去重。</li>
        <li>工程化保障：通过日志、异常重试和任务监控让线上采集更稳定。</li>
      </ul>
      <p>这也让我意识到，爬虫项目真正有价值的地方，不是临时抓下一批数据，而是能不能长期稳定地支撑业务使用。</p>
    `
  },
  {
    tag: "项目笔记",
    date: "2026-02-18",
    title: "房产站点采集里，我是怎么区分页面抓取和接口抓取的",
    excerpt: "不是每个站点都适合一套方案，很多时候先判断数据真正来自哪里，比后面写代码更重要。",
    content: `
      <p>做房产采集时，我越来越重视前期判断。很多时候代码写得顺不顺，不取决于框架，而取决于前面有没有把站点类型看清楚。</p>
      <ul>
        <li>如果页面源码里就有完整字段，优先考虑 XPath 或 CSS Selector 直接提取。</li>
        <li>如果页面数据是接口返回的 JSON，就尽量走 Requests 抓接口，效率更高。</li>
        <li>如果页面是动态渲染并且数据不容易直接还原，再考虑 Selenium 或 Playwright。</li>
        <li>有些站点表面是页面抓取，实际上关键字段还是来自异步接口，这种情况要先抓包确认。</li>
      </ul>
      <p>我现在更习惯先判断“数据来源”，再决定用什么工具，而不是先把工具定死。</p>
    `
  },
  {
    tag: "Playwright",
    date: "2025-12-22",
    title: "什么时候我会从 Selenium 换到 Playwright",
    excerpt: "新简历里补进了 Playwright，这个工具对我来说不是替代一切，而是在特定场景下更顺手。",
    content: `
      <p>我最近在实际场景里开始更多地接触 Playwright。它给我的感觉不是“完全替代 Selenium”，而是在一些动态渲染和异步等待场景里更顺手。</p>
      <ul>
        <li>如果页面依赖较多异步加载，Playwright 在等待和页面控制上体验更自然。</li>
        <li>如果需要更方便地处理浏览器上下文、请求拦截或脚本执行，Playwright 也更灵活。</li>
        <li>Selenium 依然有它熟悉和稳定的地方，尤其是已有脚本积累较多时。</li>
      </ul>
      <p>我现在的思路是，不把它们看成谁完全替代谁，而是根据站点特点来选择更合适的方案。</p>
    `
  },
  {
    tag: "反爬处理",
    date: "2025-11-09",
    title: "请求头、Cookie、代理、重试、限速，这些策略在项目里到底怎么配合",
    excerpt: "反爬不是只靠代理池，很多问题是多个细节叠加出来的，排查时也不能只盯一个点。",
    content: `
      <p>在实际项目里，反爬处理很少是单点问题。大多数情况下，失败请求背后是多个细节一起出了问题。</p>
      <ul>
        <li>请求头不完整，接口可能直接拒绝或返回空数据。</li>
        <li>Cookie 或 Token 失效，很多时候要先走前置流程重新拿值。</li>
        <li>代理不是越多越好，如果频率和并发没控好，一样会被限。</li>
        <li>没有重试机制时，偶发失败会被放大成采集缺口。</li>
        <li>没有限速时，短时间压太猛，容易把稳定任务跑成不稳定任务。</li>
      </ul>
      <p>所以我现在排查反爬问题时，不会先假设某一个点一定有问题，而是把整个请求流程从头到尾再过一遍。</p>
    `
  },
  {
    tag: "数据处理",
    date: "2025-09-28",
    title: "抓到数据只是开始，字段标准化、分类归并和去重更花时间",
    excerpt: "很多人会把重点放在“抓下来”，但在业务里更难的是把数据处理成能直接使用的样子。",
    content: `
      <p>在房产采集场景里，抓到原始数据只是第一步。真正花时间的部分，往往是在数据落地之前。</p>
      <ul>
        <li>不同站点同一个字段名称不同，要先做字段映射和标准化。</li>
        <li>同一房源可能在不同页面、不同时间重复出现，需要设计去重策略。</li>
        <li>地区分类和关键词提取会直接影响后面的检索和运营使用。</li>
        <li>字段缺失、格式不统一、内容噪声过多，也都要在清洗阶段处理。</li>
      </ul>
      <p>我现在越来越能体会到，数据采集不是“抓完就结束”，而是后处理质量会直接决定它有没有业务价值。</p>
    `
  },
  {
    tag: "问题记录",
    date: "2025-08-06",
    title: "接口明明有返回，代码却抓不到时，我会怎么排查",
    excerpt: "这种情况我现在基本都会先回到抓包和请求对比，而不是一上来就怀疑框架或者代码语法。",
    content: `
      <p>浏览器里看接口一切正常，但代码发过去就是失败，这类问题我遇到过很多次。现在我一般按下面顺序排查：</p>
      <ul>
        <li>先比对请求头，确认 Referer、User-Agent、Authorization 等字段有没有缺。</li>
        <li>再检查 Cookie 是否需要前置访问或额外接口才能拿到。</li>
        <li>再看参数是不是少了时间戳、签名、分页字段，或者顺序不对。</li>
        <li>如果页面有动态逻辑，再判断是不是接口依赖前端渲染或脚本执行。</li>
        <li>最后回头看日志和响应内容，不只看状态码。</li>
      </ul>
      <p>这种问题让我养成了一个习惯，就是先对比“浏览器里的正常请求”和“自己代码里的请求”到底差在哪里，而不是直接怀疑代码写法。</p>
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
