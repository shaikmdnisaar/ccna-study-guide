const SCOR_QUESTS = [
 {
  "id": "SCOR_01_01",
  "mod": 1,
  "name": "Common Threats",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 2,
  "n": 2,
  "quiz": [
   {
    "q": "Which of the following is a \"catch-all\" term used to describe malicious software?",
    "options": [
     "Virus",
     "Infection",
     "Malware",
     "Trojan"
    ],
    "answer": "C",
    "why": "Many use the term virus interchangeably with the term malware. Malware is the general term used to describe malicious software, while a virus is one of many types of malware. There are many categories of malware, including spyware, adware, ransomware, and viruses. ",
    "vid": "1.1.1 On-Premise Threats"
   },
   {
    "q": "Which type of cloud deployment model is most commonly seen?",
    "options": [
     "Public",
     "Private",
     "Community",
     "Hybrid"
    ],
    "answer": "A",
    "why": "Public cloud deployment models are the most common method of cloud computing, including providers such as Microsoft Azure and Amazon Web Services. Public cloud resources are owned and operated by a third-party cloud service provider, offering the advantages of lower cost, less administrative overhead, and ease of scalability.",
    "vid": ""
   }
  ],
  "blurb": "2 real SCOR quiz questions from Module 1 \u2014 Common Threats.",
  "x": 18,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Common Threats \u2014 clear 2 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_01_02",
  "mod": 1,
  "name": "Common Vulnerabilities",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 4,
  "quiz": [
   {
    "q": "What is the overall goal of the Common Weakness Enumeration (CWE) category system?",
    "options": [
     "Providing antivirus and antimalware signatures",
     "Providing vulnerability awareness to professionals",
     "Providing vendor vulnerability feeds",
     "Providing publicly disclosed security flaws"
    ],
    "answer": "B",
    "why": "The overall goal of the Common Weakness Enumeration (CWE) category system is to stop vulnerabilities by bringing awareness to software designers, programmers, and architects. This is a community initiative, with numerous security researchers and well-known companies contributing to vulnerability intelligence gathering. ",
    "vid": "1.2.1 Software"
   },
   {
    "q": "Which type of attack commonly targets database resources such as web applications?",
    "options": [
     "Rootkit",
     "Phishing",
     "SQL injection",
     "Man-in-the-middle"
    ],
    "answer": "C",
    "why": "SQL is the standard language used for accessing and manipulating databases, and SQL injection attacks specifically target database resources such as web applications. This can be achieved by injecting partial SQL commands into a web application input field, causing the database to respond and return unexpected data rather than ignoring the SQL commands.",
    "vid": ""
   },
   {
    "q": "Which type of buffer overflow attack is most common?",
    "options": [
     "Targeted attacks",
     "Injection attacks",
     "Heap-based attacks",
     "Stack-based attacks"
    ],
    "answer": "D",
    "why": "Stack-based buffer over attacks are more common, leveraging stack memory that exists only during the execution time of a function. Stack-based memory allocation means the memory data is allocated in a last-in, first-out model. In other words, whatever piece of data was most recently placed into the stack will be the first out.",
    "vid": ""
   },
   {
    "q": "Which of the following is not a requirement for a successful cross-site request forgery (CSRF) attack?",
    "options": [
     "RESTful web application design",
     "A relevant, reproducible action",
     "Cookie-based session handling",
     "No request for unknown parameters"
    ],
    "answer": "A",
    "why": "For a CSRF attack to be successful, three things must be in place. First, there has to be a relevant, reproducible action, such as a GET request for transfers. Second, there must be cookie-based session handling. Cookies are the way that sessions are tracked, and user requests validated. And finally, there should be no unknown request parameters required. For example, if the attacker is trying to perform a password reset and the web application requires them to know the existing password, this would require a parameter unknown to the attacker.",
    "vid": ""
   }
  ],
  "blurb": "4 real SCOR quiz questions from Module 1 \u2014 Common Vulnerabilities.",
  "x": 40,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Common Vulnerabilities \u2014 clear 4 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_01_03",
  "mod": 1,
  "name": "Cryptography",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 4,
  "n": 6,
  "quiz": [
   {
    "q": "Which of the following is a process of generating an output value from a known input value by use of a mathematical function?",
    "options": [
     "Encryption",
     "IPsec",
     "Hashing",
     "Pre-shared key"
    ],
    "answer": "C",
    "why": "Hashing is the process of generating an output value from a known input, by use of a mathematical function. As long as the input value does not change, the output value will always be the same. Complicated algorithms can quickly compute an output value, although the output value is not easily reversed, meaning that it is difficult to determine the original input value from the known output. These properties make hash algorithms a common and reliable way to ensure data integrity.",
    "vid": "1.3.1 Hashing"
   },
   {
    "q": "Which type of encryption is also referred to as public key cryptography?",
    "options": [
     "Asymmetric encryption",
     "Symmetric encryption",
     "HMAC encryption",
     "TLS encryption"
    ],
    "answer": "A",
    "why": "Asymmetric encryption algorithms use a pair of keys to encrypt and decrypt data, otherwise known as public key cryptography. The created key pair consists of a public key and a private key. The public key is made available to any party with whom encrypted data exchange is desired, while only the key pair creator will have access to the matching private key.",
    "vid": ""
   },
   {
    "q": "Which of the following is an umbrella term for everything used to establish and manage public key encryption?",
    "options": [
     "Symmetric Encryption",
     "Asymmetric Encryption",
     "IPsec",
     "Public Key Infrastructure"
    ],
    "answer": "D",
    "why": "Public key infrastructure (PKI) is an umbrella term for everything used to establish and manage public key encryption, which is one of the most common forms of encryption used on the internet. This is an asymmetric encryption method, meaning that we use a pair of keys, one public and one private. These keys help us authenticate the parties which are attempting to communicate with one another.",
    "vid": ""
   },
   {
    "q": "Which type of virtual private network (VPN) requires client software used to authenticate a user and establish an IPsec tunnel?",
    "options": [
     "Site-to-site VPN",
     "Remote access VPN",
     "Internet Key Exchange VPN",
     "ISAKMP VPN"
    ],
    "answer": "B",
    "why": "Remote access VPNs evolved from dialup connection technology. These VPNs support the needs of external clients such as telecommuters or mobile users. This model typically requires VPN client software, which authenticates the user and establishes an IPsec VPN connection. The IPsec protocol is used to encapsulate and encrypt the traffic being sent over the Internet back to the target VPN gateway.",
    "vid": ""
   },
   {
    "q": "Which port is used by NAT traversal (NAT-T) when re-encapsulating IPsec packets in order to pass those packets through a NAT or PAT device?",
    "options": [
     "UDP 4500",
     "TCP 4500",
     "UDP 4300",
     "TCP 4300"
    ],
    "answer": "A",
    "why": "Once a NAT or PAT device is detected between the IPsec peers, the NAT-T feature will re-encapsulate all of the IPsec packets within UDP, assigning port 4500 as both the source and destination port. UDP port 4500 is the standard port used for IPsec NAT traversal, and cannot be changed. When these re-encapsulated packets pass through a PAT device, the source port will get changed, but the destination port of 4500 will remain the same. When a peer receives these NAT-T packets over port 4500, they know they are receiving communication from an IPsec peer.",
    "vid": ""
   },
   {
    "q": "Which mode of Wi-Fi protected access (WPA) is also referred to as enterprise mode?",
    "options": [
     "Pre-shared key mode",
     "TKIP mode",
     "802.1x mode",
     "AES mode"
    ],
    "answer": "C",
    "why": "WPA is the suite of wireless security protocols that replaced the deprecated WEP standard. There are three versions, known as WPA, WPA2 and WPA3. All three of these WPA iterations can support either personal mode or enterprise mode, with personal mode using pre-shared keys and enterprise mode using 802.1x authentication.",
    "vid": ""
   }
  ],
  "blurb": "6 real SCOR quiz questions from Module 1 \u2014 Cryptography.",
  "x": 62,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Cryptography \u2014 clear 6 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_01_04",
  "mod": 1,
  "name": "VPNs",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 5,
  "quiz": [
   {
    "q": "When configuring a site-to-site VPN, which hashing algorithm family is recommended by Cisco?",
    "options": [
     "SHA-1",
     "SHA-2",
     "MD5",
     "AES"
    ],
    "answer": "B",
    "why": "When configuring the site-to-site VPN policy options, there are several available hashing algorithms to choose from. As recommended by Cisco, its best to choose something from the SHA-2 family, that being SHA-256 or higher.",
    "vid": "1.4.1 Site-to-Site VPN"
   },
   {
    "q": "Which type of remote access SSL VPN can provide access using a web-based portal for end users?",
    "options": [
     "Client-based SSL VPN",
     "Web-based SSL VPN",
     "On-demand SSL VPN",
     "Clientless SSL VPN"
    ],
    "answer": "D",
    "why": "Clientless VPNs are typically achieved with a web browser portal, where users login to connect to the VPN, typically using the SSL protocol. Client-based VPNs require an additional software client to be installed on the end device",
    "vid": ""
   },
   {
    "q": "Which type of VPN can be implemented without the use of crypto maps with access control lists?",
    "options": [
     "sVTI-based VPN",
     "DMVPN",
     "FlexVPN",
     "IPsec VPN"
    ],
    "answer": "A",
    "why": "sVTI (static virtual tunnel interface) VPNs are a newer, simpler approach to VPN configuration using a tunnel interface. Using sVTI-based VPNs means there is no need for crypto maps with access control lists.",
    "vid": ""
   },
   {
    "q": "Which type of virtual private network (VPN) allows data exchange between multiple sites without passing the data through a central hub device?",
    "options": [
     "sVTI-based VPN",
     "DMVPN",
     "FlexVPN",
     "IPsec VPN"
    ],
    "answer": "B",
    "why": "DMVPNs use multipoint GRE (mGRE) and next hop resolution protocol (NHRP) to allow for dynamic reachability between neighboring routers. With DMVPNs, dynamic tunnels can be established between spoke sites, creating a more efficient data route as opposed to directing all traffic through a central hub.",
    "vid": ""
   },
   {
    "q": "Which feature of FlexVPNs allow the hub device to create a copy of another interface without the need for additional configuration?",
    "options": [
     "AAA policies",
     "Virtual tunnel templates",
     "mGRE interfaces",
     "IKEv2"
    ],
    "answer": "B",
    "why": "Virtual template tunnels are what truly bring the flexibility to FlexVPN technology. This is a template that gets configured on the hub router, allowing the hub to create a copy of another interface without the need for additional configuration. Any time a spoke site requests a tunnel connection to the hub, a virtual-access interface is dynamically created based on the settings in the virtual template.",
    "vid": ""
   }
  ],
  "blurb": "5 real SCOR quiz questions from Module 1 \u2014 VPNs.",
  "x": 84,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 VPNs \u2014 clear 5 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_01_05",
  "mod": 1,
  "name": "SDN Architecture",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 3,
  "quiz": [
   {
    "q": "Which section of the main Cisco DNA Center dashboard is used to associate policies with users, devices or applications?",
    "options": [
     "Design",
     "Provision",
     "Policy",
     "Assurance"
    ],
    "answer": "B",
    "why": "The Provision section is where any created policies are associated to users, devices, or applications. Any new devices introduced into the network would automatically be provisioned and assigned the appropriate policy \u2013 what is referred to as zero touch provisioning.",
    "vid": "1.5.1 Cisco DNA Center Overview"
   },
   {
    "q": "Which type of interface is used in Cisco DNA Center to integrate with other platforms?",
    "options": [
     "Westbound interface",
     "Eastbound Interface",
     "Northbound interface",
     "Southbound Interface"
    ],
    "answer": "A",
    "why": "Integration APIs, or westbound interfaces, are used to integrate Cisco DNA Center with other platforms, specifically third-party IT service management solutions. DNA Center can interact and exchange information with external IT systems such as in-house ticketing software, so that network data, events, and notifications can be pushed from DNA Center into this system.",
    "vid": ""
   },
   {
    "q": "Which of the following programming languages is considered one of the most popular options for engineers interested in software-defined networking?",
    "options": [
     "Java",
     "C++",
     "YAML",
     "Python"
    ],
    "answer": "D",
    "why": "When it comes to programming languages, Python is considered the front runner for those that you should learn first, particularly in the software-defined networking world. Python is very versatile and can perform the same task with less lines of code, as compared to other major languages like C/C++ and Java.",
    "vid": ""
   }
  ],
  "blurb": "3 real SCOR quiz questions from Module 1 \u2014 SDN Architecture.",
  "x": 18,
  "y": 74,
  "missions": [
   {
    "task": "\ud83d\udcd6 SDN Architecture \u2014 clear 3 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_02_01",
  "mod": 2,
  "name": "Network Security Solutions",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 4,
  "n": 8,
  "quiz": [
   {
    "q": "Which of the following is not an advantage offered by implementing a next-generation IPS (NGIPS)?",
    "options": [
     "Layer 7 visibility",
     "Retrospective analysis",
     "Distributed management",
     "Data correlation"
    ],
    "answer": "C",
    "why": "There are many problems with traditional IPS, including the fact that they require a lot of management to get them tuned and working effectively, the large amounts of data created that is difficult to sort and correlate, and the fact that they don't have a perspective into the existence of a vulnerability \u2013 they simply monitor for attempts to exploit a vulnerability.",
    "vid": ""
   },
   {
    "q": "Next generation IPS adds to our legacy IPS features by addressing many of these shortcomings. It offers visibility into Layer 7 applications, it has automated tuning and recommendations available to help lighten the administrative load, there is an awareness of the actual information traversing the network, and they offer data correlation features. In short, we have a deeper, more intelligent look into our network traffic, with the ability to automate policy tuning and impact assessment.",
    "options": [
     "In which type of deployment mode would there be no awareness of a firewall that is connected in the local network?",
     "Failover mode",
     "Stealth mode",
     "Routed mode",
     "Transparent mode"
    ],
    "answer": "D",
    "why": "A firewall in transparent mode is not seen as a hop in the network, hence the name transparent. We still have protection mechanisms in place such as access control between our interfaces, but we would place a transparent mode firewall in between our LAN and a next hop device, that next hop device most typically being a router. This is opposed to routed mode, where a firewall would be seen as a hop in the network.",
    "vid": ""
   },
   {
    "q": "Which of the following is not an example of a best practice in regard to device hardening?",
    "options": [
     "Using telnet for configuration management",
     "Physically locking a server room",
     "Implementing routing protocol security",
     "Leveraging AAA systems for tracking network access"
    ],
    "answer": "A",
    "why": "Among the best practices outlined by the Cisco Guide to Harden IOS Devices are implementing physical security, routing protocol security, and AAA systems. Telnet is not considered to be a secure protocol, so SSH is preferred over this legacy protocol.",
    "vid": ""
   },
   {
    "q": "Which plane of operation are we attempting to secure by implementing security features such as role-based access?",
    "options": [
     "Control plane",
     "Data plane",
     "Management plane",
     "Router plane"
    ],
    "answer": "C",
    "why": "When we talk about device management security, we are referring specifically to protecting the management plane. The management plane includes the system configuration, and also determining who is allowed to access a system, as well as what they are allowed to do while logged into the system. Additionally, this includes considerations for any messages to or from the device, such as SNMP messages. These types of messages are a way that someone could obtain information about our operating or system status, potentially giving them an advantage when trying to attack our network. Implementing role-based access is one method for controlling device management.",
    "vid": "2.1.4 Device Management Security"
   },
   {
    "q": "Which of the following is not an attribute used by NetFlow to group packets into a flow?",
    "options": [
     "Source port",
     "Layer 4 protocol type",
     "Destination IP address",
     "Type of service"
    ],
    "answer": "B",
    "why": "An IP flow is unidirectional traffic, or traffic going in a single direction. The attributes that NetFlow uses to group packets together into a flow are the IP source and destination address, the source and destination port, the Layer 3 protocol type, the router or switch interface, and the type of service associated with the packet.",
    "vid": ""
   },
   {
    "q": "Which SNMPv3 security level offers the strongest protection?",
    "options": [
     "authpriv",
     "authnopriv",
     "noauthnopriv",
     "noauthpriv"
    ],
    "answer": "A",
    "why": "There are three levels of security available with SNMPv3. Noauthnopriv means none of the security features are enabled, so you're essentially using SNMPv1 or SNMPv2. Authnopriv means that a cryptographic hash is used to secure authentication credentials, but the data is not encrypted for privacy. Authpriv uses the full suite of available security features, both hashing and encryption.",
    "vid": ""
   },
   {
    "q": "What is the name of the view in IOS under which a user can see or do anything without restriction?",
    "options": [
     "Super parser view",
     "Admin parser view",
     "Enable parser view",
     "Root parser view"
    ],
    "answer": "D",
    "why": "The default view is known as the root parser view, and the root view has access to everything. Under this view a user can see and do anything without restriction. Configuring other additional parser views must be done from root parser view.",
    "vid": "2.1.7 Role-Based CLI Access"
   },
   {
    "q": "Which algorithm is used in Cisco IOS for NTP for authentication?",
    "options": [
     "SHA-1",
     "AES",
     "MD5",
     "SHA-2"
    ],
    "answer": "C",
    "why": "Within Cisco IOS, NTP message authentication support is provided using the message digest 5 (MD5) algorithm. This is the only key type supported by Cisco IOS devices at this time.",
    "vid": ""
   }
  ],
  "blurb": "8 real SCOR quiz questions from Module 2 \u2014 Network Security Solutions.",
  "x": 18,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Network Security Solutions \u2014 clear 8 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_02_02",
  "mod": 2,
  "name": "Layer 2 Security",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 4,
  "n": 7,
  "quiz": [
   {
    "q": "Which VLAN interface mode is the default mode for a switch port?",
    "options": [
     "Access mode",
     "Trunk mode",
     "Tagged mode",
     "Dot1q mode"
    ],
    "answer": "A",
    "why": "VLANs have two general types of connection links, which we configure as interface modes on a switch. We can define an interface for either access mode or trunk mode. Access mode links can only belong to a single VLAN and carry traffic from a single VLAN. This is where we would see end devices connected. You may also hear an access port referred to as an \"untagged port\" in the Cisco world. This is also the default mode for a switch port.",
    "vid": "2.2.1 VLANs"
   },
   {
    "q": "Which of the following is not an advantage of using VRF-lite?",
    "options": [
     "Separate routing tables",
     "MPLS labeling",
     "No need for MP-BGP",
     "Overlapping address schemes"
    ],
    "answer": "B",
    "why": "When we think of VRF (virtual routing and forwarding) instances, we typically associate these with service providers. This is where we would see VRFs used in conjunction with multi-protocol BGP using MPLS traffic labeling at layer 3. When we talk about VRF-lite, we're essentially referring to the use of VRF without MPLS or multi-protocol BGP. VRF-lite allows us to create multiple routing tables on a single router, which can potentially have overlapping IP address schemes, without requiring separate routers or physical connections.",
    "vid": ""
   },
   {
    "q": "What is the default security violation mode when port security is enabled?",
    "options": [
     "Drop",
     "Restrict",
     "Protect",
     "Shutdown"
    ],
    "answer": "D",
    "why": "If a device with a mismatched MAC address is connected to a secured port, then a port violation occurs, and the port enters the error-disabled state. There are three different security violation modes that can be configured \u2013 shutdown, restrict, and protect. The default port security mode is shutdown, where the port is disabled, and an SNMP trap message and syslog message are generated.",
    "vid": ""
   },
   {
    "q": "With a DHCP snooping configuration, which type of port designation would be used on an interface up-linked to a DHCP server?",
    "options": [
     "Allowed",
     "Trusted",
     "DHCP",
     "Dynamic"
    ],
    "answer": "B",
    "why": "With DHCP snooping, we have ports designated as being either trusted or untrusted. Trusted ports would be those that uplink to a legitimate DHCP server on the network, and all other ports would be untrusted, effectively blocking rogue DHCP servers on the network.",
    "vid": "2.2.4 DHCP Snooping"
   },
   {
    "q": "Which mechanism can be used to validate address resolution packets in a network?",
    "options": [
     "Storm Control",
     "Port Security",
     "Dynamic ARP Inspection",
     "DHCP Snooping"
    ],
    "answer": "C",
    "why": "Dynamic Arp Inspection (DAI) is used to validate address resolution packets in a network. It allows us to intercept, log, and discard ARP packets that have invalid MAC to IP address bindings, as defined by the DHCP snooping binding database.",
    "vid": ""
   },
   {
    "q": "Which of the following is not a metric used by storm control for determining excessive network traffic?",
    "options": [
     "Bits per second",
     "Drops per second",
     "Packets per second",
     "Bandwidth percentage"
    ],
    "answer": "B",
    "why": "Storm control is a Layer 2 security feature found in Cisco Catalyst switches. A traffic storm occurs when we have packets flooding the local area network in an excessive manner, which causes the degradation of our network performance. The storm control feature monitors incoming traffic in one-second intervals and compares that to the acceptable traffic storm level that is designated by configuration.  When designating an acceptable level, that can be done in bits per second (BPS), packets per second (PPS), or by indicating a percentage of the interface bandwidth.",
    "vid": ""
   },
   {
    "q": "When configuring a private VLAN (PVLAN) in a switch, which type of access port mode would be assigned to an interface connecting to a first-hop router?",
    "options": [
     "Host mode",
     "Isolated mode",
     "Primary mode",
     "Promiscuous mode"
    ],
    "answer": "D",
    "why": "When we assign access ports in a private VLAN, we use either host or promiscuous mode. Promiscuous mode means the port can communicate with any other private VLAN port in the same primary VLAN. For example, a switchport connecting to a first-hop router would need a promiscuous mode configuration, in order to allow all devices connected to the switch to reach the gateway.",
    "vid": "2.2.7 PVLANs"
   }
  ],
  "blurb": "7 real SCOR quiz questions from Module 2 \u2014 Layer 2 Security.",
  "x": 40,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Layer 2 Security \u2014 clear 7 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_02_03",
  "mod": 2,
  "name": "AAA",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 2,
  "n": 2,
  "quiz": [
   {
    "q": "Which component of the AAA security architecture determines which resources or operations a user is able to access?",
    "options": [
     "Access",
     "Accounting",
     "Authentication",
     "Authorization"
    ],
    "answer": "D",
    "why": "The AAA security architecture is a framework that allows administrators to control user access to network devices using three independent security functions. These functions are authentication, authorization, and accounting. Authorization is the process that determines which resources or operations a user is able to access, through certain access privileges or restrictions.",
    "vid": "2.3.1 TACACS+ and RADIUS"
   },
   {
    "q": "Which solution allows us to enforce AAA security based on user profiles and configured policies?",
    "options": [
     "pxGrid",
     "authPolicy",
     "dACL",
     "sVTI"
    ],
    "answer": "C",
    "why": "One of the ways that we can deploy access control lists (ACLs) is using a downloadable ACL (dACL). Using profiles and policies within a solution such as Cisco ISE, we can apply a specific ACL to a user based on their authorization. These can be used to control how the network is accessed by different users and groups.",
    "vid": ""
   }
  ],
  "blurb": "2 real SCOR quiz questions from Module 2 \u2014 AAA.",
  "x": 62,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 AAA \u2014 clear 2 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_03_01",
  "mod": 3,
  "name": "Cloud Environments",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 3,
  "quiz": [
   {
    "q": "Which type of cloud deployment model would be best suited for businesses that must meet HIPAA regulatory compliance?",
    "options": [
     "Public cloud",
     "Secure cloud",
     "Private cloud",
     "Hybrid cloud"
    ],
    "answer": "C",
    "why": "In a private cloud, the cloud resources are used exclusively by one client or business. This private cloud can be hosted onsite in a company datacenter, or that can be provided by a third-party cloud service provider. The significant advantage of using a private cloud is the level of security and privacy that you have. It's possible to use a private cloud and maintain compliance with regulations such as SOX and HIPAA. ",
    "vid": "3.1.1 Public, Private, Hybrid, and Community Clouds"
   },
   {
    "q": "Which cloud service model offers the least complexity, aimed toward providing the average end-user access to cloud-based web applications?",
    "options": [
     "MaaS",
     "PaaS",
     "IaaS",
     "SaaS"
    ],
    "answer": "D",
    "why": "Software as a service (SaaS) provides quick access to cloud-based web applications without requiring downloads or installations on the client side of things. A few common examples of this are services such as Dropbox, Cisco WebEx, and productivity tools such as the Microsoft Office 365 service.",
    "vid": ""
   },
   {
    "q": "With which cloud service model does the customer hold the most responsibility in terms of security?",
    "options": [
     "MaaS",
     "PaaS",
     "IaaS",
     "SaaS"
    ],
    "answer": "C",
    "why": "With infrastructure as a service (IaaS), the customer has the most expanded responsibility set of all three models. This is the most clear-cut distinction of responsibility, where the cloud service provider is responsible for the security of the underlying infrastructure itself, but any applications or data that the customer chooses to run on the infrastructure becomes their responsibility to secure. This would include virtual operating systems, data, and applications.",
    "vid": ""
   }
  ],
  "blurb": "3 real SCOR quiz questions from Module 3 \u2014 Cloud Environments.",
  "x": 18,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Cloud Environments \u2014 clear 3 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_03_02",
  "mod": 3,
  "name": "Cloud Security Considerations",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 4,
  "n": 8,
  "quiz": [
   {
    "q": "In terms of patch management, which cloud service model is the most complex?",
    "options": [
     "SaaS",
     "PaaS",
     "IaaS",
     "MaaS"
    ],
    "answer": "B",
    "why": "Platform as a service (PaaS) is the most complex service model for patch management. All of the underlying infrastructure patching is still handled by the service provider, including the underlying network and operating system. The customer's responsibility lies with patching application and environment components. If you think about the many possibilities used here by developers, such as Java, PHP, .NET, and many more, you can see why this becomes a challenge. The customer must make sure that any applications and environments are completely patched during the quality assurance phase of development, before these are deployed as working applications. For this reason, typically an infrastructure or security team will work closely with a development team to make sure that patch management is properly implemented.",
    "vid": "3.2.1 Patch Management"
   },
   {
    "q": "Which of the following is not a consideration in regard to cloud-based security assessments?",
    "options": [
     "Assigning multiple administrators",
     "Creating cloud-specific security policies",
     "Implementing multifactor authentication",
     "Patch management"
    ],
    "answer": "A",
    "why": "Security assessments against our cloud resources are a critical way to ensure that we have a good security posture. A good place to start is with policies and procedures. If you're moving to a cloud platform or integrating with a cloud provider for the first time, you want to make sure you've updated your security policies and procedures to include your cloud considerations. It's also a best practice to use multifactor authentication with a minimum of two forms of authentication, before granting access to your cloud environment. Also, ask your cloud provider if you are able to see the latest patches installed, so you can check patching status for yourself if you have concerns. It's good to know if regular scans of your cloud resources are performed by the provider, and how often.",
    "vid": ""
   },
   {
    "q": "Which cloud-delivered security solution can be used as a policy enforcement device between cloud service providers and end users?",
    "options": [
     "Cisco Investigate",
     "Cisco Umbrella",
     "Cisco Stealthwatch",
     "Cisco Cloudlock"
    ],
    "answer": "D",
    "why": "Cisco Cloudlock is what we refer to as a cloud access security broker, or CASB. A CASB is a policy enforcement device that is used between cloud service providers and cloud service users, which enforces security policies for cloud-based resources.",
    "vid": ""
   },
   {
    "q": "Which of the following is a development practice where programmers continually merge code changes into a central repository?",
    "options": [
     "CD",
     "CI",
     "DevOps",
     "Agile"
    ],
    "answer": "B",
    "why": "The software delivery process was improved upon with DevOps through a CI/CD pipeline, CI being short for continuous integration, CD being short for continuous delivery. CI is a development practice where programmers merge code changes into a central repository for software, and CD provides a way for taking these code changes and automating the entire software release process. Every change in code will trigger and automatic build and test sequence with CI/CD pipelines, which will also provide feedback to the programmers who submitted the code changes.",
    "vid": "3.2.4 DevSecOps"
   },
   {
    "q": "Which type of application security testing is referred to as a \"white box\" method for testing?",
    "options": [
     "Fuzzing",
     "Dynamic",
     "Static",
     "Blue team"
    ],
    "answer": "C",
    "why": "Static application security testing is what we refer to as a \"white box\" method for testing. This means we test from the inside out, and that we have access to the underlying framework, design, and implementation of the application. This is a typical developer approach to application testing. This doesn't require a deployed application, but instead uses analysis against the source code to test for vulnerabilities without executing the application. Generally speaking, this allows for finding vulnerabilities earlier in the software development lifecycle, since we don't necessarily need a completed code to perform this testing.",
    "vid": ""
   },
   {
    "q": "In regard to cloud policy management, which of the following is not an important feature offered by cloud access security brokers (CASBs)?",
    "options": [
     "Offsite backup",
     "Data loss prevention",
     "Historical perspective of assets",
     "Incident alerting"
    ],
    "answer": "A",
    "why": "CASB solutions such as Cisco Cloudlock can integrate with Office 365, Dropbox, G Suite, Slack, and several other well-known cloud services. Cloudlock provides protection to our important assets in the form of data loss prevention (DLP) policies. This solution allows you to see a historical view related to asset access and sharing. When a policy is created to manage assets located in your cloud environment, any unauthorized access or changes to a managed object will trigger a Cloudlock Incident, which will alert an administrator with detailed information about the incident that took place.",
    "vid": ""
   },
   {
    "q": "Which of the following is not considered to be a best practice for cloud logging and monitoring?",
    "options": [
     "Selectively choosing devices to be monitored",
     "Log retention policies",
     "Extra storage space",
     "Test environment monitoring"
    ],
    "answer": "D",
    "why": "When we log large amounts of data, it makes data correlation much harder. Our log storage and management becomes very complex, and it becomes difficult to find the data that actually matters. We should be selective when making this choice. Log retention policies are also important. In some cases, troubleshooting logs may only be necessary for a few days or weeks, while other more critical logs may need to be kept longer for auditing purposes. We would also want to plan the capacity of our log storage to have room for problems in the environment. On any given business day, the amount of monitoring and logging information created should be relatively equal, but we want to make sure we have room for a large influx of logs in the event of a critical event. If your log storage solution reaches capacity, it's possible that you lose important monitoring information that could be essential to resolving an issue.",
    "vid": "3.2.7 Cloud Logging and Monitoring"
   },
   {
    "q": "What is the term for the amount of activity running on a cloud instance at any given moment?",
    "options": [
     "Usage",
     "Capacity",
     "Bandwidth",
     "Workload"
    ],
    "answer": "D",
    "why": "When we talk about a cloud workload, we simply mean the amount of activity running on a cloud instance at any given moment. The workload an average business places on a cloud environment has continued to increase over the years for many reasons - including lower costs and ease of use.",
    "vid": ""
   }
  ],
  "blurb": "8 real SCOR quiz questions from Module 3 \u2014 Cloud Security Considerations.",
  "x": 40,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Cloud Security Considerations \u2014 clear 8 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_04_01",
  "mod": 4,
  "name": "Web Security",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 4,
  "n": 8,
  "quiz": [
   {
    "q": "Which mechanism is used to provide transparent traffic redirection when implementing a Cisco WSA in transparent mode?",
    "options": [
     "ACL",
     "DNS",
     "WCCP",
     "HTTP"
    ],
    "answer": "C",
    "why": "With a Cisco Web Security Appliance (WSA) in transparent mode, clients are unaware that there is a proxy in the network path, while other network infrastructure devices would be explicitly configured for traffic redirection to the WSA proxy. This web traffic redirection is possible using a Cisco proprietary protocol called web cache communication protocol (WCCP). This is available on Cisco ASAs, routers, and switches. This protocol allows routing platforms to transparently redirect packets to a destination other than the specified destination IP in the packet.",
    "vid": "4.1.1 Secure Internet Gateway"
   },
   {
    "q": "What is the first step when creating a blacklist URL item using a Cisco WSA?",
    "options": [
     "Point DNS to the Cisco WSA",
     "Disable the local firewall",
     "Add the URL into a Cisco feed",
     "Create a custom URL category"
    ],
    "answer": "D",
    "why": "In order to blacklist or whitelist a specific URL, the first step is to create a custom URL category into which we can add the URL. From the main window, we can choose the Web Security Manager tab, and near the bottom we have an option for Custom and External URL Categories, where we can add a new custom URL category.",
    "vid": ""
   },
   {
    "q": "Which mechanism within Cisco WSA is a real-time categorization feature used to sort URLs into categories?",
    "options": [
     "Cisco Dynamic Content Analysis Engine",
     "Cisco Talos",
     "Cisco Umbrella",
     "Cisco Identity Services Engine"
    ],
    "answer": "A",
    "why": "URL filtering and categorization within Cisco WSA is informed by Cisco Talos intelligence and uses a real-time categorization feature called Cisco Dynamic Content Analysis Engine. This engine works by analyzing the response content from the destination server, sorting that content into a category, and then determining what happens based on the category settings we have in place.",
    "vid": ""
   },
   {
    "q": "Which of the following is not an integrated antimalware option within Cisco WSA?",
    "options": [
     "Sophos",
     "McAfee",
     "Kaspersky",
     "Webroot"
    ],
    "answer": "C",
    "why": "The Cisco WSA includes malware protection capabilities, protecting against spyware and web-based malware. We can manage this by going to the Security Services tab and choosing Anti-Malware and Reputation. From there, we can add license keys for Sophos, McAfee, or Webroot as optional anti-malware services.",
    "vid": "4.1.4 Malware Scanning"
   },
   {
    "q": "Which type of web application vulnerability is often used to exploit end users, and can be mitigated by filtering offered through Cisco WSA?",
    "options": [
     "Phishing",
     "Cross-site Scripting",
     "SQL injection",
     "Man-in-the-Middle"
    ],
    "answer": "B",
    "why": "Web applications vulnerabilities are a well-known risk to our security. Vulnerable web applications can be used to exploit end users through techniques such as cross-site scripting and cross-site request forgery. We have the possibility of filtering the web applications our users have access to through Cisco WSA.",
    "vid": ""
   },
   {
    "q": "Which technique can be used to inspect secure traffic channels that may be used for data exfiltration?",
    "options": [
     "Proxy redirection",
     "Intermediate certificate",
     "Policy inspection",
     "TLS decryption"
    ],
    "answer": "D",
    "why": "HTTPS is a secure version of HTTP using TLS for data encryption. If we're going to monitor HTTPS traffic for things such as data exfiltration, we need to gain access to the encrypted data. We can use TLS decryption to decrypt HTTPS traffic and apply content-based access policies using solutions like next-generation firewalls, intrusion prevention systems, and web security appliances. We can choose to pass the encrypted traffic through without inspection, drop the HTTPS connection, or simply monitor the request.",
    "vid": ""
   },
   {
    "q": "When capturing and redirecting a specific HTTPS URL using Cisco WSA, which of the following is a prerequisite?",
    "options": [
     "Decryption policy",
     "Encryption policy",
     "Inspection policy",
     "URL policy"
    ],
    "answer": "A",
    "why": "By default, HTTPS URLs cannot be redirected like HTTP URLs within Cisco WSA. In order to redirect HTTPS URLs, they must be decrypted first by configuring a decryption policy. Once the HTTPS URL has been decrypted, it will then be subjected to Access Policies. The HTTPS URL can then be redirected under the Access Policy.",
    "vid": "4.1.7 Traffic Redirection and Capture"
   },
   {
    "q": "What structure within Cisco WSA identifies existing authentication mechanisms in our network, such as a Microsoft Active Directory instance?",
    "options": [
     "Access server",
     "Domain controller",
     "Authentication realm",
     "LDAP policy"
    ],
    "answer": "C",
    "why": "If we implement authentication on the Cisco WSA, this allows us to track user activity, integrate with existing authentication infrastructure, and implement policies based on users and groups. When we do this, WSA will check user authentication before giving them access to the network. If we have an existing authentication mechanism, such as an Active Directory domain, we configure this as an authentication realm in Cisco WSA. This authentication realm is essentially a mapping that points to our existing domain.",
    "vid": ""
   }
  ],
  "blurb": "8 real SCOR quiz questions from Module 4 \u2014 Web Security.",
  "x": 18,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Web Security \u2014 clear 8 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_04_02",
  "mod": 4,
  "name": "Email Security",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 5,
  "quiz": [
   {
    "q": "When using an email security appliance such as Cisco ESA, what is the best placement recommendation?",
    "options": [
     "Between the mail server and an access switch",
     "Between an access switch and the firewall",
     "Between the firewall and WAN router",
     "Between the firewall and mail server"
    ],
    "answer": "D",
    "why": "When deploying a Cisco ESA, the best placement recommendation is to install this appliance behind the firewall device, between this edge device and your mail server. The ESA will act as a mail transfer agent, meaning that public MX records for the domain should point to the Cisco ESA's public IP address. ",
    "vid": "4.2.1 SPAM Filtering"
   },
   {
    "q": "When enabling a data loss prevention (DLP) policy template on Cisco ESA, to whom will this policy apply by default?",
    "options": [
     "No mail senders and recipients",
     "All mail senders and recipients",
     "Only mail senders",
     "Only mail recipients"
    ],
    "answer": "B",
    "why": "When we enable a DLP policy template, by default this will apply to all senders and recipients. We can optionally choose to selectively filter specific email addresses or entire domains.",
    "vid": "4.2.2 Data Loss Prevention (DLP)"
   },
   {
    "q": "Which type of profile in Cisco ESA determines whether we are storing a key used for identity authentication on a local server or a hosted key service?",
    "options": [
     "Key profile",
     "Server profile",
     "Encryption profile",
     "Authentication profile"
    ],
    "answer": "C",
    "why": "When we use email encryption, Cisco ESA will encrypt a message and store the key on a local server or a hosted key service. When the recipient opens an encrypted message, the recipient would need to authenticate their identity with the key service, and then the decrypted message would be displayed. This requires setting up an encryption profile. An encryption profile will store many things, including information about our encryption key server.",
    "vid": ""
   },
   {
    "q": "Which Cisco ESA mechanism is used to provide a reputation score used to determine if an IP address is trying to send SPAM?",
    "options": [
     "SenderBase",
     "Talos",
     "Umbrella",
     "AMP"
    ],
    "answer": "A",
    "why": "SenderBase is akin to a credit reporting service for email, providing data that ISPs and companies can use to differentiate legitimate senders from spam sources. When Cisco ESA receives messages from known or highly reputable senders, they will be delivered directly to the user without any content scanning. However, messages with unknown or less reputable scores will have anti-spam and antivirus scanning performed. This reputation score ranges from -10 to +10, with +10 being the most trusted.",
    "vid": "4.2.4 Blacklisting"
   },
   {
    "q": "What is the recommended best practice action to take with Cisco ESA for messages thought to contain malware attachments?",
    "options": [
     "Drop",
     "Deliver as-is",
     "Quarantine",
     "Blacklist"
    ],
    "answer": "A",
    "why": "When enabling antimalware filtering, we can choose which action is applied to messages with suspected malware attachments. The Cisco-recommended best practice is to set this our action to drop these messages.",
    "vid": ""
   }
  ],
  "blurb": "5 real SCOR quiz questions from Module 4 \u2014 Email Security.",
  "x": 40,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Email Security \u2014 clear 5 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_04_03",
  "mod": 4,
  "name": "Cisco Umbrella",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 5,
  "quiz": [
   {
    "q": "Which component is used by Cisco Umbrella to protect endpoints even when they are connected outside of the local enterprise network?",
    "options": [
     "Clientless monitoring",
     "Site-to-site VPN",
     "Roaming client",
     "Dynamic file analysis"
    ],
    "answer": "C",
    "why": "One of the unique things about Cisco Umbrella is the ability to install a roaming client on a user machine. This makes sure that users are protected 100% of the time, whenever they are connected to the public Internet. This roaming client will force the DNS settings to point to the Cisco Umbrella instance wherever and whenever they are online. The AnyConnect VPN client can also be configured for Umbrella roaming, meaning that you don't have to install two separate clients for AnyConnect users.",
    "vid": "4.3.1 Cisco Umbrella Overview"
   },
   {
    "q": "What is the term for entities inside of Cisco Umbrella against which we apply policies and perform reporting?",
    "options": [
     "Clients",
     "Identities",
     "Policies",
     "Objects"
    ],
    "answer": "B",
    "why": "Identities in Cisco Umbrella are any entity that you enforce a policy against and report on. This can range from an entire network, down to a single user. To create protection with Cisco Umbrella, we create policies, and we add specific identities to these policies.",
    "vid": "4.3.2 Identities"
   },
   {
    "q": "If we want to block a specific domain rather than using a defined category, which mechanism in Cisco Umbrella will allow for this?",
    "options": [
     "URL profile",
     "Destination list",
     "Traffic interception",
     "Identity management"
    ],
    "answer": "B",
    "why": "Destination lists provide a way to selectively allow or block domains, rather than using a pre-defined category within Cisco Umbrella.",
    "vid": ""
   },
   {
    "q": "If we have a site that appears on both an allow and a block destination list, which action will take place in Cisco Umbrella?",
    "options": [
     "Drop",
     "Quarantine",
     "Block",
     "Allow"
    ],
    "answer": "D",
    "why": "Allow destination lists always take precedence over block destination lists. That means if a site appears in both lists inadvertently, it will be allowed. Also, allow lists take precedence over security-related blocks. This means that if a site is being blocked for any reason incorrectly, adding that site the allow list will overwrite any other behavior, and will allow access to the site.",
    "vid": "4.3.4 Destination Lists"
   },
   {
    "q": "What is the default format for exported reporting from Cisco Umbrella?",
    "options": [
     "PDF",
     "XML",
     "CSV",
     "DOC"
    ],
    "answer": "C",
    "why": "Reports in Cisco Umbrella can be configured so that we receive periodic emails containing a summary of report information that we choose. Each time we receive an emailed report, this will include a zipped CSV file, an HTML version of the report, and a link to the Umbrella report within the dashboard.",
    "vid": ""
   }
  ],
  "blurb": "5 real SCOR quiz questions from Module 4 \u2014 Cisco Umbrella.",
  "x": 62,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Cisco Umbrella \u2014 clear 5 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_05_01",
  "mod": 5,
  "name": "Endpoint Fundamentals",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 5,
  "quiz": [
   {
    "q": "Which type of Cisco Advanced Malware Protection (AMP) policy will detect malicious files without quarantining the files?",
    "options": [
     "Protect Policy",
     "Audit policy",
     "Detect policy",
     "Quarantine policy"
    ],
    "answer": "B",
    "why": "With Cisco AMP, there are two types of policies that we have by default, which are audit policies, and protect policies. Audit policies will detect malicious files, but those will not be quarantined. Protect policies will detect and additionally quarantine malicious files.",
    "vid": "5.1.1 Antimalware"
   },
   {
    "q": "Which of the following is not an advantage offered by Cisco AMP as opposed to traditional antimalware systems?",
    "options": [
     "Remediation tracking",
     "Continuous file analysis",
     "Retrospective security",
     "Point-in-time detection"
    ],
    "answer": "D",
    "why": "Many endpoint antimalware systems inspect files only at the moment they are accessed or executed, using point-in-time detection. Cisco AMP features include continuous analysis, retrospective security, and issue remediation tracking.",
    "vid": "5.1.2 Retrospective Security"
   },
   {
    "q": "What term is used to describe items of data that can help identity information related to malicious files or behavior in our network?",
    "options": [
     "Indication of compromise",
     "Behavior fingerprint",
     "Outbreak filter",
     "Custom detection"
    ],
    "answer": "A",
    "why": "Indications of compromise (IOCs) are pieces of data that can help us to identify specific information related to malicious files or behavior in our network, or any abnormal behavior.",
    "vid": ""
   },
   {
    "q": "Within Cisco AMP, which offline antivirus engine is available for use with Microsoft Windows devices?",
    "options": [
     "Webroot",
     "ClamAV",
     "Tetra",
     "McAfee"
    ],
    "answer": "C",
    "why": "If you don't have a preferred antivirus solution that you want to use, Cisco AMP does provide two offline antivirus engines available for endpoint protection, which are Tetra and ClamAV. The Tetra antivirus engine is available to use for offline scanning of Microsoft Windows devices, while the ClamAV antivirus engine can be used for offline scanning of both Linux and Mac OS devices. This type of protection is not enabled by default but can be enabled inside of any created policies.",
    "vid": "5.1.4 Antivirus"
   },
   {
    "q": "Which Cisco AMP mechanism helps us track the scope and origin of an issue on our network?",
    "options": [
     "Object analysis",
     "File trajectory",
     "Contact tracing",
     "Behavioral indicators"
    ],
    "answer": "B",
    "why": "File trajectory can indicate the first endpoint that encountered a particular threat, as well as every other endpoint that came in contact. This can help determine the scope of a problem, and pinpoint the origin endpoint.",
    "vid": ""
   }
  ],
  "blurb": "5 real SCOR quiz questions from Module 5 \u2014 Endpoint Fundamentals.",
  "x": 18,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Endpoint Fundamentals \u2014 clear 5 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_05_02",
  "mod": 5,
  "name": "Endpoint Protection",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 3,
  "quiz": [
   {
    "q": "Which of the following is not an advantage of using an endpoint management software such as Cisco AMP?",
    "options": [
     "Security compliance",
     "Bandwidth management",
     "Deployment support",
     "Personalized web portal"
    ],
    "answer": "D",
    "why": "Endpoint device management is a process that we use to detect, provision, update, troubleshoot, and protect devices on our network. Advantages include an increased ability to ensure security and compliance, the ability to see bandwidth heavy users or devices, and deploying software and security settings from a central management console for newly deployed endpoints.",
    "vid": "5.2.1 Endpoint Device Management"
   },
   {
    "q": "In order to ensure that device discovery is successful when using Cisco DNA Center to locate network assets, which of the following is an important first step?",
    "options": [
     "Configure discovery credentials",
     "Enable SNMP in DNA Center",
     "Turn on CDP for all devices",
     "Configure an IP address range for search"
    ],
    "answer": "A",
    "why": "If we want to begin a discovery process on our network with Cisco DNA Center, the first thing we might want to setup are discovery credentials. These are credentials that would be valid for CLI, SNMP, HTTPS, or NETCONF on the devices we are attempting to discover. We can configure various sets of discovery credentials within Cisco DNA Center, in case our various devices use different login information, although it's common to have an overall administrator account that is valid on many devices in the network.",
    "vid": "5.2.2 Asset Inventory"
   },
   {
    "q": "Which of the following is not an action available to take against registered devices with Cisco Meraki Mobile Device Management (MDM)?",
    "options": [
     "Send notifications to end users",
     "Power off the mobile device",
     "Read email on the device",
     "Lock and wipe the device"
    ],
    "answer": "C",
    "why": "Unmanaged mobile devices can be a huge security risk, because it's very common for users these days to access highly sensitive enterprise data on a mobile device. As with any device we allow to connect to our networks, we need to be able to ensure that mobile devices are up to date and patched properly, and if a device gets stolen, we need to have ways to remotely wipe the devices. Actions we can take using Cisco Meraki specifically include the ability to send a notification to the end user, power the device off, obtain a GPS location, or lock and wipe the device.",
    "vid": ""
   }
  ],
  "blurb": "3 real SCOR quiz questions from Module 5 \u2014 Endpoint Protection.",
  "x": 40,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Endpoint Protection \u2014 clear 3 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_05_03",
  "mod": 5,
  "name": "Advanced Endpoint",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 3,
  "quiz": [
   {
    "q": "Which category of multifactor authentication (MFA) identity information would a smartphone receiving push notifications fall under?",
    "options": [
     "Knowledge",
     "Possession",
     "Inherence",
     "Access"
    ],
    "answer": "B",
    "why": "In general, MFA identify information can be broken down into three potential types of data - either knowledge, possession, or inherence. Knowledge means something you know, such as a password or PIN. Possession is something that you physically possess, such as a badge you swipe or a smartphone to which you can receive push notifications. Inherence is something that you are, and would include things like fingerprints, iris scans, or some other form of biometric data.",
    "vid": "5.3.1 Multifactor Authentication (MFA)"
   },
   {
    "q": "What term is used to refer to the compliance status of a device on our network?",
    "options": [
     "Stance",
     "Posture",
     "Assessment",
     "Condition"
    ],
    "answer": "B",
    "why": "When we talk about posture, we simply mean the compliance status of a device on our network. This concept is perhaps most important for our endpoints, which present a very large attack surface on our network. Each organization establishes their own criteria to determine what proper posture looks like for an endpoint, but some common posture concerns include operating system patch and update status, local disk encryption, having up-to-date antimalware protection, an awareness of external devices such as USB attached storage devices, and more.",
    "vid": "5.3.2 Endpoint Posture Assessment"
   },
   {
    "q": "Which of the following is not considered a best practice in regard to endpoint patching?",
    "options": [
     "Patch testing environment",
     "Asset inventory management",
     "Software consolidation",
     "Updating non-outside facing devices as a priority"
    ],
    "answer": "D",
    "why": "Making sure our endpoints are patched properly is an important management consideration. Before we roll out any patches, it's also a great idea to test those patches in a test environment before they are deployed into production. Although we want to be timely with our patching, we also want to make sure there are no unexpected adverse consequences from a new patch update. Having an accurate inventory of all the hardware and software interacting with our network is critical if we want to ensure that everything is properly patched. Something that can reduce our patching efforts is to consolidate software whenever possible. The more versions of a particular software we have in production, the more vulnerable we are.",
    "vid": ""
   }
  ],
  "blurb": "3 real SCOR quiz questions from Module 5 \u2014 Advanced Endpoint.",
  "x": 62,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Advanced Endpoint \u2014 clear 3 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_06_01",
  "mod": 6,
  "name": "Identity Management",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 3,
  "quiz": [
   {
    "q": "Which type of guest services portal within Cisco Identity Services Engine (ISE) allows guest access to the Internet without requiring login credentials?",
    "options": [
     "Open guest portal",
     "Sponsored guest portal",
     "Self-registered guest portal",
     "Hotspot guest portal"
    ],
    "answer": "D",
    "why": "Hotspot guest portals allow guests to access the Internet through wireless access points without requiring login credentials. This is an alternative to our typical guest portal that will allow us to provide network access without usernames and passwords, which means that we don't need to manage guest accounts for this type of access. This is essentially a type of captive portal that will display an acceptable use policy, and once accepted, users can browse the web while remaining isolated from the enterprise network.",
    "vid": "6.1.1 Guest Services"
   },
   {
    "q": "What term is used to describe the gathering of data about network endpoints, in order to determine things such as the type of device or operating system?",
    "options": [
     "Profiling",
     "Posture",
     "Assessment",
     "Condition"
    ],
    "answer": "A",
    "why": "The profiling service in Cisco ISE has the ability to identity each device that connects to a network. By profiling, we simply mean that we are gathering data about a specific endpoint in order to determine information about the device, such as the operating system or the type of device. There are many use cases for this, including developing different policies based on the device type. You might want to handle an iPad differently than you would a workstation, for instance.",
    "vid": "6.1.2 Profiling"
   },
   {
    "q": "When configuring a bring your own device (BYOD) policy in Cisco ISE, what is the default maximum number of devices that each user can register?",
    "options": [
     "1",
     "5",
     "3",
     "Unlimited"
    ],
    "answer": "B",
    "why": "With Cisco ISE policies for BYOD, we are able to restrict the number of devices that each employee can register for connectivity to the network. By default, the value is set to a maximum of five devices. Users can manage and delete devices if their quota is reached through their device management portal",
    "vid": ""
   }
  ],
  "blurb": "3 real SCOR quiz questions from Module 6 \u2014 Identity Management.",
  "x": 18,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Identity Management \u2014 clear 3 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_06_02",
  "mod": 6,
  "name": "Configuring Secure Access",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 3,
  "quiz": [
   {
    "q": "With 802.1x authentication, which component used with this standard is used to control access to the network based on the authentication status of the endpoint?",
    "options": [
     "Supplicant",
     "Authenticator",
     "Authentication Server",
     "Transport Tunnel"
    ],
    "answer": "B",
    "why": "When we're using 802.1x, there are three roles involved - the supplicant, the authenticator and the authentication server. The supplicant is an endpoint, and the endpoint must have supplicant software that supports 802.1x authentication. The authenticator is the piece that controls access to the network based on the authentication status of the endpoint. Commonly this is either a switch or a wireless LAN controller. The authentication server is a device providing RADIUS services, such as Cisco ISE.",
    "vid": "6.2.1 802.1X"
   },
   {
    "q": "Which technology allows us to secure our switch ports for devices that do not support 802.1x authentication?",
    "options": [
     "Pre-shared key",
     "WEP",
     "MAB",
     "TKIP"
    ],
    "answer": "C",
    "why": "Not all devices on our network support 802.1x authentication. In some cases, we may have something like a network printer that doesn't support 802.1x authentication. We can still secure our switch ports using MAC authentication bypass (MAB). When we use MAB, the switch will drop all the frames except for the first frame from which it will learn the MAC address. Once the switch has learned the MAC address, it will contact the RADIUS server to see if the MAC address should be permitted, based on the policies.",
    "vid": "6.2.2 MAB"
   },
   {
    "q": "Which type of WebAuth was created to overcome the limitations of the original standard?",
    "options": [
     "Local WebAuth",
     "Distributed WebAuth",
     "Centralized WebAuth",
     "Fast WebAuth"
    ],
    "answer": "C",
    "why": "Local WebAuth is the original standard. With local WebAuth, we would have a switch or wireless controller redirecting web traffic to a web portal, where the user would be prompted for credentials. The web portal itself would be hosted by the switch, and on Cisco switches these local WebAuth portals are not customizable. Also lacking are the option for displaying and agreeing to acceptable use policies before accessing the network, something which is really important when you're providing guest network access. Also, local WebAuth does not support the ability to assign the client to a particular VLAN. To overcome some of these limitations, we use centralized WebAuth more commonly in our enterprise environments. This offers many advanced features including dynamic VLAN assignment, customizable landing pages, and acceptable use policy displays.",
    "vid": ""
   }
  ],
  "blurb": "3 real SCOR quiz questions from Module 6 \u2014 Configuring Secure Access.",
  "x": 40,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Configuring Secure Access \u2014 clear 3 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_06_03",
  "mod": 6,
  "name": "Exfiltration Techniques",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 4,
  "n": 6,
  "quiz": [
   {
    "q": "Which data exfiltration vector is used when sending encoded characters as a series of broken strings over port 53?",
    "options": [
     "File transfer protocols",
     "NTP exchange",
     "DNS tunneling",
     "ICMP tunneling"
    ],
    "answer": "C",
    "why": "DNS tunneling is a tactic used by attackers for data exfiltration, using the DNS protocol to send non-DNS traffic over port 53, the well-known port used by DNS. This can be used to send HTTP and other protocol traffic over DNS. A common way this is used is by sending command and control callbacks over DNS, providing stealth to an attack.",
    "vid": "6.3.1 DNS Tunneling"
   },
   {
    "q": "What is the main variation we see used with data exfiltration via HTTP and HTTPS?",
    "options": [
     "Backdoors",
     "Trojans",
     "Ping sweeps",
     "Port scans"
    ],
    "answer": "A",
    "why": "Another method that attackers use for data exfiltration is HTTP or HTTPS. There are a few different ways that this can be accomplished, but the main variation we see for this is by using a backdoor. A backdoor is a type of attack that gives a threat actor unauthorized access to a system. The main goal of a backdoor is to be discreet \u2013 that is to say, backdoors are most successful when they are able to be in place for long periods of time without the user being aware. The longer the attacker has access, the more data they can potentially exfiltrate.",
    "vid": "6.3.2 HTTPS"
   },
   {
    "q": "Which type of email exfiltration threat involves employees sending sensitive information via email to a personal account or outside party?",
    "options": [
     "Outside threat",
     "Inside threat",
     "Known threat",
     "DLP threat"
    ],
    "answer": "B",
    "why": "With an inside threat, this is very simply where an employee with access to sensitive information sends that out to themselves using their own personal account as a recipient, or to another recipient external to the business.",
    "vid": ""
   },
   {
    "q": "While file transfer protocol used with data exfiltration sends information in plain text?",
    "options": [
     "SFTP",
     "SCP",
     "HTTPS",
     "FTP"
    ],
    "answer": "D",
    "why": "File transfer protocols such as secure FTP (SFTP) and secure copy protocol (SCP) are both encrypted, meaning that it would be difficult to tell from what type of data is being transferred since we would not be able to view that encrypted traffic, as opposed to plain text protocols like FTP.",
    "vid": "6.3.4 File Transfer Protocols"
   },
   {
    "q": "Which type of ICMP message is often used by attackers to inject malicious control commands?",
    "options": [
     "Echo-request",
     "Echo-control",
     "Echo-reply",
     "Echo-acknowledge"
    ],
    "answer": "C",
    "why": "When we use a typical ping command to test host reachability over a network, the pinging host will send an ICMP echo-request to a target host, containing some data that will get echoed back by the target, if it is reachable. The data inside is usually arbitrary data, but this can be exploited by attackers as a way to hide packets that are being exfiltrated out of the network, in a technique called ICMP tunneling. This can also be used to inject malicious control commands into an echo-reply, which would give potential control of the endpoint to the attacker.",
    "vid": "6.3.5 ICMP"
   },
   {
    "q": "Which well-known port is often used to achieve data exfiltration with NTP?",
    "options": [
     "UDP 123",
     "TCP 123",
     "UDP 49",
     "TCP 49"
    ],
    "answer": "A",
    "why": "Every enterprise network should be running the network time protocol (NTP), which presents a problem because this leaves a well-known port open in the firewall. NTP uses UDP port 123. If we're synchronizing our networks by going out to the Internet to get time from a public Internet Timer Server (which is extremely common) then this port would need to be open.",
    "vid": ""
   }
  ],
  "blurb": "6 real SCOR quiz questions from Module 6 \u2014 Exfiltration Techniques.",
  "x": 62,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Exfiltration Techniques \u2014 clear 6 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 },
 {
  "id": "SCOR_06_04",
  "mod": 6,
  "name": "Exfiltration Wrap-up",
  "icon": "\ud83d\udd10",
  "topic": "Security",
  "diff": 3,
  "n": 5,
  "quiz": [
   {
    "q": "Which metric within Cisco Stealthwatch is a measure of repetitious behavior?",
    "options": [
     "Data hoarding",
     "Concern index",
     "Recon",
     "Exfiltration"
    ],
    "answer": "B",
    "why": "The concern index can be seen as a percentage in the Stealthwatch dashboard for any particular endpoint. The concern index is essentially a measure of repetitious behavior that a host is observed performing, such as repetitious port scanning behavior on the network.",
    "vid": "6.4.1 Cisco Stealthwatch"
   },
   {
    "q": "Which mechanism in Cisco Stealthwatch Cloud allows for passive monitoring of traffic?",
    "options": [
     "Hash inspection",
     "TLS decryption",
     "Cognitive threat analytics",
     "Encrypted traffic analytics"
    ],
    "answer": "D",
    "why": "For encrypted HTTPS traffic, Stealthwatch Cloud leverages something called encrypted traffic analytics. This Cisco technology can identify malware communications through passive monitoring, meaning that this can be done without decrypting the traffic. Cisco Stealthwatch Cloud also has the Cisco Cognitive Intelligence machine learning engine integrated to help with this identification.",
    "vid": "6.4.2 Cisco Stealthwatch Cloud"
   },
   {
    "q": "Which Cisco security solution allows us to share contextual device information bi-directionally with other security tools, even from vendors other than Cisco?",
    "options": [
     "Cisco pxGrid",
     "Cisco AnyConnect",
     "Cisco Stealthwatch",
     "Cisco Firepower"
    ],
    "answer": "A",
    "why": "Cisco Platform Exchange Grid (pxGrid) is a data-sharing and threat control platform which allows multiple security products to work together. It's common to use security tools from various vendors, which creates silos of data that isn't often shared. Cisco pxGrid allows multivendor platforms to bi-directionally exchange information without relying on product-specific APIs. This can pull together things such as security monitoring systems, detection systems, access management platforms, and more.",
    "vid": ""
   },
   {
    "q": "Which Cisco-acquired technology has been integrated with many security solutions in order to better identify anomalies through machine learning?",
    "options": [
     "pxGrid",
     "Encrypted Traffic Analytics",
     "Cognitive Threat Analytics",
     "Umbrella"
    ],
    "answer": "C",
    "why": "In 2013, Cisco acquired the Cognitive Security group, a company dedicated to machine learning. These machine learning solutions were integrated with Cisco security solutions such as Cisco Stealthwatch, in order to identify a normal baseline of our network activity, so that anomalies can be better identified.",
    "vid": "6.4.4 Cisco CTA and ETA"
   },
   {
    "q": "Which technology allows us to collect flow information from endpoints even if they are not on the local network?",
    "options": [
     "Umbrella",
     "Network Visibility Module",
     "AMP for Endpoints",
     "Stealthwatch Cloud"
    ],
    "answer": "B",
    "why": "Because users are more commonly working from environments outside of our local business and network, we need a way to have visibility into what's going on with these remote devices. With users who are leveraging Cisco AnyConnect to provide a secure VPN tunnel into the enterprise network, we can use the Cisco AnyConnect Network Visibility Module (NVM) as a solution to this problem. NVM will collect flow information from an endpoint when the AnyConnect VPN is connected to our trusted network.",
    "vid": "6.4.5 Cisco AnyConnect Network Visibility Module (NVM)"
   }
  ],
  "blurb": "5 real SCOR quiz questions from Module 6 \u2014 Exfiltration Wrap-up.",
  "x": 84,
  "y": 32,
  "missions": [
   {
    "task": "\ud83d\udcd6 Exfiltration Wrap-up \u2014 clear 5 real quiz questions",
    "device": "SCOR",
    "cmds": [],
    "quizmode": true
   }
  ]
 }
];
const SCOR_MODULES = [
 {
  "mod": 1,
  "name": "MODULE 1 \u2014 SECURITY CONCEPTS"
 },
 {
  "mod": 2,
  "name": "MODULE 2 \u2014 NETWORK SECURITY"
 },
 {
  "mod": 3,
  "name": "MODULE 3 \u2014 CLOUD SECURITY"
 },
 {
  "mod": 4,
  "name": "MODULE 4 \u2014 CONTENT SECURITY"
 },
 {
  "mod": 5,
  "name": "MODULE 5 \u2014 ENDPOINT PROTECTION"
 },
 {
  "mod": 6,
  "name": "MODULE 6 \u2014 SECURE ACCESS"
 }
];
