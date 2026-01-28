// ---------- i18n dictionary ----------
    const i18n = {
      en: {
        badge: "Cheat Sheet",
        title: "Git & GitHub Commands",
        subtitle: "Quick, clean reference for daily Git work: setup, branches, remote, stash, tags, logs, cleaning, and more.",
        searchLabel: "Search",
        searchPlaceholder: "Type: stash, branch, tag, remote...",
        compact: "Compact",
        copyAll: "Copy All",
        chipAll: "All",
        chipBasics: "Basics",
        chipConfig: "Config",
        chipSSH: "SSH",
        chipBranches: "Branches",
        chipRemote: "Remote",
        chipStash: "Stash",
        chipUndo: "Undo/Clean",
        chipLogs: "Logs",
        chipTags: "Tags",
        chipAdvanced: "Advanced",
        chipConcepts: "Concepts",
        tipTitle: "What’s the difference?",
        tipGit: "<b>Git</b> is a version control system for tracking changes locally.",
        tipGitHub: "<b>GitHub</b> hosts your Git repositories online for collaboration.",
        tipNote: "Tip: Use SSH for smoother pushes/pulls once your key is set.",
        basicsTitle: "Basics",
        basicsDesc: "Start, clone, check status, stage, commit.",
        cloneTitle: "Clone a repository",
        cloneDesc: "Copies a remote repo to your local machine (HTTPS or SSH).",
        initTitle: "Initialize a new repository",
        initDesc: "Creates a new empty Git repository in the current folder.",
        statusTitle: "Check current status",
        statusDesc: "Shows the state of working directory and staging area.",
        addTitle: "Stage files",
        addDesc: "Add file(s) to staging. Use <code>.</code> to stage everything.",
        commitTitle: "Commit staged changes",
        commitDesc: "Saves staged changes to local repository history.",
        configTitle: "Config & Aliases",
        configDesc: "View or edit Git configuration and shortcuts.",
        cfgListTitle: "Show config",
        cfgListDesc: "Lists config values.",
        cfgOriginTitle: "Show config with file origins",
        cfgOriginDesc: "Shows where each config value comes from.",
        cfgSetTitle: "Set global config",
        cfgSetDesc: "Applies to all repositories for your user.",
        cfgUnsetTitle: "Unset global config",
        cfgUnsetDesc: "Removes a global config key.",
        cfgEditTitle: "Edit global config file",
        cfgEditDesc: "Opens the global config file in your editor.",
        aliasTitle: "Create a global alias",
        aliasDesc: "Example: <code>git st</code> becomes <code>git status</code>.",
        aliasListTitle: "List aliases",
        aliasListDesc: "Shows all global aliases.",
        aliasRemoveTitle: "Remove an alias",
        aliasRemoveDesc: "Unsets a global alias.",
        sshTitle: "SSH (GitHub)",
        sshDesc: "Generate and test SSH connection.",
        sshGenTitle: "Generate SSH key",
        sshGenDesc: "Creates a 4096-bit RSA key with a comment (usually your email).",
        sshCatTitle: "Show public key",
        sshCatDesc: "Display your public key file content.",
        sshTestTitle: "Test GitHub SSH connection",
        sshTestDesc: "Verifies your SSH auth to GitHub.",
        branchesTitle: "Branches",
        branchesDesc: "Create, switch, rename, merge, delete.",
        brListTitle: "List branches",
        brListDesc: "Shows all local branches.",
        brCreateTitle: "Create a branch",
        brCreateDesc: "Creates a new local branch.",
        brSwitchTitle: "Switch branches",
        brSwitchDesc: "Moves you to another branch.",
        brCreateSwitchTitle: "Create and switch",
        brCreateSwitchDesc: "Creates a new branch and checks it out immediately.",
        brRenameTitle: "Rename current branch",
        brRenameDesc: "Renames the currently checked-out branch.",
        brMergeTitle: "Merge a branch",
        brMergeDesc: "Merges the specified branch into your current branch.",
        brDelSafeTitle: "Delete a branch (safe)",
        brDelSafeDesc: "Deletes only if it’s fully merged.",
        brDelForceTitle: "Delete a branch (force)",
        brDelForceDesc: "Forces deletion even with unmerged changes.",
        remoteTitle: "Remote",
        remoteDesc: "Origins, push, pull, remote branches.",
        remoteShowTitle: "Show remotes",
        remoteShowDesc: "Lists remote names and their URLs.",
        remoteAddTitle: "Add remote origin (SSH)",
        remoteAddDesc: "Adds a remote named <code>origin</code> using SSH URL.",
        remoteBranchesTitle: "List remote branches",
        remoteBranchesDesc: "Shows remote branches (after fetch).",
        pushTitle: "Push a branch",
        pushDesc: "Uploads your local branch changes to the remote.",
        pullTitle: "Pull a branch",
        pullDesc: "Fetches and merges remote changes into your local branch.",
        forcePushTitle: "Force push (danger)",
        forcePushDesc: "Overwrites remote history. Use only when you know what you’re doing.",
        stashTitle: "Stash",
        stashDesc: "Temporarily save local changes and restore them later.",
        stashDoTitle: "Stash changes",
        stashDoDesc: "Stashes tracked changes and cleans the working directory.",
        stashMsgTitle: "Stash with message",
        stashMsgDesc: "Saves stash with a custom label.",
        stashListTitle: "List stashes",
        stashListDesc: "Shows saved stash entries.",
        stashApplyTitle: "Apply latest stash (keep it)",
        stashApplyDesc: "Applies but does not remove it from stash list.",
        stashPopTitle: "Pop latest stash (remove it)",
        stashPopDesc: "Applies and removes the latest stash entry.",
        stashPopNTitle: "Pop a specific stash",
        stashPopNDesc: "Applies and removes a specific stash entry.",
        stashShowTitle: "Show stash summary",
        stashShowDesc: "Shows what changed in the stash.",
        stashDropTitle: "Drop stash entries",
        stashDropDesc: "Remove latest or a specific stash entry.",
        stashClearTitle: "Clear all stashes",
        stashClearDesc: "Deletes all stash entries.",
        undoTitle: "Undo & Clean",
        undoDesc: "Unstage, reset, clean untracked files, ignore files.",
        unstageClassicTitle: "Unstage a file (classic)",
        unstageClassicDesc: "Moves a file out of staging, keeps changes in working directory.",
        unstageNewTitle: "Unstage a file (recommended)",
        unstageNewDesc: "Modern alternative to unstage.",
        cleanPreviewTitle: "Preview clean",
        cleanPreviewDesc: "Shows what would be removed (dry-run).",
        cleanTitle: "Remove untracked files",
        cleanDesc: "Deletes untracked files. Add <code>-d</code> to include directories.",
        resetHardTitle: "Hard reset to a commit (danger)",
        resetHardDesc: "Discards changes after that commit in your working directory.",
        resetSoftTitle: "Soft reset to a commit",
        resetSoftDesc: "Moves HEAD but keeps changes staged.",
        gitignoreTitle: "Create .gitignore",
        gitignoreDesc: "Create and edit ignore rules.",
        forceAddTitle: "Force add ignored file",
        forceAddDesc: "Stages a file even if it’s in .gitignore.",
        logsTitle: "Logs",
        logsDesc: "See commit history.",
        logTitle: "Show commit history",
        logDesc: "Displays commits with hashes, messages, authors, and dates.",
        tagsTitle: "Tags",
        tagsDesc: "Create, list, push, and delete tags.",
        tagLightTitle: "Create a lightweight tag",
        tagLightDesc: "Points to the latest commit.",
        tagAnnoTitle: "Create an annotated tag",
        tagAnnoDesc: "Adds a message and metadata.",
        tagListTitle: "List tags",
        tagListDesc: "Shows all tags (or with patterns).",
        tagPushTitle: "Push a tag",
        tagPushDesc: "Uploads a tag to the remote.",
        tagDelTitle: "Delete tag locally & remotely",
        tagDelDesc: "Removes tag from local and remote.",
        advTitle: "Advanced",
        advDesc: "Cherry-pick commits from other branches.",
        cpTitle: "Cherry-pick a commit",
        cpDesc: "Apply a commit from another branch into current branch.",
        cpxTitle: "Cherry-pick and add origin reference",
        cpxDesc: "Adds a line indicating the original commit hash.",
        cpeTitle: "Cherry-pick and edit message",
        cpeDesc: "Opens editor so you can change the commit message.",
        conceptsTitle: "Concepts",
        conceptsDesc: "Fork vs Clone.",
        forkTitle: "Fork",
        forkDesc: "Used by an external contributor who doesn’t have write access. It copies the repo to their GitHub account. After changes, they open a Pull Request for review.",
        clone2Title: "Clone",
        clone2Desc: "Copies a repository from GitHub to your local machine to work on it locally.",
        footer: "Made for quick reference · Works great on GitHub Pages",
        backTop: "Back to top"
      },
      ar: {
        badge: "ورقة سريعة",
        title: "أوامر Git و GitHub",
        subtitle: "مرجع سريع ومرتب لأهم أوامر Git اليومية: الإعداد، الفروع، الريموت، الستاش، التاجز، اللوقز، والتنظيف.",
        searchLabel: "بحث",
        searchPlaceholder: "اكتب: stash أو branch أو tag أو remote...",
        compact: "مضغوط",
        copyAll: "نسخ الكل",
        chipAll: "الكل",
        chipBasics: "الأساسيات",
        chipConfig: "الإعدادات",
        chipSSH: "SSH",
        chipBranches: "الفروع",
        chipRemote: "Remote",
        chipStash: "Stash",
        chipUndo: "تراجع/تنظيف",
        chipLogs: "السجل",
        chipTags: "Tags",
        chipAdvanced: "متقدم",
        chipConcepts: "مفاهيم",
        tipTitle: "شو الفرق؟",
        tipGit: "<b>Git</b> نظام إدارة نسخ لتتبع التغييرات محليًا.",
        tipGitHub: "<b>GitHub</b> منصة لاستضافة مستودعات Git والتعاون أونلاين.",
        tipNote: "معلومة: إعداد SSH بيخلي الـ push/pull أسهل بعد ما تضيف المفتاح.",
        basicsTitle: "الأساسيات",
        basicsDesc: "تهيئة، نسخ، حالة، إضافة، كومِت.",
        cloneTitle: "نسخ مستودع (Clone)",
        cloneDesc: "بنزل الريبو من الريموت للجهاز (HTTPS أو SSH).",
        initTitle: "تهيئة مستودع جديد",
        initDesc: "بعمل Git repository جديد داخل المجلد الحالي.",
        statusTitle: "عرض الحالة",
        statusDesc: "بيعرض حالة الملفات: working directory و staging.",
        addTitle: "إضافة للـ Staging",
        addDesc: "إضافة ملف/ملفات للـ staging. استخدم <code>.</code> لإضافة الكل.",
        commitTitle: "عمل Commit",
        commitDesc: "بحفظ التغييرات المضافة للـ staging في تاريخ الريبو.",
        configTitle: "الإعدادات والـ Aliases",
        configDesc: "عرض/تعديل إعدادات Git وعمل اختصارات.",
        cfgListTitle: "عرض الإعدادات",
        cfgListDesc: "يعرض قيم الإعدادات.",
        cfgOriginTitle: "عرض الإعدادات مع المصدر",
        cfgOriginDesc: "بيوضح من أي ملف إجت كل قيمة.",
        cfgSetTitle: "تعيين إعداد عام (Global)",
        cfgSetDesc: "بينطبق على كل الريبو عندك.",
        cfgUnsetTitle: "حذف إعداد عام",
        cfgUnsetDesc: "بحذف مفتاح إعداد من الـ global.",
        cfgEditTitle: "فتح ملف الإعدادات",
        cfgEditDesc: "بفتح ملف الإعدادات العام بالمحرر.",
        aliasTitle: "عمل Alias عام",
        aliasDesc: "مثال: <code>git st</code> بدل <code>git status</code>.",
        aliasListTitle: "عرض الـ Aliases",
        aliasListDesc: "بيعرض كل الاختصارات العامة.",
        aliasRemoveTitle: "حذف Alias",
        aliasRemoveDesc: "بحذف اختصار عام.",
        sshTitle: "SSH (GitHub)",
        sshDesc: "إنشاء مفتاح واختبار الاتصال.",
        sshGenTitle: "إنشاء مفتاح SSH",
        sshGenDesc: "ينشئ مفتاح RSA 4096 مع تعليق (غالبًا الإيميل).",
        sshCatTitle: "عرض الـ Public Key",
        sshCatDesc: "عرض محتوى ملف المفتاح العام.",
        sshTestTitle: "اختبار اتصال GitHub",
        sshTestDesc: "بتأكد أن المصادقة عبر SSH شغالة.",
        branchesTitle: "الفروع",
        branchesDesc: "إنشاء/تنقل/إعادة تسمية/دمج/حذف.",
        brListTitle: "عرض الفروع",
        brListDesc: "يعرض الفروع المحلية.",
        brCreateTitle: "إنشاء فرع",
        brCreateDesc: "ينشئ فرع محلي جديد.",
        brSwitchTitle: "الانتقال لفرع",
        brSwitchDesc: "بنقلك لفرع آخر.",
        brCreateSwitchTitle: "إنشاء + انتقال",
        brCreateSwitchDesc: "بينشئ فرع جديد وبينقلك عليه مباشرة.",
        brRenameTitle: "تغيير اسم الفرع الحالي",
        brRenameDesc: "إعادة تسمية الفرع المفتوح.",
        brMergeTitle: "دمج فرع",
        brMergeDesc: "دمج فرع داخل الفرع الحالي.",
        brDelSafeTitle: "حذف فرع (آمن)",
        brDelSafeDesc: "بحذف فقط إذا كان مدموج.",
        brDelForceTitle: "حذف فرع (إجباري)",
        brDelForceDesc: "بحذف حتى لو مش مدموج.",
        remoteTitle: "الـ Remote",
        remoteDesc: "Origins و push/pull وفروع الريموت.",
        remoteShowTitle: "عرض الريموت",
        remoteShowDesc: "يعرض أسماء الروابط وعناوينها.",
        remoteAddTitle: "إضافة origin (SSH)",
        remoteAddDesc: "إضافة ريموت باسم <code>origin</code> باستخدام SSH.",
        remoteBranchesTitle: "عرض فروع الريموت",
        remoteBranchesDesc: "يعرض فروع الريموت (بعد fetch).",
        pushTitle: "Push لفرع",
        pushDesc: "يرفع تغييرات الفرع المحلي للريموت.",
        pullTitle: "Pull لفرع",
        pullDesc: "يجلب ويعمل merge لتغييرات الريموت.",
        forcePushTitle: "Force Push (خطر)",
        forcePushDesc: "بكتب فوق تاريخ الريموت. استخدمه بحذر.",
        stashTitle: "Stash",
        stashDesc: "حفظ تغييرات مؤقتًا واسترجاعها لاحقًا.",
        stashDoTitle: "Stash للتغييرات",
        stashDoDesc: "بحفظ التغييرات وبيفرغ الـ working directory.",
        stashMsgTitle: "Stash مع رسالة",
        stashMsgDesc: "يحفظ مع عنوان/رسالة.",
        stashListTitle: "عرض الـ Stashes",
        stashListDesc: "يعرض كل الـ stashes المحفوظة.",
        stashApplyTitle: "Apply (بدون حذف)",
        stashApplyDesc: "بيطبق الستاش بدون ما يشيله من القائمة.",
        stashPopTitle: "Pop (مع حذف)",
        stashPopDesc: "بيطبق وبحذف من القائمة.",
        stashPopNTitle: "Pop لستاش محدد",
        stashPopNDesc: "تطبيق وحذف ستاش محدد.",
        stashShowTitle: "عرض تفاصيل الستاش",
        stashShowDesc: "يعرض شو تغير داخل الستاش.",
        stashDropTitle: "حذف ستاش",
        stashDropDesc: "حذف آخر ستاش أو ستاش محدد.",
        stashClearTitle: "مسح كل الـ Stashes",
        stashClearDesc: "بحذف كل الـ stashes.",
        undoTitle: "تراجع وتنظيف",
        undoDesc: "إزالة من staging، reset، تنظيف الملفات غير المتتبعة، تجاهل ملفات.",
        unstageClassicTitle: "إزالة من Staging (قديم)",
        unstageClassicDesc: "يرجع الملف من staging بدون ما يمسح التغييرات.",
        unstageNewTitle: "إزالة من Staging (مفضل)",
        unstageNewDesc: "بديل حديث لإزالة الملف من staging.",
        cleanPreviewTitle: "معاينة التنظيف",
        cleanPreviewDesc: "بيعرض شو رح ينحذف (بدون حذف فعلي).",
        cleanTitle: "حذف الملفات غير المتتبعة",
        cleanDesc: "يحذف الملفات غير المتتبعة. استخدم <code>-d</code> للمجلدات.",
        resetHardTitle: "Hard Reset (خطر)",
        resetHardDesc: "يرجع لcommit ويحذف التغييرات بعده.",
        resetSoftTitle: "Soft Reset",
        resetSoftDesc: "يرجع HEAD ويترك التغييرات staged.",
        gitignoreTitle: "إنشاء .gitignore",
        gitignoreDesc: "إنشاء وتعديل قواعد التجاهل.",
        forceAddTitle: "إضافة ملف متجاهَل بالقوة",
        forceAddDesc: "يضيف الملف حتى لو موجود في .gitignore.",
        logsTitle: "السجل",
        logsDesc: "عرض تاريخ الـ commits.",
        logTitle: "عرض سجل الـ commits",
        logDesc: "يعرض الـ commits مع الهاش والرسائل والتاريخ.",
        tagsTitle: "Tags",
        tagsDesc: "إنشاء/عرض/رفع/حذف التاجز.",
        tagLightTitle: "إنشاء Tag بسيط",
        tagLightDesc: "يشير لآخر commit.",
        tagAnnoTitle: "إنشاء Tag مُعنون",
        tagAnnoDesc: "مع رسالة وبيانات إضافية.",
        tagListTitle: "عرض Tags",
        tagListDesc: "يعرض كل التاجز أو حسب نمط.",
        tagPushTitle: "رفع Tag",
        tagPushDesc: "يرفع التاج للريموت.",
        tagDelTitle: "حذف Tag محليًا وعن بُعد",
        tagDelDesc: "يحذف التاج من المحلي والريموت.",
        advTitle: "متقدم",
        advDesc: "Cherry-pick لالتقاط commit من فرع آخر.",
        cpTitle: "Cherry-pick لCommit",
        cpDesc: "تطبيق commit من فرع آخر على الفرع الحالي.",
        cpxTitle: "Cherry-pick مع أصل الـ commit",
        cpxDesc: "يضيف سطر يوضح الهاش الأصلي.",
        cpeTitle: "Cherry-pick مع تعديل الرسالة",
        cpeDesc: "يفتح المحرر لتعديل رسالة الـ commit.",
        conceptsTitle: "مفاهيم",
        conceptsDesc: "Fork مقابل Clone.",
        forkTitle: "Fork",
        forkDesc: "مناسب للي ما عنده صلاحية كتابة. بعمل نسخة للريبو على حسابه ثم يعمل Pull Request للمراجعة.",
        clone2Title: "Clone",
        clone2Desc: "ينسخ الريبو من GitHub لجهازك لتشتغل عليه محليًا.",
        footer: "مصمم للرجوع السريع · ممتاز لـ GitHub Pages",
        backTop: "للأعلى"
      }
    };

    // ---------- helpers ----------
    const $ = (s, el=document) => el.querySelector(s);
    const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));

    const search = $("#search");
    const grid = $("#grid");
    const chips = $$("#chips .chip");
    const compact = $("#compact");
    const copyAll = $("#copyAll");
    const backTop = $("#backTop");
    const langBtns = $$("[data-set-lang]");

    let currentFilter = "all";

    function applyFilters(){
      const q = search.value.trim().toLowerCase();
      const items = $$(".item", grid);
      const sections = $$(".section", grid);

      items.forEach(item => {
        const tags = (item.getAttribute("data-tags") || "").split(" ");
        const text = item.innerText.toLowerCase();
        const matchText = !q || text.includes(q);
        const matchFilter = currentFilter === "all" || tags.includes(currentFilter);
        item.classList.toggle("is-hidden", !(matchText && matchFilter));
      });

      sections.forEach(sec => {
        const visible = $$(".item", sec).some(i => !i.classList.contains("is-hidden"));
        sec.classList.toggle("is-hidden", !visible);
      });
    }

    function setLang(lang){
      const dict = i18n[lang] || i18n.en;

      document.documentElement.setAttribute("lang", lang);
      document.documentElement.setAttribute("data-lang", lang);
      document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

      // swap active button
      langBtns.forEach(b => b.classList.toggle("is-active", b.dataset.setLang === lang));

      // update texts
      $$("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] != null) el.innerHTML = dict[key];
      });

      // update placeholders
      $$("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
      });

      // save preference
      localStorage.setItem("cheat_lang", lang);

      // keep filters working
      applyFilters();
    }

    // chips
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("is-active"));
        chip.classList.add("is-active");
        currentFilter = chip.dataset.filter;
        applyFilters();
      });
    });

    // search
    search.addEventListener("input", applyFilters);

    // compact
    compact.addEventListener("change", () => {
      document.body.classList.toggle("compact", compact.checked);
    });

    // copy all
    copyAll.addEventListener("click", async () => {
      const commands = $$(".cmd code").map(c => c.innerText).join("\n\n");
      await navigator.clipboard.writeText(commands);
      const old = copyAll.innerText;
      copyAll.innerText = (document.documentElement.dataset.lang === "ar") ? "تم النسخ!" : "Copied!";
      setTimeout(() => copyAll.innerText = old, 900);
    });

    // back to top
    backTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({top:0, behavior:"smooth"});
    });

    // click to copy single blocks
    $$(".cmd").forEach(pre => {
      pre.addEventListener("click", async () => {
        const t = $("code", pre).innerText;
        await navigator.clipboard.writeText(t);
        pre.classList.add("copied");
        setTimeout(() => pre.classList.remove("copied"), 700);
      });
    });

    // language buttons
    langBtns.forEach(btn => btn.addEventListener("click", () => setLang(btn.dataset.setLang)));

    // init
    const saved = localStorage.getItem("cheat_lang") || "en";
    setLang(saved);
    applyFilters();