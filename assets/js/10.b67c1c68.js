(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{338:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-时光机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-时光机"}},[s._v("#")]),s._v(" Git 时光机")]),s._v(" "),t("p",[s._v("我们已经成功地添加并提交了一个 "),t("code",[s._v("readme.txt")]),s._v(" 文件，现在，是时候继续工作了，于是，我们继续修改 "),t("code",[s._v("readme.txt")]),s._v(" 文件，改成如下内容：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Git is a distributed version control system.\nGit is free software.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("现在，我们运行下 "),t("code",[s._v("git status")]),s._v(" 命令看看结果：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nChanges not staged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git checkout -- <file>..."')]),s._v(" to discard changes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tmodified:   readme.txt\n\nno changes added to commit "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add"')]),s._v(" and/or "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git commit -a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("code",[s._v("git status")]),s._v(" 告诉我们仓库当前的状态，上面的执行结果告诉我们："),t("code",[s._v("readme.txt")]),s._v(" 文件被修改过，但是还没有 "),t("code",[s._v("add")]),s._v(" 到仓库，没有更改可以 "),t("code",[s._v("commit")]),s._v("。")]),s._v(" "),t("p",[s._v("之前说过，Git 可以跟踪文本内容的更改，Git 可以知道我们对内容具体做了哪些修改：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" readme.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--git")]),s._v(" a/readme.txt b/readme.txt\nindex d8036c1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("013b5bc "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100644")]),s._v("\n--- a/readme.txt\n+++ b/readme.txt\n@@ -1,2 +1,2 @@\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Git")]),s._v(" is a version control system.\n+Git is a distributed version control system.\n Git is "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" software.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" No newline at end of "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("从上面的第 7 行和第 8 行内容我们可以看出，原本的内容为“Git is a version control system.”，而现在的内容是“Git is a distributed version control system.”，我们添加了一个 distributed 单词。")]),s._v(" "),t("p",[s._v("知道了对 "),t("code",[s._v("readme.txt")]),s._v(" 作了什么修改后，再把它提交到仓库就放心多了，提交修改和提交新文件是一样的两步，第一步是 "),t("code",[s._v("git add")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("同样没有任何输出。在执行第二步 "),t("code",[s._v("git commit")]),s._v(" 之前，我们再运行 "),t("code",[s._v("git status")]),s._v(" 看看当前仓库的状态：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nChanges to be committed:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git reset HEAD <file>..."')]),s._v(" to unstage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tmodified:   readme.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("code",[s._v("git status")]),s._v(" 告诉我们，将要被提交的修改包括 "),t("code",[s._v("readme.txt")]),s._v("，下一步，就可以放心地提交了：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add distributed"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master 9f91f4f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" distributed\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" deletion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("提交后，我们再用 "),t("code",[s._v("git status")]),s._v(" 命令看看仓库的当前状态：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nnothing to commit, working tree clean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);