(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{350:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"bug-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-分支"}},[s._v("#")]),s._v(" Bug 分支")]),s._v(" "),t("p",[s._v("软件开发中，bug 就像家常便饭一样。有了 bug 就需要修复，在 Git 中，由于分支是如此的强大，所以，每个 bug 都可以通过一个新的临时分支来修复，修复后，合并分支，然后将临时分支删除。")]),s._v(" "),t("h2",{attrs:{id:"git-储藏功能-git-stash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-储藏功能-git-stash"}},[s._v("#")]),s._v(" Git 储藏功能（git stash）")]),s._v(" "),t("p",[s._v("当你接到一个修复一个代号 101 的 bug 的任务时，很自然地，你想创建一个分支 "),t("code",[s._v("issue-101")]),s._v(" 来修复它，但是，等等，当前正在 "),t("code",[s._v("dev")]),s._v(" 上进行的工作还没有提交：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch dev\nChanges to be committed:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git reset HEAD <file>..."')]),s._v(" to unstage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tnew file:   hello.py\n\nChanges not staged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git checkout -- <file>..."')]),s._v(" to discard changes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tmodified:   readme.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("并不是你不想提交，而是工作只进行到一半，还没法提交，预计完成还需 1 天时间。但是，必须在两个小时内修复该 bug，怎么办？")]),s._v(" "),t("p",[s._v("幸好，Git还提供了一个 "),t("code",[s._v("stash")]),s._v(" 功能，可以把当前工作现场“储藏”起来，等以后恢复现场后继续工作：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\nSaved working directory and index state WIP on dev: f52c633 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("现在，用 "),t("code",[s._v("git status")]),s._v(" 查看工作区，就是干净的（除非有没有被 Git 管理的文件），因此可以放心地创建分支来修复 bug。")]),s._v(" "),t("p",[s._v("首先确定要在哪个分支上修复 bug，假定需要在 "),t("code",[s._v("master")]),s._v(" 分支上修复，就从 "),t("code",[s._v("master")]),s._v(" 创建临时分支：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\nSwitched to branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),s._v("\nYour branch is ahead of "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin/master'")]),s._v(" by "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" commits.\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git push"')]),s._v(" to publish your "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" commits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" issue-101\nSwitched to a new branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'issue-101'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("现在修复 bug，需要把“Git is free software ...”改为“Git is a free software ...”，然后提交：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt \n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fix bug 101"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("issue-101 4c805e2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" fix bug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" deletion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("修复完成后，切换到 "),t("code",[s._v("master")]),s._v(" 分支，并完成合并，最后删除 "),t("code",[s._v("issue-101")]),s._v(" 分支：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch master\nSwitched to branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),s._v("\nYour branch is ahead of "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'origin/master'")]),s._v(" by "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" commits.\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git push"')]),s._v(" to publish your "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" commits"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"merged bug fix 101"')]),s._v(" issue-101\nMerge made by the "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recursive'")]),s._v(" strategy.\n readme.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" +-\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" deletion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("太棒了，原计划两个小时的 bug 修复只花了 5 分钟！现在，是时候接着回到 "),t("code",[s._v("dev")]),s._v(" 分支干活了！")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch dev\nSwitched to branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\nOn branch dev\nnothing to commit, working tree clean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("工作区是干净的，刚才的工作现场存到哪去了？用 "),t("code",[s._v("git stash list")]),s._v(" 命令看看：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\nstash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(": WIP on dev: f52c633 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" merge\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("工作现场还在，Git 把 stash 内容存在某个地方了，但是需要恢复一下，有两个办法：")]),s._v(" "),t("p",[s._v("一是用 "),t("code",[s._v("git stash apply")]),s._v(" 恢复，但是恢复后，stash 内容并不删除，你需要用 "),t("code",[s._v("git stash drop")]),s._v(" 来删除；")]),s._v(" "),t("p",[s._v("另一种方式是用 "),t("code",[s._v("git stash pop")]),s._v("，恢复的同时把 stash 内容也删了：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\nOn branch dev\nChanges to be committed:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git reset HEAD <file>..."')]),s._v(" to unstage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tnew file:   hello.py\n\nChanges not staged "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit:\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git add <file>..."')]),s._v(" to update what will be committed"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"git checkout -- <file>..."')]),s._v(" to discard changes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" working directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\tmodified:   readme.txt\n\nDropped refs/stash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("5d677e2ee266f39ea296182fb2354265b91b3b2a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("再用 "),t("code",[s._v("git stash list")]),s._v(" 查看，就看不到任何 stash 内容了：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("你可以多次 stash，恢复的时候，先用 "),t("code",[s._v("git stash list")]),s._v(" 查看，然后恢复指定的 stash，用命令：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash apply stash@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"复制特定的提交到当前分支-git-cherry-pick"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#复制特定的提交到当前分支-git-cherry-pick"}},[s._v("#")]),s._v(" 复制特定的提交到当前分支（git cherry-pick）")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("master")]),s._v(" 分支上修复了 bug 后，我们要想一想，"),t("code",[s._v("dev")]),s._v(" 分支是早期从 "),t("code",[s._v("master")]),s._v(" 分支分出来的，所以，这个 bug 其实在当前 "),t("code",[s._v("dev")]),s._v(" 分支上也存在。")]),s._v(" "),t("p",[s._v("那怎么在 "),t("code",[s._v("dev")]),s._v(" 分支上修复同样的 bug？重复操作一次，提交不就行了？")]),s._v(" "),t("p",[s._v("有木有更简单的方法？")]),s._v(" "),t("p",[s._v("有！")]),s._v(" "),t("p",[s._v("同样的 bug，要在 "),t("code",[s._v("dev")]),s._v(" 上修复，我们只需要把 "),t("code",[s._v("4c805e2 fix bug 101")]),s._v(" 这个提交所做的修改“复制”到 "),t("code",[s._v("dev")]),s._v(" 分支。注意：我们只想复制 "),t("code",[s._v("4c805e2 fix bug 101")]),s._v(" 这个提交所做的修改，并不是把整个 "),t("code",[s._v("master")]),s._v(" 分支 merge 过来。")]),s._v(" "),t("p",[s._v("为了方便操作，Git 专门提供了一个 "),t("code",[s._v("cherry-pick")]),s._v(" 命令，让我们能复制一个特定的提交到当前分支：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n* dev\n  master\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick 4c805e2\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("master 1d4b803"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" fix bug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" deletion"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("Git 自动给 "),t("code",[s._v("dev")]),s._v(" 分支做了一次提交，注意这次提交的 commit 是 "),t("code",[s._v("1d4b803")]),s._v("，它并不同于 master 的 "),t("code",[s._v("4c805e2")]),s._v("，因为这两个 commit 只是改动相同，但确实是两个不同的 commit。用 "),t("code",[s._v("git cherry-pick")]),s._v("，我们就不需要在 dev 分支上手动再把修 bug 的过程重复一遍。")]),s._v(" "),t("p",[s._v("有些聪明的童鞋会想了，既然可以在 "),t("code",[s._v("master")]),s._v(" 分支上修复 bug 后，在 "),t("code",[s._v("dev")]),s._v(" 分支上可以“重放”这个修复过程，那么直接在 "),t("code",[s._v("dev")]),s._v(" 分支上修复 bug，然后在 "),t("code",[s._v("master")]),s._v(" 分支上“重放”行不行？当然可以，不过你仍然需要 "),t("code",[s._v("git stash")]),s._v(" 命令保存现场，才能从 "),t("code",[s._v("dev")]),s._v(" 分支切换到 "),t("code",[s._v("master")]),s._v(" 分支。")])])}),[],!1,null,null,null);t.default=e.exports}}]);