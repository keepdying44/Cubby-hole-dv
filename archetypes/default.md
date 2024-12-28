---
title: "{{ replace .Name "-" " " | title }}" # 根据文件名生成标题
date: {{ .Date }} # 自动生成文章日期
author: [] # 作者，可填入多名作者 ["Author1", "Author2"]
categories: [] # 分类，可填入多个分类 ["Category1", "Category2"]
tags: [] # 标签，确保为数组格式 ["Tag1", "Tag2"]
description: "" # 用于SEO的文章描述
summary: "" # 用于主页和列表页面的简要描述
weight: 0 # 用于文章排序，1为顶置文章，默认按时间排序
slug: "" # 自定义URL slug，可选

cover: # 文章封面设置
  image: "" # 封面图片URL
  relative: false # 是否使用相对路径

comments: true # 是否开启评论功能
showToc: true # 是否显示目录
TocOpen: false # 目录是否默认展开
autonumbering: false # 目录是否自动编号
searchHidden: false # 是否允许搜索引擎索引该页面
showbreadcrumbs: true # 是否显示路径导航
mermaid: true # 是否启用Mermaid图表支持

---