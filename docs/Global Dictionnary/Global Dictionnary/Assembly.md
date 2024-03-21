---
sidebar_position: 1
title: Assembly
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>

<div style={{ fontFamily: 'Poppins, sans-serif' }}>
  <div>
    &nbsp; &nbsp;Assembly language is a <span style={{ color: 'var(--md-basic-highlight)' }}>low-level programming language</span> that closely resembles the machine language instructions of a computer's central processing unit (CPU). It provides a more human-readable representation of machine code instructions, making it easier for programmers to write and understand code at the hardware level.
  </div>
  <div>
    &nbsp; &nbsp;Assembly language programs consist of mnemonic instructions that correspond directly to the CPU's instruction set, along with symbolic representations of memory addresses and data. Programmers use assembly language to optimize performance, access hardware resources directly, and develop software for embedded systems, device drivers, and other low-level applications.
  </div>

  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Registers</span>

  <div>
    &nbsp; &nbsp;Registers are small storage locations within the CPU that hold data temporarily while the processor is executing instructions. They play a crucial role in computer architecture, facilitating the efficient processing of data and instructions. In assembly language programming, programmers often directly manipulate these registers to perform various operations and computations.
  </div>

  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Registers for Arguments</span>

  <table>
    <thead>
      <tr>
        <th>(ARGV) Argument Index</th>
        <th>64-bit Register</th>
        <th>32-bit Register</th>
        <th>16-bit Register</th>
        <th>8-bit Registers</th>
        <th>General Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>RDI</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>EDI</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>DI</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>DIL</td>
        <td>Destination</td>
      </tr>
      <tr>
        <td>2</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>RSI</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>ESI</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>SI</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>SIL</td>
        <td>Source</td>
      </tr>
      <tr>
        <td>3</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>RDX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>EDX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>DX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>DH / DL</td>
        <td></td>
      </tr>
      <tr>
        <td>4</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>RCX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>ECX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>CX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>CH / CL</td>
        <td></td>
      </tr>
    </tbody>
  </table>

  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Registers for Return Value</span>

  <table>
    <thead>
      <tr>
        <th>(RET) Return Register Size</th>
        <th>Registers</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>64 bits</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>RAX</td>
      </tr>
      <tr>
        <td>32 bits</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>EAX</td>
      </tr>
      <tr>
        <td>16 bits</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>AX</td>
      </tr>
      <tr>
        <td>8 bits</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>AH / AL</td>
      </tr>
    </tbody>
  </table>

  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Registers for Free To Use Variables</span>

  <table>
    <thead>
      <tr>
        <th>(VAR) Free To Use Registers in 64 bits</th>
        <th>32-bit Registers</th>
        <th>16-bit Registers</th>
        <th>8-bit Registers</th>
        <th>General Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ color: 'var( --md-table-values-color)' }}>RBX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>EBX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>BX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>BH / BL</td>
        <td>Regular or Common Variable</td>
      </tr>
      <tr>
        <td style={{ color: 'var( --md-table-values-color)' }}>RBP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>EBP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>BP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>BPL</td>
        <td>Frame pointer (ENTER, LEAVE…)</td>
      </tr>
      <tr>
        <td style={{ color: 'var( --md-table-values-color)' }}>RSP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>ESP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>SP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>SPL</td>
        <td>Stack pointer (used with PUSH, POP…)</td>
      </tr>
    </tbody>
  </table>

  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Instructions</span>

  <div>
    &nbsp; &nbsp;In assembly language programming, instructions are the fundamental building blocks of a program. They direct the CPU to perform specific tasks, such as arithmetic operations, memory manipulation, or control flow decisions. Each statement corresponds directly to a machine language instruction understood by the CPU.
  </div>

  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Conditional Jumps Instructions</span>

  <div>
    &nbsp; &nbsp;Jump statements are used to alter the flow of program execution based on certain conditions. They allow the program to "jump" to a different part of the code based on the result of a previous operation or the state of certain flags within the CPU. Jump statements are crucial for implementing conditional branching and loops in assembly language programs.
  </div>

  <div>
    Here's a breakdown of common <span style={{ color: 'var(--md-basic-highlight)' }}>`JMP`</span> statements and their meanings:
  </div>

  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JMP`</span>: Jump (no condition)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JA/JNBE`</span> (above): Jump if above (unsigned)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNC/JAE/JNB`</span>: Jump if carry flag is clear (unsigned greater than or equal)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JC/JB/JNAE`</span> (below): Jump if carry flag is set (unsigned less than)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JE/JZ`</span>: Jump if equal (after CMP or subtraction)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNE/JNZ`</span>: Jump if not equal</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JP/JPE`</span>: Jump if parity even</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNP/JPO`</span>: Jump if parity odd</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JO`</span>: Jump if overflow</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNO`</span>: Jump if no overflow</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JS`</span>: Jump if sign flag is set (negative)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNS`</span>: Jump if sign flag is clear</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JG/JNLE`</span> (greater): Jump if greater (signed)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JGE/JNL`</span>: Jump if greater than or equal (signed)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JL/JNGE`</span> (less): Jump if less (signed)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JLE/JNG`</span>: Jump if less than or equal (signed)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JCXZ`</span>: Jump if CX register is zero (e.g., for testing how a LOOPZ REPZ loop ended)</li>
  </ul>

  <div>
    &nbsp; &nbsp;These statements are essential for implementing conditional logic and controlling the flow of execution in assembly language programs. Understanding how and when to use jump statements is crucial for writing efficient and functional code.
  </div>

  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Arithmetic and Logical Instructions</span>

  <div>
    &nbsp; &nbsp;In assembly language programming, arithmetic and logical instructions are used to perform mathematical operations and logical evaluations on data stored in registers or memory locations. These instructions are fundamental for implementing algorithms and manipulating data effectively.
  </div>

  <h4>Arithmetic Instructions</h4>
  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`ADD`</span>: Add source operand to destination operand</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`SUB`</span>: Subtract source operand from destination operand</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`INC`</span>: Increment destination operand by 1</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`DEC`</span>: Decrement destination operand by 1</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MUL`</span>: Multiply unsigned operands</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`IMUL`</span>: Multiply signed operands</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`DIV`</span>: Divide unsigned operands</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`IDIV`</span>: Divide signed operands</li>
  </ul>

  <h4>Logical Instructions</h4>
  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`AND`</span>: Bitwise AND operation</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`OR`</span>: Bitwise OR operation</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`XOR`</span>: Bitwise XOR operation</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`NOT`</span>: Bitwise NOT operation (one's complement)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`SHL/SHR`</span>: Shift left/right</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`ROL/ROR`</span>: Rotate left/right</li>
  </ul>

  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Memory Manipulation Instructions</span>

  <div>
    &nbsp; &nbsp;Manipulating memory is a common task in assembly language programming. These instructions facilitate reading from and writing to memory locations.
  </div>

  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`PUSH`</span>: Push value onto the stack</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`POP`</span>: Pop value from the stack</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`CALL`</span>: Call a procedure or function</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`RET`</span>: Return from a procedure</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOV`</span>: Move data between memory and registers</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSB`</span>: Move byte from DS:[SI] to ES:[DI]</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSW`</span>: Move word from DS:[SI] to ES:[DI]</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSD`</span>: Move doubleword from DS:[SI] to ES:[DI]</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSX`</span>: Move with sign extension (sign-extend byte to word or word to doubleword)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVZX`</span>: Move with zero extension (zero-extend byte to word or word to doubleword)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSX/MOVZX`</span> (register): Move with sign or zero extension from register to register</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`LEA`</span>: Load effective address (calculate address and store in destination)</li>
  </ul>

  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Control Flow Instructions</span>

  <div>
    &nbsp; &nbsp;Control flow instructions determine the order in which instructions are executed in a program. They include branching and looping instructions.
  </div>

  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`CMP`</span>: Compare two operands</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JMP`</span>: Unconditional jump</li>
    <li><a href="/docs/Global%20Dictionnary/Global%20Dictionnary/Assembly#conditionnal-jumps-instructions" style={{ color: 'var(--md-basic-highlight)' }}>`All jumps`</a>: Conditional jumps based on comparison results</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`LOOP`</span>: Decrement loop counter and jump if counter is not zero</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`CALL`, `RET`</span>: Call and return from subroutines</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`INT`</span>: Software interrupt</li>
  </ul>

  <div>
    [**This article is still in progress, updates coming soon...**]
  </div>
</div>
