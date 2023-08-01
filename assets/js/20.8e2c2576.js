(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{345:function(s,a,e){"use strict";e.r(a);var n=e(4),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"创建与合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建与合并分支"}},[s._v("#")]),s._v(" 创建与合并分支")]),s._v(" "),a("h2",{attrs:{id:"git-的一条分支是一条时间线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-的一条分支是一条时间线"}},[s._v("#")]),s._v(" Git 的一条分支是一条时间线")]),s._v(" "),a("p",[s._v("在“"),a("RouterLink",{attrs:{to:"/pages/e91c5e/"}},[s._v("版本回退")]),s._v("”里，你已经知道，每次提交，Git 都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在 Git 里，这个分支叫主分支，即 "),a("code",[s._v("master")]),s._v(" 分支。"),a("code",[s._v("HEAD")]),s._v(" 严格来说不是指向提交，而是指向 "),a("code",[s._v("master")]),s._v("，"),a("code",[s._v("master")]),s._v(" 才是指向提交的，所以，"),a("code",[s._v("HEAD")]),s._v(" 指向的就是当前分支。")],1),s._v(" "),a("p",[s._v("一开始的时候，"),a("code",[s._v("master")]),s._v(" 分支是一条线，Git 用 "),a("code",[s._v("master")]),s._v(" 指向最新的提交，再用 "),a("code",[s._v("HEAD")]),s._v(" 指向 "),a("code",[s._v("master")]),s._v("，就能确定当前分支，以及当前分支的提交点：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("                  HEAD\n                    │\n                    │\n                    ▼\n                 master\n                    │\n                    │\n                    ▼\n┌───┐    ┌───┐    ┌───┐\n│   │───▶│   │───▶│   │\n└───┘    └───┘    └───┘\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("每次提交，"),a("code",[s._v("master")]),s._v(" 分支都会向前移动一步，这样，随着你不断提交，"),a("code",[s._v("master")]),s._v(" 分支的线也越来越长。\n当我们创建新的分支，例如 "),a("code",[s._v("dev")]),s._v(" 时，Git 新建了一个指针叫 dev，指向 "),a("code",[s._v("master")]),s._v(" 相同的提交，再把 "),a("code",[s._v("HEAD")]),s._v(" 指向 "),a("code",[s._v("dev")]),s._v("，就表示当前分支在 "),a("code",[s._v("dev")]),s._v(" 上：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("                 master\n                    │\n                    │\n                    ▼\n┌───┐    ┌───┐    ┌───┐\n│   │───▶│   │───▶│   │\n└───┘    └───┘    └───┘\n                    ▲\n                    │\n                    │\n                   dev\n                    ▲\n                    │\n                    │\n                  HEAD\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("你看，Git 创建一个分支很快，因为除了增加一个 "),a("code",[s._v("dev")]),s._v(" 指针，改改 "),a("code",[s._v("HEAD")]),s._v(" 的指向，工作区的文件都没有任何变化！")]),s._v(" "),a("p",[s._v("不过，从现在开始，对工作区的修改和提交就是针对 "),a("code",[s._v("dev")]),s._v(" 分支了，比如新提交一次后，"),a("code",[s._v("dev")]),s._v(" 指针往前移动一步，而 "),a("code",[s._v("master")]),s._v(" 指针不变：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("                 master\n                    │\n                    │\n                    ▼\n┌───┐    ┌───┐    ┌───┐    ┌───┐\n│   │───▶│   │───▶│   │───▶│   │\n└───┘    └───┘    └───┘    └───┘\n                             ▲\n                             │\n                             │\n                            dev\n                             ▲\n                             │\n                             │\n                           HEAD\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("假如我们在 "),a("code",[s._v("dev")]),s._v(" 上的工作完成了，就可以把 "),a("code",[s._v("dev")]),s._v(" 合并到 "),a("code",[s._v("master")]),s._v("上。Git 怎么合并呢？最简单的方法，就是直接把 "),a("code",[s._v("master")]),s._v(" 指向 "),a("code",[s._v("dev")]),s._v(" 的当前提交，就完成了合并：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("                           HEAD\n                             │\n                             │\n                             ▼\n                          master\n                             │\n                             │\n                             ▼\n┌───┐    ┌───┐    ┌───┐    ┌───┐\n│   │───▶│   │───▶│   │───▶│   │\n└───┘    └───┘    └───┘    └───┘\n                             ▲\n                             │\n                             │\n                            dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("所以 Git 合并分支也很快！就改改指针，工作区内容也不变！")]),s._v(" "),a("p",[s._v("合并完分支后，甚至可以删除 "),a("code",[s._v("dev")]),s._v(" 分支。删除 "),a("code",[s._v("dev")]),s._v(" 分支就是把 "),a("code",[s._v("dev")]),s._v(" 指针给删掉，删掉后，我们就剩下了一条 "),a("code",[s._v("master")]),s._v(" 分支：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("                           HEAD\n                             │\n                             │\n                             ▼\n                          master\n                             │\n                             │\n                             ▼\n┌───┐    ┌───┐    ┌───┐    ┌───┐\n│   │───▶│   │───▶│   │───▶│   │\n└───┘    └───┘    └───┘    └───┘\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("真是太神奇了，你看得出来有些提交是通过分支完成的吗？")]),s._v(" "),a("h2",{attrs:{id:"创建新的-dev-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建新的-dev-分支"}},[s._v("#")]),s._v(" 创建新的 dev 分支")]),s._v(" "),a("p",[s._v("下面开始实战。")]),s._v(" "),a("p",[s._v("首先，我们创建 "),a("code",[s._v("dev")]),s._v(" 分支，然后切换到 "),a("code",[s._v("dev")]),s._v(" 分支：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" dev\nSwitched to a new branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("code",[s._v("git checkout")]),s._v(" 命令加上 "),a("code",[s._v("-b")]),s._v(" 参数表示创建并切换，相当于以下两条命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch dev\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout dev\nSwitched to branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("然后，用 "),a("code",[s._v("git branch")]),s._v(" 命令查看当前分支：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n* dev\n  master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("git branch")]),s._v(" 命令会列出所有分支，当前分支前面会标一个 "),a("code",[s._v("*")]),s._v(" 号。")]),s._v(" "),a("p",[s._v("然后，我们就可以在 "),a("code",[s._v("dev")]),s._v(" 分支上正常提交，比如对 "),a("code",[s._v("readme.txt")]),s._v(" 做个修改，加上一行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Creating a new branch is quick.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后提交：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" readme.txt \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"branch test"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dev 56c69c4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("现在，"),a("code",[s._v("dev")]),s._v(" 分支的工作完成，我们就可以切换回 "),a("code",[s._v("master")]),s._v(" 分支：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout master\nSwitched to branch "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'master'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("切换回 "),a("code",[s._v("master")]),s._v(" 分支后，再查看一个 "),a("code",[s._v("readme.txt")]),s._v(" 文件，刚才添加的内容不见了！因为那个提交是在 "),a("code",[s._v("dev")]),s._v(" 分支上，而 "),a("code",[s._v("master")]),s._v(" 分支此刻的提交点并没有变：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://nagiko.oss-cn-shanghai.aliyuncs.com/kana/git-guide/41.1.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"将-dev-分支合并到-master-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将-dev-分支合并到-master-上"}},[s._v("#")]),s._v(" 将 dev 分支合并到 master 上")]),s._v(" "),a("p",[s._v("现在，我们把 "),a("code",[s._v("dev")]),s._v(" 分支的工作成果合并到 "),a("code",[s._v("master")]),s._v(" 分支上：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge dev\nUpdating c630402"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("56c69c4\nFast-forward\n readme.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" +\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changed, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" insertion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("git merge")]),s._v(" 命令用于合并指定分支到当前分支。合并后，再查看 "),a("code",[s._v("readme.txt")]),s._v(" 的内容，就可以看到，和 "),a("code",[s._v("dev")]),s._v(" 分支的最新提交是完全一样的。")]),s._v(" "),a("p",[s._v("注意到上面的 "),a("code",[s._v("Fast-forward")]),s._v(" 信息，Git 告诉我们，这次合并是“快进模式”，也就是直接把 "),a("code",[s._v("master")]),s._v(" 指向 "),a("code",[s._v("dev")]),s._v(" 的当前提交，所以合并速度非常快。")]),s._v(" "),a("p",[s._v("当然，也不是每次合并都能 Fast-forward，我们后面会讲其他方式的合并。\n合并完成后，就可以放心地删除 "),a("code",[s._v("dev")]),s._v(" 分支了：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" dev\nDeleted branch dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("was 56c69c4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("删除后，查看 branch，就只剩下 "),a("code",[s._v("master")]),s._v(" 分支了：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n* master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"善于利用分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#善于利用分支"}},[s._v("#")]),s._v(" 善于利用分支")]),s._v(" "),a("p",[s._v("因为创建、合并和删除分支非常快，所以 Git 鼓励你使用分支完成某个任务，合并后再删掉分支，这和直接在 "),a("code",[s._v("master")]),s._v(" 分支上工作效果是一样的，但过程更安全。")]),s._v(" "),a("p",[s._v("我们注意到切换分支使用 "),a("code",[s._v("git checkout <branch>")]),s._v("，而前面讲过的撤销修改则是 "),a("code",[s._v("git checkout -- <file>")]),s._v("，同一个命令，有两种作用，确实有点令人迷惑。")]),s._v(" "),a("p",[s._v("实际上，切换分支这个动作，用 "),a("code",[s._v("switch")]),s._v(" 更科学。因此，最新版本的 Git 提供了新的 "),a("code",[s._v("git switch")]),s._v(" 命令来切换分支：")]),s._v(" "),a("p",[s._v("创建并切换到新的 dev 分支，可以使用：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("直接切换到已有的 "),a("code",[s._v("master")]),s._v(" 分支，可以使用：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" switch master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用新的 "),a("code",[s._v("git switch")]),s._v(" 命令，比 "),a("code",[s._v("git checkout")]),s._v(" 要更容易理解。")])])}),[],!1,null,null,null);a.default=t.exports}}]);