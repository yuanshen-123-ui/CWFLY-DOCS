# 服务器搭建

## 系统要求

| 组件 | 要求 |
|------|------|
| 操作系统 | Windows / Linux |
| C++ 编译器 | GCC / Clang / MSVC（编译 fsd-master 时需要） |
| Python | 3.10 或更高版本（运行 fsd-py 时需要） |
| 数据库 | MySQL 8.0+ |

## C++ 版本（fsd-master）

```bash
cd fsd-master
mkdir build && cd build
cmake ..
make
./fsd
```

## Python 版本（fsd-py）

```bash
cd fsd-py
pip install -r requirements.txt
python main.py
```

## 配置文件

编辑 `fsd.conf` 配置服务器参数：

```ini
[server]
port = 6809
max_clients = 500

[fsd9]
enabled = true
port = 6809

[database]
host = localhost
port = 3306
name = cwfly
```