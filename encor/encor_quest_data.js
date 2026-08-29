const ENCOR_QUESTS = [
 {
  "id": "AAA",
  "name": "AAA",
  "icon": "\ud83d\udd10",
  "mod": 4,
  "x": 18,
  "y": 32,
  "topic": "Security",
  "diff": 3,
  "blurb": "Enable AAA globally",
  "missions": [
   {
    "task": "Enable AAA globally",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.0.70 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Create local user with name test, password cisco",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.0.70 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Configure both TACACS+ server instances, named TACACS1 and TACACS2",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.0.70 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Secret key set to security for both servers",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.0.70 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Create TACACS+ server group named T-GROUP and add both servers",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.0.70 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Configure AAA authentication using default method list",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.0.70 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "TACACS+ server group should be primary method, followed by local login, and enable password",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.0.70 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Enable authorization requirement for EXEC shell",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.0.70 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   }
  ]
 },
 {
  "id": "BGP_for_IPv4",
  "name": "BGP for IPv4",
  "icon": "\ud83c\udf10",
  "mod": 1,
  "x": 18,
  "y": 32,
  "topic": "Routing",
  "diff": 5,
  "blurb": "Connect R3 in the enterprise network (AS 65001) to R2, ISP1, and ISP2 using BGP",
  "missions": [
   {
    "task": "Connect R3 in the enterprise network (AS 65001) to R2, ISP1, and ISP2 using BGP",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.1.43 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "BGP is already configured on all routers except R3",
    "device": "R3",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.1.44 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   }
  ]
 },
 {
  "id": "BGP_for_IPv6",
  "name": "BGP for IPv6",
  "icon": "\ud83c\udf10",
  "mod": 1,
  "x": 40,
  "y": 32,
  "topic": "Routing",
  "diff": 5,
  "blurb": "Create a route map to advertise next-hop IPv6 address",
  "missions": [
   {
    "task": "Create a route map to advertise next-hop IPv6 address",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.1.148 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Configure BGP routing process",
    "device": "R3",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback1",
     "no ip address"
    ]
   },
   {
    "task": "Create IPv4 and IPv6 address families",
    "device": "R3",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback1",
     "no ip address"
    ]
   },
   {
    "task": "Activate IPv6 address family neighbor",
    "device": "R3",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback1",
     "no ip address"
    ]
   },
   {
    "task": "Associate route map with neighbor, apply outbound",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.1.148 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   }
  ]
 },
 {
  "id": "HSRP",
  "name": "HSRP",
  "icon": "\ud83d\udedf",
  "mod": 3,
  "x": 18,
  "y": 32,
  "topic": "FHRP",
  "diff": 3,
  "blurb": "Configure HSRP for servicing the virtual IP address 10.1.1.1",
  "missions": [
   {
    "task": "Configure HSRP for servicing the virtual IP address 10.1.1.1",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.2.128 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "R1 = Active Router, R2 = Standby Router",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.2.128 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Configure routers to reclaim roles in case of a failure",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.2.128 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Test failover configuration",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.2.128 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   }
  ]
 },
 {
  "id": "Named_Extended_ACLs",
  "name": "Named Ext ACLs",
  "icon": "\ud83c\udff7\ufe0f",
  "mod": 4,
  "x": 40,
  "y": 32,
  "topic": "Security",
  "diff": 4,
  "blurb": "Create two extended named ACLs",
  "missions": [
   {
    "task": "Create two extended named ACLs",
    "device": "R1",
    "cmds": [
     "aaa session-id common",
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "no ip address",
     "shutdown"
    ]
   },
   {
    "task": "PC1 should only be able to ping server and have Telnet access",
    "device": "R1",
    "cmds": [
     "aaa session-id common",
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "no ip address",
     "shutdown"
    ]
   },
   {
    "task": "PC2 should only be able to ping server and have HTTP access",
    "device": "R1",
    "cmds": [
     "aaa session-id common",
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "no ip address",
     "shutdown"
    ]
   }
  ]
 },
 {
  "id": "NetFlow",
  "name": "NetFlow",
  "icon": "\ud83d\udcca",
  "mod": 5,
  "x": 18,
  "y": 32,
  "topic": "Services",
  "diff": 3,
  "blurb": "Configure NetFlow v9 on R1 for the 172.16.10.0 /24 network",
  "missions": [
   {
    "task": "Configure NetFlow v9 on R1 for the 172.16.10.0 /24 network",
    "device": "R1",
    "cmds": [
     "vrf definition Mgmt-intf",
     "address-family ipv4",
     "exit-address-family",
     "address-family ipv6",
     "exit-address-family",
     "no mmi auto-configure"
    ]
   },
   {
    "task": "Export to NetFlow collector at 10.1.1.5 over port 9999",
    "device": "R1",
    "cmds": [
     "vrf definition Mgmt-intf",
     "address-family ipv4",
     "exit-address-family",
     "address-family ipv6",
     "exit-address-family",
     "no mmi auto-configure"
    ]
   },
   {
    "task": "Generate traffic and verify configuration",
    "device": "R1",
    "cmds": [
     "vrf definition Mgmt-intf",
     "address-family ipv4",
     "exit-address-family",
     "address-family ipv6",
     "exit-address-family",
     "no mmi auto-configure"
    ]
   }
  ]
 },
 {
  "id": "OSPF_Route_Filtering",
  "name": "OSPF Route Filtering",
  "icon": "\ud83d\udea7",
  "mod": 1,
  "x": 62,
  "y": 32,
  "topic": "Routing",
  "diff": 4,
  "blurb": "Filter out two inter-area routes learned from OSPF Area 1",
  "missions": [
   {
    "task": "Filter out two inter-area routes learned from OSPF Area 1",
    "device": "R3",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "no ip address"
    ]
   },
   {
    "task": "Setup prefix list on ABR (R4)",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "no ip address"
    ]
   }
  ]
 },
 {
  "id": "OSPFv2",
  "name": "OSPFv2",
  "icon": "\ud83e\udded",
  "mod": 1,
  "x": 84,
  "y": 32,
  "topic": "Routing",
  "diff": 3,
  "blurb": "Configure OSPFv2 for R3, R4, and R5",
  "missions": [
   {
    "task": "Configure OSPFv2 for R3, R4, and R5",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "All R3 interfaces are in Area 1",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "R4's Gig 0/1 interface is in Area 1",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "R4's Gig 0/2 interface is in Area 0",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "All R5 interfaces are in Area 0",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "R1 and R2 are already configured for EIGRP and/or OSPF",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "All routers have loopback IP addresses set (e.g., R1 = 1.1.1.1)",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   }
  ]
 },
 {
  "id": "OSPFv3_Address_Families_Configuration",
  "name": "OSPFv3 AF",
  "icon": "\ud83e\udded",
  "mod": 1,
  "x": 18,
  "y": 74,
  "topic": "Routing",
  "diff": 4,
  "blurb": "Configure OSPFv3 for R3, R4, and R5 using the address families method",
  "missions": [
   {
    "task": "Configure OSPFv3 for R3, R4, and R5 using the address families method",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "no ip address"
    ]
   },
   {
    "task": "All R3 interfaces are in Area 1",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "no ip address"
    ]
   },
   {
    "task": "R4's Gig 0/1 interface is in Area 1",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "no ip address"
    ]
   },
   {
    "task": "R4's Gig 0/2 interface is in Area 0",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "no ip address"
    ]
   },
   {
    "task": "All R5 interfaces are in Area 0",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "no ip address"
    ]
   },
   {
    "task": "R1 and R2 are already configured for routing",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "no ip address"
    ]
   }
  ]
 },
 {
  "id": "OSPFv3_Traditional_Configuration",
  "name": "OSPFv3 Traditional",
  "icon": "\ud83e\udded",
  "mod": 1,
  "x": 40,
  "y": 74,
  "topic": "Routing",
  "diff": 4,
  "blurb": "Configure OSPFv3 for R3, R4, and R5 using the traditional method",
  "missions": [
   {
    "task": "Configure OSPFv3 for R3, R4, and R5 using the traditional method",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "All R3 interfaces are in Area 1",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "R4's Gig 0/1 interface is in Area 1",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "R4's Gig 0/2 interface is in Area 0",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "All R5 interfaces are in Area 0",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   },
   {
    "task": "R1 and R2 are already configured for routing",
    "device": "R2",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "ipv6 unicast-routing",
     "ipv6 cef",
     "interface Loopback0",
     "ip address 2.2.2.2 255.255.255.255"
    ]
   }
  ]
 },
 {
  "id": "Privilege_Levels",
  "name": "Privilege Levels",
  "icon": "\ud83d\udd11",
  "mod": 4,
  "x": 62,
  "y": 32,
  "topic": "Security",
  "diff": 3,
  "blurb": "User #1 = john",
  "missions": [
   {
    "task": "User #1 = john",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "no ip address",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "User #2 = susan",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "no ip address",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "User #3 = chris",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "no ip address",
     "shutdown",
     "duplex auto"
    ]
   }
  ]
 },
 {
  "id": "RSPAN",
  "name": "RSPAN",
  "icon": "\ud83d\udc40",
  "mod": 5,
  "x": 40,
  "y": 32,
  "topic": "Services",
  "diff": 4,
  "blurb": "Setup Local SPAN on SW1",
  "missions": [
   {
    "task": "Setup Local SPAN on SW1",
    "device": "SW1",
    "cmds": [
     "vrf definition Mgmt-intf",
     "address-family ipv4",
     "exit-address-family",
     "address-family ipv6",
     "exit-address-family",
     "username cisco privilege 15 secret 5 $1$t.I9$n0WWFapjPLO04ZF27tUJw1"
    ]
   },
   {
    "task": "Create RSPAN VLAN 200",
    "device": "SW1",
    "cmds": [
     "vrf definition Mgmt-intf",
     "address-family ipv4",
     "exit-address-family",
     "address-family ipv6",
     "exit-address-family",
     "username cisco privilege 15 secret 5 $1$t.I9$n0WWFapjPLO04ZF27tUJw1"
    ]
   },
   {
    "task": "Setup RSPAN on SW2",
    "device": "R1",
    "cmds": [
     "vrf definition Mgmt-intf",
     "address-family ipv4",
     "exit-address-family",
     "address-family ipv6",
     "exit-address-family",
     "enable password cisco"
    ]
   },
   {
    "task": "Validate with \"show\" commands",
    "device": "R1",
    "cmds": [
     "vrf definition Mgmt-intf",
     "address-family ipv4",
     "exit-address-family",
     "address-family ipv6",
     "exit-address-family",
     "enable password cisco"
    ]
   }
  ]
 },
 {
  "id": "Rapid_PVST+",
  "name": "Rapid PVST+",
  "icon": "\ud83c\udf33",
  "mod": 2,
  "x": 18,
  "y": 32,
  "topic": "Switching",
  "diff": 3,
  "blurb": "Configure Rapid PVST+ on all switches",
  "missions": [
   {
    "task": "Configure Rapid PVST+ on all switches",
    "device": "SW2",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "vtp mode transparent",
     "spanning-tree mode mst",
     "spanning-tree extend system-id",
     "spanning-tree mst configuration"
    ]
   },
   {
    "task": "VLANs 100, 300 Primary Root = SW1, Secondary Root = SW3",
    "device": "SW2",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "vtp mode transparent",
     "spanning-tree mode mst",
     "spanning-tree extend system-id",
     "spanning-tree mst configuration"
    ]
   },
   {
    "task": "VLAN 200 Primary Root = SW3, Secondary Root = SW1",
    "device": "SW1",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "vtp mode transparent",
     "spanning-tree mode mst",
     "spanning-tree extend system-id",
     "spanning-tree mst configuration"
    ]
   },
   {
    "task": "Configure Gig 0/3 as an edge port type",
    "device": "SW1",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "vtp mode transparent",
     "spanning-tree mode mst",
     "spanning-tree extend system-id",
     "spanning-tree mst configuration"
    ]
   }
  ]
 },
 {
  "id": "VRRP",
  "name": "VRRP",
  "icon": "\ud83d\udedf",
  "mod": 3,
  "x": 40,
  "y": 32,
  "topic": "FHRP",
  "diff": 3,
  "blurb": "Configure VRRP for servicing the virtual IP address 10.1.1.1",
  "missions": [
   {
    "task": "Configure VRRP for servicing the virtual IP address 10.1.1.1",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.2.128 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "R1 = Master VRRP Router, R2 = Backup VRRP Router",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.2.128 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Test failover configuration",
    "device": "R1",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "ip address 10.255.2.128 255.255.0.0",
     "shutdown",
     "duplex auto"
    ]
   }
  ]
 },
 {
  "id": "VRF",
  "name": "VRF",
  "icon": "\ud83e\udde9",
  "mod": 5,
  "x": 62,
  "y": 32,
  "topic": "Services",
  "diff": 4,
  "blurb": "Globally define three VRFs",
  "missions": [
   {
    "task": "Globally define three VRFs",
    "device": "SW1",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "spanning-tree mode pvst",
     "spanning-tree extend system-id",
     "no cdp run",
     "interface GigabitEthernet0/0"
    ]
   },
   {
    "task": "Configure sub-interfaces for Gig 0/1 on the COMMON router",
    "device": "TENENT-A",
    "cmds": [
     "no mmi auto-configure",
     "no mmi pvc",
     "interface GigabitEthernet0/0",
     "no ip address",
     "shutdown",
     "duplex auto"
    ]
   },
   {
    "task": "Assign sub-interfaces to VLAN and VRF instances",
    "device": "SW1",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "spanning-tree mode pvst",
     "spanning-tree extend system-id",
     "no cdp run",
     "interface GigabitEthernet0/0"
    ]
   },
   {
    "task": "Associate an OSPF routing process with each VRF",
    "device": "SW1",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "spanning-tree mode pvst",
     "spanning-tree extend system-id",
     "no cdp run",
     "interface GigabitEthernet0/0"
    ]
   },
   {
    "task": "TENANT A must be assigned to VLAN 2",
    "device": "SW1",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "spanning-tree mode pvst",
     "spanning-tree extend system-id",
     "no cdp run",
     "interface GigabitEthernet0/0"
    ]
   },
   {
    "task": "TENANT B must be assigned to VLAN 3",
    "device": "SW1",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "spanning-tree mode pvst",
     "spanning-tree extend system-id",
     "no cdp run",
     "interface GigabitEthernet0/0"
    ]
   },
   {
    "task": "TENANT C must be assigned to VLAN 4",
    "device": "SW1",
    "cmds": [
     "no process cpu extended history",
     "no process cpu autoprofile hog",
     "spanning-tree mode pvst",
     "spanning-tree extend system-id",
     "no cdp run",
     "interface GigabitEthernet0/0"
    ]
   }
  ]
 }
];
const ENCOR_MODULES = [
 {
  "mod": 1,
  "name": "MODULE \u2014 ADVANCED ROUTING",
  "topic": "BGP \u00b7 OSPFv2/v3 \u00b7 filtering"
 },
 {
  "mod": 2,
  "name": "MODULE \u2014 CAMPUS LAN",
  "topic": "Rapid PVST+"
 },
 {
  "mod": 3,
  "name": "MODULE \u2014 FHRP",
  "topic": "HSRP \u00b7 VRRP"
 },
 {
  "mod": 4,
  "name": "MODULE \u2014 SECURITY",
  "topic": "AAA \u00b7 ACLs \u00b7 privilege"
 },
 {
  "mod": 5,
  "name": "MODULE \u2014 SERVICES",
  "topic": "NetFlow \u00b7 RSPAN \u00b7 VRF"
 }
];
