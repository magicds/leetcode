# 检查是否提供了参数
if ($args.Length -eq 0) {
    Write-Host "请输入问题序号作为参数。"
    $problem_number = Read-Host
} else {
    $problem_number = $args[0]
}

# 目标目录路径
$target_directory = Join-Path $PSScriptRoot "$problem_number"


# 检查目录是否存在
if (Test-Path $target_directory) {
    Write-Host "目录 $problem_number 已存在。"
    exit
}

# 创建目录和文件
New-Item -ItemType Directory -Path "$target_directory/js" -Force
New-Item -ItemType Directory -Path "$target_directory/ts" -Force
New-Item -ItemType Directory -Path "$target_directory/go" -Force
New-Item -ItemType Directory -Path "$target_directory/python3" -Force

New-Item -ItemType File -Path "$target_directory/js/index.js"
New-Item -ItemType File -Path "$target_directory/ts/index.ts"
New-Item -ItemType File -Path "$target_directory/go/main.go"
New-Item -ItemType File -Path "$target_directory/python3/main.py"

# 打印完成信息
Write-Host "创建 $problem_number 完成。"
