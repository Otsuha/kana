(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{354:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"操作标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作标签"}},[s._v("#")]),s._v(" 操作标签")]),s._v(" "),a("h1",{attrs:{id:"删除本地标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除本地标签"}},[s._v("#")]),s._v(" 删除本地标签")]),s._v(" "),a("p",[s._v("如果标签打错了是可以删除的：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" v0.1\nDeleted tag "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v0.1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("was 95e6db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("因为创建的标签都只存储在本地，不会自动推送到远程。所以，打错的标签可以在本地安全删除。")]),s._v(" "),a("h2",{attrs:{id:"推送标签到远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推送标签到远程仓库"}},[s._v("#")]),s._v(" 推送标签到远程仓库")]),s._v(" "),a("p",[s._v("如果要推送某个标签到远程，使用命令 "),a("code",[s._v("git push origin <tagname>")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v1.0\nTotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", pack-reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nTo https://github.com/xxx/git-learn.git\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         V0.2 -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" V0.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("或者，一次性推送全部尚未推送到远程的本地标签：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--tags")]),s._v("\nTotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("delta "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", pack-reused "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nTo https://github.com/xxx/git-learn.git\n * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("new tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         V1.0.0 -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" V1.0.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"删除远程标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除远程标签"}},[s._v("#")]),s._v(" 删除远程标签")]),s._v(" "),a("p",[s._v("如果标签已经推送到远程，要删除远程标签就麻烦一点，先从本地删除：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" V0.2\nDeleted tag "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'V0.2'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("was d9c82bc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后，从远程删除。删除命令也是push，但是格式如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/v0.2\nTo https://github.com/xxx/git-learn.git\n - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("deleted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("         v0.2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("要看看是否真的从远程库删除了标签，可以登陆 GitHub 查看。")])])}),[],!1,null,null,null);a.default=e.exports}}]);