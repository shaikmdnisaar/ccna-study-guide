const ENARSI_QUESTS = [
 {
  "id": "BGP_Troubleshooting",
  "name": "BGP Faults",
  "icon": "\ud83c\udf10",
  "mod": 1,
  "x": 18,
  "y": 32,
  "topic": "Routing",
  "diff": 4,
  "blurb": "Routing is not working on the network.",
  "missions": [
   {
    "task": "\ud83d\udd0e Routing is not working on the network.",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface Loopback0",
     " ip address 1.1.1.1 255.255.255.255",
     "interface GigabitEthernet0/0",
     " ip address 10.1.1.1 255.255.255.0"
    ]
   },
   {
    "task": "\ud83d\udd0e Pings from R3 to R1's Loopback interface are failing.",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface Loopback0",
     " ip address 1.1.1.1 255.255.255.255",
     "interface GigabitEthernet0/0",
     " ip address 10.1.1.1 255.255.255.0"
    ]
   }
  ]
 },
 {
  "id": "DHCP_Troubleshooting",
  "name": "DHCP Faults",
  "icon": "\ud83c\udf81",
  "mod": 3,
  "x": 18,
  "y": 32,
  "topic": "Services",
  "diff": 3,
  "blurb": "PC1 is unable to reach the server on its local network at 192.168.0.200",
  "missions": [
   {
    "task": "\ud83d\udd0e PC1 is unable to reach the server on its local network at 192.168.0.200",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     " ip address 192.168.0.1 255.255.255.0",
     " ip helper-address 10.0.0.5",
     " duplex auto"
    ]
   }
  ]
 },
 {
  "id": "EIGRP_Troubleshooting",
  "name": "EIGRP Faults",
  "icon": "\ud83c\udfaf",
  "mod": 1,
  "x": 40,
  "y": 32,
  "topic": "Routing",
  "diff": 3,
  "blurb": "None of the routers are learning EIGRP routes.",
  "missions": [
   {
    "task": "\ud83d\udd0e None of the routers are learning EIGRP routes.",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "key chain KEY1",
     " key 1",
     "  key-string C1sc0",
     "  accept-lifetime 00:00:00 Jan 1 2020 infinite"
    ]
   },
   {
    "task": "\ud83d\udd0e Examine and correct the existing EIGRP configuration on each router such that each router has full visibility to all networks.",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "key chain KEY1",
     " key 1",
     "  key-string C1sc0",
     "  accept-lifetime 00:00:00 Jan 1 2020 infinite"
    ]
   }
  ]
 },
 {
  "id": "IPv4_ACL_Troubleshooting",
  "name": "ACL Faults",
  "icon": "\ud83d\udee1\ufe0f",
  "mod": 2,
  "x": 18,
  "y": 32,
  "topic": "Security",
  "diff": 3,
  "blurb": "PC1 is unable to connect to the Telnet router.",
  "missions": [
   {
    "task": "\ud83d\udd0e PC1 is unable to connect to the Telnet router.",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     " ip address 10.1.1.1 255.255.255.0",
     " ip access-group 100 in",
     " duplex auto"
    ]
   },
   {
    "task": "\ud83d\udd0e However, PC1 can successfully ping the Telnet router.",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     " ip address 10.1.1.1 255.255.255.0",
     " ip access-group 100 in",
     " duplex auto"
    ]
   }
  ]
 },
 {
  "id": "OSPF_Troubleshooting",
  "name": "OSPF Faults",
  "icon": "\ud83e\udded",
  "mod": 1,
  "x": 62,
  "y": 32,
  "topic": "Routing",
  "diff": 3,
  "blurb": "None of the routers are learning OSPF routes.",
  "missions": [
   {
    "task": "\ud83d\udd0e None of the routers are learning OSPF routes.",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     " no ip address",
     " shutdown",
     " duplex auto"
    ]
   },
   {
    "task": "\ud83d\udd0e Examine and correct the existing OSPF configuration on each router such that each router has full visibility to all networks.",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     " no ip address",
     " shutdown",
     " duplex auto"
    ]
   }
  ]
 },
 {
  "id": "Route_Redistribution_Troubleshooting",
  "name": "Route Redistribution",
  "icon": "\ud83d\udd00",
  "mod": 1,
  "x": 84,
  "y": 32,
  "topic": "Routing",
  "diff": 5,
  "blurb": "Router R2 should be configured for mutual route redistribution between OSPF and EIGRP autonomous systems",
  "missions": [
   {
    "task": "\ud83d\udd0e Router R2 should be configured for mutual route redistribution between OSPF and EIGRP autonomous systems",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface GigabitEthernet0/0",
     " no ip address"
    ]
   },
   {
    "task": "\ud83d\udd0e However, router R3 cannot currently see routes in the OSPF AS.",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface GigabitEthernet0/0",
     " no ip address"
    ]
   }
  ]
 }
];
const ENARSI_MODULES = [
 {
  "mod": 1,
  "name": "MODULE \u2014 ROUTING TROUBLESHOOTING"
 },
 {
  "mod": 2,
  "name": "MODULE \u2014 SECURITY TROUBLESHOOTING"
 },
 {
  "mod": 3,
  "name": "MODULE \u2014 SERVICES TROUBLESHOOTING"
 }
];
