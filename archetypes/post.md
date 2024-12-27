---
ttitle: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
author: [" "]
categories:
tags:
description: "" # 文章描述，与搜索优化相关
summary: "" # 文章简单描述，会展示在主页
weight: # 输入1可以顶置文章，用来给文章展示排序，不填就默认按时间排序
slug: ""
cover:
    image: ""
    caption: ""
    alt: ""
    relative: false


comments: true
showToc: true # 显示目录
TocOpen: true # 自动展开目录
autonumbering: false # 目录自动编号
searchHidden: false # 该页面可以被搜索到
showbreadcrumbs: true #顶部显示当前路径
mermaid: true

---
