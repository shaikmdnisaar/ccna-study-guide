const QUESTS = [
 {
  "id": "CDP_and_LLDP_Lab",
  "name": "CDP & LLDP",
  "icon": "\ud83d\udce1",
  "mod": 4,
  "x": 55,
  "y": 30,
  "topic": "Neighbor Discovery",
  "diff": 1,
  "blurb": "Discover who is plugged into your network.",
  "missions": [
   {
    "task": "Identify neighboring devices by using the \"show cdp neighbors\" command on SW1.",
    "device": "SW1",
    "cmds": [
     "show cdp neighbors"
    ]
   },
   {
    "task": "Find detailed information about R1 by using CDP.",
    "device": "SW1",
    "cmds": [
     "show cdp neighbors detail"
    ]
   },
   {
    "task": "Enable LLDP on SW1.",
    "device": "SW1",
    "cmds": [
     "conf t",
     "lldp run"
    ]
   },
   {
    "task": "Identify SW1 by using the \"show lldp neighbors\" command on R1.",
    "device": "R1",
    "cmds": [
     "show lldp neighbors Capability"
    ]
   },
   {
    "task": "Keep Gig 0/0 on R1 from receiving and transmitting LLDP information.",
    "device": "R1",
    "cmds": [
     "conf t",
     "int gig 0/0",
     "no lldp transmit",
     "no lldp receive"
    ]
   },
   {
    "task": "Identify tlv (type length value) information that we can turn on or off on R1.",
    "device": "R1",
    "cmds": [
     "conf t"
    ]
   },
   {
    "task": "Find detailed information about SW1 by using LLDP.",
    "device": "R1",
    "cmds": [
     "show lldp neighbors detail"
    ]
   }
  ],
  "quiz": [
   {
    "q": "You are configuring a network and need to identify adjacent Cisco devices, some of which do not have IP addresses. Which protocol would you use to discover these Layer 2 adjacent devices?",
    "options": [
     "SNMP",
     "CDP",
     "LACP",
     "OSPF"
    ],
    "answer": "B",
    "why": "CDP (Cisco Discovery Protocol) is a Layer 2 protocol that allows Cisco devices to discover information about directly connected CDP-speaking devices without the need for IP addressing. It enables network devices to share information about themselves with other directly connected devices on the network, facilitating the discovery of a network topology by revealing details about adjacent CDP-speaking devices.",
    "topic": "Neighbor Discovery (CDP/LLDP)"
   },
   {
    "q": "As a network administrator, you're tasked with enhancing the security of your network's edge that connects to an Internet Service Provider (ISP). To prevent the ISP from gaining insights regarding your edge router, what CDP command should you apply on the interface connected to the ISP?",
    "options": [
     "cdp enable",
     "cdp run",
     "no cdp run",
     "no cdp enable"
    ],
    "answer": "D",
    "why": "The `no cdp enable` command is used to selec=vely disable CDP on a specific interface. This prevents the device on the other end of the link, such as an ISP , from receiving CDP packets that contain information about your network device, thus enhancing security by limiting the amount of information exposed. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "Neighbor Discovery (CDP/LLDP)"
   },
   {
    "q": "You are integrating non-Cisco devices into your network and want to ensure all devices can discover each other at Layer 2. Which protocol would you use to achieve this?",
    "options": [
     "LLDP",
     "SNMP",
     "CDP",
     "BGP"
    ],
    "answer": "A",
    "why": "LLDP (Link Layer Discovery Protocol) is an IEEE standard (802.1AB) protocol designed for discovering Layer 2 adjacent devices that are part of a network, irrespective of their vendor . Unlike CDP , which is proprietary to Cisco, LLDP offers a vendor-neutral solution, allowing for interoperability across different network device manufacturers.",
    "topic": "Neighbor Discovery (CDP/LLDP)"
   },
   {
    "q": "You're configuring a switch port and wish to stop sending LLDP packets to a directly connected service provider in order to betier protect your network details. Which command allows you to achieve this without affecting your ability to receive LLDP packets from the service provider?",
    "options": [
     "no lldp run",
     "lldp transmit",
     "no lldp transmit",
     "lldp receive"
    ],
    "answer": "C",
    "why": "The `no lldp transmit` command disables the transmission of LLDP packets from a switch port to other devices, such as a service provider, helping ensure that sensitive network information is not inadvertently shared. This command does not affect the switch port's ability to receive LLDP packets, allowing it to still learn details regarding a directly connected LLDP-speaking device.",
    "topic": "Neighbor Discovery (CDP/LLDP)"
   }
  ]
 },
 {
  "id": "VLAN_Lab",
  "name": "VLANs",
  "icon": "\ud83d\udd22",
  "mod": 4,
  "x": 25,
  "y": 52,
  "topic": "Switching",
  "diff": 2,
  "blurb": "Slice one switch into many broadcast domains.",
  "missions": [
   {
    "task": "View the VLANs that already exist on switch SW1.",
    "device": "SW1",
    "cmds": [
     "show vlan brief"
    ]
   },
   {
    "task": "Use the \"show cdp neighbors\" command to see which ports on switch SW1 connect to other switches.",
    "device": "SW1",
    "cmds": [
     "show cdp neighbors"
    ]
   },
   {
    "task": "Create a VLAN numbered \"100\" and named \"ENGINEERING\".",
    "device": "SW1",
    "cmds": [
     "conf t",
     "vlan 100",
     "name ENGINEERING"
    ]
   },
   {
    "task": "Add interface Gig 0/3 to VLAN 100",
    "device": "SW1",
    "cmds": [
     "int gig 0/3",
     "switchport access vlan 100"
    ]
   },
   {
    "task": "Confirm interface Gig 0/3 resides in VLAN 100.",
    "device": "SW1",
    "cmds": [
     "show vlan brief"
    ]
   },
   {
    "task": "Delete VLAN 100.",
    "device": "SW1",
    "cmds": [
     "conf t",
     "no vlan 100"
    ]
   },
   {
    "task": "Determine in which VLAN interface Gig 0/3 now resides.",
    "device": "SW1",
    "cmds": [
     "show vlan brief"
    ]
   },
   {
    "task": "Assign interface Gig 0/3 back to VLAN 1.",
    "device": "SW1",
    "cmds": [
     "conf t",
     "int gig 0/3",
     "switchport access vlan 1"
    ]
   },
   {
    "task": "Confirm interface Gig 0/3 now resides in VLAN 1.",
    "device": "SW1",
    "cmds": [
     "show vlan brief"
    ]
   }
  ],
  "quiz": [
   {
    "q": "You are configuring a network for a company with several departments, and you need to ensure that each department is on a separate broadcast domain to enhance security and performance. Which of the following actions best accomplishes this goal?",
    "options": [
     "Assign all devices to the default VLAN",
     "Configure a trunk port for each department",
     "Place all departments on the same subnet with different IP ranges",
     "Segment the network into different VLANs based on department"
    ],
    "answer": "D",
    "why": "Segmenting the network into different VLANs based on department ensures that each department is on a separate broadcast domain. This setup enhances network security and performance by isolating departmental traffic, reducing broadcast traffic, and limiting the visibility of devices across different departments.",
    "topic": "VLANs"
   },
   {
    "q": "You are tasked with senting up VLANs for a company with two departments: Engineering and Human Resources. AVer creating VLANs 10 and 20 for Engineering and HR respectively, you need to assign interfaces to these VLANs. How would you most efficiently assign interfaces GigabitEthernet0/1 and GigabitEthernet0/2 to the Engineering VLAN (VLAN 10)?",
    "options": [
     "Use the `interface range gig 0/1-2` command followed by the `switchport access vlan 10` command",
     "Individually configure each interface with `switchport access vlan 10` command",
     "Assign the interfaces to VLAN 10 using the `vlan database` command",
     "Apply the `switchport access vlan 10` command under the global configuration mode, causing it to be inherited by interfaces without a VLAN assignment"
    ],
    "answer": "A",
    "why": "The `interface range` command allows you to configure multiple interfaces at the same Eme. By entering ` interface range gig 0/1-2` and then applying the `switchport access vlan 10` command, both interfaces are assigned to the Engineering VLAN (VLAN 10). This method is more efficient than individually configuring each interface, which is also a valid method but not the best option given. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "VLANs"
   },
   {
    "q": "You are configuring a router-on-a-stick to facilitate communication between VLAN 10 and VLAN 20 on a Layer 2 switch. Which of the following configurations is essential on the router's interface to support traffic for both VLANs?",
    "options": [
     "Configure the interface as an access port for VLAN 10",
     "Subdivide the interface into two subinterfaces, each with its own VLAN identifier",
     "Configure two physical interfaces, one for each VLAN",
     "Set the interface to default VLAN 1 to automatically route VLAN traffic"
    ],
    "answer": "B",
    "why": "A router-on-a-stick configuration uses a single physical router interface subdivided into multiple subinterfaces, each representing a VLAN with a unique VLAN identifier . This setup allows the router to route traffic between multiple VLANs over a single interface, with each subinterface acting as the default gateway for its VLAN.",
    "topic": "VLANs"
   },
   {
    "q": "When configuring a Layer 3 switch to facilitate inter-VLAN routing without an external router, what should be created for each VLAN to allow devices within those VLANs to communicate with each other?",
    "options": [
     "A dedicated physical interface for each VLAN",
     "A static route configuration for each VLAN",
     "A Switch Virtual Interface (SVI) for each VLAN",
     "A separate routing protocol instance for each VLAN"
    ],
    "answer": "C",
    "why": "Switch Virtual Interfaces (SVIs) provide a means to route traffic between VLANs on a Layer 3 switch without the need for an external router . By assigning an IP address to an SVI for each VLAN, the switch can use these interfaces as the default gateways for devices in the VLANs, allowing for inter-VLAN routing. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "VLANs"
   },
   {
    "q": "You are configuring a switch to connect to a router for external network access. Which command would you use to transform a Layer 2 switch port into a Layer 3 routed port?",
    "options": [
     "switchport mode access",
     "switchport mode trunk",
     "ip routing",
     "no switchport"
    ],
    "answer": "D",
    "why": "The command `no switchport` is used to convert a Layer 2 switch port into a Layer 3 routed port. This command disables the switchport functionality, allowing the port to be assigned an IP address and participate in routing.",
    "topic": "VLANs"
   }
  ]
 },
 {
  "id": "Trunking_Lab",
  "name": "Trunking 802.1Q",
  "icon": "\ud83d\udee3\ufe0f",
  "mod": 4,
  "x": 50,
  "y": 52,
  "topic": "Switching",
  "diff": 2,
  "blurb": "Carry all VLANs across one cable.",
  "missions": [
   {
    "task": "On switch SW1, enter interface-range configuration mode for interfaces Gig 0/1-Gig 0/2, and configure IEEE 802.1Q as the trunking encapsulation for those ports.",
    "device": "SW1",
    "cmds": [
     "conf t",
     "int range Gig 0/1-2",
     "switchport trunk encapsulation dot1q"
    ]
   },
   {
    "task": "Still in interface-range configuration mode, configure the trunking mode for \"dynamic desirable.\"",
    "device": "SW1",
    "cmds": [
     "switchport mode dynamic desirable"
    ]
   },
   {
    "task": "On switch SW2, configure interface Gig 0/1 for IEEE 802.1Q trunking encapsulation and a trunking mode of \"dynamic auto.\"",
    "device": "SW2",
    "cmds": [
     "conf t",
     "int gig 0/1",
     "switchport trunk encapsulation dot1q",
     "switchport mode dynamic auto"
    ]
   },
   {
    "task": "On switch SW3, configure interface Gig 0/1 for IEEE 802.1Q trunking encapsulation and a trunking mode of \"trunk.\"",
    "device": "SW3",
    "cmds": [
     "conf t",
     "int gig 0/1",
     "switchport trunk encapsulation dot1q",
     "switchport mode trunk"
    ]
   },
   {
    "task": "On switch SW1, verify interfaces Gig 0/1 and Gig 0/2 are trunking.",
    "device": "SW1",
    "cmds": [
     "show interfaces trunk"
    ]
   }
  ],
  "quiz": [
   {
    "q": "You are analyzing traffic flowing over an Ethernet trunk. For most of the frames, you see four extra \"tag\" bytes that, among other functions, identify the VLAN of the frame. However, some frames do not have these tag bytes. What can you conclude about these untagged frames?",
    "options": [
     "The frames belong to the trunk's Default VLAN",
     "The frames are destined for a multicast group",
     "The frames are single fragments of a fragmented frame",
     "The frames belong to the trunk's Native VLAN"
    ],
    "answer": "D",
    "why": "An IEEE 802.1Q trunk can carry traffic for multiple VLANs over a single link. Frames for most VLANs are tagged with four additional \"tag\" bytes. One of the fields in the tag bytes identifies the VLAN of that frame. However, there is one exception. One VLAN, known as the \"Native VLAN,\" is not tagged, meaning it does not have those four tag bytes added to its frames. Therefore, it's important that the ports at each end of a trunk be configured with an identical Native VLAN (which defaults to VLAN 1).",
    "topic": "Trunking"
   },
   {
    "q": "As a network administrator for the Sales division in your company, you have administrative privileges on switch SW1. This switch is connected via a single Ethernet link to switch SW2. However, you do not have administrative access to switch SW2, yet you have been assigned the task of configuring an Ethernet trunk between those two switches. You happen to know the default trunk mode for ports on switch SW2 is \"dynamic auto.\" Which of the following trunk modes can you configure on the SW1 side of the link to form a trunk?",
    "options": [
     "access",
     "voice vlan",
     "dynamic desirable",
     "dynamic auto"
    ],
    "answer": "C",
    "why": "The \"dynamic desirable\" mode actively adempts to negotiate a trunk link by sending Dynamic Trunking Protocol (DTP) frames. When a port configured in \"dynamic desirable\" mode connects to another switch port that is in \"dynamic desirable,\" \"dynamic auto,\" or \"trunk\" mode, a trunk is formed. This mode is preferred when you want to ensure that a trunk is established without manual configuration of a far-end switch. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "Trunking"
   },
   {
    "q": "You are a network engineer tasked with securing a trunk link to ensure that it only carries traffic for VLANs explicitly specified by your network policy. Specifically, you only want to allow VLANs to 10, 20, and 30 on the trunk. Which of the following commands will achieve this security enhancement?",
    "options": [
     "switchport trunk allowed vlan 10,20,30",
     "switchport trunk allowed vlan include 10,20,30",
     "switchport trunk denied vlan except 10,20,30",
     "switchport trunk permit vlan add 10,20,30"
    ],
    "answer": "A",
    "why": "The `switchport trunk allowed vlan 10,20,30` command is the correct syntax to explicitly restrict the trunk link to carry only VLANs 10, 20, and 30. As another option, instead of explicitly stating which VLANs you wish to allow, you could tell the trunk to allow all VLANs, except the ones you specify. For example, if you wished to permit all VLANs except 10, 20, and 30, you could use the command `switchport trunk allowed vlan except 10,20,30` in interface configuration mode for your trunk port.",
    "topic": "Trunking"
   },
   {
    "q": "Under what circumstances might you opt for a single VLAN access port instead of a multi-VLAN access port for your IP telephony deployment?",
    "options": [
     "When you need to support Cisco IP phones with CDP version 2",
     "When using a third-party IP phone that does not support multi-VLAN access ports",
     "When running LLDP-MED for VLAN membership notification",
     "When you want to separate voice and data traffic into different VLANs"
    ],
    "answer": "B",
    "why": "A single VLAN access port might be chosen over a multi-VLAN access port when dealing with third-party IP phones that do not support the concept of multi-VLAN access ports. In this case, the voice and data traffic share the same VLAN.",
    "topic": "Trunking"
   },
   {
    "q": "When configuring a multi-VLAN access port for a Cisco IP Phone, which command specifies the VLAN for voice traffic?",
    "options": [
     "switchport mode access",
     "switchport voice vlan 400",
     "switchport trunk allowed vlan 300,400",
     "switchport trunk native vlan 300"
    ],
    "answer": "B",
    "why": "When configuring a multi-VLAN access port, the command `switchport voice vlan 400` specifies the VLAN dedicated for voice traffic. This allows the IP phone to tag voice frames with VLAN 400, ensuring proper VLAN separation and prioritization for voice traffic while using the same physical port for both voice and data.",
    "topic": "Trunking"
   }
  ]
 },
 {
  "id": "Spanning_Tree_Protocol_Lab",
  "name": "Spanning Tree",
  "icon": "\ud83c\udf33",
  "mod": 4,
  "x": 75,
  "y": 52,
  "topic": "Switching",
  "diff": 3,
  "blurb": "Kill loops, keep redundancy. Root bridge politics.",
  "missions": [
   {
    "task": "Which switch is the root bridge?   SW1>enable SW1#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              Cost        4              Port        3 (GigabitEthernet0/2)              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.001d.b96c              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  SW2>enable SW2#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              Cost        4              Port        3 (GigabitEthernet0/2)              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.0019.51aa              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  SW3>enable SW3#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              This bridge is the root              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.0002.96d2              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec",
    "device": "SW1",
    "cmds": [
     "show spanning-tree"
    ]
   },
   {
    "task": "Which ports are the root ports?  SW1#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              Cost        4              Port        3 (GigabitEthernet0/2)              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.001d.b96c              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  Interface           Role Sts Cost      Prio.Nbr Type ------------------- ---- --- --------- -------- -------------------------------- Gi0/1               Altn BLK 4         128.2    P2p  Gi0/2               Root FWD 4         128.3    P2p   SW2#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              Cost        4              Port        3 (GigabitEthernet0/2)              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.0019.51aa              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  Interface           Role Sts Cost      Prio.Nbr Type ------------------- ---- --- --------- -------- -------------------------------- Gi0/1               Desg FWD 4         128.2    P2p  Gi0/2               Root FWD 4         128.3    P2p  Gi0/3               Altn BLK 4         128.4    P2p   SW3#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              This bridge is the root              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.0002.96d2              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  Interface           Role Sts Cost      Prio.Nbr Type ------------------- ---- --- --------- -------- -------------------------------- Gi0/1               Desg FWD 4         128.2    P2p  Gi0/2               Desg FWD 4         128.3    P2p  Gi0/3               Desg FWD 4         128.4    P2p",
    "device": "SW1",
    "cmds": [
     "show spanning-tree"
    ]
   },
   {
    "task": "Which ports are the designated ports?  SW1#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              Cost        4              Port        3 (GigabitEthernet0/2)              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.001d.b96c              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  Interface           Role Sts Cost      Prio.Nbr Type ------------------- ---- --- --------- -------- -------------------------------- Gi0/1               Altn BLK 4         128.2    P2p  Gi0/2               Root FWD 4         128.3    P2p   SW2#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              Cost        4              Port        3 (GigabitEthernet0/2)              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.0019.51aa              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  Interface           Role Sts Cost      Prio.Nbr Type ------------------- ---- --- --------- -------- -------------------------------- Gi0/1               Desg FWD 4         128.2    P2p  Gi0/2               Root FWD 4         128.3    P2p  Gi0/3               Altn BLK 4         128.4    P2p   SW3#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              This bridge is the root              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.0002.96d2              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  Interface           Role Sts Cost      Prio.Nbr Type ------------------- ---- --- --------- -------- -------------------------------- Gi0/1               Desg FWD 4         128.2    P2p  Gi0/2               Desg FWD 4         128.3    P2p  Gi0/3               Desg FWD 4         128.4    P2p",
    "device": "SW1",
    "cmds": [
     "show spanning-tree"
    ]
   },
   {
    "task": "Which ports are the blocking ports?  SW1#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              Cost        4              Port        3 (GigabitEthernet0/2)              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.001d.b96c              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  Interface           Role Sts Cost      Prio.Nbr Type ------------------- ---- --- --------- -------- -------------------------------- Gi0/1               Altn BLK 4         128.2    P2p  Gi0/2               Root FWD 4         128.3    P2p   SW2#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              Cost        4              Port        3 (GigabitEthernet0/2)              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.0019.51aa              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  Interface           Role Sts Cost      Prio.Nbr Type ------------------- ---- --- --------- -------- -------------------------------- Gi0/1               Desg FWD 4         128.2    P2p  Gi0/2               Root FWD 4         128.3    P2p  Gi0/3               Altn BLK 4         128.4    P2p   SW3#show spanning-tree  VLAN0001   Spanning tree enabled protocol ieee   Root ID    Priority    32769              Address     5254.0002.96d2              This bridge is the root              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec    Bridge ID  Priority    32769  (priority 32768 sys-id-ext 1)              Address     5254.0002.96d2              Hello Time   2 sec  Max Age 20 sec  Forward Delay 15 sec              Aging Time  300 sec  Interface           Role Sts Cost      Prio.Nbr Type ------------------- ---- --- --------- -------- -------------------------------- Gi0/1               Desg FWD 4         128.2    P2p  Gi0/2               Desg FWD 4         128.3    P2p  Gi0/3               Desg FWD 4         128.4    P2p",
    "device": "SW1",
    "cmds": [
     "show spanning-tree"
    ]
   }
  ],
  "quiz": [
   {
    "q": "You are configuring a network with mul>ple switches and need to ensure optimal root bridge selection for Spanning Tree Protocol opera>ons. Given the significance of the bridge ID in this process, which component does NOT contribute to the bridge ID calculation?",
    "options": [
     "MAC address of the switch",
     "Port priority",
     "Switch priority",
     "VLAN ID"
    ],
    "answer": "B",
    "why": "The bridge ID, crucial for root bridge determination in STP , consists of a switch's priority and its MAC address. The VLAN ID may influence the extended system ID in certain spanning tree versions like PVST+, but the port priority does not directly contribute to the bridge ID calculation.",
    "topic": "STP"
   },
   {
    "q": "Your network experienced a link failure between two switches. In the context of traditional Spanning Tree Protocol, how long does it take for a blocking port to transition to a Forwarding state after the failure?",
    "options": [
     "50 seconds",
     "15 seconds",
     "20 seconds",
     "30 seconds"
    ],
    "answer": "A",
    "why": "In traditional STP , a blocking port goes through 20 seconds of Blocking, 15 seconds of Listening, and 15 seconds of Learning before it transi>ons to the Forwarding state, totaling 50 seconds. This process ensures a loop-free logical topology while adapting to topology changes.",
    "topic": "STP"
   },
   {
    "q": "You are configuring a network to op>mize traffic patterns for mul>ple VLANs using Cisco's Per VLAN Spanning Tree Plus (PVST+). If VLAN 200 should have a different root bridge than VLAN 100 to op>mize its traffic flow, how can you ensure this in a PVST+ environment?",
    "options": [
     "Set the same priority for all VLANs on all switches",
     "Manually configure each VLAN with a different MAC address",
     "Use the same root bridge for all VLANs across the network",
     "Assign different bridge priorities to VLANs on different switches"
    ],
    "answer": "D",
    "why": "PVST+ allows each VLAN to have its own spanning tree instance, meaning each VLAN can have a different root bridge based on its traffic flow needs. By assigning different bridge priorities to VLANs on different switches, network administrators can influence which switch becomes the root bridge for a par>cular VLAN, thereby op>mizing the traffic flow for that VLAN.",
    "topic": "STP"
   },
   {
    "q": "You connect a printer to an access layer switch port in your network. To minimize connec>vity delay, which STP feature should you enable on this port?",
    "options": [
     "BPDU Guard",
     "Root Guard",
     "PortFast",
     "UplinkFast"
    ],
    "answer": "C",
    "why": "PortFast is an STP feature designed to bypass the standard Listening and Learning states for ports connected to end devices, like printers, enabling them to transition directly to the Forwarding state and thus minimize connec>vity delays.",
    "topic": "STP"
   },
   {
    "q": "Imagine you are configuring a switch (SW1), which is acting as a Root Bridge. You want to ensure that an attached switch (SW2) does not assume the role of the Root Bridge, even if SW2 sends a superior BPDU to SW1. Which Spanning Tree Protocol (STP) enhancement would you configure to meet this requirement?",
    "options": [
     "BPDU Filter",
     "Root Guard",
     "Loop Guard",
     "BPDU Guard"
    ],
    "answer": "B",
    "why": "Root Guard is an STP enhancement that is configured on switch port, off of which a superior BPDU should not be seen. This can help protect a network from an attacker adding their own switch and adver>sing a superior BPDU (i.e., a BPDU claiming the newly added switch has the lowest Bridge ID (BID) in the network). \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "STP"
   },
   {
    "q": "You are monitoring a network and notice that a non-designated port on a switch has stopped receiving BPDUs but is still capable of sending data. To prevent potential Layer 2 topological loops due to this unidirec>onal link failure, which STP feature should be ac>vated on this port?",
    "options": [
     "Root Guard",
     "BPDU Filter",
     "Loop Guard",
     "BPDU Guard"
    ],
    "answer": "C",
    "why": "Loop Guard is specifically designed to handle situa>ons where a non-designated port stops receiving BPDUs but con>nues to transmit data. This feature will automa>cally transition the port into a Loop-Inconsistent state if it stops receiving BPDUs, thus preventing the port from mistakenly transi>oning to the Forwarding state and poten>ally creating a Layer 2 topological loop.",
    "topic": "STP"
   },
   {
    "q": "As a network administrator, you are responsible for preventing Spanning Tree Protocol (STP) information from leaking between two dis>nct autonomous systems within your organization. To achieve this, you decide to implement an STP enhancement feature on a switch interface connecting one autonomous system to the other autonomous system. Which feature should you configure?",
    "options": [
     "BPDU Guard",
     "Root Guard",
     "Loop Guard",
     "BPDU Filter"
    ],
    "answer": "D",
    "why": "BPDU Filter is the appropriate feature to use in this scenario. It prevents Bridge Protocol Data Units (BPDUs) from being sent or received through a specified port. By filtering out BPDUs on the interface connecting the switches of two different autonomous systems, you can ensure that each system maintains its own Spanning Tree topology without interference or integration with the other, thus preserving the autonomy and security of both network segments. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "STP"
   },
   {
    "q": "You are a network technician setting up a switch with several ports configured for PortFast, which should only connect to end sta>ons. What addi>onal feature should you enable on these ports to ensure they are immediately disabled if they receive a BPDU, thus preventing unauthorized switches from poten>ally causing a network loop or a sub-op>mal Spanning Tree topology?",
    "options": [
     "BPDU Filter",
     "Root Guard",
     "Loop Guard",
     "BPDU Guard"
    ],
    "answer": "D",
    "why": "BPDU Guard is the correct feature to enable in this scenario. When BPDU Guard is active on a PortFast-enabled port, it ensures that the port is moved into an Error-Disabled state if any BPDU is received. This feature is crucial for preventing network loops or sub-op>mal Spanning Tree topologies by immediately disabling the port upon detecting a BPDU, indicating that a switch, rather than an end station, has been connected to the port.",
    "topic": "STP"
   },
   {
    "q": "In a network with varying VLAN traffic patterns, you seek an STP op>mization strategy that minimizes the number of spanning tree instances while ensuring optimal paths for VLAN traffic. Which STP variant meets these requirements?",
    "options": [
     "PVST+",
     "RSTP",
     "MSTP",
     "CST"
    ],
    "answer": "C",
    "why": "MSTP (Mul>ple Spanning Tree Protocol) allows for the creation of mul>ple spanning tree instances that can be shared among VLANs, op>mizing path selection based on traffic patterns while reducing the number of required instances. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "STP"
   },
   {
    "q": ". You are configuring a network to improve convergence >mes in the event of a link failure. Given the significant reduction in convergence >mes provided by RSTP compared to traditional STP , which of the following best describes the >me frame you can expect for a link failure recovery with RSTP?",
    "options": [
     "Instantaneous recovery",
     "Recovery within a few milliseconds to a maximum of about six seconds",
     "Recovery within 30 seconds",
     "Recovery within 50 seconds"
    ],
    "answer": "B",
    "why": "Rapid Spanning Tree Protocol (RSTP) significantly reduces the default convergence >me of traditional STP from poten>ally 50 seconds to a range of a few milliseconds to a maximum of about six seconds. This improvement is especially notable in the case of direct link failures, where the convergence >me can be on the lower end of this range. The capability of switches to quickly propagate Topology Change No>fica>ons (TCNs) contributes to this speed increase, ensuring faster recovery and minimal network downtime.",
    "topic": "STP"
   },
   {
    "q": ". You're in the process of configuring your network switches to use Rapid PVST . AUer configuring the switches, you need to verify that a specific switch has successfully transi>oned to Rapid PVST mode. Which command should you use to confirm the current Spanning Tree Protocol mode on a Cisco switch?",
    "options": [
     "show spanning-tree summary",
     "show version",
     "show protocols",
     "show running-config"
    ],
    "answer": "A",
    "why": "The `show spanning-tree summary` command is the appropriate command to verify the STP mode on a Cisco switch. This command provides a concise summary of the STP status, including the current STP mode, which would reflect Rapid PVST after successful configuration. This command is especially useful for quickly confirming the opera>onal status and root bridge designation for various VLANs.",
    "topic": "STP"
   }
  ]
 },
 {
  "id": "EtherChannel_Lab",
  "name": "EtherChannel",
  "icon": "\u26d3\ufe0f",
  "mod": 4,
  "x": 40,
  "y": 74,
  "topic": "Switching",
  "diff": 3,
  "blurb": "Bundle links into one fat logical pipe.",
  "missions": [
   {
    "task": "Bundle connections between SW2 and SW3 into a logical EtherChannel.",
    "device": "SW2",
    "cmds": [
     "conf t",
     "int range gig 0/2-3",
     "no negotiation auto",
     "speed 1000",
     "duplex full",
     "channel-group 1 mode desirable",
     "channel-group 1 mode auto (SW3 is set to auto while SW2 is set to desirable, meaning, SW2 is wanting to initiate the port-channel)"
    ]
   },
   {
    "task": "Designate the EtherChannel as a trunk port.",
    "device": "SW2",
    "cmds": [
     "int port-channel 1",
     "switchport trunk encapsulation dot1q",
     "switchport mode trunk"
    ]
   },
   {
    "task": "Verify configuration.",
    "device": "SW2",
    "cmds": [
     "show ip int brief",
     "show int trunk",
     "show int port-channel 1"
    ]
   }
  ],
  "quiz": [
   {
    "q": "Imagine you are configuring an EtherChannel between two switches to enhance bandwidth and provide redundancy. What is an essential step to ensure the EtherChannel functions correctly?",
    "options": [
     "Assign different IP addresses to each port in the EtherChannel",
     "Ensure all ports in the EtherChannel have different VLAN sentings",
     "Configure all ports in the EtherChannel with the same speed and duplex sentings",
     "Turn off Spanning Tree Protocol (STP) on the EtherChannel ports to prevent ports from blocking traffic"
    ],
    "answer": "C",
    "why": "For an EtherChannel to operate correctly, it is critical that all ports in the EtherChannel bundle on both switches are configured with the same speed and duplex sentings. This ensures that the ports can communicate effectively and function as a single, logical connection. Mismatched sentings could prevent the EtherChannel from forming or lead to suboptimal performance.",
    "topic": "EtherChannel"
   },
   {
    "q": "When configuring an EtherChannel with PAgP, w h i c h m o d e c o m b i n a D o n w i l l s u c c e s s f u l l y establish an EtherChannel?",
    "options": [
     "One side set to \"auto\" and the other side set to \"desirable\"",
     "Both sides set to \"auto\"",
     "One side set to \"desirable\" and the other to \"on\"",
     "One side set to \"auto\" and the other side set to \"on\""
    ],
    "answer": "A",
    "why": "For an EtherChannel to form using PAgP , one side must be set to \"desirable,\" which actively sends PAgP frames to negotiate an EtherChannel, and the other side can be set to either \"auto\" (which is willing to form an EtherChannel but will not initiate it) or \"desirable\". \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "EtherChannel"
   },
   {
    "q": "Considering EtherChannel load balancing methods, which scenario best utilizes the load balancing algorithm based on both source and destination MAC addresses?",
    "options": [
     "A network environment where traffic is predominantly broadcast",
     "A network setup with identical traffic patterns between fixed source-destination pairs",
     "A network where EtherChannel links are used exclusively for server backups at fixed schedules",
     "A network with mostly unicast traffic where source and destination pairs vary widely"
    ],
    "answer": "D",
    "why": "The load balancing algorithm that considers both source and destination address information (either MAC address or IP address information) is most effective in environments where source-destination pairs vary widely. This method distributes traffic across the EtherChannel links more evenly by adding an element of randomness and diversity to the path selection process, optimizing the use of available bandwidth.",
    "topic": "EtherChannel"
   },
   {
    "q": "As a network engineer, you're configuring a Layer 2 EtherChannel between switches SW1 and SW2. Which of the following commands correctly creates an EtherChannel using PAgP with a mode that actively seeks to form an EtherChannel?",
    "options": [
     "channel-group 1 mode passive",
     "channel-group 1 mode desirable",
     "channel-group 1 mode auto",
     "channel-group 1 mode active"
    ],
    "answer": "B",
    "why": "In PAgP (Port Aggregation Protocol), which is Cisco proprietary, the \"desirable\" mode actively sends PAgP frames to negotiate the formation of an EtherChannel. This mode indicates that the port actively seeks to form an EtherChannel with the remote port if the remote port is set to either \"auto\" or \"desirable\" mode. Therefore, \"channel-group 1 mode desirable\" is the correct command for creating an EtherChannel that proactively attempts to form using PAgP. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "EtherChannel"
   },
   {
    "q": "In the process of senting up a Layer 3 EtherChannel between two switches for inter-VLAN routing, which configuration step is essential?",
    "options": [
     "Configuring the port channel with an IP address before assigning the physical interfaces to the EtherChannel",
     "Ensuring all ports in the EtherChannel are configured as access ports with the same VLAN ID",
     "Senting the EtherChannel mode to \"desirable\" to actively negotiate LACP packets",
     "Assigning the port channel interface an IP address to enable Layer 3 routing capabilities"
    ],
    "answer": "D",
    "why": "For a Layer 3 EtherChannel, the crucial step is assigning the port channel interface an IP address, which enables routing capabilities over the EtherChannel. This is because, in a Layer 3 EtherChannel, the port channel interface acts as a routed interface instead of a switchport, allowing it to facilitate inter-VLAN routing or routing between different IP networks. The other options are not relevant to configuring a Layer 3 EtherChannel for routing purposes.",
    "topic": "EtherChannel"
   }
  ]
 },
 {
  "id": "Static_NAT_Lab",
  "name": "Static NAT",
  "icon": "\ud83d\udd04",
  "mod": 7,
  "x": 55,
  "y": 30,
  "topic": "Address Translation",
  "diff": 3,
  "blurb": "One inside host, one public IP, forever.",
  "missions": [
   {
    "task": "On R1, designate which interface will be the inside NAT interface and which will be the outside NAT interface.",
    "device": "R1",
    "cmds": [
     "conf t",
     "int gig 0/0",
     "ip nat inside",
     "int gig 0/1",
     "ip nat outside"
    ]
   },
   {
    "task": "Add a static NAT statement to map the inside local address to the inside global address.",
    "device": "R1",
    "cmds": [
     "ip nat inside source static 10.1.1.100 4.4.4.2"
    ]
   },
   {
    "task": "Login to PC1 (username= cisco, password= cisco) and verify connectivity to the Web Server at 3.3.3.3, and verify that the static translation takes place on R1.",
    "device": "R1",
    "cmds": [
     "show ip nat translations"
    ]
   }
  ],
  "quiz": [
   {
    "q": "You are a network administrator tasked with configuring static NAT on router R1 to allow PC1 with an inside local address of 192.168.1.100 to access the Internet using the inside global address of 192.0.2.101. Which command correctly maps the inside local address to the inside global address?",
    "options": [
     "ip nat inside source static 192.168.1.100 192.0.2.101",
     "ip nat outside source static 192.168.1.100 192.0.2.101",
     "ip nat inside source dynamic 192.168.1.100 192.0.2.101",
     "ip nat outside source dynamic 192.168.1.100 192.0.2.101"
    ],
    "answer": "A",
    "why": "The command `ip nat inside source static 192.168.1.100 192.0.2.101` is used to configure static NAT by mapping the inside local address (192.168.1.100) to the inside global address (192.0.2.101). The keyword `static` indicates this is a static mapping.",
    "topic": "NAT"
   },
   {
    "q": "You are configuring dynamic NAT on router R1. ARer defining the inside and outside interfaces, what is the next step to allow inside local addresses to be translated to addresses in a pool of inside global addresses?",
    "options": [
     "Configure a static NAT mapping",
     "Create an access control list (ACL) to match the inside local addresses",
     "Configure PAT (Port Address Translation)",
     "Enable NAT on both interfaces"
    ],
    "answer": "B",
    "why": "ARer defining which interfaces are considered to be \"inside\" and \"outside\" NAT interfaces (which also enables NAT on those interfaces), the next step in configuring dynamic NAT is to create an access control list (ACL) to match the inside local addresses that need to be translated to inside global addresses. Note that in this context, the ACL is being used to match traffic, rather than permit or deny traffic.",
    "topic": "NAT"
   },
   {
    "q": "In a small office setup with a single public IP address, which NAT variant allows multiple devices to share this single IP address using unique port numbers?",
    "options": [
     "Static NAT",
     "Dynamic NAT",
     "Network Address Port Translation (NAPT)",
     "Port Address Translation (PAT)"
    ],
    "answer": "D",
    "why": "Port Address Translation (PAT) allows multiple devices on a local network to be mapped to a single public IP address but with a unique port number for each session. This is also known as \"NAT Overloading.\"",
    "topic": "NAT"
   }
  ]
 },
 {
  "id": "Dynamic_NAT_Lab",
  "name": "Dynamic NAT",
  "icon": "\ud83c\udfb2",
  "mod": 7,
  "x": 80,
  "y": 30,
  "topic": "Address Translation",
  "diff": 3,
  "blurb": "A pool of publics, first come first served.",
  "missions": [
   {
    "task": "On R1, designate which interface will be the inside NAT interface and which will be the outside NAT interface.",
    "device": "R1",
    "cmds": [
     "conf t",
     "int gig 0/0",
     "ip nat inside",
     "int gig 0/1",
     "ip nat outside"
    ]
   },
   {
    "task": "Identify the inside local network by use of an ACL.",
    "device": "R1",
    "cmds": [
     "access-list 1 permit 10.1.1.0 0.0.0.255"
    ]
   },
   {
    "task": "Define the inside global NAT pool.",
    "device": "R1",
    "cmds": [
     "ip nat pool POOL 4.4.4.2 4.4.4.3 netmask 255.255.255.0",
     "ip nat inside source list 1 pool POOL"
    ]
   }
  ],
  "quiz": [
   {
    "q": "Dynamic NAT maps inside local addresses to public addresses pulled from a ___.",
    "options": [
     "static binding table",
     "pool",
     "DHCP server",
     "routing table"
    ],
    "answer": "B",
    "why": "A pool (ip nat pool NAME start end netmask) defines the public range; translations are allocated first-come, first-served."
   },
   {
    "q": "What happens when all pool addresses are in use and another inside host tries to browse out?",
    "options": [
     "Traffic queues until one frees",
     "Translation fails \u2014 packet dropped",
     "NAT borrows the outside interface IP"
    ],
    "answer": "B",
    "why": "Plain dynamic NAT has no overflow mechanism \u2014 the mapping fails. (PAT/overload reuses ports, which is why it scales.)"
   },
   {
    "q": "Which command tears down all dynamic NAT translations at once?",
    "options": [
     "clear ip nat translation *",
     "clear nat sessions",
     "erase nat table"
    ],
    "answer": "A",
    "why": "clear ip nat translation * clears every dynamic entry; statics are re-derived from config."
   }
  ]
 },
 {
  "id": "Port_Address_Translation_PAT_Lab",
  "name": "PAT Overload",
  "icon": "\ud83d\udeb0",
  "mod": 7,
  "x": 55,
  "y": 52,
  "topic": "Address Translation",
  "diff": 3,
  "blurb": "Everyone out one IP: port numbers do the magic.",
  "missions": [
   {
    "task": "On R1, designate which interface will be the inside NAT interface and which will be the outside NAT interface.",
    "device": "R1",
    "cmds": [
     "conf t",
     "int gig 0/0",
     "ip nat inside",
     "int gig 0/1",
     "ip nat outside"
    ]
   },
   {
    "task": "Identify the inside local network by use of an ACL.",
    "device": "R1",
    "cmds": [
     "access-list 1 permit 10.1.1.0 0.0.0.255"
    ]
   },
   {
    "task": "Specify that every IP address matching the ACL should be translated into a single IP address on the outside interface.",
    "device": "R1",
    "cmds": [
     "ip nat inside source list 1 int gig 0/1 overload"
    ]
   },
   {
    "task": "Login to PC1 and PC2 (username= cisco, password= cisco) and test HTTP connectivity from both PCs and verify the translation on R1.",
    "device": "R1",
    "cmds": [
     "show ip nat translation"
    ]
   }
  ],
  "quiz": [
   {
    "q": "PAT distinguishes simultaneous sessions from many inside hosts sharing ONE public IP by tracking unique ___.",
    "options": [
     "MAC addresses",
     "TCP/UDP source ports",
     "TTL values",
     "VLAN tags"
    ],
    "answer": "B",
    "why": "The NAT table keys on (public IP, port). ~64k ports per public IP is what makes overload scale."
   },
   {
    "q": "Which keyword turns NAT into PAT on the translation rule?",
    "options": [
     "overload",
     "pat",
     "multiplex",
     "extendable"
    ],
    "answer": "A",
    "why": "ip nat inside source list 1 interface Gi0/0 overload \u2014 that single keyword enables port multiplexing."
   },
   {
    "q": "Why is PAT the standard for home/SOHO internet links?",
    "options": [
     "It is faster than routing",
     "One public IPv4 serves hundreds of devices",
     "It encrypts traffic"
    ],
    "answer": "B",
    "why": "IPv4 scarcity: ISPs hand out a single address; overload multiplexes the whole LAN behind it."
   }
  ]
 },
 {
  "id": "Standard_Numbered_ACL_Lab",
  "name": "Standard ACLs",
  "icon": "\ud83d\udee1\ufe0f",
  "mod": 8,
  "x": 30,
  "y": 30,
  "topic": "Security",
  "diff": 3,
  "blurb": "Source-IP filtering, the classic 1\u201399.",
  "missions": [
   {
    "task": "Permit all IP traffic from PC1 to the Server.",
    "device": "R1",
    "cmds": [
     "conf t",
     "access-list 1 permit host 10.1.1.2"
    ]
   },
   {
    "task": "Deny all IP traffic from PC2 to the Server.",
    "device": "R1",
    "cmds": [
     "conf t",
     "access-list 1 deny host 10.1.1.3",
     "int gig 0/1",
     "ip access-group 1 in",
     "show access-list"
    ]
   }
  ],
  "quiz": [
   {
    "q": "You are a network administrator configuring ACLs on your network. You need to ensure that only Telnet traffic from a specific host can access a specific server while blocking all other traffic from that host. Which type of ACL should you use?",
    "options": [
     "standard ACL",
     "extended ACL",
     "class-based ACL",
     "outbound ACL"
    ],
    "answer": "B",
    "why": "An extended ACL allows you to specify both source and destination addresses as well as a specific protocol and port number . In this case, you can permit Telnet traffic (TCP port 23) from a specific host to a specific server, which is not possible with a standard ACL that only filters by source IP address.",
    "topic": "ACLs"
   },
   {
    "q": "You are configuring a numbered standard ACL to permit all IP traffic from the 192.168.10.0/24 network. Which of the following access control entries would you use?",
    "options": [
     "access-list 10 permit 192.168.10.0 0.0.0.255",
     "access-list 10 permit 192.168.10.0 255.255.255.0",
     "access-list 10 permit host 192.168.10.0 0.0.0.255",
     "access-list 10 permit 192.168.10.0"
    ],
    "answer": "A",
    "why": "In a numbered standard ACL, the correct syntax to permit all IP traffic from a network uses the network address followed by its wildcard mask. The wildcard mask for a /24 network is 0.0.0.255. Therefore, the correct ACE is \"access-list 10 permit 192.168.10.0 0.0.0.255\".",
    "topic": "ACLs"
   },
   {
    "q": "In configuring a numbered standard ACL, which of the following are the correct ranges for the ACL number?",
    "options": [
     "1-99 and 1000-1999",
     "1-199 and 2000-2699",
     "1-99 and 1300-1999",
     "100-199 and 2000-2999"
    ],
    "answer": "C",
    "why": "The ranges for standard ACLs are 1-99 and 1300-1999. These ranges are used to define standard ACLs, while 100-199 and 2000-2699 are reserved for extended ACLs.",
    "topic": "ACLs"
   },
   {
    "q": "You are configuring a numbered extended ACL to deny Telnet (TCP port 23) traffic from the 192.168.1.0/24 network to a server with an IP address of 10.1.1.10. Which of the following access control entries would you use?",
    "options": [
     "access-list 100 deny tcp 192.168.1.0 0.0.0.255 any eq 23",
     "access-list 100 deny tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 23",
     "access-list 100 deny tcp any host 10.1.1.10 eq 23",
     "access-list 100 deny tcp host 10.1.1.10 192.168.1.0 0.0.0.255 eq 23"
    ],
    "answer": "B",
    "why": "To deny Telnet traffic from the 192.168.1.0/24 network to a specific host, the correct syntax specifies the protocol (TCP), the source network with its wildcard mask, the destination host, and the TCP port number of 23. Therefore, the correct ACE is \"access-list 100 deny tcp 192.168.1.0 0.0.0.255 host 10.1.1.10 eq 23\".",
    "topic": "ACLs"
   },
   {
    "q": "What is one major advantage of using named ACLs over numbered ACLs?",
    "options": [
     "They can filter traffic based on MAC addresses",
     "They support more detailed logging options",
     "They are easier to understand and manage, because they can have descriptive names",
     "They provide betier performance than numbered ACLs"
    ],
    "answer": "C",
    "why": "Named ACLs can have descriptive names, which makes them easier to understand and manage as compared to numbered ACLs. This helps administrators quickly identify the purpose of an ACL in a configuration. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "ACLs"
   },
   {
    "q": "When troubleshooting an ACL that is blocking more traffic than intended, what is a common cause?",
    "options": [
     "The implicit \"deny any\" rule at the end of the ACL",
     "Incorrect ACL logging parameters",
     "Using an extended ACL instead of a standard ACL",
     "Not using named ACLs"
    ],
    "answer": "A",
    "why": "The implicit \"deny any\" rule at the end of an ACL blocks all traffic that is not explicitly permitted by the preceding rules. If an ACL is not correctly configured to permit necessary traffic before this implicit deny rule, it can block more traffic than intended.",
    "topic": "ACLs"
   }
  ]
 },
 {
  "id": "Extended_Numbered_ACL_Lab",
  "name": "Extended ACLs",
  "icon": "\u2694\ufe0f",
  "mod": 8,
  "x": 55,
  "y": 30,
  "topic": "Security",
  "diff": 4,
  "blurb": "Source AND destination AND port precision.",
  "missions": [
   {
    "task": "PC1 should not be allowed to contact the server using Telnet.",
    "device": "R1",
    "cmds": [
     "conf t"
    ]
   },
   {
    "task": "Allow PC1 and PC2 to connect to the server using all other ports by specifying the subnet of both PC's.",
    "device": "R1",
    "cmds": [
     "access-list 100 permit ip 10.1.1.0 0.0.0.255 any"
    ]
   },
   {
    "task": "Apply the ACL going into Gig 0/1.",
    "device": "R1",
    "cmds": [
     "int gig 0/1",
     "ip access-group 100 in"
    ]
   },
   {
    "task": "Take a look at the ACL that we just created.",
    "device": "R1",
    "cmds": [
     "show access-list"
    ]
   }
  ],
  "quiz": [
   {
    "q": "Which ACL number range is valid for extended IP access-lists?",
    "options": [
     "1\u201399",
     "100\u2013199",
     "1000\u20131099",
     "2000\u20132699"
    ],
    "answer": "B",
    "why": "1\u201399 standard, 100\u2013199 extended, 2000\u20132699 expanded standard. The number tells IOS the syntax to expect."
   },
   {
    "q": "An extended ACL should be placed ___.",
    "options": [
     "as close to the destination as possible",
     "as close to the source as possible",
     "only on the core switch"
    ],
    "answer": "B",
    "why": "Extended ACLs can match precisely, so filtering at the source stops unwanted traffic before it consumes any link. Standard ACLs go near destination."
   },
   {
    "q": "permit tcp host 10.1.1.5 host 172.16.0.1 eq 443 matches ___.",
    "options": [
     "any traffic from 10.1.1.5",
     "HTTPS from that exact source to that exact destination",
     "all traffic to port 443"
    ],
    "answer": "B",
    "why": "Extended syntax: protocol + source + destination + port. Every field must match \u2014 this is surgical filtering."
   }
  ]
 },
 {
  "id": "Extended_Named_ACL_Lab",
  "name": "Named ACLs",
  "icon": "\ud83c\udff7\ufe0f",
  "mod": 8,
  "x": 80,
  "y": 30,
  "topic": "Security",
  "diff": 4,
  "blurb": "Editable, named, professional-grade ACLs.",
  "missions": [
   {
    "task": "Create an extended named access control list and name it BLOCK_PC1_SERVICES on R1.",
    "device": "R1",
    "cmds": [
     "conf t",
     "ip access-list extended BLOCK_PC1_SERVICES",
     "("
    ]
   },
   {
    "task": "Permit all other traffic to the server.",
    "device": "R1",
    "cmds": [
     "permit ip any any"
    ]
   },
   {
    "task": "Apply our access control list, BLOCK_PC1_SERVICES, on the inbound direction of interface Gig 0/1 on R1.",
    "device": "R1",
    "cmds": [
     "int gig 0/1",
     "ip access-group BLOCK_PC1_SERVICES in"
    ]
   },
   {
    "task": "Take a look at the ACL that we just created.",
    "device": "R1",
    "cmds": [
     "show access-list"
    ]
   },
   {
    "task": "Add a sequence number of 15 to our ACL to keep PC1 from contacting the server using HTTP.",
    "device": "R1",
    "cmds": [
     "conf t",
     "ip access-list extended BLOCK_PC1_SERVICES",
     "15 deny tcp host 10.1.1.2 host 203.0.113.1 eq 80"
    ]
   },
   {
    "task": "Take another look at the ACL that we just created to see if our new addition is there.",
    "device": "R1",
    "cmds": [
     "show access-list"
    ]
   }
  ],
  "quiz": [
   {
    "q": "The biggest operational advantage of named over numbered ACLs is ___.",
    "options": [
     "faster matching",
     "you can insert/delete individual lines",
     "they use less memory"
    ],
    "answer": "B",
    "why": "Named ACLs support sequence numbers: ip access-list ext NAME \u2192 no 20 deny \u2026 lets you edit one line without nuking the whole list."
   },
   {
    "q": "ip access-list extended WEB-FILTER creates ___.",
    "options": [
     "a standard ACL",
     "an editable named extended ACL",
     "an object group"
    ],
    "answer": "B",
    "why": "That is the named-ACL submode entry command \u2014 you then add numbered sequence lines inside it."
   },
   {
    "q": "To attach named ACL WEB-FILTER inbound on Gi0/1:",
    "options": [
     "ip access-group WEB-FILTER in",
     "access-class WEB-FILTER in",
     "apply access-list WEB-FILTER in"
    ],
    "answer": "A",
    "why": "ip access-group attaches IP ACLs to interfaces (access-class is for vty lines). Named or numbered \u2014 same command."
   }
  ]
 },
 {
  "id": "OSPF_Lab",
  "name": "OSPF Single-Area",
  "icon": "\ud83e\udded",
  "mod": 5,
  "x": 55,
  "y": 52,
  "topic": "Routing",
  "diff": 4,
  "blurb": "Neighbors, LSAs, the protocol that runs the world.",
  "missions": [
   {
    "task": "Basic configuration with 2 Areas Background Information: Routers R1, R2, and R3 have already been configured with appropriate IP addressing. However, no IP routing protocols have been configured. The network needs to have OSPF configured as the IP routing protocol. The network should be divided into two OSPF areas, as shown in the figure.",
    "device": "R1",
    "cmds": [
     "conf t",
     "router ospf 1",
     "network 192.0.2.0 0.0.0.255 area 1",
     "network 10.1.1.0 0.0.0.255 area 1"
    ]
   },
   {
    "task": "Configure router R1 to have both of its interfaces participate in an OSPF routing process. Accomplish this task using two \"network\" commands.",
    "device": "R2",
    "cmds": [
     "conf t",
     "router ospf 1",
     "network 10.1.1.0 0.0.0.255 area 1",
     "int gig 0/1",
     "ip ospf 1 area 0"
    ]
   },
   {
    "task": "Configure router R2 to have both of its interfaces participate in an OSPF routing process. Accomplish this task using one \"network\" command, and one \"ip ospf [process_id] area [area_number]\" command.",
    "device": "R3",
    "cmds": [
     "conf t",
     "router ospf 1",
     "network 0.0.0.0 255.255.255.255 area 0"
    ]
   },
   {
    "task": "Configure router R3 to have both of its interfaces participate in an OSPF routing process. Accomplish this task using only one \"network\" command.",
    "device": "R1",
    "cmds": [
     "show ip route Codes:",
     "show ip ospf database",
     "Checksum Link count 172.16.1.1",
     "Checksum",
     "Checksum 172.16.1.1",
     "Checksum 10.1.1.0"
    ]
   }
  ],
  "quiz": [
   {
    "q": "You are configuring a new network segment for your company, connecting various devices and servers. If a device in this new segment needs to communicate with a server located in a different network segment, which piece of information is critical for the device to send packets to the server?",
    "options": [
     "The server's MAC address",
     "The server's wildcard mask",
     "The MAC address of the device's default gateway",
     "The MAC address of the server's default gateway"
    ],
    "answer": "C",
    "why": "For a device to communicate with another device or server in a different network segment, it needs to send the packets to its default gateway. The packets are then forwarded to the destination by routers. The device uses ARP (Address Resolution Protocol) to determine the MAC address of its default gateway, as this is the next hop for packets destined for other networks.",
    "topic": "Routing Fundamentals"
   },
   {
    "q": "Your router has learned routes to a specific network from multiple sources. Which criterion will your router use to select the most authoritative route when multiple routes to the same destination exist?",
    "options": [
     "The route with the lowest administrative distance",
     "The route with the highest bandwidth",
     "The route with the shortest path",
     "The route with the fewest number of hops"
    ],
    "answer": "A",
    "why": "The Administrative Distance (AD) is a value used by routers to choose the most authoritative route when there are multiple routes to the same destination. The lower the AD, the more trustworthy the source of the route. Directly connected networks have an AD of 0, making them the most reliable. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "Routing Fundamentals"
   },
   {
    "q": "In the context of routing protocols, which of the following correctly pairs a routing protocol with its categorization based on how it shares routing information?",
    "options": [
     "RIP - Link State",
     "EIGRP - Advanced Distance Vector",
     "OSPF - Distance Vector",
     "BGP - Interior Gateway Protocol"
    ],
    "answer": "B",
    "why": "EIGRP is considered an advanced distance-vector routing protocol. It enhances traditional distance vector-protocols with features that allow for quicker convergence and more efficient routing, yet it does not have a complete map of the network topology like link-state routing protocols (e.g., OSPF and IS-IS).",
    "topic": "Routing Fundamentals"
   },
   {
    "q": "You are a network engineer analyzing the routing table of a Cisco router that participate in both OSPF and EIGRP routing protocols. You observe routes to the same destination network advertised by both OSPF and EIGRP . Given the administrative distance values commonly associated with these protocols, under which conditions would the router prefer the OSPF route over the EIGRP route for forwarding packets?",
    "options": [
     "When the OSPF route has a lower metric than the EIGRP route",
     "When the EIGRP route's metric is artificially inflated",
     "When the OSPF route has a lower administrative distance than the EIGRP route",
     "When the EIGRP route has an administrative distance adjustment to make it less preferred than OSPF"
    ],
    "answer": "D",
    "why": "By default, EIGRP (with an administrative distance of 90 for internal routes) is preferred over OSPF (with an administrative distance of 110) due to its lower administrative distance, which makes EIGRP routes more trustworthy. However, if the administrative distance of the EIGRP route is manually adjusted (inflated) to make it higher than OSPF's administrative distance, then the router would prefer the OSPF route for forwarding packets. This adjustment is a strategic configuration choice made by network engineers to prefer certain routes over others under specific conditions.",
    "topic": "Routing Fundamentals"
   },
   {
    "q": "You are a network administrator responsible for managing a remote sales office connected to the headquarters (HQ) network. The remote office router (BR1) has a single connection to the HQ router . Which of the following configurations would be most appropriate for enabling Internet access from the remote office?",
    "options": [
     "Configure OSPF on BR1 to dynamically learn routes from HQ",
     "Configure a static default route on BR1 pointing to the HQ router",
     "Configure a static route on BR1 for every possible internet destination",
     "Enable a dynamic routing protocol like EIGRP on BR1 to learn routes from HQ"
    ],
    "answer": "B",
    "why": "Since the remote office router (BR1) has a single connection to the HQ router and there is no need for a complex routing protocol, configuring a static default route pointing to the HQ router is the most appropriate solution. This static default route will forward all Internet-bound traffic from the remote office to the HQ router, which presumably has the necessary routing information to reach the Internet.",
    "topic": "Static Routing"
   },
   {
    "q": "Imagine you're a network administrator in a small company that just expanded its network with a new subnet of IP cameras. These cameras are on a separate subnet, 192.168.50.0/24, and you need to ensure that traffic from the main office network, 192.168.10.0/24, can reach this new subnet. You've decided to add a static route on the office's main router to handle this traffic. Which of the following commands would correctly configure the static route if the next-hop IP address is 192.168.10.254?",
    "options": [
     "ip route 192.168.50.0 255.255.255.0 192.168.10.254",
     "ip route 192.168.50.0 255.255.255.0 192.168.50.1",
     "ip route 192.168.10.0 255.255.255.0 192.168.50.254",
     "ip route 192.168.10.254 255.255.255.0 192.168.50.0"
    ],
    "answer": "A",
    "why": "This command is correct because it specifies the destination network (192.168.50.0/24) and uses the correct subnet mask (255.255.255.0) along with the next-hop IP address (192.168.10.254) through which the traffic should be directed to reach the new subnet. Note that the next-hop IP address must be reachable from the router on which this static route is configured. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "Static Routing"
   },
   {
    "q": "As a network engineer, you're troubleshooting a connectivity issue where a critical server, ServerA with an IP address 10.10.10.10, must be reached via a specific gateway, RouterB, instead of the default route used for the rest of the subnet traffic. RouterB's IP address on the network is 10.10.10.2. To ensure that only traffic to ServerA is routed through RouterB, which of the following static route configurations should you implement on your edge router?",
    "options": [
     "ip route 10.10.10.0 255.255.255.0 10.10.10.2",
     "ip route 10.10.10.10 255.255.255.0 10.10.10.2",
     "ip route 10.10.10.10 255.255.255.255 10.10.10.2",
     "ip route 0.0.0.0 0.0.0.0 10.10.10.2"
    ],
    "answer": "C",
    "why": "This command is correct because it configures a static route specifically for the host with IP address 10.10.10.10 (ServerA), directing traffic to the specified next-hop IP address 10.10.10.2 (RouterB). This is a static host route configuration, as indicated by the use of a 32-bit subnet mask (255.255.255.255), ensuring that only traffic to ServerA is affected.",
    "topic": "Static Routing"
   },
   {
    "q": "You are a network administrator managing a network that uses OSPF for dynamic routing. For redundancy, you've decided to configure a backup path through an alternate gateway router, RouterB, with an IP address of 192.168.1.2, in case the primary OSPF route to the 10.0.2.0/24 network fails. The OSPF routes have an administrative distance of 110. To configure this backup route as a floating static route, which command could you issue on the network's edge router?",
    "options": [
     "ip route 10.0.2.0 255.255.255.0 192.168.1.2 100",
     "ip route 10.0.2.0 255.255.255.0 192.168.1.2 90",
     "ip route 0.0.0.0 0.0.0.0 192.168.1.2 115",
     "ip route 10.0.2.0 255.255.255.0 192.168.1.2 120"
    ],
    "answer": "D",
    "why": "This command is correct because it configures a static route to the 10.0.2.0/24 network through RouterB with an administrative distance of 120. The administrative distance is higher than the OSPF routes' distance of 110, making this static route a floating static route. It will only be used if the OSPF route becomes unavailable, thus providing the desired redundancy without interfering with the primary OSPF-based routing during normal operations.",
    "topic": "Static Routing"
   },
   {
    "q": "Which mul8cast address is used by OSPF routers to send hello messages and form neighbor rela8onships?",
    "options": [
     "224.0.0.9",
     "224.0.0.5",
     "FF02::A",
     "FF02::9"
    ],
    "answer": "B",
    "why": "OSPF routers use the mul8cast address 224.0.0.5 (IPv4) or FF02::5 (IPv6) to send Hello messages to other OSPF-speaking routers on the same network segment. This allows them to discover each other and form neighbor rela8onships.",
    "topic": "OSPFv2"
   },
   {
    "q": "In an OSPF network with mul8ple routers connected to the same Ethernet segment, what is the primary reason for elec8ng a Designated Router (DR) and Backup Designated Router (BDR)?",
    "options": [
     "To reduce the number of adjacencies formed",
     "To increase the number of adjacencies formed",
     "To elect the router with the highest Router ID",
     "To ensure all routers have the same priority"
    ],
    "answer": "A",
    "why": "The primary reason for elec8ng a DR and BDR in an OSPF network with mul8ple routers on the same Ethernet segment is to reduce the number of adjacencies formed. In a full-mesh topology, the number of adjacencies grows exponen8ally with the number of routers, which can lead to scalability issues. By elec8ng a DR and BDR, other routers only need to form adjacencies with these two routers, reducing the overall number of adjacencies, while s8ll allowing for the efficient exchange of routing informa8on. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "OSPFv2"
   },
   {
    "q": "As an OSPF network grows, you no8ce that the number of entries in the Link-State Database is becoming too large to manage effec8vely. Which of the following actions can help mitigate this issue?",
    "options": [
     "Increasing the number of Designated Routers (DRs)",
     "Configuring all interfaces as point-to-point networks",
     "Dividing the network into mul8ple OSPF areas",
     "Disabling OSPF on some interfaces"
    ],
    "answer": "C",
    "why": "When an OSPF network grows large, the number of entries in the Link-State Database (LSDB) can become difficult to manage. To mitigate this issue, you can divide the network into mul8ple OSPF areas. Each area maintains its own LSDB, containing detailed topology informa8on for that specific area. Routers in one area do not have the full topology informa8on of other areas, which helps to reduce the size of the LSDB and improve scalability. This also helps administrators more easily interpret informa8on in the LSDB. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "OSPFv2"
   },
   {
    "q": "What informa8on is contained in a Type 1 LSA?",
    "options": [
     "Networks in one area that are sent to another area",
     "Transit networks with an elected Designated Router",
     "Connected networks advertised by every router",
     "A lis8ng of available networks without topology informa8on"
    ],
    "answer": "C",
    "why": "A Type 1 LSA, also known as a Router LSA, is generated by every router to adver8se its directly connected networks within an area. For example, if router R1 had five interfaces, each par8cipa8ng in the same OSPF routing process, then R1 would advertised those directly connected networks by sending five Type 1 LSAs (inside of Link State Update (LSU) packets), one for each directly connected network.",
    "topic": "OSPFv2"
   },
   {
    "q": "You are configuring OSPFv2 on a router and need to ensure that interface GigabitEthernet 0/1, which connects to a network segment with end users and no OSPF routers, does not send OSPF Hello messages. Which of the following router configura8on mode commands correctly configures this requirement?",
    "options": [
     "router ospf 1 area 0 passive-interface gig 0/1",
     "passive-interface default",
     "passive-interface gig 0/1",
     "ip ospf passive-interface gig 0/1"
    ],
    "answer": "C",
    "why": "The command \"passive-interface gig 0/1\" is used within OSPF router configura8on mode to specify that OSPF Hello messages should not be sent or received through the GigabitEthernet 0/1 interface. This is suitable for interfaces that connect to networks where no OSPF neighbors are expected, such as networks with end users only. This command prevents OSPF neighbor rela8onships from forming on that interface while s8ll allowing the network connected to that interface to be advertised via OSPF. \u00a9 2024 Kevin Wallace Training, LLC",
    "topic": "OSPFv2"
   },
   {
    "q": "While verifying your OSPFv2 configura8on on a router, you no8ce that some of the networks learned via OSPF are marked with the code 'IA'. What does this code signify?",
    "options": [
     "Intra-Area routes, indica8ng routes within the same area as the router",
     "Inter-Area routes, indica8ng routes that come from a different area",
     "Inaccessible routes, indica8ng routes that are not reachable",
     "Interface-Aaached routes, indica8ng routes for directly connected networks"
    ],
    "answer": "B",
    "why": "The 'IA' code in an OSPF routing table stands for Inter-Area, indica8ng routes learned from an area other than the one in which a router resides. These Inter-Area routes were advertised to this router by an Area Border Router (ABR) using Type 3 LSAs.",
    "topic": "OSPFv2"
   }
  ]
 },
 {
  "id": "Network_Time_Protocol_NTP_Lab",
  "name": "NTP",
  "icon": "\u23f0",
  "mod": 7,
  "x": 30,
  "y": 74,
  "topic": "Services",
  "diff": 2,
  "blurb": "Sync clocks or your logs are lies.",
  "missions": [
   {
    "task": "1. On our INTERNET router, let's set our time to 12pm, our date to June 28, 2024, and our time zone to UTC with an offset of zero. 2. Let's set up our INTERNET router as the \"ntp master\" with a stratum value of 3. 3. Let's set up R1 as an \"ntp server\" and point it towards the 1.1.1.1 loopback interface of our INTERNET router. We are going to set up this router as if it is in the EST timezone, which would be \"EST -5\". 4. Let's set our R1 router to a recurring daylight savings time by using the \"clock summer-time EDT recurring\" command. 5. Let's verify if R1's time is synchronized with its timesource, which is our INTERNET router, by using the \"show clock\" command and the \"show ntp status\" command. 6. On R1, after the 15 minutes of waiting for R1 to fully converge with the INTERNET router, let's check our clock and NTP status and see what our time and stratum value is now. 7. On R1, let's use the \"show ntp associations\" command to verify that we are associated with our INTERNET router as our timesource.",
    "device": "INTERNET",
    "cmds": [
     "clock set 12:00:00 June 28 2024",
     "conf t",
     "clock timezone UTC 0"
    ]
   }
  ],
  "quiz": [
   {
    "q": "During an audit, you discover that the digital cer=ficates used for secure communica=ons are frequently being marked as expired even though they should still be valid. What is the most likely cause of this issue, and how can it be resolved?",
    "options": [
     "The cer=ficates were issued incorrectly. Reissue all cer=ficates",
     "Network devices are not synchronized with an NTP server. Ensure all devices are configured to use an NTP server",
     "The CA (Cer=ficate Authority) server is down. Restart the CA server",
     "The network =me zone sentings are incorrect. Adjust the =me zone sentings on all devices"
    ],
    "answer": "B",
    "why": "If network devices are not synchronized with an NTP server, the local =me on devices might not match the actual =me, causing valid digital cer=ficates to be seen as expired. Synchronizing all devices with an NTP server ensures consistent and accurate =me across the network, helping prevent such issues.",
    "topic": "NTP"
   },
   {
    "q": "ATer senting up NTP on your network, you observe that synchronization is not happening immediately, and the Stratum values on your routers are higher than expected. What underlying mechanism of NTP might be causing this delay, and how does it ensure accurate =me synchronization?",
    "options": [
     "NTP version compa=bility checks, which delay synchronization un=l verified",
     "NTP waits for manual confirmation from the administrator before final synchronization",
     "NTP requires a reboot of all network devices to fully synchronize",
     "NTP uses a complex algorithm to gradually adjust the local clock to match the reference clock, preventing sudden changes"
    ],
    "answer": "D",
    "why": "NTP uses a complex algorithm to gradually adjust a local clock to match a reference clock. This process, known as \"clock discipline,\" prevents sudden changes to the system clock, ensuring a smooth and accurate synchronization. This gradual adjustment can cause an initial delay before the clocks are fully synchronized and the stratum values reflect accurate =me sources.",
    "topic": "NTP"
   }
  ]
 },
 {
  "id": "Dynamic_Host_Configuration_Protocol_DHCP_Lab",
  "name": "DHCP",
  "icon": "\ud83c\udf81",
  "mod": 7,
  "x": 80,
  "y": 52,
  "topic": "Services",
  "diff": 3,
  "blurb": "Hand out addresses like a network landlord.",
  "missions": [
   {
    "task": "Let's begin by configuring the DHCP_SERVER router to be a DHCP server for the 192.168.1.0 /24 subnet.  To do this, we want to create a DHCP pool of assignable addresses in the range of 192.168.1.100 - 192.168.1.199.  In order to create this pool, we need to exclude IP addresses in the ranges of 192.168.1.1 - 192.168.1.99 and 192.168.1.200 - 192.168.1.254.  DHCP_SERVER>en  DHCP_SERVER#conf t Enter configuration commands, one per line.  End with CNTL/Z. DHCP_SERVER(config)#ip dhcp excluded-address 192.168.1.1 192.168.1.99 DHCP_SERVER(config)#ip dhcp excluded-address 192.168.1.200 192.168.1.254",
    "device": "DHCP_SERVER",
    "cmds": [
     "conf t",
     "ip dhcp excluded-address 192.168.1.1 192.168.1.99",
     "ip dhcp excluded-address 192.168.1.200 192.168.1.254"
    ]
   },
   {
    "task": "Now, we will create the DHCP pool of addresses that we want to assign, and name the pool \"DEMO\".  After that, set 192.168.1.1 as the IP address of the default gateway and set 8.8.8.8 as the IP address of the DNS server.  Issue all of these commands on the DHCP_SERVER router.    DHCP_SERVER(config)#ip dhcp pool DEMO DHCP_SERVER(dhcp-config)#network 192.168.1.0 255.255.255.0 DHCP_SERVER(dhcp-config)#default-router 192.168.1.1 DHCP_SERVER(dhcp-config)#dns-server 8.8.8.8 DHCP_SERVER(dhcp-config)#end",
    "device": "DHCP_SERVER",
    "cmds": [
     "ip dhcp pool DEMO",
     "network 192.168.1.0 255.255.255.0",
     "default-router 192.168.1.1",
     "dns-server 8.8.8.8"
    ]
   },
   {
    "task": "On R1, let's tell our Gig 0/1 interface to get its IP address via DHCP.  Also make sure to administratively bring up interface Gig 0/1.  R1>en R1#conf t Enter configuration commands, one per line.  End with CNTL/Z. R1(config)#int gig 0/1 R1(config-if)#ip address dhcp R1(config-if)#no shutdown R1(config-if)#end",
    "device": "R1",
    "cmds": [
     "conf t",
     "int gig 0/1",
     "ip address dhcp",
     "no shutdown"
    ]
   },
   {
    "task": "On R1, issue the \"show ip int brief\" command to see if we have gained an IP address via DHCP.  R1#show ip int brief Interface                  IP-Address      OK? Method Status                Protocol GigabitEthernet0/0         unassigned      YES TFTP   administratively down down     GigabitEthernet0/1         unassigned      YES DHCP   up                    up       GigabitEthernet0/2         unassigned      YES TFTP   administratively down down     GigabitEthernet0/3         unassigned      YES TFTP   administratively down down      (##R1's discover broadcast to see if there are any dhcp servers out there will be denied because the discover broadcast cannot cross R2's router boundary.  This means that Gig 0/1 will not be assigned an IP address via DHCP.)",
    "device": "R1",
    "cmds": [
     "show ip int brief"
    ]
   },
   {
    "task": "In order for R1 to be assigned an IP address via DHCP, we need to set R2's Gig 0/1 interface to be a DHCP Relay Agent.  R2>en R2#conf t Enter configuration commands, one per line.  End with CNTL/Z. R2(config)#int gig 0/1 R2(config-if)#ip helper-address 192.0.2.1 R2(config-if)#end",
    "device": "R2",
    "cmds": [
     "conf t",
     "int gig 0/1",
     "ip helper-address 192.0.2.1"
    ]
   },
   {
    "task": "On R1, let's see if our Gig 0/1 interface has received an IP address via DHCP.  R1(config)#int gig 0/1 R1(config-if)#shutdown R1(config-if)#no shutdown R1(config-if)#end R1#show ip int brief Interface                  IP-Address      OK? Method Status                Protocol GigabitEthernet0/0         unassigned      YES TFTP   administratively down down     GigabitEthernet0/1         192.168.1.100   YES DHCP   up                    up       GigabitEthernet0/2         unassigned      YES TFTP   administratively down down     GigabitEthernet0/3         unassigned      YES TFTP   administratively down down",
    "device": "R1",
    "cmds": [
     "int gig 0/1",
     "shutdown",
     "no shutdown",
     "show ip int brief"
    ]
   }
  ],
  "quiz": [
   {
    "q": "You are configuring a Cisco IOS router to act as a DHCP server . You want it to hand out IP addresses in the range 192.168.1.100 through 192.168.1.199. Which command do you use to exclude the IP addresses outside this range?",
    "options": [
     "\"ip dhcp pool included-address 192.168.1.100 192.168.1.199\"",
     "\"ip dhcp excluded-address 192.168.1.1-99\" and \"ip dhcp excluded-address 192.168.1.200-254\"",
     "\"ip dhcp excluded-address 192.168.1.1 192.168.1.99\" and \"ip dhcp excluded-address 192.168.1.200 192.168.1.254\"",
     "\"ip dhcp inclusive 192.168.1.0 192.168.1.255 exclusive 192.168.1.100-199\""
    ],
    "answer": "C",
    "why": "To exclude the IP addresses outside the desired range, you need to use the \"ip dhcp excluded-address\" command twice. First, to exclude the addresses from 192.168.1.1 through 192.168.1.99, and second, to exclude the addresses from 192.168.1.200 through 192.168.1.254. This ensures that only the addresses from the 192.168.1.100 through 192.168.1.199 range are available for the DHCP pool.",
    "topic": "DHCP"
   },
   {
    "q": "You are a network administrator configuring Router R2 as a DHCP Relay Agent to forward DHCP Discover messages from Router R1 to a DHCP server at IP address 192.0.2.1. Which command would you use on Router R2 to correctly set up the DHCP relay agent on interface Gig 0/1?",
    "options": [
     "ip helper-address 192.0.2.1",
     "ip dhcp relay 192.0.2.1",
     "ip relay address 192.0.2.1",
     "ip dhcp forward 192.0.2.1"
    ],
    "answer": "A",
    "why": "The \"ip helper-address 192.0.2.1\" command is used to configure a router interface to forward DHCP Discover messages to a DHCP server with an IP address of 192.0.2.1. This allows clients on a different subnet to receive IP address assignments from the DHCP server .",
    "topic": "DHCP"
   }
  ]
 }
];
const MODULE_REGIONS = [
 {
  "mod": 4,
  "name": "MODULE 4 \u2014 ETHERNET SWITCHING",
  "color": "#4fd1c5",
  "rows": [
   30,
   52,
   74
  ],
  "quests": [
   "CDP_and_LLDP_Lab",
   "VLAN_Lab",
   "Trunking_Lab",
   "Spanning_Tree_Protocol_Lab",
   "EtherChannel_Lab"
  ]
 },
 {
  "mod": 5,
  "name": "MODULE 5 \u2014 ROUTING",
  "color": "#f6ad55",
  "rows": [
   30,
   52,
   74
  ],
  "quests": [
   "OSPF_Lab"
  ]
 },
 {
  "mod": 7,
  "name": "MODULE 7 \u2014 NETWORK SERVICES",
  "color": "#f6e05e",
  "rows": [
   30,
   52,
   74
  ],
  "quests": [
   "Static_NAT_Lab",
   "Dynamic_NAT_Lab",
   "Port_Address_Translation_PAT_Lab",
   "Network_Time_Protocol_NTP_Lab",
   "Dynamic_Host_Configuration_Protocol_DHCP_Lab"
  ]
 },
 {
  "mod": 8,
  "name": "MODULE 8 \u2014 NETWORK SECURITY",
  "color": "#fc8181",
  "rows": [
   30,
   52,
   74
  ],
  "quests": [
   "Standard_Numbered_ACL_Lab",
   "Extended_Numbered_ACL_Lab",
   "Extended_Named_ACL_Lab"
  ]
 }
];
