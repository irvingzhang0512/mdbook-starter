# 文档语法测试


<!-- toc -->


## 1. 前言

本文档测试 Markdown 的各种语法

## 2. 代码

### 2.1 Python

测试一下 Python 源码

```python
import numpy as np

a = np.zeros(1, 3)
```

### 2.2 C++

```cpp
#include "stdio.h"

int main() {
    printf("Hello World!\n");
    return 0;
}
```

### 2.3 shell

```bash
python train.py --cfg /path/to/config.json
```


### 2.4 json

```json
{
    "name": "irving",
    "age": 15
}
```

## 3. TOC

看文章开头

## 4. 公式

$$ \nabla f(x) \in \mathbb{R}^n, $$

## 6. mermaid

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```