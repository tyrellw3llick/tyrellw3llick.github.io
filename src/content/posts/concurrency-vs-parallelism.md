---
title: Concurrency vs Parallelism
description: No, you are not going to be able to run your code faster by just adding more cores.
pubDate: 04/07/2025
image: {
	src: https://miro.medium.com/v2/resize:fit:1170/1*cFUbDHxooUtT9KiBy-0SXQ.jpeg,
	alt: Graph infographic
}
tags: [low-level]
---

At their core, both concurrency and parallelism relate to the idea of multiple things happening seemingly or actually at the same time. However, the distinction lies in how these multiple things are managed and executed

### Concurrency

According to the Oxford Dictionary, concurrency means "**two or more things happening at the same time**". However, in computer science, this definition isn't precise enough because *parallelism* would also fit this description.

A more helpful understanding, is that **concurrency is about managing multiple tasks or processes within an overlapping time period**.

It's about the structure of your program, designing it so that **different parts can be worked on independently**, even if they don't execute at the exact same instant.

Think of it as dealing with lots of things at once. Concurrency allows tasks to start, run, and complete in overlapping time periods, but *they might not be running at the very same instant*.

In a single-core CPU, concurrency is often achieved through *time-slicing*, where the CPU rapidly switches between tasks, creating the **illusion** of simultaneous execution.

This is sometimes referred to as *pseudo-parallelism*. Concurrency can be broadly understood as multi-threading, or it can involve other mechanisms like asynchronous tasks. The key is that multiple tasks are in progress within the application.

### Parallelism

On the other hand, actually executing multiple tasks or parts of a task simultaneously.

**It's about doing lots of things at once**.

This typically requires multiple processing units, such as multiple CPU cores or multiple processors.

To achieve parallel processing, specialized programming is needed to utilize these multiple CPU cores effectively.

In parallelism, more than one process is actually executed at the same time. If a task is broken down into subtasks and each subtask is executed on a different CPU core, that's full parallelism.

**Parallelism is a subset of concurrency that is enabled by hardware.**

#### Key differences

| Feature   | Concurrency                                                       | Parallelism                                             |
| --------- | ----------------------------------------------------------------- | ------------------------------------------------------- |
| Execution | Tasks run in overlapping periods (may nor be in the same instant) | Tasks run literally at the same time                    |
| CPU Cores | Needs only one separate CPU core                                  | Needs more than one CPU core                            |
| Focus     | Managing multiple different tasks simultaneously                  | Running multiple instruction sequences at the same time |
| Mechanism | Often achieved by time-slicing (in single-core) or threading      | Achieved by multitasking (utilizing multiple cores)     |
| Nature    | Correctness, managing resources efficiently during waiting        | Speeding up execution of tasks                          |

![Concurrency vs Parallelism graph](https://dynamogeeks.com/wp-content/uploads/2024/08/Concurrency-vs-Parallelism.gif)

## Concurrency: A deeper dive

Concurrency is about **dealing with waiting**. Often, in programs, tasks need to wait for external operations like reading from a disk, fetching data from a network, or user input.

In a purely sequential program, the entire program would stall during these waiting periods.

*Concurrency provides a way to make progress on other tasks while one task is waiting.*

- **The Illusion of Simultaneity:** On a single-core processor, the operating system rapidly switches the CPU's attention between different threads or tasks. This switching happens so quickly that it appears to the user (and sometimes to the program's logic at a higher level) as if multiple tasks are running simultaneously. However, at any given micro-instant, *only one task is truly executing*.
- **Task Interleaving and Context Switching:** The mechanism behind this illusion is called task interleaving. The CPU works on a small part of one task, then switches to another task, works on a part of that, and so on. The act of switching between tasks is called context switching.

### Concurrency Mechanisms

- **Threading:** Creating multiple threads within a single process. Each thread can execute a part of the program concurrently.
- **Asynchronous Tasks:** Using mechanisms like async/await to structure code that can pause and resume execution without blocking the main thread.
- **Event Loops:** A common model in languages like JavaScript (Node.js) where a single thread handles multiple asynchronous events in a non-blocking way.

## Parallelism in detail

*Parallelism focuses on speed.*

By utilizing multiple processing units, you can reduce the overall time it takes to complete a task by working on different parts of it simultaneously.

In a parallel system, when you have multiple threads or processes running on different CPU cores, they are genuinely executing instructions at the exact same moment. This allows for a direct speedup for tasks that can be broken down into independent subtasks.

Modern computers often have multi-core CPUs, and servers can have multiple processors. Parallel programming aims to take advantage of this hardware to **execute code faster**.

### Parallel computing and programming

Parallel computing is a type of computation where multiple processors carry out many processes at the same time.

Parallel programming involves writing code specifically designed to utilize these multiple CPU cores.

*This often involves splitting tasks into subtasks that can be executed independently.*

### Parallelism Mechanisms

- **Multiprocessing:** Creating multiple independent processes, each with its own memory space.
- **GPU Parallelism:** Utilizing the massive parallel processing capabilities GPUs for highly parallel tasks like machine learning, graphics rendering, and scientific computing. Technologies like CUDA and OpenCL enable this.
- **Instruction-Level Parallelism:** Modern CPUs also employ techniques at the hardware level to execute multiple instructions simultaneously within a single core (though this is often transparent to the programmer).

> *The primary goal of parallelism is to reduce the execution time of computationally intensive tasks by performing multiple operations concurrently on different processing units.*

## Use Cases: When to Use Which?

### Concurrency is well-suited for

- **I/O-bound tasks:** Waiting for network requests, file I/O, user input. Concurrency allows the program to remain responsive and make progress on other tasks while waiting.
- **Managing multiple independent operations:** Even if they can't run at the same instant, structuring them concurrently can improve overall efficiency.
- **Improving responsiveness in user interfaces:** Preventing the UI from freezing while background tasks are running.

### Parallelism is beneficial for

- **CPU-bound tasks:** Intensive computations, data analysis, scientific simulations, image and video processing. Parallelism can significantly reduce the execution time by utilizing multiple CPU cores.
- **Tasks that can be broken down into independent subtasks:** Where each subtask can be executed simultaneously on different processing units.
- **Increasing throughput:** By processing more data or handling more requests in a given amount of time.

### Avoid concurrency or parallelism when

- **Tasks are very lightweight:** The overhead of creating and managing threads or processes might outweigh the benefits.
- **Tasks require very frequent synchronization and communication:** Excessive locking and data sharing can lead to performance bottlenecks and complex issues like deadlocks.
- **Tasks are primarily memory-bound:** If the bottleneck is the speed of memory access rather than CPU processing, adding more cores or using concurrency might not provide significant improvements.

## Advanced Considerations

### Amdahl's Law

The potential speedup of a program using parallelism is limited by the fraction of the program that can be parallelized.

Even with a large number of processors, the sequential parts of the program will eventually dominate and **limit** the overall speedup.

### Synchronization and Potential Issues

When multiple concurrent or parallel tasks share resources (like data), you need mechanisms to synchronize their access to prevent **race conditions** and ensure data integrity.

Common synchronization primitives include locks, semaphores, and atomic operations.

However, improper use of these can lead to problems like **deadlocks** (where tasks are blocked indefinitely, waiting for each other) and **livelocks** (where tasks repeatedly yield to each other without making progress).
