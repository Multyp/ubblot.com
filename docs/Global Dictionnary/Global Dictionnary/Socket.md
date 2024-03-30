---
sidebar_position: 1
title: Sockets
---

<link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
<div style={{ fontFamily: 'Poppins, sans-serif' }}>
  <div>
    &nbsp; &nbsp;A socket is a <span style={{ color: 'var(--md-basic-highlight)' }}>communication endpoint</span> that allows different processes to communicate with each other over a network. It enables data transfer between a client and a server application by establishing a connection and providing a communication channel for sending and receiving data packets.
  </div>
  <div>
    &nbsp; &nbsp;Sockets use a combination of <span style={{ color: 'var(--md-basic-highlight)' }}>IP addresses and port numbers</span> to identify the source and destination of data, facilitating the exchange of information between devices on the network.
  </div>
  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Types of Sockets</span>
  <div>
    &nbsp; &nbsp;Sockets come in various types, each serving different purposes in network communication. Some common types of sockets include:
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Stream Sockets</span>
  <div>
    &nbsp; &nbsp;Stream sockets, also known as <span style={{ color: 'var(--md-basic-highlight)' }}>TCP sockets</span>, provide a reliable, connection-oriented communication channel. They guarantee the delivery of data packets in the same order they were sent and ensure error-free transmission.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Datagram Sockets</span>
  <div>
    &nbsp; &nbsp;Datagram sockets, also known as <span style={{ color: 'var(--md-basic-highlight)' }}>UDP sockets</span>, offer an unreliable, connectionless communication channel. They are suitable for applications where real-time communication is crucial, and data loss or out-of-order delivery is acceptable.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Raw Sockets</span>
  <div>
    &nbsp; &nbsp;Raw sockets provide access to the underlying communication protocols, allowing applications to send and receive custom-crafted packets. They are often used for network diagnostic tools, protocol development, and low-level network access.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>Sequential Packet Sockets</span>
  <div>
    &nbsp; &nbsp;Sequential packet sockets are a relatively less common type of socket that preserves message boundaries in the data stream. They are useful for applications that require message-oriented communication with minimal overhead.
  </div>
  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Socket Communication Process</span>
  <div>
    &nbsp; &nbsp;The communication process using sockets typically involves the following steps:
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>1. Socket Creation</span>
  <div>
    &nbsp; &nbsp;Involves creating a socket object that represents the endpoint for communication. The socket can be configured with parameters such as the socket type (stream, datagram, etc.), protocol, and address family.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>2. Binding</span>
  <div>
    &nbsp; &nbsp;Binding associates the socket with a specific IP address and port number on the local machine. For server sockets, this allows clients to connect to the server at the specified address.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>3. Listening (for Servers)</span>
  <div>
    &nbsp; &nbsp;For server sockets, this involves waiting for incoming connection requests from clients. The server socket enters a listening state, ready to accept incoming connections.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>4. Connection Establishment</span>
  <div>
    &nbsp; &nbsp;Involves establishing a connection between the client and server sockets. For stream sockets, this typically involves a handshake process to establish a reliable connection.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>5. Data Transfer</span>
  <div>
    &nbsp; &nbsp;Once the connection is established, data transfer can occur bidirectionally between the client and server sockets. Applications can send and receive data packets using the established communication channel.
  </div>
  <br/>
  ### <span style={{ color: 'var(--md-tertiary-title-color)' }}>6. Connection Termination</span>
  <div>
    &nbsp; &nbsp;At the end of the communication session, the client and server sockets gracefully close the connection, releasing allocated resources and terminating the communication channel.
  </div>
  <br/>
  ## <span style={{ color: 'var(--md-secondary-title-color)' }}>Conclusion</span>
  <div>
    &nbsp; &nbsp;Sockets play a vital role in network communication, enabling applications to exchange data over local or global networks. Understanding the types of sockets available and the communication process is essential for developing networked applications that leverage the power of networking.
  </div>
  <div>
    [**This article is still in progress, updates coming soon...**]
  </div>
</div>
