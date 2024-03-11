---
sidebar_position: 1
---

&nbsp; &nbsp;Assembly language is a low-level programming language that closely resembles the machine language instructions of a computer's central processing unit (CPU). It provides a more human-readable representation of machine code instructions, making it easier for programmers to write and understand code at the hardware level.

&nbsp; &nbsp;Assembly language programs consist of mnemonic instructions that correspond directly to the CPU's instruction set, along with symbolic representations of memory addresses and data. Programmers use assembly language to optimize performance, access hardware resources directly, and develop software for embedded systems, device drivers, and other low-level applications.

## Registers

&nbsp; &nbsp;Registers are small storage locations within the CPU that hold data temporarily while the processor is executing instructions. They play a crucial role in computer architecture, facilitating the efficient processing of data and instructions. In assembly language programming, programmers often directly manipulate these registers to perform various operations and computations.

### Registers for Arguments

| (ARGV) Argument Index | 64-bit Register | 32-bit Register | 16-bit Register | 8-bit Registers | General Purpose |
| --- | --- | --- | --- | --- | --- |
| 1 | RDI | EDI | DI | DIL | Destination |
| 2 | RSI | ESI | SI | SIL | Source |
| 3 | RDX | EDX | DX | DH / DL |  |
| 4 | RCX | ECX | CX | CH / CL |  |

### Registers for Return Value

| (RET) Return Register Size | Registers |
| --- | --- |
| 64 bits | RAX |
| 32 bits | EAX |
| 16 bits | AX |
| 8 bits | AH / AL |

### Registers for Free To Use Variables

| (VAR) Free To Use Registers in 64 bits | 32-bit Registers | 16-bit Registers | 8-bit Registers | General Purpose |
| --- | --- | --- | --- | --- |
| RBX | EBX | BX | BH / BL | Regular or Common Variable |
| RBP | EBP | BP | BPL | Frame pointer (ENTER, LEAVE…) |
| RSP | ESP | SP | SPL | Stack pointer (used with PUSH, POP…) |


## Instructions

&nbsp; &nbsp;In assembly language programming, instructions are the fundamental building blocks of a program.
They direct the CPU to perform specific tasks, such as arithmetic operations, memory manipulation, or
control flow decisions. Each statement corresponds directly to a machine language instruction understood by
the CPU.

### Conditionnal Jumps Instructions

&nbsp; &nbsp;Jump statements are used to alter the flow of program execution based on certain conditions.
They allow the program to "jump" to a different part of the code based on the result of
a previous operation or the state of certain flags within the CPU. Jump statements are
crucial for implementing conditional branching and loops in assembly language programs.

Here's a breakdown of common `JMP` statements and their meanings:

- `JMP`: Jump (no condition) ;
- `JA/JNBE` (above): Jump if above (unsigned) ;
- `JNC/JAE/JNB`: Jump if carry flag is clear (unsigned greater than or equal) ;
- `JC/JB/JNAE` (below): Jump if carry flag is set (unsigned less than) ;
- `JE/JZ`: Jump if equal (after CMP or subtraction) ;
- `JNE/JNZ`: Jump if not equal ;
- `JP/JPE`: Jump if parity even ;
- `JNP/JPO`: Jump if parity odd ;
- `JO`: Jump if overflow ;
- `JNO`: Jump if no overflow ;
- `JS`: Jump if sign flag is set (negative) ;
- `JNS`: Jump if sign flag is clear ;
- `JG/JNLE` (greater): Jump if greater (signed) ;
- `JGE/JNL`: Jump if greater than or equal (signed) ;
- `JL/JNGE` (less): Jump if less (signed) ;
- `JLE/JNG`: Jump if less than or equal (signed) ;
- `JCXZ`: Jump if CX register is zero (e.g., for testing how a LOOPZ REPZ loop ended).

&nbsp; &nbsp;These statements are essential for implementing conditional logic and
controlling the flow of execution in assembly language programs.
Understanding how and when to use jump statements is crucial for writing efficient and functional code.

### Arithmetic and Logical Instructions

&nbsp; &nbsp;In assembly language programming, arithmetic and logical instructions are used to
perform mathematical operations and logical evaluations on data stored in registers
or memory locations. These instructions are fundamental for implementing algorithms and manipulating data effectively.

**Arithmetic Instructions**
- `ADD`: Add source operand to destination operand
- `SUB`: Subtract source operand from destination operand
- `INC`: Increment destination operand by 1
- `DEC`: Decrement destination operand by 1
- `MUL`: Multiply unsigned operands
- `IMUL`: Multiply signed operands
- `DIV`: Divide unsigned operands
- `IDIV`: Divide signed operands

**Logical Instructions**
- `AND`: Bitwise AND operation
- `OR`: Bitwise OR operation
- `XOR`: Bitwise XOR operation
- `NOT`: Bitwise NOT operation (one's complement)
- `SHL/SHR`: Shift left/right
- `ROL/ROR`: Rotate left/right

### Memory Manipulation Instructions

&nbsp; &nbsp;Manipulating memory is a common task in assembly language programming.
These instructions facilitate reading from and writing to memory locations.

- `PUSH`: Push value onto the stack
- `POP`: Pop value from the stack
- `CALL`: Call a procedure or function
- `RET`: Return from a procedure
- `MOV`: Move data between memory and registers
- `MOVSB`: Move byte from DS:[SI] to ES:[DI]
- `MOVSW`: Move word from DS:[SI] to ES:[DI]
- `MOVSD`: Move doubleword from DS:[SI] to ES:[DI]
- `MOVSX`: Move with sign extension (sign-extend byte to word or word to doubleword)
- `MOVZX`: Move with zero extension (zero-extend byte to word or word to doubleword)
- `MOVSX/MOVZX` (register): Move with sign or zero extension from register to register
- `LEA`: Load effective address (calculate address and store in destination)

### Control Flow Instructions

&nbsp; &nbsp;Control flow instructions determine the order in which instructions are executed
in a program. They include branching and looping instructions.

- `CMP`: Compare two operands
- `JMP`: Unconditional jump
- [`All jumps`](/docs/Global%20Dictionnary/Global%20Dictionnary/Assembly#conditionnal-jumps-instructions): Conditional jumps based on comparison results
- `LOOP`: Decrement loop counter and jump if counter is not zero
- `CALL`, `RET`: Call and return from subroutines
- `INT`: Software interrupt


[**This article is still in progress, updates coming soon...**]
