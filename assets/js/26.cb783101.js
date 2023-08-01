(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{349:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rebase"}},[s._v("#")]),s._v(" Rebase")]),s._v(" "),a("p",[s._v("在上一节我们看到了，多人在同一个分支上协作时，很容易出现冲突。即使没有冲突，后 "),a("code",[s._v("push")]),s._v(" 的童鞋不得不先 pull，在本地合并，然后才能 push 成功。")]),s._v(" "),a("p",[s._v("每次合并再 push 后，分支变成了这样：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--graph")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n* d1be385 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, origin/master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" init hello\n*   e5e69f1 Merge branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *   57c53ab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/dev, dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" fix "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" conflict\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * 7a5e5dd "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 7bd91f1 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" new "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  \n* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   12a631b merged bug fix "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 4c805e2 fix bug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/ /  \n* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   e1e9c68 merge with no-ff\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * f52c633 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  \n*   cf810e4 conflict fixed\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("总之看上去很乱，有强迫症的童鞋会问：为什么 Git 的提交历史不能是一条干净的直线？")]),s._v(" "),a("p",[s._v("其实是可以做到的！")]),s._v(" "),a("p",[s._v("Git 有一种称为 rebase 的操作，有人把它翻译成“变基”。")]),s._v(" "),a("p",[s._v("先不要随意展开想象。我们还是从实际问题出发，看看怎么把分叉的提交变成直线。")]),s._v(" "),a("p",[s._v("在和远程分支同步后，我们对 "),a("code",[s._v("hello.py")]),s._v(" 这个文件做了两次提交。用 "),a("code",[s._v("git log")]),s._v(" 命令看看：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--graph")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n* 582d922 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" author\n* "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8875536")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" comment\n* d1be385 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" init hello\n*   e5e69f1 Merge branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" *   57c53ab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/dev, dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" fix "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" conflict\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * 7a5e5dd "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 7bd91f1 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" new "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("注意到 Git 用("),a("code",[s._v("HEAD -> master")]),s._v(")和("),a("code",[s._v("origin/maste")]),s._v("r)标识出当前分支的 "),a("code",[s._v("HEAD")]),s._v(" 和远程 "),a("code",[s._v("origin")]),s._v(" 的位置分别是 "),a("code",[s._v("582d922 add author")]),s._v(" 和 "),a("code",[s._v("d1be385 init hello")]),s._v("，本地分支比远程分支快两个提交。")]),s._v(" "),a("p",[s._v("现在我们尝试推送本地分支：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\nTo github.com:michaelliao/learngit.git\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rejected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("        master -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fetch first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nerror: failed to push some refs to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git@github.com:michaelliao/learngit.git'")]),s._v("\nhint: Updates were rejected because the remote contains work that you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\nhint: not have locally. This is usually caused by another repository pushing\nhint: to the same ref. You may want to first integrate the remote changes\nhint: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g., "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git pull ...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" before pushing again.\nhint: See the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Note about fast-forwards'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git push --help'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" details.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("很不幸，失败了，这说明有人先于我们推送了远程分支。按照经验，先 pull 一下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\nremote: Counting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", done.\nremote: Compressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nremote: Total "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", pack-reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nUnpacking objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("/3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nFrom github.com:michaelliao/learngit\n   d1be385"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("f005ed4  master     -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" origin/master\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         v1.0       -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v1.0\nAuto-merging hello.py\nMerge made by the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recursive'")]),s._v(" strategy.\n hello.py "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" +\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("再用 "),a("code",[s._v("git status")]),s._v(" 看看状态：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch master\nYour branch is ahead of "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin/master'")]),s._v(" by "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" commits.\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git push"')]),s._v(" to publish your "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" commits"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nnothing to commit, working tree clean\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("加上刚才合并的提交，现在我们本地分支比远程分支超前 3 个提交。")]),s._v(" "),a("p",[s._v("用 "),a("code",[s._v("git log")]),s._v(" 看看：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--graph")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n*   e0ea545 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Merge branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),s._v(" of github.com:michaelliao/learngit\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * f005ed4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" 582d922 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" author\n* "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8875536")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" comment\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  \n* d1be385 init hello\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("对强迫症童鞋来说，现在事情有点不对头，提交历史分叉了。如果现在把本地分支push到远程，有没有问题？")]),s._v(" "),a("p",[s._v("有！")]),s._v(" "),a("p",[s._v("什么问题？")]),s._v(" "),a("p",[s._v("不好看！")]),s._v(" "),a("p",[s._v("有没有解决方法？")]),s._v(" "),a("p",[s._v("有！")]),s._v(" "),a("p",[s._v("这个时候，"),a("code",[s._v("rebase")]),s._v(" 就派上了用场。我们输入命令 "),a("code",[s._v("git rebase")]),s._v(" 试试：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase\nFirst, rewinding "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" to replay your work on "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" of it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nApplying: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" comment\nUsing index info to reconstruct a base tree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nM\thello.py\nFalling back to patching base and "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("-way merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nAuto-merging hello.py\nApplying: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" author\nUsing index info to reconstruct a base tree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nM\thello.py\nFalling back to patching base and "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("-way merge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nAuto-merging hello.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("输出了一大堆操作，到底是啥效果？再用 "),a("code",[s._v("git log")]),s._v(" 看看：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--graph")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n* 7e61ed4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" author\n* 3611cfe "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" comment\n* f005ed4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("origin/master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n* d1be385 init hello\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("原本分叉的提交现在变成一条直线了！这种神奇的操作是怎么实现的？其实原理非常简单。我们注意观察，发现 Git 把我们本地的提交“挪动”了位置，放到了 "),a("code",[s._v("f005ed4 (origin/master) set exit=1")]),s._v(" 之后，这样，整个提交历史就成了一条直线。rebase 操作前后，最终的提交内容是一致的，但是，我们本地的 commit 修改内容已经变化了，它们的修改不再基于 "),a("code",[s._v("d1be385 init hello")]),s._v("，而是基于 "),a("code",[s._v("f005ed4 (origin/master) set exit=1")]),s._v("，但最后的提交 "),a("code",[s._v("7e61ed4")]),s._v(" 内容是一致的。")]),s._v(" "),a("p",[s._v("这就是 rebase 操作的特点：把分叉的提交历史“整理”成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。")]),s._v(" "),a("p",[s._v("最后，通过 push 操作把本地分支推送到远程：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Mac:~/learngit michael$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\nCounting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(", done.\nDelta compression using up to "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" threads.\nCompressing objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("/5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", done.\nWriting objects: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("/6"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("576")]),s._v(" bytes "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("576.00")]),s._v(" KiB/s, done.\nTotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nremote: Resolving deltas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("% "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("/2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", completed with "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" object.\nTo github.com:michaelliao/learngit.git\n   f005ed4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("7e61ed4  master -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("再用 "),a("code",[s._v("git log")]),s._v(" 看看效果：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--graph")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline --abbrev-commit\n* 7e61ed4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, origin/master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" author\n* 3611cfe "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" comment\n* f005ed4 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("exit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n* d1be385 init hello\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("远程分支的提交历史也是一条直线。")])])}),[],!1,null,null,null);a.default=e.exports}}]);