(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{339:function(s,e,t){"use strict";t.r(e);var a=t(4),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"创建-git-版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-git-版本库"}},[s._v("#")]),s._v(" 创建 Git 版本库")]),s._v(" "),e("h2",{attrs:{id:"什么是-git-版本库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是-git-版本库"}},[s._v("#")]),s._v(" 什么是 Git 版本库？")]),s._v(" "),e("p",[s._v("Git 版本库又叫做 Git 仓库，英文名 "),e("strong",[s._v("repository")]),s._v("，你可以简单理解成一个目录，这个目录里面的所有文件都可以被 Git 管理起来，每个文件的修改、删除，Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将来某个时刻可以“还原”。")]),s._v(" "),e("h2",{attrs:{id:"创建-git-版本库-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-git-版本库-2"}},[s._v("#")]),s._v(" 创建 Git 版本库")]),s._v(" "),e("p",[s._v("如果你是 Windows，请查看“"),e("RouterLink",{attrs:{to:"/pages/0e31bb/#在-Windows-上安装-Git"}},[s._v("在 Windows 上安装 Git")]),s._v("”中提及的“Git Bash”。注意这个“Git Bash”内支持的语法和 Mac OS 的终端以及 Linux 操作系统下的终端的语法是相似的，所以不论你是什么操作系统，除了安装 Git 的方式有所区别外，其余的使用方式都是一样的。")],1),s._v(" "),e("p",[s._v("输入 "),e("code",[s._v("pwd")]),s._v(" 指令并回车，查看你当前所在的目录：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/Users/yuu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("通过 "),e("code",[s._v("cd")]),s._v(" 指令定位到你想要创建 Git 版本库的位置：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /Users/yuu/Developer/\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/Users/yuu/Developer\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("接下来创建一个文件夹来作为 Git 版本库，然后进入该目录：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" git-learn\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" git-learn\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/Users/yuu/Developer/git-learn\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("如果你使用 Windows 系统，为了避免遇到各种莫名其妙的问题，请确保目录名（包括父目录）不包含中文。")])]),s._v(" "),e("p",[s._v("输入以下命令初始化一个 Git 版本库：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n/Users/yuu/Developer/git-learn\nInitialized empty Git repository "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /Users/yuu/Developer/git-learn/.git/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("瞬间 Git 就把仓库建好了，而且告诉你是一个空的仓库（empty Git repository），你打开该文件夹可以发现当前目录下多了一个 "),e("code",[s._v(".git")]),s._v(" 的目录（如果没看见，请设置“显示所有隐藏文件”），这个目录是 Git 来跟踪管理版本库的，没事千万不要手动修改这个目录里面的文件，不然改乱了，就把 Git 仓库给破坏了。")]),s._v(" "),e("p",[s._v("当然你也可以直接在刚才的命令行界面输入：")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("   .git\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("上面的指令显示了三个目录，一个是 "),e("code",[s._v(".")]),s._v(" 目录，另外一个是 "),e("code",[s._v("..")]),s._v(" 目录，最后才是我们需要的 "),e("code",[s._v(".git")]),s._v(" 目录。")]),s._v(" "),e("p",[s._v("为什么是三个目录？"),e("code",[s._v("-a")]),s._v(" 参数代表让 "),e("code",[s._v("ls")]),s._v(" 输入目录下的所有显示所有文件及目录，包括隐藏的文件和目录，而 "),e("code",[s._v(".")]),s._v(" 代表当前文件夹，"),e("code",[s._v("..")]),s._v(" 代表上一级文件夹。所以我们可以看出，一个空的目录，实际上它自身“链接（或者说包含）”了它自身的目录地址 "),e("code",[s._v(".")]),s._v(" 以及它的上一级目录地址 "),e("code",[s._v("..")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"往版本库添加文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#往版本库添加文件"}},[s._v("#")]),s._v(" 往版本库添加文件")]),s._v(" "),e("p",[s._v("现在我们往 "),e("code",[s._v("git-learn")]),s._v(" 目录底下添加文件。新建一个 "),e("code",[s._v("readme.txt")]),s._v(" 文件，内容如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Git is a version control system.\nGit is free software.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("注意一下几点：")]),s._v(" "),e("ol",[e("li",[s._v("使用 Windows 的同学请千万不要使用自带的记事本笔记任何文本文件，原因是 Microsoft 开发记事本的团队使用了一个非常弱智的行为来保存 UTF-8 编码的文件，他们自作聪明地在每个文件开头添加了 0xefbbbf（十六进制）的字符，你会遇到很多不可思议的问题，比如，网页第一行可能会显示一个“?”，明明正确的程序一编译就报语法错误，等等，都是由记事本的弱智行为带来的。建议你下载 "),e("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Visual Studio Code"),e("OutboundLink")],1),s._v(" 代替记事本，不但功能强大，而且免费！")]),s._v(" "),e("li",[s._v("Git 版本控制工具只能跟踪文本文件的改动，比如在第 5 行加了一个单词“Linux”，在第 8 行删了一个单词“Windows”。Git 可以知道这些文本文件里具体内容的改动。")]),s._v(" "),e("li",[s._v("但是像 word 等二进制格式的文件则不能用 Git 去跟踪每次的改动。当然并不是说 Git 不支持 word，你仍然可以将 word 或者图片等文件放入 Git 仓库中，Git 将整个二进制文件当做一个“整体”去管理，Git 看不见二进制文件里面的具体内容，但依然可以将它们准确无误地进行管理。")])]),s._v(" "),e("p",[s._v("好了，现在我们将刚刚编辑好的 "),e("code",[s._v("readme.txt")]),s._v(" 添加到 Git 仓库：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git add readme.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当然你也可以用 "),e("code",[s._v("git add .")]),s._v(" 将当前目录（包括子目录）下的所有文件添加到 git 仓库。")]),s._v(" "),e("p",[s._v("执行上面的命令，没有任何显示，这就对了，没有消息就是好消息，说明添加成功。")]),s._v(" "),e("p",[s._v("接着用 "),e("code",[s._v("git commit")]),s._v(" 来将文件提交到仓库：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$ git commit -m "wrote a readme file"\n[master（根提交） 99a8ad6] wrote a readme file\n 1 file changed, 2 insertions(+)\n create mode 100644 readme.txt\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("解释下 "),e("code",[s._v("git commit")]),s._v(" 命令，后面的 "),e("code",[s._v("-m")]),s._v(" 表示这次提交的说明，这个说明可以是任何内容。以后你就可以基于这个说明去查看你的所有历史提交记录了。当然你也可以直接提交而不附加任何提交的说明，但是强烈不建议这么做，以后提交的内容多了后，你自己都不知道哪次提交你改了什么，而且也不利于与其他团队成员之间的协作。")]),s._v(" "),e("p",[s._v("你也许好奇为什么需要先添加文件到仓库，然后再提交文件到仓库？直接一步提交到仓库不行吗？先添加再提交的两步操作有几个好处：")]),s._v(" "),e("ol",[e("li",[s._v("只有被 "),e("code",[s._v("git add")]),s._v(" 指令添加到仓库的文件才会被 Git 跟踪和管理，一些本地缓存文件和个人配置信息一直保存在本地即可，无需被 Git 管理并推送到服务器。而 "),e("code",[s._v("git commit")]),s._v(" 会提交所有已经被 "),e("code",[s._v("git add")]),s._v(" 的文件。")]),s._v(" "),e("li",[s._v("如果你现在已经更改了很多文件，但是你只想先提交其中的一部分给其他人看，另外一部分你还需要再修改下，该怎么做？先 "),e("code",[s._v("git add")]),s._v(" 你需要提交的文件，然后再 "),e("code",[s._v("git commit")]),s._v(" 这些文件即可。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);