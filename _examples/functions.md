---
title : Functions
---


```v

fn add(x int, y int) int {
	return x + y
}

fn sub(x int, y int) int {
	return x - y
}

fn main(){
    res1 := add(1, 2)
    println("1+2 = ${res1}")

    res2 := sub(5, 4)
    println("5-4 = ${res2}")
}

```