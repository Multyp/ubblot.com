---
sidebar_position: 1
title: Assembleur
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>

<div style={{ fontFamily: 'Poppins, sans-serif' }}>
  <div>
    &nbsp; &nbsp;L'Assembleur est un <span style={{ color: 'var(--md-basic-highlight)' }}>langage de programmation de bas niveau</span> qui ressemble étroitement aux instructions du langage machine d'un processeur (CPU) d'ordinateur. Il offre une représentation plus lisible par l'homme des instructions en langage machine, ce qui facilite la tâche des programmeurs pour écrire et comprendre le code au niveau matériel.
  </div>
  <div>
    &nbsp; &nbsp;Les programmes en assembleur sont composés d'instructions mnémoniques qui correspondent directement à l'ensemble d'instructions du CPU, ainsi que de représentations symboliques des adresses mémoire et des données. On utilise l'assembleur notamment pour optimiser les performances, accéder directement aux ressources matérielles et développer des logiciels pour les systèmes embarqués, les pilotes de périphériques et autres applications de bas niveau.
  </div>

  <br/>
  ## <span style={{ color: 'var( --md-secondary-title-color)' }}>Registres</span>

  <div>
    &nbsp; &nbsp;Les registres sont de petits emplacements de stockage à l'intérieur du CPU qui retiennent temporairement des données pendant l'exécution des instructions par le processeur. Ils jouent un rôle crucial dans l'architecture informatique, facilitant le traitement efficace des données et des instructions. En programmation en assembleur, on manipule directement ces registres pour effectuer diverses opérations et calculs.
  </div>

  <br/>
  ### <span style={{ color: '#30b05c' }}>Registres pour les arguments</span>

  <table>
    <thead>
      <tr>
        <th>Index des arguments (ARGV)</th>
        <th>Registre 64 bits</th>
        <th>Registre 32 bits</th>
        <th>Registre 16 bits</th>
        <th>Registres 8 bits</th>
        <th>Usage général</th>
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
  ### <span style={{ color: '#30b05c' }}>Registres pour la valeur de retour</span>

  <table>
    <thead>
      <tr>
        <th>Taille du registre de retour (RET)</th>
        <th>Registres</th>
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
  ### <span style={{ color: '#30b05c' }}>Registres pour les variables libres d'utilisation</span>

  <table>
    <thead>
      <tr>
        <th>Registres libres à utiliser en 64 bits (VAR)</th>
        <th>Registres 32 bits</th>
        <th>Registres 16 bits</th>
        <th>Registres 8 bits</th>
        <th>Usage général</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ color: 'var( --md-table-values-color)' }}>RBX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>EBX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>BX</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>BH / BL</td>
        <td>Variable régulière ou commune</td>
      </tr>
      <tr>
        <td style={{ color: 'var( --md-table-values-color)' }}>RBP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>EBP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>BP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>BPL</td>
        <td>Pointeur de trame (ENTER, LEAVE…)</td>
      </tr>
      <tr>
        <td style={{ color: 'var( --md-table-values-color)' }}>RSP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>ESP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>SP</td>
        <td style={{ color: 'var( --md-table-values-color)' }}>SPL</td>
        <td>Pointeur de pile (utilisé avec PUSH, POP…)</td>
      </tr>
    </tbody>
  </table>

  <br/>
  ## <span style={{ color: 'var( --md-secondary-title-color)' }}>Instructions</span>

  <div>
    &nbsp; &nbsp;En assembleur, les instructions sont les éléments fondamentaux d'un programme. Elles dirigent le CPU pour effectuer des tâches spécifiques, telles que des opérations arithmétiques, la manipulation de la mémoire ou des décisions de flux de contrôle. Chaque déclaration correspond directement à une instruction en langage machine comprise par le CPU.
  </div>

  <br/>
  ### <span style={{ color: '#30b05c' }}>Instructions de saut conditionnel</span>

  <div>
    &nbsp; &nbsp;Les instructions de saut sont utilisées pour modifier le flux de l'exécution du programme en fonction de certaines conditions. Elles permettent au programme de "sauter" vers une autre partie du code en fonction du résultat d'une opération précédente ou de l'état de certains drapeaux dans le CPU. Les instructions de saut sont cruciales pour implémenter des branchements conditionnels et des boucles dans les programmes en assembleur.
  </div>

  <div>
    Voici une description des <span style={{ color: 'var(--md-basic-highlight)' }}>`JMP`</span> instructions courantes et leurs significations :
  </div>

  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JMP`</span> : Saut (sans condition)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JA/JNBE`</span> (au-dessus) : Saut si au-dessus (non signé)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNC/JAE/JNB`</span> : Saut si le drapeau de retenue est clair (plus grand ou égal non signé)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JC/JB/JNAE`</span> (en dessous) : Saut si le drapeau de retenue est défini (plus petit non signé)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JE/JZ`</span> : Saut si égal (après CMP ou soustraction)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNE/JNZ`</span> : Saut si différent</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JP/JPE`</span> : Saut si parité paire</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNP/JPO`</span> : Saut si parité impaire</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JO`</span> : Saut si débordement</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNO`</span> : Saut si pas de débordement</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JS`</span> : Saut si le drapeau de signe est défini (négatif)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JNS`</span> : Saut si le drapeau de signe est clair</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JG/JNLE`</span> (plus grand) : Saut si plus grand (signé)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JGE/JNL`</span> : Saut si plus grand ou égal (signé)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JL/JNGE`</span> (plus petit) : Saut si plus petit (signé)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JLE/JNG`</span> : Saut si plus petit ou égal (signé)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JCXZ`</span> : Saut si le registre CX est zéro (par exemple, pour tester comment une boucle LOOPZ REPZ s'est terminée)</li>
  </ul>

  <div>
    &nbsp; &nbsp;Ces instructions sont essentielles pour implémenter une logique conditionnelle et contrôler le flux d'exécution dans les programmes en assembleur. Comprendre comment et quand utiliser les instructions de saut est crucial pour écrire un code efficace et fonctionnel.
  </div>

  <br/>
  ### <span style={{ color: '#30b05c' }}>Instructions arithmétiques et logiques</span>

  <div>
    &nbsp; &nbsp;En assembleur, les instructions arithmétiques et logiques sont utilisées pour effectuer des opérations mathématiques et des évaluations logiques sur des données stockées dans des registres ou des emplacements mémoire. Ces instructions sont fondamentales pour implémenter des algorithmes et manipuler efficacement des données.
  </div>

  <h4>Instructions arithmétiques</h4>
  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`ADD`</span> : Ajouter l'opérande source à l'opérande destination</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`SUB`</span> : Soustraire l'opérande source de l'opérande destination</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`INC`</span> : Incrémenter l'opérande destination de 1</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`DEC`</span> : Décrémenter l'opérande destination de 1</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MUL`</span> : Multiplier des opérandes non signés</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`IMUL`</span> : Multiplier des opérandes signés</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`DIV`</span> : Diviser des opérandes non signés</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`IDIV`</span> : Diviser des opérandes signés</li>
  </ul>

  <h4>Instructions logiques</h4>
  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`AND`</span> : Opération ET logique</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`OR`</span> : Opération OU logique</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`XOR`</span> : Opération OU exclusif logique</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`NOT`</span> : Opération NON logique (complément à un)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`SHL/SHR`</span> : Décalage à gauche/droite</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`ROL/ROR`</span> : Rotation à gauche/droite</li>
  </ul>

  <br/>
  ### <span style={{ color: '#30b05c' }}>Instructions de manipulation de mémoire</span>

  <div>
    &nbsp; &nbsp;Manipuler la mémoire est une tâche courante en assembleur. Ces instructions facilitent la lecture depuis et l'écriture dans des emplacements mémoire.
  </div>

  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`PUSH`</span> : Empiler une valeur sur la pile</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`POP`</span> : Dépiler une valeur de la pile</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`CALL`</span> : Appeler une procédure ou une fonction</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`RET`</span> : Retourner d'une procédure</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOV`</span> : Déplacer des données entre la mémoire et les registres</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSB`</span> : Déplacer un octet de DS:[SI] à ES:[DI]</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSW`</span> : Déplacer un mot de DS:[SI] à ES:[DI]</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSD`</span> : Déplacer un double mot de DS:[SI] à ES:[DI]</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSX`</span> : Déplacer avec extension de signe (extension de signe d'un octet à un mot ou d'un mot à un double mot)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVZX`</span> : Déplacer avec extension nulle (extension nulle d'un octet à un mot ou d'un mot à un double mot)</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`MOVSX/MOVZX`</span> (registre) : Déplacer avec extension de signe ou de zéro d'un registre à un autre</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`LEA`</span> : Charger l'adresse effective (calculer l'adresse et la stocker dans la destination)</li>
  </ul>

  <br/>
  ### <span style={{ color: '#30b05c' }}>Instructions de flux de contrôle</span>

  <div>
    &nbsp; &nbsp;Les instructions de flux de contrôle déterminent l'ordre dans lequel les instructions sont exécutées dans un programme. Elles incluent des instructions de branchement et de bouclage.
  </div>

  <ul>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`CMP`</span> : Comparer deux opérandes</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`JMP`</span> : Saut inconditionnel</li>
    <li><a href="/fr/docs/Global%20Dictionnary/Global%20Dictionnary/Assembly#instructions-de-saut-conditionnel" style={{ color: 'var(--md-basic-highlight)' }}>`Autres sauts`</a>: Sauts conditionnels basés sur les résultats de la comparaison</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`LOOP`</span> : Décrémenter le compteur de boucle et sauter si le compteur n'est pas nul</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`CALL`, `RET`</span> : Appeler et retourner des sous-routines</li>
    <li><span style={{ color: 'var(--md-basic-highlight)' }}>`INT`</span> : Interruption logicielle</li>
  </ul>

  <div>
    [**Cet article est toujours en cours, des mises à jour à venir...**]
  </div>
</div>
