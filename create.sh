#!/bin/bash

# 接收问题序号作为参数
if [ $# -eq 0 ]; then
    echo "请输入问题序号作为参数。"
    read problem_number
else
    problem_number=$1
fi


# 获取脚本所在目录
script_dir="$(dirname "$0")"
# 目标目录路径
target_directory="$script_dir/$problem_number"

# 检查目录是否存在
if [ -d "$target_directory" ]; then
    echo "目录 $problem_number 已存在。"
    exit 1
fi

# 创建目录和文件
mkdir -p "$target_directory/js"
mkdir -p "$target_directory/ts"
mkdir -p "$target_directory/go"
mkdir -p "$target_directory/python3"

touch "$target_directory/js/index.js"
touch "$target_directory/ts/index.ts"
touch "$target_directory/go/main.go"
touch "$target_directory/python3/main.py"

# 打印完成信息
echo "创建 $problem_number 完成。"
