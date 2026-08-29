const EXAMS = [
 {
  "id": 1,
  "name": "Practice Exam 1",
  "questions": [
   {
    "n": 1,
    "q": "What is the collection of multiple Basic Service Sets (BSS) known as?",
    "options": [
     "WSSID",
     "IBSS",
     "BSSID",
     "ESSID"
    ],
    "answer": "D",
    "why": "An Extended Service Set Identifier (ESSID) is the collection of multiple Basic Service Sets (BSS) that share the same SSID. It allows seamless roaming for clients within a network, maintaining connectivity as they move between different access points."
   },
   {
    "n": 2,
    "q": "For a data center requiring very high-speed connectivity between devices with a maximum distance of 30 meters, which category of twisted pair cabling is most suitable to support data transmission speeds up to 40 Gbps?",
    "options": [
     "Category 6",
     "Category 6A",
     "Category 7",
     "Category 8"
    ],
    "answer": "D",
    "why": "Category 8 twisted pair cabling is specifically designed for data center applications requiring very high-speed connectivity between devices, supporting up to 25 or 40 Gbps with a maximum distance of about 30 to 36 meters. This makes Category 8 the best choice for environments that demand the highest data transmission speeds over short distances."
   },
   {
    "n": 3,
    "q": "After attaching a new workstation to a switch configured with STP, you observe a delay before the workstation can access the network. Assuming the port was not previously active, what is the default delay before the port becomes active?",
    "options": [
     "15 seconds",
     "30 seconds",
     "50 seconds",
     "20 seconds"
    ],
    "answer": "B",
    "why": "For a port that was not previously active, the default STP delay before it goes active is 30 seconds, bypassing the initial Blocking state and directly entering the Listening (15 seconds) and Learning (15 seconds) states, totaling 30 seconds. The PortFast feature can be used to eliminate this delay."
   },
   {
    "n": 4,
    "q": "In the context of wireless transmission, what does QAM stand for, and what is its function?",
    "options": [
     "Quadrature Amplitude Modulation; it allows multiple bits of data to be sent per subchannel",
     "Quality Assurance Method; it ensures data integrity during transmission",
     "Quick Access Mode; it prioritizes urgent data packets",
     "Quantum Allocation Management; it manages bandwidth allocation using quantum"
    ],
    "answer": "A",
    "why": "QAM stands for Quadrature Amplitude Modulation. It allows multiple bits of data to be sent simultaneously per subchannel by adjusting the phase and amplitude of a signal and comparing the phase and amplitude differences between that signal and a reference signal to identify a point in a \"constellation,\" which represents multiple bits."
   },
   {
    "n": 5,
    "q": "You've set up a Layer 2 EtherChannel on your Cisco switch and wish to verify the load balancing algorithm in use. Which command could you use to check the current load balancing method?",
    "options": [
     "show etherchannel summary",
     "show port-channel compatibility",
     "show etherchannel load-balance",
     "show spanning-tree etherchannel"
    ],
    "answer": "C",
    "why": "To verify the load balancing algorithm currently in use for EtherChannel on a Cisco switch, the correct command is `show etherchannel load-balance`. This command provides information about the basis on which the switch distributes outbound traffic among the ports in the EtherChannel, such as source MAC address, destination MAC address, a combination of source and destination IP addresses, or other options. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 6,
    "q": "Consider the following topology. How many Type 2 LSAs are present in router R3\u2019s Link State Database (LSDB)?",
    "options": [
     "1",
     "2",
     "3",
     "4"
    ],
    "answer": "A",
    "why": "A Type 2 Link State Advertisement (LSA) is known as a \u201cNetwork LSA.\u201d An area has a Type 2 LSA for each network segment that meets two criteria: (1) The segment is a transit link (i.e., it interconnects to OSPF-speaking routers), (2) The segment is one on which a DR would be elected (e.g., on an OSPF Broadcast network type but not on an OSPF Point-to-Point network type). In this example, router R2 is in Area 1, and only one network segment in Area 1 meets both criteria. Specifically, the segment between routers R2 and R3 is an Ethernet segment, on which a DR would be elected by default. Also, that segment is a transit link, interconnecting routers R2 and R3. However, the segment between R3 and SW2 is not a transit link (i.e., it does not interconnect two OSPF-speaking routers). Therefore, we would only have one Type 2 LSA in router R3\u2019s Link State Database."
   },
   {
    "n": 7,
    "q": "Which routing protocol is described as being able to provide the entire path (sequence of autonomous systems) a packet will traverse to reach its destination, distinguishing it from other types of routing protocols?",
    "options": [
     "OSPF",
     "EIGRP",
     "BGP",
     "RIP"
    ],
    "answer": "C",
    "why": "BGP (Border Gateway Protocol) is unique among routing protocols as it is a path vector protocol, which provides the entire path (sequence of autonomous systems or AS hops) that packets will transit to reach their destination. This capability is crucial for routing between autonomous systems on the Internet."
   },
   {
    "n": 8,
    "q": "Your network includes a subnet that does not have a DHCP server locally available. What solution allows PCs on this subnet to receive IP addresses from a DHCP server located on a different subnet?",
    "options": [
     "Configuring a static route on the PCs",
     "Upgrading to a DCHPv6 server",
     "Creating an ACL on the next-hop router to permit DHCP messages",
     "Implementing a DHCP relay agent on the router"
    ],
    "answer": "D",
    "why": "The correct solution for allowing PCs on a subnet without a local DHCP server to receive IP addresses from a DHCP server located on a different subnet is to configure a DHCP relay agent on the subnet's next-hop router. A DHCP relay agent, sometimes referred to as an \"IP Helper,\" forwards DHCP Discover messages from clients across different subnets to a DHCP server. This enables the DHCP server to allocate IP addresses to clients on subnets where it is not directly present."
   },
   {
    "n": 9,
    "q": "Which of the following is a valid private address range for a Class C address?",
    "options": [
     "192.168.0.0 \u2013 192.168.255.255",
     "10.0.0.0 \u2013 10.255.255.255",
     "169.254.0.0 \u2013 171.255.255.255",
     "172.16.0.0 \u2013 172.31.255.255"
    ],
    "answer": "A",
    "why": "The private IP address range 192.168.0.0 \u2013 192.168.255.255 falls within the Class C IPv4 address range. The default subnet mask for a Class C address is a /24 subnet mask, or 255.255.255.0. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 10,
    "q": "What is the role of a Wireless LAN Controller (WLC) in an enterprise network?",
    "options": [
     "To provide Internet connectivity to clients",
     "To serve as a single access point",
     "To increase the bandwidth of wireless connections",
     "To coordinate the operation of multiple access points"
    ],
    "answer": "D",
    "why": "In an enterprise network, a Wireless LAN Controller (WLC) coordinates the operation of multiple access points (APs). It manages client connectivity, including roaming between access points, and can perform self-healing by adjusting the power of other APs if one AP goes down."
   },
   {
    "n": 11,
    "q": "In the EUI-64 method of generating an IPv6 address, why is the seventh bit of the original MAC address inverted?",
    "options": [
     "To indicate that the address is globally unique",
     "To differentiate between unicast and multicast addresses",
     "To signal that the address has been modified from its original form",
     "To designate the address as locally administered"
    ],
    "answer": "D",
    "why": "The inversion of the seventh bit in the EUI-64 process indicates that the address has been locally administered or modified from its original, universally administered state. This bit manipulation is crucial for distinguishing between globally unique MAC addresses assigned by manufacturers and those that have been locally modified or administered. It reflects a change in the address's administration scope, ensuring that the newly generated interface ID correctly represents its derivation from an altered MAC address."
   },
   {
    "n": 12,
    "q": "What is the 48-bit address used by a switch to make frame forwarding decisions?",
    "options": [
     "MAC address",
     "CAM address",
     "IP address",
     "Link-local address"
    ],
    "answer": "A",
    "why": "Media Access Control (MAC) addresses are 48-bit addresses that are burned into a network interface card by the manufacturer. Switches use these addresses to make frame forwarding decisions."
   },
   {
    "n": 13,
    "q": "In SNMPv3, what is the purpose of the `snmp-server group` command?",
    "options": [
     "To set the SNMP server location",
     "To create a group for managing user permissions and encryption settings",
     "To specify the contact information for the SNMP server",
     "To enable SNMP traps for specific events"
    ],
    "answer": "B",
    "why": "The `snmp-server group` command in SNMPv3 is used to create a group that defines allowable user permissions and encryption settings. This allows administrators to manage SNMP users and their access levels securely."
   },
   {
    "n": 14,
    "q": "Which command allows us to dynamically learn MAC addresses seen on an interface, rather than using static assignments?",
    "options": [
     "SW1(config-if)#switchport port-security mac-address smart",
     "SW1(config-if)#switchport port-security mac-address dynamic",
     "SW1(config-if)#switchport port-security mac-address sticky",
     "SW1(config-if)#switchport port-security mac-address learn"
    ],
    "answer": "C",
    "why": "This command allows the switch to dynamically learn MAC addresses seen on an interface, which is much more scalable than static assignments. The MAC addresses are stored in the switch security table and the running configuration."
   },
   {
    "n": 15,
    "q": "Which command is used to enable PAT on router R1 to translate all inside local addresses matched by ACL 1 to the IP address assigned to the outside interface (which is Gig 0/2)?",
    "options": [
     "ip nat inside source list 1 pool NAT_POOL",
     "ip nat inside source list 1 interface gig0/2 overload",
     "ip nat inside source static 192.168.1.0 192.0.2.0 overload",
     "ip nat outside source list 1 interface gig0/2 overload"
    ],
    "answer": "B",
    "why": "The command `ip nat inside source list 1 interface gig0/2 overload` is used to configure PAT by translating inside local addresses matched by ACL 1 to the IP address assigned to the outside interface (Gig 0/2) with the `overload` keyword enabling multiple translations."
   },
   {
    "n": 16,
    "q": "Given the 32-bit subnet mask 11111111 00000000 00000000 00000000, how many bits represent the network bits?",
    "options": [
     "8",
     "16",
     "32",
     "24"
    ],
    "answer": "A",
    "why": "A 32-bit subnet mask separates IPv4 addresses into network bits and host bits. The mask is made by setting the network bits to all binary 1s and setting the host bits to all binary 0s. In this example, there are 8 binary 1s found, representing 8 network bits."
   },
   {
    "n": 17,
    "q": "What is the range of assignable IP addresses for a subnet containing an IP address of 172.16.1.10 /19?",
    "options": [
     "172.16.0.1 \u2013 172.16.31.254",
     "172.16.0.1 \u2013 172.16.63.254",
     "172.16.0.0 \u2013 172.16.31.255",
     "172.16.0.1 \u2013 172.16.31.255",
     "172.16.0.0 \u2013 172.16.63.254"
    ],
    "answer": "A",
    "why": "To determine the subnets, assignable IP address ranges, and directed broadcast addresses created by the 19-bit subnet mask we perform the following steps: Step #1: Identify the interesting octet (i.e., the octet that contains the first zero in the binary subnet mask). In this question, we have a 19-bit subnet mask, which is written in binary as: 11111111 11111111 11100000 00000000 The interesting octet is the third octet, because the third octet (i.e., 11100000) is the first octet to contain a 0 in the binary. \u00a9 2024 Kevin Wallace Training, LLC Step #2: Identify the decimal value in the interesting octet of the subnet mask. A 19-bit subnet mask can be written in dotted decimal notation as: 255.255.224.0 Since the third octet is the interesting octet, the decimal value in the interesting octet is 224. Step #3: Determine the block size by subtracting the decimal value of the interesting octet from 256. Block Size = 256 \u2013 224 = 32 Step #4: Determine the subnets by counting by the block size in the interesting octet, starting at 0. Placing a zero in the first interesting octet identifies the first subnet as: 172.16.0.0 /19 We then count by the block size (of 32) in the interesting octet (the third octet in this question) to determine the remaining subnets: 172.16.32.0 /19 172.16.64.0 /19 172.16.96.0 /19 172.16.128.0 /19 172.16.160.0 /19 172.16.192.0 /19 172.16.224.0 /19 Step #5: Identify the subnet address, the directed broadcast address, and the usable range of addresses. Looking through the subnets created by the 19-bit subnet mask reveals that the IP address of 172.16.1.10 resides in the 172.16.0.0 /19 subnet. The directed broadcast address, where all host bits are set to a 1, is 1 less than the next subnet address. The next subnet address is 172.16.32.0. So, the directed broadcast address for the 172.16.0.0 /19 subnet is 1 less than 172.16.32.0, which is: 172.16.31.255 The usable IP addresses are all the IP addresses between the subnet address and the directed broadcast address. Therefore, in this example, the assignable IP address range for the 172.16.0.0 /19 network is: 172.16.0.1 \u2013 172.16.31.254 \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 18,
    "q": "Your team is transitioning to a DevOps model. What is the primary goal of implementing continuous feedback and iteration in the DevOps lifecycle?",
    "options": [
     "To reduce the workload of the IT operations team",
     "To eliminate the need for software testing",
     "To improve quality and speed of application deployment",
     "To separate development and operations responsibilities"
    ],
    "answer": "C",
    "why": "The primary goal of continuous feedback and iteration in the DevOps lifecycle is to improve both the quality and speed of application deployment. By constantly gathering feedback and making iterative improvements, teams can more quickly address issues, enhance features, and deliver better software more rapidly to meet business needs."
   },
   {
    "n": 19,
    "q": "What is the decimal equivalent of the 8-bit binary number 01100101?",
    "options": [
     "100",
     "102",
     "110",
     "101"
    ],
    "answer": "D",
    "why": "The 8-bit binary number 01100101 converts to the decimal value 101. By knowing our two-base numbers, we can see that the 1s in this binary number represent the values 1, 4, 32, and 64. Adding these values together (1 + 4 + 32 + 64) gives us the solution of 101."
   },
   {
    "n": 20,
    "q": "Which Dynamic Trunking Protocol (DTP) mode actively generates messages on the interface in an attempt to form a trunk with a remote switch?",
    "options": [
     "Access Mode",
     "Trunk Mode",
     "Dynamic Desirable Mode",
     "Dynamic Auto Mode"
    ],
    "answer": "C",
    "why": "A switch interface configured in Dynamic Desirable mode will generate Dynamic Trunking Protocol (DTP) messages on the interface, actively trying to convert the remote switch \u00a9 2024 Kevin Wallace Training, LLC interface to form a trunk. A trunk link will be formed if the remote switch interface is configured with Dynamic Desirable mode, Dynamic Auto mode or Trunk mode."
   },
   {
    "n": 21,
    "q": "In a typical enterprise network, where would we most likely find Layer 2 switches?",
    "options": [
     "Campus Backbone Layer",
     "Building Access Layer",
     "Building Distribution Layer",
     "Edge Distribution Layer"
    ],
    "answer": "B",
    "why": "The Building Access Layer can be thought of as a wiring closet area. This area would typically consist of Layer 2 switches, where no routing decisions would be made. This is the area to which end user devices connect."
   },
   {
    "n": 22,
    "q": "You are developing new security standards for a company. Which of the following factors would NOT typically be used in a multi-factor authentication system?",
    "options": [
     "Something the user knows",
     "Something the user has",
     "Something the user is",
     "Something the user believes"
    ],
    "answer": "D",
    "why": "In multi-factor authentication (MFA), common factors include something the user knows (password), something the user has (smartphone), and something the user is (fingerprint). The user's beliefs are not typically used in MFA systems."
   },
   {
    "n": 23,
    "q": "When determining the network and host portions of an IPv4 address, a specific value is used to identify the boundary between these two segments. What is this value called, and how does it function?",
    "options": [
     "Network identifier, indicating the first octet as the network portion",
     "Binary switch, flipping bits to distinguish between network and host parts",
     "Subnet mask, using bits to differentiate network bits from host bits",
     "CIDR notation, exclusively using slashes to divide network and host sections"
    ],
    "answer": "C",
    "why": "A subnet mask is used to determine the dividing line between the network and host portions of an IPv4 address. It is a 32-bit value, similar to an IP address, and its purpose is to indicate which bits of the IP address refer to the network part and which refer to the host part. This is done by matching the subnet mask bits with the IP address bits: where the mask has a '1' bit corresponding to a bit in the IP address that is a network bit; and where the mask has a '0' bit corresponding to a bit in the IP address that is a host bit."
   },
   {
    "n": 24,
    "q": "Which EtherChannel protocol allows for the provisioning of 8 backup ports in a standby configuration, which have the ability to take over if an individual port fails?",
    "options": [
     "EtherChannel",
     "LACP",
     "PAgP",
     "ISL"
    ],
    "answer": "B",
    "why": "Both Port Aggregation Protocol (PAgP) and Link Aggregation Control Protocol (LACP) support a maximum of 8 active links in an EtherChannel. However, LACP can additionally designate 8 redundant backup ports in a standby manner to take over in case of a failure."
   },
   {
    "n": 25,
    "q": "Imagine your company operates in a large metropolitan area and requires high-speed connectivity between multiple buildings within the city. You seek a solution that offers very high bandwidth and redundancy, even in the event of a link failure. Based on these requirements, which WAN/MAN technology is best suited for your needs?",
    "options": [
     "MPLS",
     "Metro Ethernet",
     "VPN over the Internet",
     "Frame Relay"
    ],
    "answer": "B",
    "why": "Of the options listed, Metro Ethernet is the optimal choice for high-speed connectivity within a metropolitan area, providing very high bandwidth, often up to 100 gigabits per second, depending on the service provider. It also offers redundancy, especially when configured in a ring topology, ensuring that if any single link fails, connectivity between buildings can be maintained through an alternate path. Unlike MPLS, VPNs, or Frame Relay, Metro \u00a9 2024 Kevin Wallace Training, LLC Ethernet is specifically designed to support the high-speed, high-reliability requirements of metropolitan area networks (MANs), making it the ideal solution for companies operating within large cities where Metro Ethernet is available."
   },
   {
    "n": 26,
    "q": "A security consultant is advising on the implementation of authentication for an SDN controller's REST API. Which of the following authentication methods would provide the highest level of security for this application?",
    "options": [
     "Basic authentication over HTTP",
     "API key authentication",
     "OAuth 2.0 token-based authentication",
     "Digest authentication"
    ],
    "answer": "C",
    "why": "OAuth 2.0 token-based authentication provides the highest level of security for REST API authentication in an SDN controller. OAuth 2.0 is an industry-standard protocol for authorization that allows third-party applications to obtain limited access to an HTTP service. It generates short-lived tokens, reducing the risk of token compromise. Unlike basic authentication or API keys, OAuth 2.0 doesn't require sending credentials with each request, and it supports fine-grained access control. While digest authentication offers some advantages over basic authentication, it doesn't provide the same level of security and flexibility as OAuth 2.0."
   },
   {
    "n": 27,
    "q": "What is one advantage of using a cloud-managed solution for network management?",
    "options": [
     "Requires less initial configuration on devices",
     "Provides a single web portal for managing devices across multiple locations",
     "Eliminates the need for any local IT staff",
     "Ensures that all data traffic is routed through a central location"
    ],
    "answer": "B",
    "why": "A cloud-managed solution allows administrators to log into a single web portal to manage devices across multiple locations, which simplifies the management process and provides centralized control. This approach is more scalable and efficient than managing each device individually. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 28,
    "q": "Which command tells a switch interface to passively listen for Dynamic Trunking Protocol (DTP) frames for trunk negotiation?",
    "options": [
     "SW1(config-if)#switchport mode dynamic desirable",
     "SW1(config-if)#switchport mode dynamic auto",
     "SW1(config-if)#switchport mode passive",
     "SW1(config-if)#switchport mode listen"
    ],
    "answer": "B",
    "why": "A switch interface configured in Dynamic Auto mode will not actively try to convert the remote switch interface to form a trunk link. A Dynamic Auto mode interface becomes a trunk interface only if the remote switch interface is configured to Trunk Mode or Dynamic Desirable mode."
   },
   {
    "n": 29,
    "q": "You are a network administrator setting up a server for a critical application. Which of the following actions would best ensure \"Availability\" in the context of the CIA triad?",
    "options": [
     "Implementing strong encryption algorithms",
     "Using digital certificates for server authentication",
     "Configuring redundant servers and load balancing",
     "Applying strict access control policies"
    ],
    "answer": "C",
    "why": "\"Availability\" in the CIA triad ensures that information and resources are accessible to authorized users when needed. Configuring redundant servers and load balancing helps maintain service availability even if one server fails, thereby preventing downtime."
   },
   {
    "n": 30,
    "q": "When examining a Power over Ethernet (PoE) topology, a wireless access point would be considered what type of component?",
    "options": [
     "PSE",
     "WAP",
     "AC",
     "PD"
    ],
    "answer": "D",
    "why": "A wireless access point is an example of a Powered Device (PD) component. A PD is any device that requires PoE delivery, which includes IP phones, security cameras, and many more devices."
   },
   {
    "n": 31,
    "q": "A switch port in a traditional Spanning Tree Protocol environment transitions from blocking to forwarding. Which of the following states does it NOT pass through during this transition?",
    "options": [
     "Listening",
     "Learning",
     "Blocking",
     "Filtering"
    ],
    "answer": "D",
    "why": "In traditional STP, a port transitions from Blocking to Listening, then to Learning, and finally to Forwarding. There is no \"Filtering\" state in this process. The \"Discarding\" state is synonymous with \"Blocking\" in terms of discarding user data."
   },
   {
    "n": 32,
    "q": "You are assigning IP addresses to hosts in the 192.168.4.0 /26 subnet. Which two of the following IP addresses are assignable IP addresses that reside in that subnet?",
    "options": [
     "192.168.4.0",
     "192.168.4.63",
     "192.168.4.62",
     "192.168.4.32",
     "192.168.4.64"
    ],
    "answer": "C",
    "why": "To determine subnets and usable address ranges created by the 26-bit subnet mask we perform the following steps: Step #1: Identify the interesting octet (i.e., the octet that contains the first zero in the binary subnet mask). In this question, we have a 26-bit subnet mask, which is written in binary as: 11111111 11111111 11111111 11000000 The interesting octet is the fourth octet, because the fourth octet (i.e., 11000000) is the first octet to contain a 0 in the binary. Step #2: Identify the decimal value in the interesting octet of the subnet mask. \u00a9 2024 Kevin Wallace Training, LLC A 26-bit subnet mask can be written in dotted decimal notation as: 255.255.255.192 Since the fourth octet is the interesting octet, the decimal value in the interesting octet is 192. Step #3: Determine the block size by subtracting the decimal value of the interesting octet from 256. Block Size = 256 \u2013 192 = 64 Step #4: Determine the subnets by counting by the block size in the interesting octet, starting at 0. Placing a zero in the first interesting octet identifies the first subnet as: 192.168.4.0 /26 We then count by the block size (of 64) in the interesting octet (the fourth octet in this question) to determine the remaining subnets: 192.168.4.64 /26 192.168.4.128 /26 192.168.4.192 /26 Step #5: This question is asking about the 192.168.4.0 /26 subnet. From the above list of subnets, we can determine that the assignable range of IP addresses for this subnet is 192.168.4.1 \u2013 192.168.4.62. We can also determine that 192.168.4.0 is the network address, and 192.168.4.63 is the directed broadcast address. From the assignable range of IP addresses we have calculated, we can determine that the two assignable IP addresses given as options in this question are: 192.168.4.62 and 192.168.4.32."
   },
   {
    "n": 33,
    "q": "Which access control entry would correctly permit traffic to an HTTPS server (with an IP address of 203.0.113.1) from any host?",
    "options": [
     "access-list 101 permit tcp any eq 443 host 203.0.113.1",
     "access-list 101 permit tcp any host 203.0.113.1 eq 443",
     "access-list 101 permit tcp any host 203.0.113.1 443",
     "access-list 101 permit tcp any 203.0.113.1 eq 443"
    ],
    "answer": "B",
    "why": "To permit HTTPS traffic from any source to a specific host, the correct syntax specifies the protocol (TCP), the source (any), the destination host (host 203.0.113.1), and the destination port number (eq 443). Therefore, the correct ACE is `access-list 101 permit tcp any host 203.0.113.1 eq 443`. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 34,
    "q": "On a Cisco Catalyst switch, what command is used to set the MAC address table aging time to one hour?",
    "options": [
     "mac address-table aging-time 60",
     "mac address-table aging-time 1",
     "mac address-table aging-time 3600",
     "mac address-table aging-time 600"
    ],
    "answer": "C",
    "why": "The aging time on a Catalyst switch is set as a value in seconds. Using this command will set the aging time as desired, as 3600 seconds is equal to one hour."
   },
   {
    "n": 35,
    "q": "Which type of hypervisor runs in a traditional operating system on a server?",
    "options": [
     "Native",
     "Hosted",
     "Nested",
     "Installed"
    ],
    "answer": "B",
    "why": "Also referred to as a client hypervisor, or Type-2 hypervisor, this runs within a host operating system. The underlying hardware is managed by the host OS rather than the hypervisor itself."
   },
   {
    "n": 36,
    "q": "Which of the following reasons best explains why a company might want to implement subnetting within its Class C network infrastructure?",
    "options": [
     "To increase the number of available public IP addresses",
     "To allow for easier implementation of IPv6",
     "To separate departments for security and resource allocation",
     "To enable direct broadcast addresses for all devices"
    ],
    "answer": "C",
    "why": "Subnetting allows an organization to segment its network into smaller, manageable parts. This is particularly useful for separating different departments within a company, such as HR and R&D, to ensure they do not see each other's resources like printers on their local network, and to enhance security by limiting access between segments. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 37,
    "q": "Which type of firewall has the ability to restrict or block packets based on source and destination addresses or other static values?",
    "options": [
     "Proxy firewall",
     "Stateful firewall",
     "Stateless firewall",
     "Static firewall"
    ],
    "answer": "C",
    "why": "Stateless firewalls are not aware of the state of traffic or data patterns. They use sets of static rules for packet filtering and do not keep track of the state of network connections. These rules are known as access control lists (ALCs)."
   },
   {
    "n": 38,
    "q": "Which section of the Cisco DNA Center management dashboard allows us to graphically allocate pools of IP addresses?",
    "options": [
     "Design",
     "Provision",
     "Platform",
     "Addressing"
    ],
    "answer": "A",
    "why": "In the Design area of Cisco DNA Center, we can graphically design networks. This includes the ability to create campus maps, import floor plans, identify IP address allocation, and more."
   },
   {
    "n": 39,
    "q": "When configuring a subinterface for VLAN 10 in a router-on-a-stick setup, which command correctly assigns the VLAN identifier using 802.1Q encapsulation?",
    "options": [
     "ip address 192.168.1.1 255.255.255.0",
     "switchport access vlan 10",
     "encapsulation dot1Q 10",
     "switchport mode trunk"
    ],
    "answer": "C",
    "why": "The correct command to assign a VLAN identifier to a subinterface for VLAN 10 using 802.1Q encapsulation is `encapsulation dot1Q 10`. This command specifies the encapsulation method and the VLAN ID, allowing the router to recognize and route traffic for VLAN 10 appropriately through the subinterface."
   },
   {
    "n": 40,
    "q": "Which command allows us to set the EtherChannel load-balancing algorithm to consider source and destination IP addresses?",
    "options": [
     "SW1(config)#port-channel load-balance src-dst-ip",
     "SW1(config)#port-channel distribute src-dst-ip",
     "SW1(config)#port-channel src-dst-ip balance",
     "SW1(config)#port-channel preferred src-dst-ip"
    ],
    "answer": "A",
    "why": "This command will perform an Exclusive OR (XOR) operation to add randomness to the physical links used in the EtherChannel. This will help distribute traffic more evenly over the links."
   },
   {
    "n": 41,
    "q": "In an effort to ensure continuous connectivity to the Internet, you are configuring a floating static route as a failover for your primary Internet connection via RouterA (your default gateway with an IP of 10.10.10.1). You've set up a secondary connection through RouterC, which has an IP address of 10.10.10.2. Given that your dynamic routing protocol has an administrative distance of 90, which of the following commands correctly configures the floating static route to the Internet through RouterC with an appropriate administrative distance?",
    "options": [
     "ip route 0.0.0.0 0.0.0.0 10.10.10.2 89",
     "ip route 0.0.0.0 0.0.0.0 10.10.10.1 85",
     "ip route 0.0.0.0 0.0.0.0 10.10.10.2 91",
     "ip route 0.0.0.0 0.0.0.0 10.10.10.1 90"
    ],
    "answer": "C",
    "why": "This command is correct because it sets a default route through RouterC with an administrative distance of 91, slightly higher than the primary routing protocol's administrative distance of 90. This ensures the route through RouterC will be used as a backup if the primary path via RouterA fails. The administrative distance is crucial in determining the preference of routing information; in this case, the slightly higher value of 91 ensures the route serves as a floating static route, acting as a failover route rather than overriding the primary route. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 42,
    "q": "Which of the following best describes a \"logic bomb?\"",
    "options": [
     "Malware that encrypts a user's data until a ransom is paid",
     "A code that lies dormant until triggered by a specific event",
     "An attack that redirects DNS queries to malicious sites",
     "A network scan for open and unprotected wireless networks"
    ],
    "answer": "B",
    "why": "A \"logic bomb\" is a piece of malicious code that remains dormant within a system until it is triggered by a specific event or condition, such as a certain date or the removal of an employee from a database."
   },
   {
    "n": 43,
    "q": "In which scenario is the IPv6 unspecified address \"::\" most commonly used?",
    "options": [
     "As a destination address for multicast traffic",
     "As a source address in the initial packets of an IPv6 address configuration process",
     "For routing packets across the global Internet",
     "As a loopback address to test local network functionality"
    ],
    "answer": "B",
    "why": "The IPv6 unspecified address \"::\" is primarily used as a source address in the initial packets when a device is undergoing the IPv6 address configuration process. This includes scenarios such as sending Neighbor Solicitation messages or Router Solicitation messages when the device does not yet have a configured IPv6 address."
   },
   {
    "n": 44,
    "q": "How many available subnets are possible within the 192.168.100.0 /26 network?",
    "options": [
     "4",
     "2",
     "8",
     "16"
    ],
    "answer": "A",
    "why": "We first determine the classful mask for the given network. This particular network falls within the Class C address space, which has a default classful mask of /24 (or 255.255.255.0). In order to determine the available subnets, we need to use the formula 2^s, \u00a9 2024 Kevin Wallace Training, LLC where s = the number of borrowed bits. The borrowed bits are the number of bits beyond the default classful mask for a network. Since we are using a /26 subnet mask and the default classful mask is /24, this means we have 2 borrowed bits (26 \u2013 24 = 2). Now we put that number into our formula as 2^2, which gives us the value of 4. Therefore, by using a /26 subnet mask, we have the potential for 4 different subnets on this network."
   },
   {
    "n": 45,
    "q": "You need to automate network configuration tasks at your organization. Which Cisco Catalyst Center feature would be most useful for this purpose?",
    "options": [
     "Graphical network mapping",
     "Quality of service settings",
     "Application Programming Interfaces (APIs)",
     "Network Time Travel feature"
    ],
    "answer": "C",
    "why": "Cisco Catalyst Center's Application Programming Interfaces (APIs) are most useful for automating network configuration tasks. These APIs allow network administrators to programmatically configure a network, set policies, and gather troubleshooting information using scripts, such as those written in Python."
   },
   {
    "n": 46,
    "q": "You are configuring a router and want to gather detailed information about devices directly connected to it via Layer 2. Which of the following commands provides detailed information, including the IP address and device type of connected CDP-speaking devices?",
    "options": [
     "show cdp",
     "show cdp neighbors",
     "show cdp interface",
     "show cdp neighbors detail"
    ],
    "answer": "D",
    "why": "The `show cdp neighbors detail` command provides detailed information about each directly connected CDP-speaking device, including device IDs, port identifiers, capabilities, and IP addresses. This detailed view is crucial for administrators needing to map the network topology or troubleshoot connectivity issues, offering insights beyond the basic connectivity and device type information provided by summarized `show cdp neighbors` command output. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 47,
    "q": "Which of the following is an example of a Distributed Denial of Service (DDoS) attack?",
    "options": [
     "An attacker using a single computer to send excessive traffic to a server",
     "An attacker exploiting a software vulnerability to gain control of a server",
     "Multiple compromised computers simultaneously sending traffic to overwhelm a server",
     "An attacker stealing user credentials through a phishing email"
    ],
    "answer": "C",
    "why": "A Distributed Denial of Service (DDoS) attack involves multiple compromised computers (often part of a botnet) simultaneously sending traffic to overwhelm a server, making it unavailable to legitimate users."
   },
   {
    "n": 48,
    "q": "A host in your network has been assigned an IP address of 192.168.181.182 /25. What is the subnet to which the host belongs?",
    "options": [
     "192.168.181.128 /25",
     "192.168.181.0 /25",
     "192.168.181.176 /25",
     "192.168.181.192 /25",
     "192.168.181.160 /25"
    ],
    "answer": "A",
    "why": "To determine subnets and usable address ranges created by the 25-bit subnet mask we perform the following steps: Step #1: Identify the interesting octet (i.e., the octet that contains the first zero in the binary subnet mask). In this question, we have a 25-bit subnet mask, which is written in binary as: 11111111 11111111 11111111 10000000 The interesting octet is the fourth octet, because the fourth octet (i.e., 10000000) is the first octet to contain a 0 in the binary. Step #2: Identify the decimal value in the interesting octet of the subnet mask. A 25-bit subnet mask can be written in dotted decimal notation as: 255.255.255.128 Since the fourth octet is the interesting octet, the decimal value in the interesting octet is 128. Step #3: Determine the block size by subtracting the decimal value of the interesting octet from 256. \u00a9 2024 Kevin Wallace Training, LLC Block Size = 256 \u2013 128 = 128 Step #4: Determine the subnets by counting by the block size in the interesting octet, starting at 0. Placing a zero in the first interesting octet identifies the first subnet as: 192.168.181.0 /25 We then count by the block size (of 128) in the interesting octet (the fourth octet in this question) to determine the remaining subnets, or in this case just a single additional subnet. 192.168.181.128 /25 Now that we have our two subnets identified, we can determine the subnet in which the IP address of 192.168.181.182 resides. Since the usable range of IP addresses for the 192.168.181.128 /25 network is 192.168.181.129 \u2013 192.168.181.254 (because 192.168.181.128 is the network address, and 192.168.181.255 is the directed broadcast address), and since 192.168.181.182 is in that range, the subnet to which 192.168.181.182 /25 belongs is: 192.168.181.128 /25"
   },
   {
    "n": 49,
    "q": "You are planning to deploy a subnet for a small office network that requires 28 devices to be connected. Using IPv4 addressing, what is the subnet mask you should apply to ensure all devices receive a unique IP address while minimizing the number of unused addresses?",
    "options": [
     "255.255.255.224",
     "255.255.255.0",
     "255.255.255.192",
     "255.255.255.240"
    ],
    "answer": "A",
    "why": "The 255.255.255.224 subnet mask can be written in slash notation as /27, which indicates 5 host bits (i.e., 32 - 27 = 5). According to the formula: \"Available Hosts = (2^h - 2), where h is the number of host bits,\" the number of available hosts in this instance = (2^5 - 2) = 32 - 2 = 30. (NOTE: Keep in mind that the order of operations says we need to perform exponentiation before subtraction.) If we had used 4 host bits, the number of available hosts would have only been 14. Therefore, 5 host bits (corresponding to a subnet mask of 255.255.255.224) is the minimum number of host bits that can be used to meet the design criteria. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 50,
    "q": "Which PAgP mode pairings will successfully negotiate an EtherChannel?",
    "options": [
     "SW1: Desirable, SW2: On",
     "SW1: Auto, SW2: On",
     "SW1: Auto, SW2: Auto",
     "SW1: Auto, SW2: Desirable"
    ],
    "answer": "D",
    "why": "If one side of an EtherChannel is configured with PAgP Auto mode, the only way a successful EtherChannel can be formed is when the other end is set to PAgP Desirable mode. The auto option passively listens for PAgP frames, while the desirable option actively sends PAgP frames in an attempt to form an EtherChannel."
   },
   {
    "n": 51,
    "q": "During a planning session for digital transformation, your company decides it needs a cost- effective solution for deploying web applications without the hassle of managing hardware. Which cloud deployment model offers this capability, along with the benefit of paying only for the resources you use?",
    "options": [
     "Public Cloud",
     "Private Cloud",
     "Hybrid Cloud",
     "On-Premises"
    ],
    "answer": "A",
    "why": "The Public Cloud deployment model is designed to deliver computing resources over the Internet, provided by cloud service providers. This model enables organizations to deploy web applications without the need to purchase, manage, or maintain any hardware, as all the infrastructure is managed by their cloud provider. Additionally, it operates on a \"pay-as- you-go\" basis, ensuring that organizations only pay for the resources they consume. This can make the public cloud an exceptionally cost-effective and scalable solution for deploying web applications. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 52,
    "q": "Consider the following topology. Which of the following ACL configurations will block HTTP traffic and permit HTTPS traffic from the Server (at 203.0.113.1) being sent to either PC_A or PC_B?",
    "options": [
     "R1(config)# access-list 100 deny ip host 203.0.113.1 eq 80 198.51.100.0 0.0.0.255",
     "R1(config)# access-list 100 deny tcp host 203.0.113.1 eq www 198.51.100.0 255.255.255.0",
     "R1(config)# access-list 100 deny tcp host 203.0.113.1 eq www 198.51.100.0 0.0.0.255",
     "R1(config)# access-list 100 deny tcp host 203.0.113.1 eq www 198.51.100.0 0.0.0.255"
    ],
    "answer": "D",
    "why": "In this example, we\u2019re blocking traffic from the Server to the PCs. Therefore, the source IP address is the Server\u2019s IP address (203.0.113.1), and the source port is TCP port 80 for the HTTP traffic we wish to block. Also, since the traffic is traveling from the Server into interface Gig 0/2 on router R1, the access list needs to be applied in the inbound direction on interface Gig 0/2. Alternately, the ACL could have been applied in the outbound direction on interface Gig 0/1, but in keeping with best practices, we\u2019re applying the Extended ACL as close to the source (i.e., the Server) as possible. Option A is incorrect, because the first line is denying \u201cip\u201d traffic rather than \u201ctcp\u201d traffic, and will therefore not allow us to specify a port number. Option B is incorrect, because a subnet mask (255.255.255.0) is being used for the destination network (i.e., the network on which the PCs reside) rather than a wildcard mask (0.0.0.255). Option C is incorrect, because the ACL is being applied outbound on interface Gig 0/2 rather than inbound. Option D, however, is correct. Specifically, it blocks TCP port 80 traffic (i.e., www traffic) from the server (with a host IP address of 203.0.113.1) to PCs in the 198.51.100.0 /24 network."
   },
   {
    "n": 53,
    "q": "A network administrator needs to ensure accurate time synchronization across all network devices to troubleshoot and correlate logs effectively. Which of the following protocols could be implemented to achieve this?",
    "options": [
     "NTP",
     "SNMP",
     "FTP",
     "SMTP"
    ],
    "answer": "A",
    "why": "Network Time Protocol (NTP) is designed to synchronize the clocks of network devices. Accurate time synchronization helps in correlating logs and troubleshooting network issues effectively. SNMP is for network management, FTP is for file transfer, and SMTP is for email communication. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 54,
    "q": "What is the 8-bit binary equivalent of the decimal number 112?",
    "options": [
     "10100100",
     "1111100",
     "1111001",
     "1110000"
    ],
    "answer": "D",
    "why": "By knowing our two-base numbers, we can calculate the corresponding 8-bit binary value as 01110000. The 1s in this binary number represent decimal values 16, 32, and 64. Adding these values together (16 + 32 + 64) give us the decimal value 112."
   },
   {
    "n": 55,
    "q": "Which Layer 2 neighbor discovery protocol sends information to the destination multicast MAC address with an OUI of 01-80-c2-00-00-0E?",
    "options": [
     "LLDP",
     "CDP",
     "ARP",
     "STP"
    ],
    "answer": "A",
    "why": "Link Layer Discovery Protocol (LLDP) sends information to this address, known as the LLDP Multicast address. This address is defined within a range of addresses reserved by the IEEE for protocols that are to be constrained to an individual LAN."
   },
   {
    "n": 56,
    "q": "A network administrator is tasked with implementing a solution that allows rapid reconfiguration of network devices based on changing traffic patterns. Which of the following SDN components would be most directly responsible for defining these network changes?",
    "options": [
     "The data plane of network devices",
     "The southbound interface (SBI)",
     "The northbound interface (NBI)",
     "SDN applications"
    ],
    "answer": "D",
    "why": "Software Defined Networking (SDN) applications are most directly responsible for defining network changes in an SDN environment. These applications communicate with the \u00a9 2024 Kevin Wallace Training, LLC SDN controller through northbound interfaces (NBIs) using REST APIs. They express the desired state of the network, such as quality of service configurations or traffic routing patterns. The SDN controller then translates this high-level intent into specific device configurations and communicates these changes to network devices through southbound interfaces (SBIs). This approach allows for rapid, programmatic reconfiguration of a network based on changing requirements or traffic patterns."
   },
   {
    "n": 57,
    "q": "Given the network 192.168.10.0 /24, what is the usable IPv4 address range?",
    "options": [
     "192.168.10.1 \u2013 192.168.10.254",
     "192.168.10.0 \u2013 192.168.10.255",
     "192.168.10.1 \u2013 192.168.255.255",
     "192.168.10.1 \u2013 192.168.254.254"
    ],
    "answer": "A",
    "why": "Using the formulas to find the network and directed broadcast addresses, we can determine that the network address is 192.168.10.0 and the directed broadcast address is 192.168.10.255. The usable IPv4 address range will fall inside here, with the first available host address being one address higher than the network address, and the last being one address lower than the directed broadcast address. This means the usable IPv4 address range is 192.168.10.1 \u2013 192.168.10.254"
   },
   {
    "n": 58,
    "q": "Imagine you want Switch SW2 to serve as the primary root bridge for VLAN 1 in a PVST+ environment, ensuring optimal traffic flow for that VLAN. Which command correctly configures this on SW2?",
    "options": [
     "spanning-tree vlan 1 root primary",
     "spanning-tree vlan 1 priority 32768",
     "spanning-tree vlan 1 root bridge",
     "spanning-tree vlan 1 bridge primary"
    ],
    "answer": "A",
    "why": "The command `spanning-tree vlan 1 root primary` dynamically adjusts a switch's bridge priority to ensure the switch becomes the primary root for VLAN 1. This command is part of Cisco's PVST+ enhancements, allowing network administrators to directly influence which switch serves as a root bridge for a specific VLAN, optimizing traffic flow. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 59,
    "q": "Considering the routing process in a large enterprise network, what method do routers typically use to populate their IP routing tables with routes to different networks?",
    "options": [
     "ARP requests",
     "Manual configuration by network administrators",
     "Automatic configuration using DHCP",
     "Dynamic routing protocols"
    ],
    "answer": "D",
    "why": "Routers can populate their IP routing tables through various methods, including manual configuration (static routing) and dynamic routing protocols. Dynamic routing protocols allow routers to automatically discover and maintain routes to different networks, providing scalability and the ability to route around link failures. Examples of dynamic routing protocols include OSPF and EIGRP."
   },
   {
    "n": 60,
    "q": "You are configuring a VPN between two office locations. Which VPN setup should you use to make the connection transparent to the end users?",
    "options": [
     "Remote access VPN",
     "SSL VPN",
     "Site-to-site VPN",
     "Split tunnel VPN"
    ],
    "answer": "C",
    "why": "A site-to-site VPN connects two office locations, allowing routers to handle encryption and decryption transparently. This makes the connection seamless for end users, who do not need to initiate the VPN themselves."
   },
   {
    "n": 61,
    "q": "If you have a route to a network that was learned via OSPF, and another route to the same network learned via EIGRP, which route would a router typically prefer?",
    "options": [
     "The OSPF route",
     "The EIGRP route",
     "The route with the longer prefix",
     "The route learned first"
    ],
    "answer": "B",
    "why": "EIGRP (Enhanced Interior Gateway Routing Protocol) has a lower administrative distance (AD) of 90 compared to OSPF (Open Shortest Path First), which has an AD of 110. Since routers prefer routes with lower ADs, the route learned via EIGRP would be preferred over the OSPF route."
   },
   {
    "n": 62,
    "q": "What do routers reference in order to make packet forwarding decisions?",
    "options": [
     "CAM Table",
     "MAC Table",
     "Routing Table",
     "Memory Table"
    ],
    "answer": "C",
    "why": "A router maintains and references a routing table for packet forwarding decisions. This table contains a list of its ports, along with the network that is connected to each port. This allows the router to intelligently forward packets to their intended destination."
   },
   {
    "n": 63,
    "q": "You are examining the OSPF database and notice that a transit network between two routers is not being advertised via a Type 2 LSA. What could be the reason for this?",
    "options": [
     "The network is not a point-to-point network type",
     "The network does not have a Designated Router elected",
     "Type 2 LSAs are not used for advertising networks",
     "The routers are in different OSPF areas"
    ],
    "answer": "B",
    "why": "For a network to be advertised via a Type 2 LSA (network LSA), two criteria must be met. First, the network must be a transit network interconnecting OSPF neighbors. Second, a Designated Router (DR) must be elected on that network segment. If no DR is elected, such as on point-to-point network types, the network will not be advertised using a Type 2 LSA. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 64,
    "q": "Your company wants to prevent password reuse among employees. Which policy would help enforce this?",
    "options": [
     "Requiring passwords to be changed every 30 days",
     "Using a minimum password length of 8 characters",
     "Disallowing the use of previous passwords or slight variations of them",
     "Mandating the use of special characters in passwords"
    ],
    "answer": "C",
    "why": "Disallowing the reuse of previous passwords or slight variations of them helps prevent employees from using the same passwords repeatedly, thereby enhancing security by reducing the likelihood of compromised passwords being reused."
   },
   {
    "n": 65,
    "q": "You are working with a Class B network with the private IP address of 172.16.0.0 /16. You need to maximize the number of broadcast domains, where each broadcast domain can accommodate 1000 hosts. What subnet mask should you use?",
    "options": [
     "/22",
     "/23",
     "/24",
     "/25",
     "/26"
    ],
    "answer": "A",
    "why": "In addition to testing your knowledge of subnetting, this question is also making sure you understand that a subnet is a broadcast domain. This should not be confused with a collision domain (i.e., each port on a switch is in its own collision domain). To determine how many host bits are required to support 1000 hosts, we can create a table from the following formula: Number of Hosts = 2^h \u2013 2, where h is the number of host bits From this formula, we can create the following table: 1 Host Bit => 0 Hosts 2 Host Bits => 2 Hosts 3 Host Bits => 6 Hosts 4 Host Bits => 14 Hosts 5 Host Bits => 30 Hosts 6 Host Bits => 62 Hosts \u00a9 2024 Kevin Wallace Training, LLC 7 Host Bits => 126 Hosts 8 Host Bits => 254 Hosts 9 Host Bits => 510 Hosts 10 Host Bits => 1022 Hosts This table tells us that a subnet with 10 host bits will accommodate the requirement of 1000 hosts. If we have 10 host bits, then we have a 22-bit subnet mask (i.e., 32 \u2013 10 = 22). Also, by not using more host bits than we need, we are maximizing the number of subnets that can be created."
   },
   {
    "n": 66,
    "q": "How many usable host addresses are found within the 172.16.0.0 /18 network?",
    "options": [
     "16,382",
     "65,534",
     "32,766",
     "8,190"
    ],
    "answer": "A",
    "why": "To calculate the number of usable host addresses within a network, we use the formula 2^h \u2013 2, where h = the number of host bits in the subnet mask. Two is subtracted in order to preserve a network address and a directed broadcast address. We know that subnet masks are 32 bits in length, so given a /18 mask we can determine that there are 14 host bits (32 \u2013 18 = 14). Inserting this into the formula gives us 2^14 \u2013 2, which comes to 16,382. Therefore, we have 16,382 usable host addresses in this network."
   },
   {
    "n": 67,
    "q": "On a Cisco Discovery Protocol (CDP) capable device, which command will display Layer 2 neighbor information?",
    "options": [
     "SW1#show ip cdp",
     "SW1#show cdp table",
     "SW1#show cdp neighbors",
     "SW1#show neighbors"
    ],
    "answer": "C",
    "why": "This command displays information about Layer 2 adjacent neighbors that are also running CDP. Information displayed includes the port ID on the neighboring device, the local interface, and the type of neighboring device. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 68,
    "q": "What is the significance of the \"R\" bit being set to 1 in an IPv6 multicast address?",
    "options": [
     "It indicates that the address is routable on the Internet.",
     "It says that the address is reserved for future use.",
     "It means the address includes an embedded IP address for a rendezvous point.",
     "It designates the multicast group as restricted to the local network."
    ],
    "answer": "C",
    "why": "When the \"R\" bit in an IPv6 multicast address is set to 1, it indicates that the address includes an embedded IP address of a rendezvous point (RP). This feature is part of multicast addressing that allows for efficient distribution of multicast traffic by directing it to a specific router (rendezvous point) from which it can be sent out to all subscribing nodes."
   },
   {
    "n": 69,
    "q": "Why is it recommended not to use the CoS values 6 and 7 for production traffic in a network?",
    "options": [
     "They are reserved for network use.",
     "They are for high-priority traffic only.",
     "They are deprecated values.",
     "They cause increased latency."
    ],
    "answer": "A",
    "why": "CoS values 6 and 7 are reserved for network use, such as control traffic, and should not be used for regular production traffic to avoid potential conflicts and ensure network reliability."
   },
   {
    "n": 70,
    "q": "What is the directed broadcast address for the IP address 10.10.1.48 /8?",
    "options": [
     "10.10.255.255",
     "10.255.255.255",
     "10.10.1.255",
     "10.10.0.255"
    ],
    "answer": "B",
    "why": "With a /8 subnet mask (or 255.0.0.0), we know that there are 8 network bits and 24 host bits. In order to find the network address, we first convert the IP address into binary, which in this case is 00001010.00001010.00000001.00110000. Since there are 8 network bits in \u00a9 2024 Kevin Wallace Training, LLC the subnet mask, this means we take the first 8 bits of this converted address and keep them the same. The remaining 24 bits are set to a 1 value, giving us the binary value 00001010.11111111.11111111.11111111. Converting this back to decimal gives us the address 10.255.255.255, which is the network address for this IP address."
   },
   {
    "n": 71,
    "q": "On a Layer 2 switch, what can be used to break up broadcast domains?",
    "options": [
     "ACL",
     "VLAN",
     "STP",
     "FastEthernet"
    ],
    "answer": "B",
    "why": "A virtual LAN (VLAN) allows for broadcast domain separation on a Layer 2 switch, giving separation to sensitive traffic. It\u2019s common to place different enterprise employee groups on their own VLAN, such as separating the Sales department from the Engineering department."
   },
   {
    "n": 72,
    "q": "In a Spanning Tree Protocol (STP) implementation, the root bridge is:",
    "options": [
     "The switch with the lowest bridge ID",
     "The switch with the highest bridge ID",
     "The switch closest to the designated bridge",
     "The switch with the highest MAC address"
    ],
    "answer": "A",
    "why": "The bridge ID (BID) is made up of the bridge priority (2 bytes) and the MAC address (6 bytes). Combines, that created the BID value. By default, all Cisco Catalyst switches have a priority value of 32768, so the MAC address value will be the tie breaker (lowest MAC wins)."
   },
   {
    "n": 73,
    "q": "Which IPv4 address class is represented by the classful mask 255.255.0.0?",
    "options": [
     "Class A",
     "Class B",
     "Class C",
     "Class D"
    ],
    "answer": "B",
    "why": "In IPv4 classful network addressing, the classful mask 255.255.0.0 represents a Class B address. This means that values in the first octet of the IPv4 address will range from 128 to 191. This can also be represented in prefix notation with a /16."
   },
   {
    "n": 74,
    "q": "In a CB-WFQ configuration, what is the maximum number of traffic classes Cisco recommends creating in order to avoid excessive complexity?",
    "options": [
     "No more than 5",
     "No more than 8",
     "No more than 11",
     "No more than 15"
    ],
    "answer": "C",
    "why": "Cisco recommends creating no more than 11 traffic classes in a Class-Based Weighted Fair Queuing (CB-WFQ) configuration in order to avoid excessive complexity and help ensure the classes are treated with the appropriate levels of priority."
   },
   {
    "n": 75,
    "q": "In Wi-Fi 7, what is the maximum channel width that can be achieved through channel bonding?",
    "options": [
     "160 MHz",
     "240 MHz",
     "320 MHz",
     "640 MHz"
    ],
    "answer": "C",
    "why": "In Wi-Fi 7 (802.11be), the maximum channel width that can be achieved through channel bonding is 320 MHz. This is accomplished by combining two 160 MHz channels, allowing for significantly higher data rates and improved performance, as compared with previous standards. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 76,
    "q": "In the context of a campus network design, what scenario best justifies opting for a Collapsed Core architecture instead of a traditional Three-Tier model?",
    "options": [
     "When the campus is expected to expand rapidly, requiring the addition of many new",
     "When each building requires a high degree of autonomy and separate network management",
     "When there are a limited number of buildings, making the expense of a separate Core Layer",
     "When network scalability is the top priority"
    ],
    "answer": "C",
    "why": "A Collapsed Core architecture, where the Core and Distribution Layers are combined, is most suitable for scenarios with a limited number of buildings. This is because the complexity and expense of maintaining a separate Core Layer with high-end switches might not be justified in smaller environments with only one to three buildings. In such cases, collapsing the Core and Distribution Layers simplifies the network structure and can reduce costs, while still meeting the network's performance and connectivity requirements. This choice focuses on practicality and cost-effectiveness for smaller-scale networks."
   },
   {
    "n": 77,
    "q": "In a Peer-to-Peer Architecture, which device is used to share resources on the network?",
    "options": [
     "Server",
     "Client",
     "Proxy",
     "Database"
    ],
    "answer": "B",
    "why": "In a Peer-to-Peer Architecture, the clients themselves are serving resources to the network. This allows clients on the network to access local files or attached printers directly from another client, without the use of a central server. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 78,
    "q": "In a network that includes IP phones, which LLDP extension allows for the discovery of media endpoints and facilitates the exchange of additional information such as device capabilities and network policies?",
    "options": [
     "LLDP-VOIP",
     "LLDP-MED",
     "LLDP-CAP",
     "LLDP-SEC"
    ],
    "answer": "B",
    "why": "LLDP-MED (Media Endpoint Discovery) is an extension of the LLDP standard specifically designed for network devices like IP phones. It enhances the basic capabilities of LLDP by allowing for the communication of additional information related to media endpoints, such as device type, location information, and network policies, facilitating more effective network management and policy application."
   },
   {
    "n": 79,
    "q": "What type of error might indicate that a network cable is damaged or experiencing interference?",
    "options": [
     "VLAN mismatch error",
     "Routing loop",
     "CRC error",
     "DHCP exhaustion"
    ],
    "answer": "C",
    "why": "CRC (Cyclic Redundancy Check) errors often point to physical layer issues such as a bad cable or electromagnetic interference (EMI) affecting traffic flowing over the cable. CRC is a method used to detect errors in transmitted frames by comparing a calculated value to an expected value. If these values don't match, it indicates that the data has been corrupted during transmission. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 80,
    "q": "At a university with frequent construction, a network engineer wants to mitigate risks associated with unidirectional link failures due to fiber optic damage. After enabling Loop Guard on specific ports, what happens if one of these ports stops receiving BPDUs but can still transmit data?",
    "options": [
     "The port remains in the same operational state until manually reset.",
     "The port is disabled until the receipt of BPDUs resumes.",
     "The port enters a loop-inconsistent state, preventing potential loops.",
     "The port automatically resets itself after a predetermined timeout."
    ],
    "answer": "C",
    "why": "When Loop Guard is enabled on a port, and that port stops receiving BPDUs (potentially due to a unidirectional link failure), the port automatically transitions into a loop- inconsistent state. This state helps prevent the port from moving into a Forwarding state, which could cause a Layer 2 loop, particularly in scenarios like construction damage to cables. The port remains in this state until it resumes receiving BPDUs, providing an effective safeguard against network disruptions caused by physical link issues."
   },
   {
    "n": 81,
    "q": "What is the network address for the IP address 172.29.20.50 /16?",
    "options": [
     "172.29.0.0",
     "172.29.20.0",
     "172.29.20.1",
     "172.0.0.0"
    ],
    "answer": "A",
    "why": "With a /16 subnet mask (or 255.255.0.0), we know that there are 16 network bits and 16 host bits. In order to find the network address, we first convert the IP address into binary, which in this case is 10101100.00011101.00010100.00110010. Since there are 16 network bits in the subnet mask, this means we take the first 16 bits of this converted address and keep them the same. The remaining 16 bits are set to a 0 value, giving us the binary value 10101100.00011101.00000000.00000000. Converting this back to decimal gives us the address 172.16.0.0, which is the network address for this IP address. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 82,
    "q": "Consider the following topology. Assuming all switches are configured with the default Bridge Priority for VLAN 1\u2019s Spanning Tree Protocol (STP) instance, which of the following ports will be in a Blocking state for VLAN 1? (Select 2.)",
    "options": [
     "Gig 0/0 on SW1",
     "Gig 0/0 on SW2",
     "Gig 0/1 on SW2",
     "Gig 0/2 on SW2"
    ],
    "answer": "A",
    "why": "Since the Bridge Priorities for VLAN 1 are all at their default value on the switches, the lowest switch MAC address determines which switch is the Root Bridge. In this topology, SW3 has the lowest MAC address and is therefore the Root Bridge. SW2 has two connections to the Root Bridge. To prevent a loop, STP will cause one of those ports to be blocking. Since both of SW2\u2019s Gig 0/1 and Gig 0/2 ports connect to SW3, the deciding factor for which port becomes the Root Port is which port is connected to the lowest far end Port ID. The far end of the link connected to SW2\u2019s Gig 0/1 interface is Gig 0/2 on SW3. The far end of the link connected to SW2\u2019s Gig 0/2 interface is Gig 0/1 on SW3. Therefore, the Root Port on SW2 is Gig 0/2, because it connects to the lowest far end Port ID (i.e., Gig 0/1 on SW3 as opposed to Gig 0/2 on SW3). And, to prevent a loop, Gig 0/1 on SW2 will be Blocking. \u00a9 2024 Kevin Wallace Training, LLC For the link between SW1 and SW2, Gig 0/0 on SW1 is blocking. The cost to get back to the Root Bridge is the same for each end of that link. So, the tie breaker is to determine which end of the link connects to a switch with the lowest Bridge ID. Since the MAC address of SW2 is less than the MAC address of SW3, Gig 0/0 on SW2 is the Designated port for that link and Gig 0/0 on SW1 is Blocking."
   },
   {
    "n": 83,
    "q": "Which subnet mask can most efficiently represent all four networks listed below? 192.168.16.0 /24 192.168.22.0 /24 192.168.18.0 /24 192.168.20.0 /24",
    "options": [
     "/21",
     "/22",
     "/4",
     "/16"
    ],
    "answer": "A",
    "why": "If we convert all four IP addresses to binary, we will discover that they share the same values in their first 21 bits. This tells us that we should use a /21 subnet mask, or 255.255.248.0 in dotted decimal."
   },
   {
    "n": 84,
    "q": "As a network administrator, you have a switch port, Gig 0/3 on switch SW3, connected to an end device that is expected to operate in full-duplex mode. You want this port to transition immediately to the forwarding state upon connection without waiting for the usual STP convergence times. How should you configure this port to meet the requirement?",
    "options": [
     "Enable PortFast on the port.",
     "Set the port as a designated port.",
     "Configure the port as a trunk port.",
     "Designate the port as a root port."
    ],
    "answer": "A",
    "why": "Enabling PortFast on a switch port allows it to immediately transition to the forwarding state, bypassing the usual Listening and Learning states of STP. This configuration is ideal for ports connected to end devices like PCs or IP phones, where immediate network access upon connection is preferable, and there is no risk of creating network loops. PortFast should be \u00a9 2024 Kevin Wallace Training, LLC used with caution and only on ports that are confirmed to connect to an end device, in order to prevent potential loop conditions in the network."
   },
   {
    "n": 85,
    "q": "Which command allows us to assign a switch interface to VLAN 100?",
    "options": [
     "SW1(config-if)#switchport vlan 100 join",
     "SW1(config-if)#switchport member vlan 100",
     "SW1(config-if)#switchport trunk vlan 100",
     "SW1(config-if)#switchport access vlan 100"
    ],
    "answer": "D",
    "why": "This command designates the interface as a switchport (rather than a trunk port) and assigns the interface to VLAN 100. Interfaces can be added on an individual basis, or as a group under interface-range configuration mode."
   },
   {
    "n": 86,
    "q": "Which type of IPv4 traffic is considered to be one-to-one communication?",
    "options": [
     "Multicast",
     "Broadcast",
     "Unicast",
     "Transit"
    ],
    "answer": "C",
    "why": "Unicast is the term used to describe communication where data is sent from one point to another point, with a single source and a single destination. This is the predominant form of data transmission on LANs and the public Internet."
   },
   {
    "n": 87,
    "q": "When converting the decimal number 241 to hexadecimal, which of the following represents the correct process and result?",
    "options": [
     "Convert to binary, divide into nibbles, convert nibbles to decimal, convert decimal to hex,",
     "Convert directly to binary, result is 0xE1",
     "Divide into nibbles, convert to binary, result is 0xF1",
     "Convert to binary, divide into nibbles, convert nibbles to decimal, convert decimal to hex,"
    ],
    "answer": "A",
    "why": "The process involves converting a decimal number to binary (11110001 for 241), dividing the binary number into nibbles (1111 and 0001), converting each nibble to its decimal value (15 and 1), and then converting each decimal value into its corresponding hexadecimal value (F and 1). Therefore, the correct hexadecimal representation of 241 is 0xF1. Recall that a hexadecimal value is prepended with \"0x\" to identify the value as a hexadecimal value."
   },
   {
    "n": 88,
    "q": "Which type of wireless LAN consists of clients sending and receiving radio waves directly between themselves?",
    "options": [
     "Infrastructure Wireless LAN",
     "Enterprise Wireless LAN",
     "Mesh Wireless LAN",
     "Ad Hoc Wireless LAN"
    ],
    "answer": "D",
    "why": "An Ad Hoc Wireless LAN is a de-centralized type of network which does not rely on devices such as wireless routers or access points. These networks are very limited, but still may be useful in certain cases. The Apple iOS AirDrop feature is a modern example of an Ad Hoc network, which creates a secure device-to-device connection for data transfer."
   }
  ]
 },
 {
  "id": 2,
  "name": "Practice Exam 2",
  "questions": [
   {
    "n": 1,
    "q": "Which WLAN design would you use if you need to extend wireless coverage to a remote location without direct Ethernet connectivity?",
    "options": [
     "Infrastructure WLAN",
     "Ad Hoc WLAN",
     "Mesh WLAN",
     "Peer-to-Peer WLAN"
    ],
    "answer": "C",
    "why": "A mesh WLAN design is ideal for extending wireless coverage to remote locations where direct Ethernet connectivity is not available. Mesh nodes (access points) can receive and regenerate wireless signals, allowing for broader coverage."
   },
   {
    "n": 2,
    "q": "You are setting up a router that connects to the Internet but want to avoid maintaining a full Internet routing table. Which of the following should you configure?",
    "options": [
     "Static route for each network",
     "MAC address filtering",
     "A default route",
     "Egress interface designation"
    ],
    "answer": "C",
    "why": "To avoid maintaining a full Internet routing table, you should configure a default route. This route (often listed as the \"0.0.0.0/0\" network) directs packets with unknown destinations out a specific interface (typically connected to the Internet) or to a specific next- hop IP address (typically the IP address of the Internet Service Provider's router)."
   },
   {
    "n": 3,
    "q": "If a company wants to enable communication between a computer in the sales department (VLAN 10) and a computer in the engineering department (VLAN 20), which of the following components is essential?",
    "options": [
     "A Layer 2 switch configured with VLANs 10 and 20",
     "A dedicated firewall between the two VLANs",
     "A router or a Layer 3 switch to route between VLANs",
     "A Cisco Express Forwarding (CEF) configuration"
    ],
    "answer": "C",
    "why": "To enable communication between VLANs, a router or a Layer 3 switch is required to route packets between the different subnets associated with each VLAN. While VLANs divide a network into different broadcast domains, a routing mechanism is necessary to allow inter- VLAN communication."
   },
   {
    "n": 4,
    "q": "Starting with which Wi-Fi standard can an access point both send and receive multiple spatial streams at the same time?",
    "options": [
     "Wi-Fi 4 (802.11n)",
     "Wi-Fi 5 (802.11ac)",
     "Wi-Fi 6 (802.11ax)",
     "Wi-Fi 7 (802.11be)"
    ],
    "answer": "C",
    "why": "Starting with Wi-Fi 6 (802.11ax), an access point can both send and receive multiple spatial streams at the same time. This advancement improves the overall capacity and performance of wireless networks."
   },
   {
    "n": 5,
    "q": "You are designing a network to include EtherChannel for higher bandwidth and redundancy. Which of the following is a benefit of utilizing EtherChannel in your network design?",
    "options": [
     "EtherChannel reduces the number of IP addresses needed for the links between switches.",
     "EtherChannel can aggregate up to eight links, providing increased bandwidth and redundancy",
     "EtherChannel allows for non-contiguous links to be logically bundled together, reducing",
     "EtherChannel eliminates the need for Spanning Tree Protocol, thereby simplifying network"
    ],
    "answer": "B",
    "why": "One of the primary benefits of EtherChannel is its ability to logically bundle up to eight links between switches. This aggregation increases overall bandwidth and provides redundancy, as the failure of a single link does not bring down the entire port channel. This capability enhances network performance and reliability without disabling Spanning Tree Protocol. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 6,
    "q": "In the process of OSPF verification, you examine the OSPF database on a router. What would you expect to find in the Summary Net Link States section of the OSPF database?",
    "options": [
     "Detailed topological information of all areas",
     "A list of OSPF neighbors and their states",
     "OSPF router IDs and their corresponding IP addresses",
     "A listing of networks in other areas"
    ],
    "answer": "D",
    "why": "The Summary Net Link States section of the OSPF database, contains a listing of networks in other areas. This section is constructed using Type 3 LSAs (Link-State Advertisements), which an ABR (Area Border Router) generates to inform routers in one area about networks located in other areas. This mechanism allows OSPF to efficiently advertise routing information across different OSPF areas."
   },
   {
    "n": 7,
    "q": "You need to configure a network device with an IP address within the subnet 10.2.4.0 /23. Which of the following IP addresses would be considered valid for a device within this subnet?",
    "options": [
     "10.2.4.255",
     "10.2.5.0",
     "10.2.5.254",
     "All of the above"
    ],
    "answer": "D",
    "why": "The subnet mask /23 or 255.255.254.0 allows for a range of IP addresses from 10.2.4.0 to 10.2.5.255. This includes the entire range of addresses within the 10.2.4.x and 10.2.5.x network ranges, making all the options listed valid IP addresses for devices within this subnet. The network address would be 10.2.4.0, and the broadcast address would be 10.2.5.255, with all addresses in between usable for host devices."
   },
   {
    "n": 8,
    "q": "What technology is represented by the IEEE 802.1s standard?",
    "options": [
     "PVST",
     "Rapid PVST+",
     "RSTP",
     "MSTP"
    ],
    "answer": "D",
    "why": "The Cisco implementation of 802.1s is referred to as Multiple Spanning Tree Protocol (MSTP). This maps multiple VLANs into the same spanning-tree instance, supporting up to 16 instances of Rapid Spanning Tree Protocol (RSTP)."
   },
   {
    "n": 9,
    "q": "Why is UDP considered an unreliable protocol compared to TCP?",
    "options": [
     "UDP does not establish a session before data transmission",
     "UDP has a larger header than TCP",
     "UDP uses dynamic or private ports for communication",
     "UDP traffic is always encrypted for security"
    ],
    "answer": "A",
    "why": "UDP is considered unreliable because it does not establish a session before data transmission. Unlike TCP, which uses a three-way handshake to set up a connection and ensures reliable delivery of data through acknowledgements, UDP follows a \"fire and forget\" approach. It sends data without establishing a connection or confirming receipt, making it less reliable but more suitable for applications where speed and low latency are more important than guaranteed delivery, such as voice over IP (VoIP) or streaming media."
   },
   {
    "n": 10,
    "q": "What purpose does the IPv6 solicited-node multicast address serve in the Duplicate Address Detection (DAD) process?",
    "options": [
     "It ensures that the IPv6 address is routable on the Internet.",
     "It allocates a unique MAC address to the IPv6 device.",
     "It identifies the router's IPv6 address on the network.",
     "It verifies that no other device on the network is using the same IPv6 address."
    ],
    "answer": "D",
    "why": "In the Duplicate Address Detection process, the IPv6 solicited-node multicast address is used to ensure that a self-assigned IPv6 address is unique and not already in use on a network. The device sends a multicast message to the solicited-node multicast address corresponding to its potential IPv6 address. If no response is received, the address is considered unique and safe to use. This process helps in preventing IP address conflicts within a network. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 11,
    "q": "Consider the following topology. How many Type 3 LSAs are present in router R3\u2019s Link State Database (LSDB)?",
    "options": [
     "1",
     "2",
     "3",
     "4"
    ],
    "answer": "B",
    "why": "A Type 3 Link State Advertisement (LSA) is known as a \u201cSummary LSA.\u201d By default, an Area Border Router (ABR), which is router R2 in this topology, sends a single Type 3 LSA into an area for each network it\u2019s advertising from another area. In this example, router R3 is in Area 1, and router R2, acting as the ABR, advertises two networks from Area 0 into Area 1. Specifically, it advertises networks 10.1.1.0 /24 and 172.16.1.0 /30. Router R2 send into Area 1 a separate Type 3 LSA for each of these two networks. Therefore, router R3 will have two Type 3 LSAs in it\u2019s Link State Database (LSDB), one for each network in Area 0."
   },
   {
    "n": 12,
    "q": "In Cisco\u2019s Collapsed Core architecture model, which two layers are combined?",
    "options": [
     "Access and Distribution",
     "Distribution and User",
     "Access and Core",
     "Core and Distribution"
    ],
    "answer": "D",
    "why": "For smaller topologies where less complexity is needed, this model collapses the Core and Distribution layers into a single layer. This creates a two-tier architecture with an Access layer and a Collapsed Core layer. The Collapsed Core layer performs the combined function of the Core and Distribution layers. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 13,
    "q": "Which SNMP version introduced significant security improvements such as encryption, integrity checking, and authentication?",
    "options": [
     "SNMPv1",
     "SNMPv2c",
     "SNMPv1c",
     "SNMPv3"
    ],
    "answer": "D",
    "why": "SNMPv3 introduced major security enhancements including encryption, integrity checking, and authentication, making it much more secure than its predecessors. SNMPv1 and SNMPv2c had weaker security mechanisms that relied on community strings."
   },
   {
    "n": 14,
    "q": "Which type of cabling issue can result in hearing part of a voice conversation from another circuit?",
    "options": [
     "Attenuation",
     "Crosstalk",
     "Jitter",
     "Latency"
    ],
    "answer": "B",
    "why": "Crosstalk occurs when a signal transmitted on copper medium radiates to a neighboring data channel, potentially interfere with and degrading communication. This is commonly seen in telecommunication signals, which can result in hearing part of a neighboring voice conversation from another circuit."
   },
   {
    "n": 15,
    "q": "Which Syslog severity level is the most severe?",
    "options": [
     "Level 0 - Emergencies",
     "Level 1 - Alerts",
     "Level 2 - Critical",
     "Level 3 - Errors"
    ],
    "answer": "A",
    "why": "Severity level 0, or Emergencies, is the most severe level in Syslog. It indicates a condition that affects the entire system and requires immediate attention. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 16,
    "q": "What is the directed broadcast address of a subnet containing an IP address of 172.16.1.10 /19?",
    "options": [
     "172.16.15.255",
     "172.16.31.255",
     "172.16.255.255",
     "172.16.95.255",
     "172.16.0.255"
    ],
    "answer": "B",
    "why": "To determine the subnets, assignable IP address ranges, and directed broadcast addresses created by the 19-bit subnet mask we perform the following steps: Step #1: Identify the interesting octet (i.e., the octet that contains the first zero in the binary subnet mask). In this question, we have a 19-bit subnet mask, which is written in binary as: 11111111 11111111 11100000 00000000 The interesting octet is the third octet, because the third octet (i.e., 11100000) is the first octet to contain a 0 in the binary. Step #2: Identify the decimal value in the interesting octet of the subnet mask. A 19-bit subnet mask can be written in dotted decimal notation as: 255.255.224.0 Since the third octet is the interesting octet, the decimal value in the interesting octet is 224. Step #3: Determine the block size by subtracting the decimal value of the interesting octet from 256. Block Size = 256 \u2013 224 = 32 Step #4: Determine the subnets by counting by the block size in the interesting octet, starting at 0. Placing a zero in the first interesting octet identifies the first subnet as: 172.16.0.0 /19 We then count by the block size (of 32) in the interesting octet (the third octet in this question) to determine the remaining subnets: 172.16.32.0 /19 172.16.64.0 /19 172.16.96.0 /19 172.16.128.0 /19 172.16.160.0 /19 \u00a9 2024 Kevin Wallace Training, LLC 172.16.192.0 /19 172.16.224.0 /19 Step #5: Identify the subnet address, the directed broadcast address, and the usable range of addresses. Looking through the subnets created by the 19-bit subnet mask reveals that the IP address of 172.16.1.10 resides in the 172.16.0.0 /19 subnet. The directed broadcast address, where all host bits are set to a 1, is 1 less than the next subnet address. The next subnet address is 172.16.32.0. So, the directed broadcast address for the 172.16.0.0 /19 subnet is 1 less than 172.16.32.0, which is: 172.16.31.255 The usable IP addresses are all the IP addresses between the subnet address and the directed broadcast address. Therefore, in this example, the assignable IP address range for the 172.16.0.0 /19 network is: 172.16.0.1 \u2013 172.16.31.254"
   },
   {
    "n": 17,
    "q": "When a client attempts to obtain network information through Dynamic Host Configuration Protocol (DHCP), which unicast message from the client requests network addressing information from the server?",
    "options": [
     "REQUEST",
     "DISCOVER",
     "OFFER",
     "ACKNOWLEDGEMENT"
    ],
    "answer": "A",
    "why": "After the OFFER message is sent from the server to the client, the client now knows the IP address of the DHCP server and is able to communicate directly through unicast. The REQUEST message requests that the DHCP server assign an IP address and other configuration values to the client."
   },
   {
    "n": 18,
    "q": "What is the primary advantage of using Infrastructure as Code (IaC) with tools like Terraform?",
    "options": [
     "It eliminates the need for network security.",
     "It automates the creation and management of a virtual infrastructure.",
     "It replaces the need for cloud service providers.",
     "It physically installs and configures network hardware."
    ],
    "answer": "B",
    "why": "The primary advantage of using Infrastructure as Code (IaC) with tools like Terraform is that it automates the creation and management of a virtual infrastructure. This approach allows administrators to define their infrastructure using code, which can then be version-controlled, replicated, and easily modified, leading to more consistent and efficient infrastructure management."
   },
   {
    "n": 19,
    "q": "With which category of routing protocol is the Dijkstra Algorithm used?",
    "options": [
     "Link-State",
     "Distance-Vector",
     "Path-Vector",
     "Route-Vector"
    ],
    "answer": "A",
    "why": "The Dijkstra Algorithm is used for finding the shortest path between nodes and is used in the Open Shortest Path First (OSPF) routing protocol. This falls under the category of link-state protocols, where every node constructs a map of the connectivity in the network."
   },
   {
    "n": 20,
    "q": "Which type of Wide Area Network (WAN) has built-in redundancy due to the ring topology used?",
    "options": [
     "Metropolitan Area Network (MAN)",
     "Multiprotocol Label Switching (MPLS)",
     "Virtual Private Network (VPN)",
     "Point-to-Multipoint"
    ],
    "answer": "A",
    "why": "Because a Metropolitan Area Network (MAN) is connected in a ring topology, a break in the network at any point would still allow a connection between any two points. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 21,
    "q": "With IPv6 multicast communication, how many bits are dedicated to the group ID?",
    "options": [
     "64",
     "112",
     "107",
     "86"
    ],
    "answer": "B",
    "why": "The final 112 bits in an IPv6 multicast address are reserved for the multicast group ID. This is the address that will be joined by devices desiring to receive a particular multicast stream."
   },
   {
    "n": 22,
    "q": "In the context of WPA2 wireless configuration, what does PSK stand for?",
    "options": [
     "Private Secure Key",
     "Public Shared Key",
     "Pre-Shared Key",
     "Protected Security Key"
    ],
    "answer": "C",
    "why": "PSK stands for Pre-Shared Key, which can be used in WPA2 wireless configurations for user authentication by pre-configuring a key on both an access point and a client device."
   },
   {
    "n": 23,
    "q": "In the context of Network Address Translation (NAT), what terminology is used to describe the original, unaltered IP address of a device located inside the network, before any translation has occurred?",
    "options": [
     "Inside Local",
     "Inside Global",
     "Outside Local",
     "Outside Global"
    ],
    "answer": "A",
    "why": "The term Inside Local refers to the original, unaltered IP address of a device on the inside of the network, as seen from the inside network itself. It is the private IP address assigned to a device, which is not routable on the public Internet. NAT modifies this address to an Inside Global address for communication over the Internet. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 24,
    "q": "Which type of cabling would be used if required to run through a raised floor or above drop-ceiling tiles?",
    "options": [
     "Unshielded Twisted-Pair",
     "Shielded Twisted-Pair",
     "Plenum-Rated",
     "RG-58/U"
    ],
    "answer": "C",
    "why": "Plenum-rated cable has a special insulation that has low smoke and low flame characteristics. This is mandated for any situation where cabling needs to be ran through an air handling space, such as below raised floors or inside drop-ceilings."
   },
   {
    "n": 25,
    "q": "Which fiber optic connector is known for its straight tip design and utilizes a bayonet-style attachment mechanism?",
    "options": [
     "ST connector",
     "LC connector",
     "SC connector",
     "MTRJ connector"
    ],
    "answer": "A",
    "why": "The ST connector, known for its straight tip design, uses a bayonet-style attachment mechanism. To connect it, you push and twist it into a fiber receptacle, and the tension in a spring holds the connector in place. This design makes it distinct from connectors like the LC, SC, and MTRJ, with the LC connector being smaller and having a tab for release, the SC connector being square-shaped, and the MTRJ connector incorporating two fibers into one connector for increased port density."
   },
   {
    "n": 26,
    "q": "A network administrator is implementing Cisco Catalyst Center in their enterprise network. Which of the following is NOT a primary feature offered by this SDN controller?",
    "options": [
     "Network design and provisioning",
     "Configuration monitoring and troubleshooting",
     "Custom application development platform",
     "Direct control of data center fabric switches"
    ],
    "answer": "D",
    "why": "Direct control of data center fabric switches is not a primary feature offered by Cisco Catalyst Center. Cisco Catalyst Center (formerly Cisco DNA Center) is designed primarily for enterprise campus and branch networks, not for data center environments. Its main features include network design, device provisioning, configuration management, monitoring, troubleshooting, and serving as a platform for custom application development through APIs. For data center fabric control, Cisco offers the APIC (Application Policy Infrastructure Controller) as part of its ACI (Application Centric Infrastructure) solution. Cisco Catalyst Center focuses on intent-based networking for enterprise environments rather than direct control of data center- specific technologies."
   },
   {
    "n": 27,
    "q": "Which QoS mechanism, by default, drops traffic that exceeds a configured bandwidth limit?",
    "options": [
     "Policing",
     "Shaping",
     "Queuing",
     "Link Efficiency"
    ],
    "answer": "A",
    "why": "The two primary Quality of Service (QoS) mechanisms that can limit the amount of bandwidth used are Policing and Shaping. These are known as \"traffic conditioners.\" Policing is more strict than Shaping and, by default, drops traffic exceeding a configured bandwidth limit (the Committed Information Rate (CIR)). Shaping, however, delays excess traffic rather than dropping it."
   },
   {
    "n": 28,
    "q": "Which type of network connection is used in a switched network where devices are able to communicate in full-duplex mode with one another?",
    "options": [
     "Ethernet Bus",
     "Shared Media Hub",
     "Direct Connect",
     "Point-to-Point"
    ],
    "answer": "D",
    "why": "Ethernet switches are connected in a star topology, using a point-to-point connection to each device. Each of the connected devices are able to communicate in full- duplex, meaning they can transmit and receive data simultaneously. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 29,
    "q": "Which of the following statements is true about the order of rules in an ACL?",
    "options": [
     "The rules can be in any order, because the router processes all rules simultaneously.",
     "The more specific rules should be placed at the bottom of the list.",
     "The order of rules is not important as there is no implicit deny at the end of the ACL.",
     "The more specific rules should be placed at the top of the list to ensure they are evaluated"
    ],
    "answer": "D",
    "why": "ACLs are processed in a top-down order, meaning that the first matching rule will be applied. Therefore, more specific rules should be placed at the top to ensure they are evaluated before any broader rules that might permit or deny traffic prematurely."
   },
   {
    "n": 30,
    "q": "Which of the following represents the first two hexadecimal values of every IPv6 multicast address?",
    "options": [
     "FE",
     "F0",
     "0E",
     "FF"
    ],
    "answer": "D",
    "why": "The first 8 bits in every IPv6 multicast address are set to the all 1s value of 1111 1111. This converts to the hexadecimal value FF, which is how every IPv6 multicast address begins."
   },
   {
    "n": 31,
    "q": "Your network needs to support several link speeds. To support multiple link speeds greater than 1 Gbps, you consider using STP's Long Path Cost method to determine port cost. Under the Short Path Cost method, what is the port cost assigned to a 1 Gbps link?",
    "options": [
     "2",
     "4",
     "19",
     "100"
    ],
    "answer": "B",
    "why": "In the traditional Spanning Tree port cost method (i.e., Short Path Cost method), each port speed has a predefined cost, with a 1 Gbps port assigned a cost of 4. This method allows STP to determine the most efficient path to the root bridge by comparing the cumulative port costs required to reach the root bridge."
   },
   {
    "n": 32,
    "q": "A customer is using a Class C network of 192.168.10.0 subnetted with a 28-bit subnet mask. How many subnets can be created by using this subnet mask?",
    "options": [
     "32",
     "16",
     "30",
     "8",
     "14"
    ],
    "answer": "B",
    "why": "The subnet in this question is a Class C network, because there is a 192 in the first octet. A class C network has a natural mask of 24 bits. However, this network has a 28-bit subnet mask. Therefore, we have 4 borrowed bits, which are network bits added to a network\u2019s natural mask (i.e., 2^8 \u2013 24 = 4). The number of subnets can be calculated as follows: Number of Subnets = 2^s, where s is the number of borrowed bits. Therefore, in this question, the number of created subnets is 16: Number of Subnets = 2^4 = 16"
   },
   {
    "n": 33,
    "q": "Which Port Security violation mode will disable a port completely when a violation occurs?",
    "options": [
     "Protect",
     "Restrict",
     "Shutdown",
     "Monitor"
    ],
    "answer": "C",
    "why": "The \"Shutdown\" mode of Port Security will put a port into an error-disabled state when a security violation occurs, preventing any traffic from passing through the port until the port is either manually or automatically re-enabled. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 34,
    "q": "Which type of IPv6 address can be thought of as being similar to the IPv4 APIPA address range 169.254.0.0 /16?",
    "options": [
     "Global Unicast",
     "Loopback",
     "Multicast",
     "Link Local"
    ],
    "answer": "D",
    "why": "The link local address can only be used on the local network segment, similar to the IPv4 APIPA address range. With IPv4, an APIPA typically indicates an issue with interface communication, but this is not true with IPv6 link-local addresses. They are used by routing protocols for neighborship formation, self-assignment of IPv6 addresses, and more. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 35,
    "q": "Consider the following topology and ACL configuration. Which of the following configurations will prevent PC_A (198.51.100.100) from reaching the Internet, while permitting PC_B (198.51.100.200) to reach the Internet?",
    "options": [
     "R1(config)# access-list 50 permit any",
     "R1(config)# access-list 50 deny host 198.51.100.100",
     "R1(config)# access-list 150 deny host 198.51.100.100",
     "R1(config)# access-list 50 deny host 198.51.100.100"
    ],
    "answer": "B",
    "why": "In this example, a Standard ACL is being used, because we\u2019re not concerned about a specific destination or a port number. Option A is incorrect, because the first Access Control Entry (ACE) will permit both PCs, before the second ACE has an opportunity to deny PC_A. Option B is correct, because it blocks PC_A before permitting all other IP addresses. Also, the ACL is applied outbound on R1\u2019s Gig 0/2 interface. This follows the best practice of placing Standard ACLs as close to the destination as possible. Option C is incorrect, because the ACL number is 150, which is used for an Extended ACL, not a Standard ACL. Option D is incorrect, because the ACL is applied inbound on R1\u2019s Gig 0/2 interface, rather than outbound (i.e., going out to the Internet)."
   },
   {
    "n": 36,
    "q": "Which type of wireless access point (AP) is more common in large enterprise networks?",
    "options": [
     "Autonomous",
     "Standalone",
     "Master",
     "Lightweight"
    ],
    "answer": "D",
    "why": "Lightweight access points (APs) are controlled by a wireless LAN controller, which can coordinate frequencies and signal strengths between all of the managed devices from a central location."
   },
   {
    "n": 37,
    "q": "You are diagnosing network issues in a newly set up office network and notice a device with an IP address of 169.254.1.5. Understanding the nature of this IP address, what issue is most likely present?",
    "options": [
     "The device could not obtain an IP address from a DHCP server and assigned itself an IP",
     "The device is configured with a static IP address intended for public Internet use.",
     "The device has successfully obtained an IP address from a DHCP server.",
     "The device is using a private IP address, which is causing conflicts within the network."
    ],
    "answer": "A",
    "why": "The IP address 169.254.1.5 falls within the 169.254.0.0/16 range, which is known as the Automatic Private IP Addressing (APIPA) range. Devices with IP addresses in this rage have assigned themselves an IP address when they failed to obtain an IP address from a DHCP server. This is a common issue when a device is connected to a network but cannot communicate with a DHCP server, indicating a potential DHCP configuration or connectivity problem."
   },
   {
    "n": 38,
    "q": "Which command allows us to see which IP addresses have been assigned to the interfaces?",
    "options": [
     "R1(config)#show interface brief",
     "R1#show interface assignments",
     "R1(config)#show ip statistics",
     "R1#show ip interface brief"
    ],
    "answer": "D",
    "why": "From Privileged EXEC mode, the command show ip interface brief will show IP assignments for all of the interfaces, along with the up/down status of the port."
   },
   {
    "n": 39,
    "q": "With an IPv6 global unicast address, what is represented by the last 64 bits of the address?",
    "options": [
     "Global Routing Prefix",
     "Subnet ID",
     "Interface ID",
     "Link Local ID"
    ],
    "answer": "C",
    "why": "All global unicast addresses have a 64-bit interface ID, used to identify interfaces on a link. These are typically composed of a portion of the interface MAC address."
   },
   {
    "n": 40,
    "q": "In the context of emergency services, how can CDP be utilized to assist in identifying a caller's location?",
    "options": [
     "By encrypting voice packets to secure data transmission",
     "By assigning a unique identifier to each device",
     "By learning an IP phone's approximate location based on the location of the switch to which",
     "By increasing the bandwidth for emergency calls"
    ],
    "answer": "C",
    "why": "CDP can be used to help identify the location of a caller in emergency situations by communicating the phone's location based on the location of the switch to which the IP phone is connected. This feature is particularly useful for calls to emergency services, where the physical location of the caller can be crucial for a timely response."
   },
   {
    "n": 41,
    "q": "Which fiber optic connector carries two strands of fiber?",
    "options": [
     "MT-RJ",
     "ST",
     "LC",
     "SC"
    ],
    "answer": "A",
    "why": "MT-RJ connectors carry two strands of fiber, which allows for a higher port density by having transmit and receive strands in the same connector."
   },
   {
    "n": 42,
    "q": "When examining a Cisco router's routing table, you notice routes with different codes such as 'C', 'L', 'D', and 'O'. If your primary concern is identifying the next-hop for a packet destined for an internal network that your router learned via dynamic routing, which code should you look for?",
    "options": [
     "C",
     "L",
     "S",
     "O"
    ],
    "answer": "D",
    "why": "In Cisco routing tables, different codes are used to identify the source of the route information. 'C' indicates a directly connected network, 'L' represents local routes (local IP addresses of the router's interfaces), 'S' is used for statically configured routes, and 'O' identifies routes learned via OSPF (Open Shortest Path First). If the primary concern is identifying the next- hop for a packet learned via dynamic routing for an internal network, 'O' would be the correct option of those listed. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 43,
    "q": "Which protocol is considered more secure due to its two-way challenge-response mechanism and full packet encryption?",
    "options": [
     "RADIUS",
     "TACACS+",
     "LDAP",
     "AD"
    ],
    "answer": "B",
    "why": "TACACS+ is considered more secure than RADIUS because it uses a two-way challenge-response mechanism and encrypts the entire packet during transmission, whereas RADIUS only encrypts the password."
   },
   {
    "n": 44,
    "q": "When examining the structure of an IPv6 link local address, which of the following is true?",
    "options": [
     "The first 48 bits are used to specify the network prefix.",
     "The first 10 bits are fixed, followed by 54 bits set to zero and the last 64 bits forming the",
     "The entire address is dynamically generated without any fixed portion.",
     "It includes a global routing prefix to ensure it is routable across the Internet."
    ],
    "answer": "B",
    "why": "An IPv6 link local address begins with FE80::/10, followed by 54 zeros. Therefore, since the last 2 bits in the third hexadecimal digit and all 4 bits in the fourth hexadecimal digit are zeros, we can conclude that all IPv6 link local addresses begin with FE80 in the first quartet. The last half of a link local address (i.e., the last 64 bits) represent the interface ID and are often calculated using the EUI-64 addressing process."
   },
   {
    "n": 45,
    "q": "Which OSPF metric is used to determine Designated Router (DR) election?",
    "options": [
     "Lowest Router ID",
     "Highest Router ID",
     "Lowest OSPF Priority",
     "Highest OSPF Priority"
    ],
    "answer": "D",
    "why": "The router with the highest OSPF priority will win the election and become the Designated Router (DR). If there is a tie in the priority values, the router with the highest router ID will win the DR election."
   },
   {
    "n": 46,
    "q": "For a data center requiring a fiber optic connection that supports 10 Gbps over a maximum distance of 300 meters, which Ethernet standard and fiber type should be used?",
    "options": [
     "10GBASE-SR with multimode fiber (50 micrometers core)",
     "10GBASE-LR with single mode fiber",
     "10GBASE-SR with multimode fiber (62.5 micrometers core)",
     "10GBASE-LX with single mode fiber"
    ],
    "answer": "A",
    "why": "10GBASE-SR with multimode fiber (50 micrometers core) is the best choice for a data center requiring 10 Gbps connectivity over a distance of 300 meters. This standard is designed for short-range applications and, when used with higher-grade multimode fiber with a core diameter of 50 micrometers, can support distances up to 400 meters. 10GBASE-LR is designed for long-range applications using single mode fiber and supports distances much greater than 300 meters. 10GBASE-SR with a 62.5 micrometers core and 10GBASE-LX are not as well-suited for this specific requirement."
   },
   {
    "n": 47,
    "q": "As a network administrator, you want to selectively prevent the transmission of a device's system name in LLDP advertisements to enhance privacy. Which command accomplishes this at the global configuration level?",
    "options": [
     "no lldp run",
     "no lldp tlv-select system-name",
     "lldp tlv-select system-name",
     "no lldp tlv-select all"
    ],
    "answer": "B",
    "why": "The `no lldp tlv-select system-name` command at the global configuration level specifically blocks a system name from being included in LLDP advertisements, enhancing privacy by not disclosing the device's identity. This selective approach allows other LLDP information to continue being transmitted, providing flexibility in controlling the scope of shared network information. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 48,
    "q": "Which prerequisite must be enabled on a switch before configuring Dynamic ARP Inspection (DAI)?",
    "options": [
     "Port Security",
     "DHCP Snooping",
     "VLAN Trunking",
     "Spanning Tree Protocol"
    ],
    "answer": "B",
    "why": "DHCP Snooping must be enabled before configuring Dynamic ARP Inspection (DAI), as DAI uses the DHCP Snooping binding table to validate ARP messages."
   },
   {
    "n": 49,
    "q": "Given a subnet of 172.16.56.0 /21, identify which of the following IP addresses belong to this subnet. (Select 2.)",
    "options": [
     "172.16.54.129",
     "172.16.62.255",
     "172.16.61.0",
     "172.16.65.255",
     "172.16.64.1"
    ],
    "answer": "B",
    "why": "To determine subnets and usable address ranges created by the 21-bit subnet mask we perform the following steps: Step #1: Identify the interesting octet (i.e., the octet that contains the first zero in the binary subnet mask). In this question, we have a 21-bit subnet mask, which is written in binary as: 11111111 11111111 11111000 00000000 The interesting octet is the third octet, because the third octet (i.e., 11111000) is the first octet to contain a 0 in the binary subnet mask. Step #2: Identify the decimal value in the interesting octet of the subnet mask. A 21-bit subnet mask can be written in dotted decimal notation as: 255.255.248.0 Since the third octet is the interesting octet, the decimal value in the interesting octet is 248. Step #3: Determine the block size by subtracting the decimal value of the interesting octet from 256. Block Size = 256 \u2013 248 = 8 \u00a9 2024 Kevin Wallace Training, LLC Step #4: Determine the subnets by counting by the block size in the interesting octet, starting at 0. Placing a zero in the first interesting octet identifies the first subnet as: 172.16.0.0 /21 We then count by the block size (of 8) in the interesting octet (the third octet in this question) to determine the remaining subnets: 172.16.8.0 /21 172.16.16.0 /21 172.16.24.0 /21 172.16.32.0 /21 172.16.40.0 /21 172.16.48.0 /21 172.16.56.0 /21 172.16.64.0 /21 ... SUBNETS OMITTED ... We can stop counting after we pass the subnet we are being asked about. Specifically, in this question, we\u2019re being asked about 172.16.56.0 /21. Step #5: Identify the subnet address, the directed broadcast address, and the usable range of addresses. The subnet address, where all host bits are set to a 0, is given: 172.16.56.0 /24 The directed broadcast address, where all host bits are set to a 1, is 1 less than the next subnet address. The next subnet address is 172.16.64.0. So, the directed broadcast address for the 172.16.54.0 /21 subnet is 1 less than 172.16.64.0, which is: 172.16.63.255 The usable IP addresses are all the IP addresses between the subnet address and the directed broadcast address. Therefore, in this example, the usable IP address range for the 172.16.56.0 /21 network is: 172.16.56.1 \u2013 172.16.63.254 The only IP addresses in this question that reside in this range are: 172.16.62.255 172.16.61.0 NOTE: Many CCNA candidates look at IP addresses like these and immediately assume they are not usable IP addresses, because they have a 0 or a 255 in the fourth octet. They argue that 172.16.61.0 is a subnet address and that 172.16.62.255 is a directed broadcast address. While that would only be true of the subnet mask were 24-bits, remember that, by definition, a subnet address has all of its host bits set to a 0, and a directed broadcast address has all of its host bits set to a 1. In this question, we have 11 host bits (i.e., 32 \u2013 21 = 11), not 8 host bits. So, 172.16.62.255 and 172.16.61.0 are actually usable IP addresses. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 50,
    "q": "Which of the following DNS record types is used to translate a Fully Qualified Domain Name (FQDN) into an IPv4 address?",
    "options": [
     "A record",
     "CNAME record",
     "MX record",
     "PTR record"
    ],
    "answer": "A",
    "why": "An Address (A) record is used by a DNS server to map a fully qualified domain name (FQDN) to its corresponding IPv4 address, allowing devices on the Internet to locate each other and communicate. CNAME records are used for aliases to other domain names. MX records are used for mail exchange servers. PTR records are used for reverse DNS lookups, mapping IP addresses back to their domain names."
   },
   {
    "n": 51,
    "q": "Which part of the fiber optic cable is used to reflect light along the data path?",
    "options": [
     "Dopant",
     "Jacket",
     "Cladding",
     "Core"
    ],
    "answer": "C",
    "why": "The cladding layer surrounds the core and helps guide the light along the path of the core. The cladding can be made of plastic or glass and is less transparent than the core. The difference in the refraction index of the core and cladding is what causes a mirror-like surface, which helps propagate the light through the cable."
   },
   {
    "n": 52,
    "q": "A network administrator needs to ensure that a newly installed PoE switch can provide adequate power for several devices, including VoIP phones and surveillance cameras. The devices require up to 15.4 watts each to operate. Which IEEE standard for PoE should the administrator ensure the switch supports to meet this requirement?",
    "options": [
     "IEEE 802.3at",
     "IEEE 802.3af",
     "IEEE 802.3bt",
     "IEEE 802.3ab"
    ],
    "answer": "B",
    "why": "The IEEE 802.3af standard for Power over Ethernet (PoE) supports delivery of up to 15.4 watts of power per port, which matches the requirement for the devices mentioned. The 802.3at and 802.3bt standards support higher power levels, while the 802.3ab standard pertains to Gigabit Ethernet over twisted pair, not PoE."
   },
   {
    "n": 53,
    "q": "What is the purpose of configuring the `transport input ssh` command on VTY lines?",
    "options": [
     "To disable Telnet access and allow only SSH connections",
     "To enable password encryption",
     "To set up SNMP monitoring",
     "To assign IP addresses to VTY lines"
    ],
    "answer": "A",
    "why": "The `transport input ssh` command on VTY lines disables Telnet access and allows only SSH connections, ensuring that remote access to the router is secure and encrypted."
   },
   {
    "n": 54,
    "q": "Which routing protocol has a default administrative distance (AD) value of 90?",
    "options": [
     "EIGRP",
     "RIP",
     "OSPF",
     "BGP"
    ],
    "answer": "A",
    "why": "Enhanced Interior Gateway Routing Protocol (EIGRP) has a default AD value of 90. This would be preferred by default over Open Shortest Path First (OSPF), which has a higher AD value of 110."
   },
   {
    "n": 55,
    "q": "Which value makes up the last 24 bits of an IPv6 solicited-node multicast address?",
    "options": [
     "Destination IPv6 address",
     "Source IPv6 Address",
     "Link Local IPv6 Address",
     "Global Unicast Address"
    ],
    "answer": "A",
    "why": "The first 104 bits in an IPv6 solicited-node multicast are set to the hexadecimal value FF02::1:FF. The remaining bits come from the last 24 bits of the IPv6 address to which this multicast address is destined for. For example, if a solicited-node multicast message is destined for a router at 3000::2, the complete solicited-node multicast address would be FF02::1:FF00:2."
   },
   {
    "n": 56,
    "q": "A network architect is implementing a Software Defined Networking (SDN). Which of the following best describes the relationship between the underlay and overlay networks in this context?",
    "options": [
     "The underlay network is virtual, while the overlay network is physical",
     "The underlay network is physical, while the overlay network is logical",
     "The underlay and overlay networks are both physical",
     "The underlay and overlay networks are both virtual"
    ],
    "answer": "B",
    "why": "In the context of SDN, an underlay network represents the physical infrastructure, including the actual switches, routers, and physical connections. An overlay network, on the other hand, is a logical network created on top of the physical underlay. This overlay network is defined in software and can contain virtual topologies that might not directly correspond to the network's physical interconnections. This allows for greater flexibility in network design and segmentation, enabling features like VXLANs (in a data center environment) to create logical network segments that span across a physical infrastructure."
   },
   {
    "n": 57,
    "q": "Which routing protocol has a default administrative distance (AD) value of 110?",
    "options": [
     "EIGRP",
     "RIP",
     "OSPF",
     "BGP"
    ],
    "answer": "C",
    "why": "Open Shortest Path First (OSPF) has a default AD value of 110. By default, Enhanced Interior Gateway Routing Protocol (EIGRP) would be preferred over OSPF since it has a lower AD value of 90. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 58,
    "q": "Considering IPv6 does not support the traditional broadcast traffic flow, which IPv6 traffic type effectively replaces the functionality provided by broadcasting?",
    "options": [
     "Multicast",
     "Unicast",
     "Anycast",
     "None of the above"
    ],
    "answer": "A",
    "why": "In IPv6, the absence of a broadcast traffic type is mitigated by the enhanced functionality of Multicast. Multicast allows for one-to-many communication, where a single packet can be sent to multiple destinations (members of a multicast group) efficiently. This serves the purposes previously fulfilled by broadcasting in IPv4, such as discovering devices or services on the network, but in a more controlled and efficient manner."
   },
   {
    "n": 59,
    "q": "In a GLBP configuration, how does the Active Virtual Gateway (AVG) ensure that the traffic load is distributed among different routers in a GLBP group?",
    "options": [
     "By responding to each ARP request with the same MAC address",
     "By responding to each ARP request with the one of multiple MAC addresses",
     "By only responding to the first ARP request",
     "By redirecting all traffic to the MAC address of the router with the least load"
    ],
    "answer": "B",
    "why": "In GLBP (Gateway Load Balancing Protocol), the Active Virtual Gateway (AVG) responds to ARP requests from different devices with one of multiple (as many as 4) MAC addresses. These multiple MAC addresses belong to the different Active Virtual Forwarders (AVFs) within a GLBP group, which can contain a maximum of 4 AVFs."
   },
   {
    "n": 60,
    "q": "You are tasked with securing a server. Which of the following would you address as a vulnerability?",
    "options": [
     "A brute force attack tool found on the network",
     "An unpatched software flaw in the operating system",
     "An email attempting to trick users into disclosing passwords",
     "A denial of service attack targeting the server"
    ],
    "answer": "B",
    "why": "A vulnerability is a weakness or flaw within a system that can be exploited. An unpatched software flaw in the operating system represents such a vulnerability that needs to be addressed to prevent exploitation."
   },
   {
    "n": 61,
    "q": "What is the default OSPF network type for serial interfaces not configured for Frame Relay?",
    "options": [
     "Broadcast",
     "Point-to-point",
     "Non-broadcast",
     "Point-to-multipoint"
    ],
    "answer": "B",
    "why": "Serial interfaces not configured for Frame Relay use the point-to-point OSPF network type by default. This network type assumes that there are only two routers on the network segment, which eliminates the need for electing a Designated Router (DR) and Backup Designated Router (BDR)."
   },
   {
    "n": 62,
    "q": "What is the final step in a Transmission Control Protocol (TCP) 3-way handshake?",
    "options": [
     "SYN/ACK",
     "ARP",
     "ACK",
     "SYN"
    ],
    "answer": "C",
    "why": "The first step is when a client sends a SYN (synchronization) message to another client or server as a request to begin the 3-way handshake process. The other end will respond with a SYN-ACK (synchronization and acknowledgement) message if the SYN is accepted. The final message is an ACK (acknowledgement) message sent from the original client, which completes the establishment of the TCP session. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 63,
    "q": "You have been tasked with influencing the DR and BDR election process in an OSPF network. Which command can you use to set the priority value for a router's interface?",
    "options": [
     "ospf priority [value]",
     "ip ospf dr-priority [value]",
     "ospf dr-priority [value]",
     "ip ospf priority [value]"
    ],
    "answer": "D",
    "why": "To influence the DR (Designated Router) and BDR (Backup Designated Router) election process, you can set the priority value for a router's interface using the `ip ospf priority [value]` command in interface configuration mode. The router with the highest priority value will be elected as the DR, and the router with the second-highest priority will become the BDR. If you want to prevent a router interface from participating in the election process, you can set its priority value to 0."
   },
   {
    "n": 64,
    "q": "Which of the following access control entries would correctly deny all IP traffic from a host with the IP address 172.16.5.10?",
    "options": [
     "access-list 20 deny 172.16.5.10",
     "access-list 20 deny host 172.16.5.10 0.0.0.0",
     "access-list 20 deny 172.16.5.10 0.0.0.255",
     "access-list 20 deny host 172.16.5.10"
    ],
    "answer": "D",
    "why": "To deny all IP traffic from a specific host in a numbered standard ACL, you should use the `host` keyword followed by the host's IP address. Therefore, the correct ACE is `access- list 20 deny host 172.16.5.10`. This syntax specifies the host to be denied."
   },
   {
    "n": 65,
    "q": "What is the subnet address of the IP address 192.168.5.55 with a subnet mask of 255.255.255.224?",
    "options": [
     "192.168.5.0 /27",
     "192.168.5.16 /27",
     "192.168.5.32 /27",
     "192.168.5.48 /27",
     "192.168.5.64 /27"
    ],
    "answer": "C",
    "why": "To determine subnets and usable address ranges created by the 27-bit subnet mask we perform the following steps: Step #1: Identify the interesting octet (i.e., the octet that contains the first zero in the binary subnet mask). In this question, we have a 27-bit subnet mask, which is written in binary as: 11111111 11111111 11111111 11100000 The interesting octet is the fourth octet, because the fourth octet (i.e., 11100000) is the first octet to contain a 0 in the binary. Step #2: Identify the decimal value in the interesting octet of the subnet mask. A 27-bit subnet mask can be written in dotted decimal notation as: 255.255.255.224 Since the fourth octet is the interesting octet, the decimal value in the interesting octet is 224. Step #3: Determine the block size by subtracting the decimal value of the interesting octet from 256. Block Size = 256 \u2013 224 = 32 Step #4: Determine the subnets by counting by the block size in the interesting octet, starting at 0. Placing a zero in the first interesting octet identifies the first subnet as: 192.168.5.0 /27 We then count by the block size (of 32) in the interesting octet (the fourth octet in this question) to determine the remaining subnets: 192.168.5.32 /27 192.168.5.64 /27 192.168.5.96 /27 192.168.5.128 /27 192.168.5.160 /27 192.168.5.192 /27 192.168.5.224 /27 Now that we have all of our subnets identified, we can determine the subnet in which the IP address of 192.168.5.55 resides. Since the usable range of IP addresses for the 192.168.5.32 /27 network is 192.168.5.33 \u2013 192.168.5.62 (because 192.168.5.32 is the network address, and 192.168.5.63 is the directed broadcast address), and since 192.168.5.55 is in that range, the subnet to which 192.168.5.55 /27 belongs is: 192.168.5.32 /27 \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 66,
    "q": "When IPv6 is enabled on an interface, which type of address is automatically assigned?",
    "options": [
     "Global Unicast",
     "Loopback",
     "Multicast",
     "Link Local"
    ],
    "answer": "D",
    "why": "A link-local address is valid only on the local network segment. When enabling IPv6 on an interface a link-local address is automatically assigned, but this can also be manually configured."
   },
   {
    "n": 67,
    "q": "Which IPv6 address is the equivalent of the IPv4 address 127.0.0.1?",
    "options": [
     "::0",
     "127:0:0:1",
     "::1",
     "::127"
    ],
    "answer": "C",
    "why": "This address is the specific IPv6 loopback address. The loopback interface has no hardware associated with it, and it is not physically connected to a network. It is primarily used for testing and troubleshooting."
   },
   {
    "n": 68,
    "q": "You are reviewing an IPv6 address that has several quartets with leading zeros (but not all zeros). What rule applies to the abbreviation of these quartets in the address?",
    "options": [
     "You must keep all leading zeros for clarity",
     "You should replace leading zeros with a single zero",
     "You can omit leading zeros only if they are followed by another zero",
     "You can omit all leading zeros in each quartet"
    ],
    "answer": "D",
    "why": "You are allowed to omit all leading zeros in each quartet, simplifying the address and making it shorter and more readable. This technique can be used for any quartet within an IPv6 address, regardless of its position or the hexadecimal digits that follow the leading zeros. \u00a9 2024 Kevin Wallace Training, LLC However, if you're working with one or more consecutive quartets containing all zeros (as opposed to just having leading zeros), you can replace the entire quartet(s) with two colons."
   },
   {
    "n": 69,
    "q": "What is a common use case for TFTP in a network environment?",
    "options": [
     "Securely transferring sensitive files between servers",
     "Downloading configuration files to network devices during bootup",
     "Enabling encrypted remote management",
     "Monitoring network traffic"
    ],
    "answer": "B",
    "why": "A common use case for TFTP is downloading configuration files to network devices, such as IP phones, during bootup. This allows devices to quickly obtain necessary configurations without user intervention."
   },
   {
    "n": 70,
    "q": "What multicast address is used by Open Shortest Path First to advertise Hello messages?",
    "options": [
     "223.0.2.0",
     "224.0.0.5",
     "232.0.0.1",
     "225.0.0.0"
    ],
    "answer": "B",
    "why": "An OSPF-enabled router advertises Hello messages to the multicast address of 224.0.0.5 (or FF02::5 for IPv6), which is a group to which all OSPF-speaking routers belong. 224.0.0.6 (or FF02::6 for IPv6) is a group to which all OSPF DR and BDR routers belong."
   },
   {
    "n": 71,
    "q": "Given the MAC address 0014.2201.2345, which of the following will be the IPv6 link local address?",
    "options": [
     "fe80::14:22:01:2345",
     "fe80:0014:22ff:fe01:2345",
     "fe8::214:22ff:fe1:2345",
     "fe80::214:22ff:fe01:2345"
    ],
    "answer": "D",
    "why": "Splitting the MAC address in the middle creates the values 0014.22 and 01.2345. Next, we insert the value FF.FE in the middle of the MAC address and change the delimiter from a decimal to a colon, giving us the value 0014:22FF:FE01:2345. We then convert the first 8 bits to binary and invert the 7th bit. Each hexadecimal value represents 4 bits, so we convert the first two hexadecimal values (00), which becomes 0000 0000. Inverting the 7th bit creates the binary value 0000 0010. We now convert back to hexadecimal, which changes the first two hexadecimal digits from 00 to 02, for the value 0214:22FF:FE01:2345. Finally, we know that all link local addresses begin with the value FE80, so we insert this value at the beginning of the address. Remembering our rules for abbreviating an IPv6 address, we can drop the leading zero on the first quartet (0214 becomes 214), creating the link local address."
   },
   {
    "n": 72,
    "q": "Which Spanning Tree Protocol (STP) port state is used to populate the CAM table during convergence after a failure?",
    "options": [
     "Listening",
     "Learning",
     "Blocking",
     "Forwarding"
    ],
    "answer": "B",
    "why": "After the Blocking and Listening states, the Learning state ensures that the CAM table is populated with MAC addresses of attached clients and their corresponding switch ports. This state lasts for 15 seconds before transitioning the final operational state of Forwarding."
   },
   {
    "n": 73,
    "q": "Which command configures a switch to takeover in the event that the primary root fails on VLAN 1?",
    "options": [
     "SW2(config)#spanning-tree vlan 1 backup root",
     "SW2(config)#spanning-tree vlan 1 secondary root",
     "SW2(config)#spanning-tree vlan 1 root standby",
     "SW2(config)#spanning-tree vlan 1 root secondary"
    ],
    "answer": "D",
    "why": "This command configures switch SW2 to takeover in the event that the primary root on VLAN 1 fails. Specifically, this command sets the Bridge Priority of a switch to 28672. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 74,
    "q": "Why is it recommended to place a standard ACL as close to the destination as possible?",
    "options": [
     "To reduce the processing load on the route",
     "To prevent premature packet dropping",
     "To ensure the ACL can be modified easily",
     "To improve the performance of the network"
    ],
    "answer": "B",
    "why": "Standard ACLs only filter based on source IP addresses. If they are placed too close to the source, they might inadvertently block traffic that should be allowed to pass to other parts of the network. Placing them close to the destination minimizes the risk of prematurely dropping packets that need to traverse the network."
   },
   {
    "n": 75,
    "q": "Which protocol is typically used to communicate between a wireless LAN controller and lightweight access points?",
    "options": [
     "CAPWAP",
     "WPA3",
     "SNMP",
     "FTP"
    ],
    "answer": "A",
    "why": "CAPWAP (Control and Provisioning of Wireless Access Points) is a protocol commonly used to manage and control lightweight access points from a centralized wireless LAN controller. It allows for efficient configuration and management of multiple access points, reducing the risk of errors and administrative overhead."
   },
   {
    "n": 76,
    "q": "In an Ethernet switch, how does the switch learn where to forward frames for efficient communication?",
    "options": [
     "By using IP address tables",
     "By learning MAC addresses from incoming frames",
     "Through pre-configured static routes",
     "Via periodic broadcast messages"
    ],
    "answer": "B",
    "why": "An Ethernet switch learns where to forward frames by building a MAC address table. It does this by observing the source MAC addresses of incoming frames and associating them with the corresponding switch ports. This process allows the switch to intelligently forward subsequent frames to their correct destinations without unnecessary flooding."
   },
   {
    "n": 77,
    "q": "Given the IPv6 address 2bcc:0a1e:fb9c:0d4c:0000:0000:07a0:76cd, which abbreviation below is a correct representation?",
    "options": [
     "2bcc:a1e:fb9c:d4c::7a0:76cd",
     "2bcc:0a1e:fb9c:0d4c::07a0:76cd",
     "2bcc:a1e:fb9c:d4c::7a:76cd",
     "2bcc:a1e:fb9c:d4c:0:7a0:76cd"
    ],
    "answer": "A",
    "why": "The rules for abbreviating an IPv6 address are as follows: (1) Leading zeros in a quartet can be omitted. (2) Consecutive quartets containing all zeros can be represented with a double colon. (3) Only one double colon can be used per address. Given these rules, the leading zeros can be removed from the 2nd (0a1e), 4th (0d4c) and 7th (07a0) quartets. The 5th and 6th quartets consecutively contain all zeros, which can be replaced with a double colon."
   },
   {
    "n": 78,
    "q": "In the context of SVIs on a Layer 3 switch, what determines whether the virtual interface for a VLAN is up and able to route traffic?",
    "options": [
     "The physical interface connected to the switch's management port must be up.",
     "There must be at least one active port in the VLAN associated with the SVI.",
     "A routing protocol needs to be configured and operational on the switch.",
     "The SVI must be manually enabled by an administrator each time the switch restarts."
    ],
    "answer": "B",
    "why": "An SVI's operational status is contingent upon the existence of at least one active port in the VLAN associated with it. If no ports in the VLAN are up, the SVI is considered down and cannot route traffic. This design ensures that routing decisions are made only for VLANs with active, connected devices. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 79,
    "q": "As a network architect, you are designing a virtualized network infrastructure. How can you connect virtual network interface cards (vNICs) of different virtual machines in order to organize network traffic effectively?",
    "options": [
     "By connecting vNICs to multiple physical routers",
     "By connecting vNICs to a virtual switch",
     "Linking each vNIC to a separate physical network interface card",
     "Assigning each vNIC to a unique subnet without VLANs"
    ],
    "answer": "B",
    "why": "Virtual network interface cards (vNICs) can be effectively connected and organized using a virtual switch, which you can create on the same hypervisor running your virtual machines. This approach allows for the creation of different VLANs for various virtual NICs, enabling sophisticated network configurations. The virtual switch can then connect to the physical network interface card of the host running the hypervisor, in order to connect with an external network."
   },
   {
    "n": 80,
    "q": "Consider the following topology and output. What command produced the output shown?",
    "options": [
     "show interfaces trunk",
     "show switchport vlans allowed",
     "show switchport trunk",
     "show trunk"
    ],
    "answer": "A",
    "why": "The `show interfaces trunk` command displays information for any trunks currently active on a Cisco Catalyst switch. The output also includes such information the VLANs allowed on the trunks and the VLANs that are active on the trunks."
   },
   {
    "n": 81,
    "q": "You are tasked with enhancing network security by configuring features on your switches. On switches SW1 and SW2, you configure the Root Guard feature on GigabitEthernet 0/1. What happens if a superior BPDU is received on these interfaces?",
    "options": [
     "The port immediately shuts down.",
     "The switch reboots.",
     "The port transitions into a root-inconsistent state.",
     "The port ignores the BPDU and continues normal operation."
    ],
    "answer": "C",
    "why": "When a port configured with Root Guard receives a superior BPDU, the port does not shut down or ignore the BPDU. Instead, it transitions into a \"root-inconsistent\" state. This state is maintained until the port ceases to receive superior BPDUs, which prevents the switch from being manipulated by potentially malicious users aiming to alter the root bridge designation."
   },
   {
    "n": 82,
    "q": "Which of the following is the correct command for creating a floating static route that will be used as a backup to an OSPF route?",
    "options": [
     "R1(config)#ip route 10.0.0.0 255.255.255.0 192.168.1.10 91",
     "R1(config)#ip route 10.0.0.0 255.255.255.0 192.168.1.10 backup",
     "R1(config)#ip route 10.0.0.0 255.255.255.0 192.168.1.10 ospf preferred",
     "R1(config)#ip route 10.0.0.0 255.255.255.0 192.168.1.10 111"
    ],
    "answer": "D",
    "why": "The default administrative distance (AD) value for a static route is 1, meaning that the route would be preferred over the OSPF route. If we want to make this a backup route, we must change the AD value to something larger than the AD value of an OSPF route, which is 110. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 83,
    "q": "What is designated by the all-zero address 0.0.0.0/0 in a routing table?",
    "options": [
     "Next-Hop Address",
     "Default Gateway",
     "Default Route",
     "Unknown Route"
    ],
    "answer": "C",
    "why": "The default route is represented by an all-zero address. A static default route can be manually configured using the command ip route 0.0.0.0 0.0.0.0 followed by the IP address for the router that will be the default route."
   },
   {
    "n": 84,
    "q": "As a network engineer, you're tasked with identifying the correct port roles and states in a RapidPVST+ enabled network. If a switch port is configured to connect to an end-user device and should bypass the usual STP convergence times, what type of port and corresponding Cisco switch feature should be applied?",
    "options": [
     "Designated port with UplinkFast enabled",
     "Root port with BackboneFast enabled",
     "Edge port with PortFast enabled",
     "Alternate port with Rapid Transition enabled"
    ],
    "answer": "C",
    "why": "An edge port in RapidPVST+ terminology refers to a switch port that connects to an end-user device, such as a laptop or a printer, and is not expected to contribute to network loops. By enabling PortFast on these ports, the usual Spanning Tree Protocol (STP) convergence times are bypassed, allowing the port to transition directly to the Forwarding state. This setup is essential for ports where immediate network access is required upon connection, without waiting through the usual STP Listening and Learning states."
   },
   {
    "n": 85,
    "q": "When using Multiprotocol Label Switching (MPLS), what information is used to make frame forwarding decisions?",
    "options": [
     "IP Address",
     "Shim Header",
     "DLCI",
     "MAC Address"
    ],
    "answer": "B",
    "why": "When using MPLS, a 32-but shim header is inserted into a frame between the Layer 2 and Layer 3 headers. This label is used to determine the frame forwarding."
   },
   {
    "n": 86,
    "q": "Which port state in Rapid Per-VLAN Spanning Tree (Rapid PVST+) is a combination of the Listening and Learning port states found in traditional STP?",
    "options": [
     "Learning",
     "Discarding",
     "Forwarding",
     "Listening"
    ],
    "answer": "A",
    "why": "The Learning state performs the combined duties of the traditional STP Learning and Listening states. When in this state, the switch is learning which MAC addresses are available off the port. This state is seen when a port is transitioning to the Forwarding state."
   },
   {
    "n": 87,
    "q": "What does the IPv6 loopback address \"::1\" primarily represent in network testing?",
    "options": [
     "It is a destination address used for a host to send packets back to itself.",
     "It is used to identify the machine's external IPv6 address.",
     "It indicates a multicast group within the local network.",
     "It represents the router's address within an IPv6 network."
    ],
    "answer": "A",
    "why": "The IPv6 loopback address \"::1\" represents a destination address used for a host to send packets back to itself. This is similar to the IPv4 loopback address (127.0.0.1) and is used for testing and configuration purposes, ensuring that the IPv6 stack is functioning correctly on the local machine. It is also commonly used by developers and network administrators to test local network setups, applications, or services running on a device. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 88,
    "q": "How many hexadecimal quartets are found within an IPv6 address?",
    "options": [
     "1",
     "4",
     "8",
     "16"
    ],
    "answer": "C",
    "why": "There are 8 quartets found within an IPv6 address, each separated by a colon. Each of the individual quartets contains four hexadecimal digits."
   }
  ]
 },
 {
  "id": 3,
  "name": "Practice Exam 3",
  "questions": [
   {
    "n": 1,
    "q": "Which Quality of Service (QoS) access class is typically used for voice traffic in Wi-Fi networks?",
    "options": [
     "Silver",
     "Bronze",
     "Gold",
     "Platinum"
    ],
    "answer": "D",
    "why": "The Platinum QoS access class is typically used for voice traffic in Wi-Fi networks. It provides higher priority and better handling for voice packets, ensuring low latency and high quality for voice communications."
   },
   {
    "n": 2,
    "q": "How does Cisco's Application Centric Infrastructure (ACI) enhance the management of spine-leaf architectures in data centers?",
    "options": [
     "By enabling direct, physical connections between spine switches for a simplified topology",
     "By reducing the number of uplink connections required from leaf switches to spine switches",
     "By converting all inter-switch connections to Layer 2 to streamline data flow",
     "By treating a collection of leaf and spine switches as if they are part of a single logical switch"
    ],
    "answer": "D",
    "why": "Cisco's Application Centric Infrastructure (ACI) significantly simplifies the management and operation of spine-leaf architectures by allowing administrators to treat the collection of leaf and spine switches as a single logical entity. This approach abstracts the complexity of the underlying physical connections and topologies, enabling more straightforward, centralized management of policies, provisioning, and monitoring. It leverages Software Defined Networking (SDN) principles to enhance flexibility, scalability, and control over data center networks, contrasting with traditional methods that manage switches individually or require complex configurations for inter-switch connectivity. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 3,
    "q": "During a network audit, you discover that a switch port configured with PortFast and BPDU Guard is down. What is the most likely cause for this port to be in the Error Disabled state?",
    "options": [
     "The port has detected a unidirectional link failure.",
     "A BPDU was received on this port, triggering the BPDU Guard feature.",
     "The port has not received any BPDUs, causing a timeout.",
     "There was a physical disconnection of the cable connected to the port."
    ],
    "answer": "B",
    "why": "The most likely reason for a PortFast-enabled port that is also configured with BPDU Guard to be in an Error Disabled state is because it has received a BPDU. BPDU Guard is designed to shut down the port immediately upon detection of a BPDU to prevent potential Layer 2 loops caused by connecting network devices that should not be present off those specific ports. This safety mechanism helps ensure that a network's topology remains stable and predictable by disabling a port in order to block unauthorized devices that might disrupt the Spanning Tree topology."
   },
   {
    "n": 4,
    "q": "Which Wi-Fi standard is known for having a maximum theoretical bandwidth of approximately 10 Gbps and uses orthogonal frequency division multiple access (OFDM",
    "options": [
     "802.11ac",
     "802.11n",
     "802.11ax",
     "802.11g"
    ],
    "answer": "C",
    "why": "The 802.11ax standard, also known as Wi-Fi 6, introduced in 2019, has a maximum theoretical bandwidth approaching 10 Gbps. It uses orthogonal frequency division multiple access (OFDMA) to improve efficiency and capacity."
   },
   {
    "n": 5,
    "q": "You configure the BPDU Filter feature globally on a switch with ports configured for PortFast. What will be the primary impact of this configuration on the network?",
    "options": [
     "It will prevent the formation of Layer 2 loops by disabling BPDUs.",
     "It will accelerate the transition of ports into Forwarding state without waiting for STP",
     "It will create multiple instances of Spanning Tree, one for each PortFast-configured port.",
     "It will stop the ports from sending or receiving BPDUs."
    ],
    "answer": "D",
    "why": "While globally configuring BPDU Filter on PortFast ports can speed up the activation of these ports by skipping STP processing times, the primary impact is that these ports will neither send nor receive BPDUs. This could potentially lead to Layer 2 loops because the STP's ability to detect and prevent loops depends on the continuous flow of BPDUs to monitor network topology changes. Without BPDUs, the switch is unaware of the network structure beyond its connected devices, increasing the risk of loops."
   },
   {
    "n": 6,
    "q": "What is a primary purpose of the 5 GHz frequency band in wireless networks?",
    "options": [
     "To provide higher data rates and less interference compared to 2.4 GHz",
     "To offer longer range compared to 2.4 GHz",
     "To support legacy wireless devices",
     "To reduce power consumption of wireless devices"
    ],
    "answer": "A",
    "why": "The 5 GHz frequency band provides higher data rates and experiences less interference compared to the 2.4 GHz band, making it suitable for high-performance wireless networks."
   },
   {
    "n": 7,
    "q": "When manually assigning an IPv4 address to a device, why is it important to also specify a DNS server's address?",
    "options": [
     "To assign a unique identifier to the device",
     "To enable the device to resolve domain names to IP addresses",
     "To increase network security",
     "To enable dynamic IP address assignment"
    ],
    "answer": "B",
    "why": "DNS (Domain Name System) servers translate human-friendly domain names (like kwtrain.com) into their corresponding IP addresses, facilitating communication over the Internet by allowing users to access websites using domain names instead of IP addresses. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 8,
    "q": "Which Quadrature Amplitude Modulation (QAM) value is used by 802.11ax?",
    "options": [
     "64-QAM",
     "1024-QAM",
     "256-QAM",
     "2048-QAM"
    ],
    "answer": "B",
    "why": "802.11ax has a higher modulation scheme, moving from 256-QAM used by 802.11ac to 1024-QAM. This translates to better throughput and 25% higher data capacity, where 10 bits are represented per symbol."
   },
   {
    "n": 9,
    "q": "What might be a distinctive feature of a Next Generation Firewall, compared to a traditional stateful firewall?",
    "options": [
     "Only allows traffic from internal networks",
     "Provides encrypted traffic inspection",
     "Operates solely on physical hardware",
     "Lacks deep packet inspection capabilities"
    ],
    "answer": "B",
    "why": "While traditional stateful firewalls allow return traffic for sessions initiated on the internal network, a Next Generation Firewall (NGFW) adds features like intrusion prevention and deep packet inspection. Many NGFWs also have the ability to inspect encrypted traffic, including the ability to recognize threats in that encrypted traffic."
   },
   {
    "n": 10,
    "q": "When considering IPv6 terminology, what term is used to describe the network portion of an address, differing from the IPv4 concept of a subnet mask?",
    "options": [
     "2",
     "4",
     "8",
     "16"
    ],
    "answer": "C",
    "why": "By moving from a /24 to a /27 subnet mask, you are borrowing 3 bits for subnetting (since 27 - 24 = 3). According to the formula: \"Created Subnets = 2^s, where s is the number of borrowed bits\", the created subnets in this instance = 2^3 = 8."
   },
   {
    "n": 11,
    "q": "Which of the following commands will allow interfaces with addresses in the 10.1.1.0/24 range to participate in OSPF area 0?",
    "options": [
     "R1(config-router)#network 10.1.1.0 class-c area 0",
     "R1(config-router)#network 10.1.1.0 255.255.255.0 area 0",
     "R1(config-router)#network 10.1.1.0 0.0.0.255 area 0",
     "R1(config-router)#network 10.1.1.0 subnet /24 area 0"
    ],
    "answer": "C",
    "why": "Rather than using a subnet mask to designate interfaces participating in OSPF, we instead use a wildcard mask. This can essentially be thought of as the inverse of the subnet mask, where each octet value in the subnet mask is subtracted from the value 255."
   },
   {
    "n": 12,
    "q": "You are configuring NTP on a router to synchronize its time with an Internet router acting as an NTP master. The Internet router has a stratum value of 3. What stratum value will the router you are configuring have after synchronization?",
    "options": [
     "1",
     "2",
     "3",
     "4"
    ],
    "answer": "D",
    "why": "NTP assigns stratum values to indicate the distance from the reference clock. A stratum value increments by 1 for each hop away from the reference clock. Since the Internet router is a stratum 3 clock, the router synchronizing with it will have a stratum value of 4. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 13,
    "q": "Which wireless encryption protocol uses 192-bit Advanced Encryption Standard (AES) for privacy protection in enterprise environments?",
    "options": [
     "WPA",
     "WPA2",
     "WPA3",
     "TKIP"
    ],
    "answer": "C",
    "why": "Wi-Fi Protected Access version 3 is an update to the WPA standard that will replace version 2 within the next few years. Among other enhancements, WPA3 will include a 192-bit AES security suite for use in Enterprise Mode."
   },
   {
    "n": 14,
    "q": "How can predictive AI benefit network management?",
    "options": [
     "By generating original network designs based on predefined criteria",
     "By identifying spam emails and filtering them out",
     "By forecasting potential network issues based on historical data",
     "By providing encrypted communication channels for network devices"
    ],
    "answer": "C",
    "why": "Predictive AI uses historical data to forecast future events or issues, allowing network administrators to proactively address potential problems before they occur. This can help in planning for capacity upgrades, load balancing, and preventing network congestion."
   },
   {
    "n": 15,
    "q": "You are working for a company that will be using the 192.168.1.0 /24 private IP address space for IP addressing inside their organization. They have multiple geographical locations and want to carve up the 192.168.1.0 /24 address space into subnets. Their largest subnet will need 13 hosts. What subnet mask should you use to accommodate at least 13 hosts per subnet, while maximizing the number of subnets that can be created?",
    "options": [
     "255.255.255.248",
     "255.255.255.224",
     "255.255.255.252",
     "255.255.255.192",
     "255.255.255.240"
    ],
    "answer": "E",
    "why": "We can determine the maximum number of hosts allowed in a subnet by raising the number 2 to the power of the number of host bits and then subtracting 2. So, the formula looks like this: Maximum Number of Hosts per Subnet = 2^h \u2013 2, where h is the number of host bits. Why are we subtracting two? Well, there are two IP addresses in the subnet that cannot be assigned. These addresses are: (1) the network address, where all of the host bits are set to a 0 and (2) the directed broadcast address, where all of the host bits are set to a 1. In the actual exam, if you are given scratch paper or access to a note taking application, you might want to write out a table such as the following for your reference: 1 Host Bit: 21 \u2013 2 = 0 2 Host Bits: 22 \u2013 2 = 2 3 Host Bits: 23 \u2013 2 = 6 4 Host Bits: 24 \u2013 2 = 14 5 Host Bits: 25 \u2013 2 = 30 6 Host Bits: 26 \u2013 2 = 62 7 Host Bits: 27 \u2013 2 = 126 8 Host Bits: 28 \u2013 2 = 254 In this question, we\u2019re asked to determine a subnet mask that accommodates at least 13 hosts per subnet. By looking at the reference table we created, we can see that 4 host bits (which support 14 hosts) would work, while 3 host bits (which supports only 6 hosts) would not be enough. So, we need a subnet with 4 host bits, which are enough host bits to meet the design goal, but not more than we need. Using more host bits than we need would violate the requirement to maximize the number of subnets. A subnet mask with 4 host bits has 28 network bits (i.e., 3^2 \u2013 4 = 28), and therefore a 28-bit subnet mask. A 28-bit subnet mask can be written as: 255.255.255.240"
   },
   {
    "n": 16,
    "q": "Which piece of the AAA framework determines what a user is allowed to do?",
    "options": [
     "Authentication",
     "Authorization",
     "Accounting",
     "Access"
    ],
    "answer": "B",
    "why": "After a user has been authenticated, authorization is used to determine which resources the user is allowed to affect, or which operations they can perform. This is distinct \u00a9 2024 Kevin Wallace Training, LLC from authentication, as a user may be properly authenticated on the network but may not be authorized for a particular action based on their privileges."
   },
   {
    "n": 17,
    "q": "A network engineer is reviewing a JSON-formatted configuration file and notices the following structure: [\"CCNA\", \"CCNP Enterprise\", \"CCIE Enterprise Infrastructure\"] What type of JSON data structure is this?",
    "options": [
     "Object",
     "Array",
     "String",
     "Number"
    ],
    "answer": "B",
    "why": "The structure shown in the question is a JSON array. In JSON, an array is an ordered list of values enclosed in square brackets [ ]. Each value in an* array is separated by a comma. Arrays can contain any valid JSON data type, including strings (as in this example), numbers, booleans, objects, or even other arrays. In this specific case, the array contains three string values representing different Cisco certifications. Arrays are useful for representing collections of related data in a JSON document."
   },
   {
    "n": 18,
    "q": "Where should more specific Access Control Entries (ACEs) be placed within an Access Control List (ACL)?",
    "options": [
     "Near the bottom",
     "Near the middle",
     "After a deny all command",
     "Near the top"
    ],
    "answer": "D",
    "why": "More specific Access Control Entries (ACEs) should be placed near the top of an ACL. Since ACLs are processed in a top-down manner, more specific ACEs could potentially be skipped if general ACEs find a traffic match first. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 19,
    "q": "Which command will show us locally stored Syslog information on a router?",
    "options": [
     "R1#syslog info",
     "R1#show log local",
     "R1#show logging",
     "R1#show syslog"
    ],
    "answer": "C",
    "why": "This command will display the state of Syslog (including the configured logging level) and the contents of the local system logging buffer."
   },
   {
    "n": 20,
    "q": "Consider the following topology. How many Type 1 LSAs are present in router R3\u2019s Link State Database (LSDB)?",
    "options": [
     "1",
     "2",
     "3",
     "4"
    ],
    "answer": "B",
    "why": "A Type 1 Link State Advertisement (LSA) is known as a \u201cRouter LSA.\u201d A router in an area will have a Type 1 LSA entry for each network segment with that area. In this example, router R3 belongs to Area 1, and Area 1 contains two network segments, specifically: 192.168.1.0 /30 and 10.2.2.0 /24. Therefore, router R3\u2019s LSDB contains two Type 1 LSAs, one for each network segment in Area 1. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 21,
    "q": "Which type of Network Address Translation (NAT) allows multiple users to be connected to the Internet using only a single public IP address?",
    "options": [
     "Static NAT",
     "Dynamic NAT",
     "Port Address Translation",
     "NAT Pool"
    ],
    "answer": "C",
    "why": "Port Address Translation (PAT) allows multiple private IP addresses to be translated into a single registered public IP address, with port numbers used to distinguish which traffic belongs to which private IP address."
   },
   {
    "n": 22,
    "q": "You receive a text message stating that your package has been shipped and asking you to tap on a link to track it. What type of social engineering attack might this represent?",
    "options": [
     "Phishing",
     "Vishing",
     "Smishing",
     "Spear phishing"
    ],
    "answer": "C",
    "why": "Smishing is a type of social engineering attack that uses SMS (Short Message Service) or text messages to deceive individuals. The text message asking the recipient to tap on a link to track a package, might redirect the recipient to a malicious website."
   },
   {
    "n": 23,
    "q": "During a network setup for selective video streaming, you consider the impact of each IP packet flow type on network resources. Which method is least scalable for distributing a video stream to a large number of recipients due to increased processor and bandwidth burden on the video server?",
    "options": [
     "Broadcast",
     "Multicast",
     "Anycast",
     "Unicast"
    ],
    "answer": "D",
    "why": "Unicast is the least scalable method for distributing a video stream to a large audience within a network. It involves sending duplicate streams to each individual recipient, significantly increasing the load on the video server's processor and consuming more bandwidth. This approach is not sustainable as the number of recipients grows, making it an inefficient choice for large-scale distributions compared to multicast, which efficiently addresses this issue by sending a single video stream to a group of interested recipients."
   },
   {
    "n": 24,
    "q": "Within an IPv6 Type of Service (ToS) byte, which category of traffic does the highest possible Differentiated Services Code Point (DSCP) binary value 101 110 indicate?",
    "options": [
     "Default",
     "Drop Traffic",
     "Expedited Forwarding",
     "Priority"
    ],
    "answer": "C",
    "why": "This high priority DSCP marking is referred to as Expedited Forwarding. Voice packets would be marked with this DSCP value, since their sensitivity to latency requires high priority treatment on the network."
   },
   {
    "n": 25,
    "q": "As a network technician, you're tasked with setting up a network that requires protection from electromagnetic interference (EMI). Which feature of coaxial cables is primarily responsible for protecting the network signal from EMI?",
    "options": [
     "The plastic jacket",
     "The center conductor",
     "The braided metal shield",
     "The insulator"
    ],
    "answer": "C",
    "why": "The braided metal shield in a coaxial cable is primarily responsible for protecting a signal from electromagnetic interference (EMI). This shield encases the dielectric insulator that surrounds the main copper conductor, effectively blocking EMI from corrupting the data signal. The plastic jacket provides physical protection, the center conductor carries the signal, and the insulator helps prevent signal loss but does not specifically protect against EMI. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 26,
    "q": "Which OSPF network type requires DR and BDR election?",
    "options": [
     "Broadcast",
     "Point-to-Point",
     "Point-to-Multipoint",
     "Shared"
    ],
    "answer": "A",
    "why": "The Broadcast network type is much more efficient for connecting a large number of devices in an OSPF network, as opposed to point-to-point networks. DR and BDR election allow for a multiaccess segment where full-mesh connectivity is not necessary."
   },
   {
    "n": 27,
    "q": "What is the primary purpose of using static NAT in a network environment?",
    "options": [
     "To dynamically allocate IP addresses to hosts on the network",
     "To provide a fixed one-to-one mapping of an inside local address to an inside global address",
     "To translate multiple inside local addresses to multiple outside global addresses",
     "To perform address translation based on port numbers"
    ],
    "answer": "B",
    "why": "Static NAT provides a fixed one-to-one mapping of an inside local address to an inside global address. This allows devices inside the network to maintain a consistent public- facing IP address for specific services."
   },
   {
    "n": 28,
    "q": "Which file transfer protocol communicates using User Datagram Protocol (UDP)?",
    "options": [
     "FTP",
     "SFTP",
     "FTPS",
     "TFTP"
    ],
    "answer": "D",
    "why": "Trivial File Transfer Protocol (TFTP) is a much simpler version of FTP, but it lacks a method for user authentication. This uses UDP communication, as opposed to the TCP communication used by more complex file transfer protocols. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 29,
    "q": "Which hashing algorithm provides the most secure option for protecting the enable secret password on a Cisco router?",
    "options": [
     "MD5",
     "Scrypt",
     "SHA-256",
     "Vigenere Cipher"
    ],
    "answer": "B",
    "why": "Of the options listed, only MD5, SHA-256, and Scrypt are hashing algorithms, with the Vigenere Cipher acting as an encryption algorithm. MD5 is the weakest of these three hashing algorithms. While Scrypt and SHA-256 are similar, calculating an Scrypt hash is much more time consuming compared to calculating a SHA-256 hash. Therefore, an enable secret password is best protected from a brute-force attack by using an Scrypt hash."
   },
   {
    "n": 30,
    "q": "Which of the following is not an advantage of Network Address Translation (NAT)?",
    "options": [
     "Provides privacy to the inside hosts",
     "Eliminates the need for re-numbering when a network topology changes",
     "Conserves the registered IP address space",
     "Simplifies the use of tunneling protocols"
    ],
    "answer": "D",
    "why": "Because the nature of NAT is to modify a portion of the packet during translation, and IPsec is designed to prevent the manipulation of data in transit, there are known issues with using IPsec and NAT in conjunction. In order to completely avoid problems, IPsec tunnel endpoints should always be located in the public address space."
   },
   {
    "n": 31,
    "q": "After successfully configuring VLANs for your network, you decide to delete the HR VLAN (VLAN 20). What is the impact on the interfaces assigned to VLAN 20?",
    "options": [
     "The interfaces become unusable until they are reassigned to a different VLAN.",
     "The interfaces automatically move to the default VLAN (VLAN 1).",
     "You're prevented from deleting VLAN 20, because it has member ports.",
     "The interfaces are deleted along with the VLAN."
    ],
    "answer": "A",
    "why": "When a VLAN is deleted, any interfaces assigned to that VLAN become unusable until they are reassigned to another VLAN. However, you're not prevented from deleting a populated VLAN."
   },
   {
    "n": 32,
    "q": "A customer is using a Class C network of 192.168.10.0 subnetted with a 28-bit subnet mask. How many assignable addresses are available in each of the subnets?",
    "options": [
     "32",
     "16",
     "30",
     "8",
     "14"
    ],
    "answer": "E",
    "why": "An IPv4 address contains a total of 32 bits. Since, in this question, we have 28 subnet bits, the number of host bits is 4 (i.e., 32 \u2013 28 = 4). The number of assignable IP addresses in a subnet can be calculated as follows: Number of Assignable IP Addresses = 2^h \u2013 2, where h is the number of host bits. Therefore, in this question, each subnet has 14 assignable IP addresses: Number of Assignable IP Addresses = 2^4 \u2013 2 = 16 \u2013 2 = 14"
   },
   {
    "n": 33,
    "q": "What is the benefit of placing an extended ACL as close to the source as possible?",
    "options": [
     "It simplifies the ACL configuration.",
     "It ensures more specific rules are evaluated first.",
     "It prevents the unnecessary use of network resources by dropping packets early.",
     "It improves network security by reducing the number of rules."
    ],
    "answer": "C",
    "why": "Placing extended ACLs close to the source helps in dropping unwanted traffic early in the network path, thereby conserving network resources and bandwidth that would otherwise be used to transport packets across a network only to be dropped later. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 34,
    "q": "Which protocol is most commonly used by a wireless LAN controller for controlling a lightweight access point (AP)?",
    "options": [
     "LWAPP",
     "CAPWAP",
     "LDAP",
     "Ad Hoc"
    ],
    "answer": "B",
    "why": "The Control and Provisioning of Wireless Access Points (CAPWAP) protocol is an update to the original Lightweight Access Point Protocol (LWAPP) standard and is most commonly used today by wireless LAN controllers for management of access points (APs)."
   },
   {
    "n": 35,
    "q": "Which file transfer protocol does not have a mechanism for authentication?",
    "options": [
     "FTP",
     "SFTP",
     "FTPS",
     "TFTP"
    ],
    "answer": "D",
    "why": "Trivial File Transfer Protocol (TFTP) is a much simpler version of FTP, but it lacks a method for user authentication. This uses UDP communication, as opposed to the TCP communication used by more complex file transfer protocols."
   },
   {
    "n": 36,
    "q": "In a network setup, you're using the 1000BASE-T standard for connectivity. How many wires are utilized in an Ethernet cable for this setup?",
    "options": [
     "2 pairs",
     "4 pairs",
     "6 wires",
     "4 wires"
    ],
    "answer": "B",
    "why": "The 1000BASE-T standard utilizes all 4 pairs (8 wires) in an Ethernet cable for communication. This full utilization of wires is necessary to support the gigabit per second data \u00a9 2024 Kevin Wallace Training, LLC rates that 1000BASE-T is designed for. The older 10BASE-T and 100BASE-TX standards only use two pairs (4 wires)."
   },
   {
    "n": 37,
    "q": "During Hot Standby Router Protocol (HSRP) active router election, what value can be manually altered to influence the winner?",
    "options": [
     "Router ID",
     "HSRP Priority",
     "HSRP Group Number",
     "Loopback Address"
    ],
    "answer": "B",
    "why": "During HSRP active router election, the router with the highest priority will win the election. By default, the HSRP priority value is set to 100. An active router can be manually identified by assigning a priority value of more than 100 to the desired active router."
   },
   {
    "n": 38,
    "q": "What is the highest believable stratum value in Network Time Protocol (NTP) hierarchy?",
    "options": [
     "8",
     "12",
     "15",
     "16"
    ],
    "answer": "C",
    "why": "The highest possible stratum value that is considered to be a believable time source is Stratum 15. Any stratum number above 15 would be considered unreliable, and time would not be learned from such a source."
   },
   {
    "n": 39,
    "q": "When configuring the MAC address table aging time on a Cisco switch, a network engineer decides to extend the aging time to reduce the frequency of MAC address relearning. What command should they use to set the aging time to 3600 seconds?",
    "options": [
     "mac address-table aging-time 3600",
     "set mac-table aging 3600",
     "mac-address-table timeout 3600",
     "mac table-aging duration 3600"
    ],
    "answer": "A",
    "why": "The correct command to set the aging time for MAC addresses in the switch's MAC address table to 3600 seconds (1 hour) is `mac address-table aging-time 3600`. This command adjusts the global aging time, which determines how long a dynamically learned MAC address remains in the table without receiving traffic from that address before it is aged out and removed. Extending the aging time can be beneficial in stable networks where MAC addresses do not change frequently, reducing the overhead of the switch having to relearn MAC addresses."
   },
   {
    "n": 40,
    "q": "Which type of attack commonly attempts to appear as the default gateway of the network in order to intercept traffic?",
    "options": [
     "Ransomware",
     "ARP Poisoning",
     "DNS Poisoning",
     "Phishing"
    ],
    "answer": "B",
    "why": "Address Resolution Protocol (ARP) Poisoning is when an attacker sends falsified ARP messages over a LAN in order to link their own MAC address with the IP address of a legitimate network resource, often the default gateway. This allows all traffic to flow through their device, giving them an opportunity to intercept sensitive data."
   },
   {
    "n": 41,
    "q": "When comparing OSPF neighborships and adjacencies, which statement is true?",
    "options": [
     "Neighborships involve exchanging Hello messages, while adjacencies do not.",
     "Adjacencies are formed before neighborships.",
     "Routers must be neighbors before forming an adjacency.",
     "Adjacencies only involve exchanging Hello messages."
    ],
    "answer": "C",
    "why": "In OSPF, routers first become neighbors by exchanging Hello messages and confirming that certain parameters match. Once they are neighbors, they can proceed to form an adjacency, which involves exchanging link-state information to build the complete topology database. Therefore, being a neighbor is a prerequisite for forming an adjacency. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 42,
    "q": "Which command enables port security on a specific switch port?",
    "options": [
     "switchport mode access",
     "switchport port-security",
     "switchport port-security maximum",
     "switchport port-security violation"
    ],
    "answer": "B",
    "why": "The command `switchport port-security` enables port security on a specific switch port, allowing further configuration of port security parameters."
   },
   {
    "n": 43,
    "q": "When using SLAAC for IPv6 address configuration, how does a device ensure the uniqueness of its IPv6 address on the network?",
    "options": [
     "It is a destination address used for a host to send packets back to itself.",
     "It is used to identify the machine's external IPv6 address.",
     "It indicates a multicast group within the local network.",
     "It represents the router's address within an IPv6 network."
    ],
    "answer": "A",
    "why": "The IPv6 loopback address \"::1\" represents a destination address used for a host to send packets back to itself. This is similar to the IPv4 loopback address (127.0.0.1) and is used for testing and configuration purposes, ensuring that the IPv6 stack is functioning correctly on the local machine. It is also commonly used by developers and network administrators to test local network setups, applications, or services running on a device."
   },
   {
    "n": 44,
    "q": "When using REST APIs, which HTTP verb allows us to update something on the SDN controller?",
    "options": [
     "UPDATE",
     "WRITE",
     "CREATE",
     "PUT"
    ],
    "answer": "D",
    "why": "The HTTP PUT verb is most often used for updating existing information on a controller. PUT replaces the information with a newer version in its entirety. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 45,
    "q": "What is an advantage of using a server in a network compared to a peer-to-peer setup?",
    "options": [
     "Servers offer a more robust feature set and permissions control",
     "Servers provide faster Internet connectivity",
     "Servers are easier to set up and manage",
     "Servers require less network bandwidth"
    ],
    "answer": "A",
    "why": "Servers in a network offer a more robust feature set and a granular level of permissions control compared to peer-to-peer architectures. While peer-to-peer architectures can be convenient for sharing certain resources, servers are designed to provide a wide range of services and better manageability, especially in larger or more complex networks."
   },
   {
    "n": 46,
    "q": "You are tasked with setting up an EtherChannel using LACP in an environment not previously configured for either PAGP or LACP. Which mode should you preferentially configure on your switches to form an LACP EtherChannel?",
    "options": [
     "Auto on both sides",
     "Active on both sides",
     "Desirable on one side and auto on the other",
     "On mode on both sides without LACP"
    ],
    "answer": "B",
    "why": "When configuring an EtherChannel with LACP, setting both sides to \"active\" ensures that both ends proactively send LACP packets to negotiate the formation of an EtherChannel. This mode is recommended when you are not confined to using PAGP in your environment, as LACP is an IEEE standard (802.3ad) and supports additional features like standby ports. While a Link Aggregation Group (LAG) would be formed by setting both sides to On, this configuration does not represent an LACP EtherChannel as required in the design criterion. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 47,
    "q": "You are tasked with securing communications between a client and a server using asymmetric encryption. Which of the following algorithms would you most likely use?",
    "options": [
     "DES",
     "AES",
     "RSA",
     "3DES"
    ],
    "answer": "C",
    "why": "RSA is an asymmetric encryption algorithm that uses a pair of keys (public and private) for encryption and decryption, making it suitable for secure communications between a client and a server. The other listed options are symmetric encryption algorithms."
   },
   {
    "n": 48,
    "q": "An IP address of 192.168.0.100 /27 belongs to which of the following subnets?",
    "options": [
     "192.168.0.92",
     "192.168.0.128",
     "192.168.0.64",
     "192.168.0.96",
     "192.168.0.32"
    ],
    "answer": "D",
    "why": "To determine the subnets created by the 27-bit subnet mask we perform the following steps: Step #1: Identify the interesting octet (i.e., the octet that contains the first zero in the binary subnet mask). In this question, we have a 19-bit subnet mask, which is written in binary as: 11111111 11111111 11111111 11100000 The interesting octet is the fourth octet, because the fourth octet (i.e., 11100000) is the first octet to contain a 0 in the binary. Step #2: Identify the decimal value in the interesting octet of the subnet mask. A 27-bit subnet mask can be written in dotted decimal notation as: 255.255.255.224 Since the fourth octet is the interesting octet, the decimal value in the interesting octet is 224. Step #3: Determine the block size by subtracting the decimal value of the interesting octet from 256. \u00a9 2024 Kevin Wallace Training, LLC Block Size = 256 \u2013 224 = 32 Step #4: Determine the subnets by counting by the block size in the interesting octet, starting at 0. Placing a zero in the first interesting octet identifies the first subnet as: 192.168.0.0 /27 We then count by the block size (of 32) in the interesting octet (the fourth octet in this question) to determine the remaining subnets: 192.168.0.32 /27 192.168.0.64 /27 192.168.0.96 /27 192.168.0.128 /27 192.168.0.160 /27 192.168.0.192 /27 192.168.0.224 /27 Step #5: Identify the subnet address of the IP address 192.168.0.100 /27. Looking through the subnets created by the 27-bit subnet mask reveals that the IP address of 192.168.0.100 resides in the 192.168.0.96 subnet."
   },
   {
    "n": 49,
    "q": "Given an IP address of 10.1.15.26 with a subnet mask of 255.255.255.0, which of the following represents the subnet that this IP address belongs to?",
    "options": [
     "10.1.0.0 /16",
     "10.1.15.0 /24",
     "10.0.0.0 /8",
     "10.1.15.255 /24"
    ],
    "answer": "B",
    "why": "The subnet mask 255.255.255.0 corresponds to a /24 prefix length, which means the first three octets (10.1.15) define the network portion of the IP address, and the last octet (0) is used for host addresses within the subnet. Therefore, the subnet that the IP address 10.1.15.26 belongs to is 10.1.15.0 /24. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 50,
    "q": "Given a Committed Burst (Bc) of 6,000 bits and a Timing Interval (Tc) of 1/8th of a second (0.125 seconds), what is the Committed Information Rate (CIR)?",
    "options": [
     "12,000 bps",
     "750 bps",
     "48,000 bps",
     "6,000 bps"
    ],
    "answer": "C",
    "why": "The formula used to calculate the Committed Information Rate (CIR) is CIR = Bc/Tc. Using the given numbers, the equation becomes CIR = 6,000 bits / 0.125 seconds, which is 48,000 bps."
   },
   {
    "n": 51,
    "q": "When installing network cabling in a building's air return spaces, which type of cabling is mandatory to prevent the emission of toxic fumes in case of a fire?",
    "options": [
     "Plenum-rated cabling",
     "UTP (Unshielded Twisted Pair)",
     "STP (Shielded Twisted Pair)",
     "Category 5e (or higher) twisted pair cabling"
    ],
    "answer": "A",
    "why": "Plenum-rated cabling is specifically designed for use in air return spaces of buildings, such as above drop ceilings or below raised floors. These cables are made from materials that do not emit toxic fumes when exposed to intense heat or flames, making them the safe choice for these areas. UTP and STP cables might not have this fire-resistant characteristic unless they are also specified as plenum-rated."
   },
   {
    "n": 52,
    "q": "In the context of dynamic NAT, what is the role of the NAT pool?",
    "options": [
     "It defines the range of inside local addresses.",
     "It lists the interfaces participating in NAT.",
     "It specifies the range of inside global addresses available for translation.",
     "It contains the static IP mappings."
    ],
    "answer": "C",
    "why": "The NAT pool specifies the range of inside global addresses that are available for translation. These are the public IP addresses that the inside local addresses will be translated into when accessing external networks."
   },
   {
    "n": 53,
    "q": "Which of the following numbered Access Control Lists (ACLs) is a Standard ACL?",
    "options": [
     "1999",
     "101",
     "100",
     "2000"
    ],
    "answer": "A",
    "why": "Standard ACLs fall within the range of numbers 1 \u2013 99, with an expanded range identified as numbers 1300 \u2013 1999."
   },
   {
    "n": 54,
    "q": "Which channel combination is ideal when using the 2.4 Gigahertz (GHz) band in order to avoid channel overlap?",
    "options": [
     "3,6,9,12",
     "1,7,14",
     "3,8,13",
     "1,6,11"
    ],
    "answer": "D",
    "why": "When selecting a 2.4 GHz wireless channel, channels 12 and 13 are allowed only under low powered conditions, and channel 14 is banned completely in the United States. This means that channels 1, 6, and 11 are the only non-overlapping channels in this range."
   },
   {
    "n": 55,
    "q": "As a systems administrator, you're setting up Ansible for network configuration management. What are the two main components you'll work with when using Ansible?",
    "options": [
     "Containers and Images",
     "Playbooks and Inventories",
     "Pods and Nodes",
     "Pipelines and Stages"
    ],
    "answer": "B",
    "why": "When working with Ansible for configuration management, the two main components are Playbooks and Inventories. Playbooks contain the set of instructions or tasks to be executed on the managed devices, while Inventories are lists of the devices that Ansible will manage. These two components work together to define what actions should be taken and on which devices they should be performed."
   },
   {
    "n": 56,
    "q": "Consider the following topology and output. Which of the following commands produced the output?",
    "options": [
     "show lldp neighbors",
     "show cdp neighbors detail",
     "show ip ospf neighbors",
     "show cdp neighbors"
    ],
    "answer": "D",
    "why": "The output shown is from the `show cdp neighbors` command, which shows information about Layer 2 adjacent devices configured to run Cisco Discovery Protocol (CDP). You can optionally add the keyword of `detail` to the end of the command to get more detailed information about these neighbors. However, the output provided here only provides summary information about router R1\u2019s CDP neighbors. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 57,
    "q": "Within Ansible, what is the name for an ordered list of tasks or instructions?",
    "options": [
     "Inventory",
     "Playbook",
     "YAML",
     "Module"
    ],
    "answer": "B",
    "why": "Ordered lists of tasks are referred to as playbooks within Ansible. These playbooks allow you to run tasks repeatedly and are written in the YAML syntax."
   },
   {
    "n": 58,
    "q": "In an IPv6 address, what does the global routing prefix represent?",
    "options": [
     "Broadcast length",
     "Prefix length",
     "Quartet count",
     "Hexadecimal range"
    ],
    "answer": "B",
    "why": "Unlike IPv4, which uses a subnet mask to denote the network portion of an address, IPv6 uses the term \"prefix length\" to indicate the number of bits allocated for the network portion of an address. An IPv6 address has a total of 128 bits. Therefore, as an example, if an IPv6 address had a prefix length of 96 bits, then we could conclude that the host portion of the address is 32 bits in length (i.e., 96 + 32 = 128)."
   },
   {
    "n": 59,
    "q": "Consider you are implementing HSRP in a network environment requiring fast failover. Of the following configuration options, which configuration would allow the shortest convergence time if the active router fails?",
    "options": [
     "Setting the hold time to 10 seconds",
     "Setting the hello interval to 500 milliseconds",
     "Disabling the preempt feature",
     "Configuring the hello interval to 3 seconds"
    ],
    "answer": "B",
    "why": "To achieve faster convergence in an HSRP setup, reducing the hello interval allows quicker detection of router failures. By configuring the hello interval to 500 milliseconds, which \u00a9 2024 Kevin Wallace Training, LLC is allowable with HSRP version 2, the routers can detect a failure more quickly than with longer intervals. As a result, this setup minimizes the downtime experienced by end-users."
   },
   {
    "n": 60,
    "q": "What type of attack does DHCP Snooping help to prevent by blocking rogue DHCP servers?",
    "options": [
     "ARP Poisoning",
     "DHCP Spoofing",
     "Man-in-the-Middle",
     "MAC Flooding"
    ],
    "answer": "B",
    "why": "DHCP Snooping helps prevent DHCP Spoofing attacks, where an attacker sets up a rogue DHCP server to send incorrect information to clients, potentially redirecting them to malicious servers."
   },
   {
    "n": 61,
    "q": "If a master router in a VRRP configuration becomes unavailable, how is the master down interval calculated by default?",
    "options": [
     "3 times the master advertisement interval plus the skew time",
     "10 seconds fixed interval",
     "3 seconds, the time for 3 advertisement intervals",
     "The skew time only"
    ],
    "answer": "A",
    "why": "The master down interval in VRRP is calculated by taking three times the master advertisement interval and adding the skew time. The skew time is derived from subtracting the VRRP router's priority from 256 and then dividing by 256."
   },
   {
    "n": 62,
    "q": "Which type of Link-State Advertisement (LS",
    "options": [
     "Type 1",
     "Type 2",
     "Type 3",
     "Type 4"
    ],
    "answer": "A",
    "why": "Type 2 LSAs are known as Router LSAs. A Type 1 Router LSA is exchanged between routers in the same area of origin and remain only within that area. An OSPF router used these packets to describe its own interfaces, as well as to carry information about its neighbors to adjacent routers in the same area."
   },
   {
    "n": 63,
    "q": "At a branch office, you decide to use a static default route to simplify routing to the headquarters (HQ) over a single connection. Which command correctly configures this on the branch office router (BR1) to forward all unknown destinations to HQ (at an IP address of 198.51.100.1)?",
    "options": [
     "ip route 0.0.0.0 0.0.0.0 198.51.100.1",
     "ip route 198.51.100.0 255.255.255.0 198.51.100.1",
     "ip route 0.0.0.0 255.255.255.0 198.51.100.1",
     "ip route 198.51.100.1 0.0.0.0 0.0.0.0"
    ],
    "answer": "A",
    "why": "The `ip route 0.0.0.0 0.0.0.0 198.51.100.1` command is correct because it creates a static default route, which matches all possible IPv4 addresses and forwards traffic for packets that don't match a more specific route to a next-hop of 198.51.100.1. If a packet's destination IP address matches an additional route in the IP routing table, that additional route will be used instead of the static default route. This is due to the additional route having more specific route information. This is an example of \"The Longest Match Rule.\""
   },
   {
    "n": 64,
    "q": "During an ARP poisoning attack, what kind of ARP messages does the attacker send to inject themselves into the communication path?",
    "options": [
     "DHCP Offers",
     "Gratuitous ARP Replies",
     "ARP Requests",
     "Broadcast Frames"
    ],
    "answer": "B",
    "why": "During an ARP poisoning attack, an attacker sends unsolicited or gratuitous ARP replies to associate their MAC address with the IP addresses of legitimate devices. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 65,
    "q": "What subnet mask should be used to subnet the 192.168.10.0 network to support the number of subnets and IP addresses per subnet shown in the following topology?",
    "options": [
     "255.255.255.0",
     "255.255.255.128",
     "255.255.255.192",
     "255.255.255.224",
     "255.255.255.240"
    ],
    "answer": "C",
    "why": "To meet the design requirements, four subnets must be created, and each subnet must accommodate a maximum of 50 IP addresses. We can begin by creating a listing of how many subnets are created from different numbers of borrowed bits, using the formula: Number of Subnets Created = 2^s, where s is the number of borrowed bits 1 borrowed bits => 2 subnets 2 borrowed bits => 4 subnets 3 borrowed bits => 8 subnets 4 borrowed bits => 16 subnets 5 borrowed bits => 32 subnets 6 borrowed bits => 64 subnets 7 borrowed bits => 128 subnets \u00a9 2024 Kevin Wallace Training, LLC From this, we can see we need at least 2 borrowed bits to accommodate 4 subnets. However, we need to make sure the subnet will accommodate 50 IP addresses. To determine this, we can use the formula: Number of IP Addresses = 2^h \u2013 2, where h is the number of host bits If we have 2 borrowed bits (i.e., the minimum number of borrowed bits required for 4 subnets), we have 6 host bits (i.e., 8 \u2013 2 = 6). From the above formula, we can determine the number of IP addresses supported by 6 host bits. Number of IP Addresses = 2^6 \u2013 2 = 62 Since 6 host bits meet our requirement of at least 50 IP addresses per subnet, we can use a 26- bit subnet mask (i.e., 2 bits added to the Class C default mask (also known as the natural mask) of 24 bits). A 26-bit subnet mask can be written as: 255.255.255.192"
   },
   {
    "n": 66,
    "q": "You are tasked with configuring remote management access for a Cisco router in a highly secure environment. Given the following requirements: encrypted communication, prevention of password interception, and the ability to manage the device via the CLI and a web interface, which combination of protocols should you use?",
    "options": [
     "Telnet and HTTP",
     "SSH and HTTP",
     "SSH and HTTPS",
     "Telnet and HTTPS"
    ],
    "answer": "C",
    "why": "In a highly secure environment, using SSH and HTTPS is the best combination for remote management access. SSH provides encrypted communication for Command Line Interface (CLI) access, preventing the interception of credentials and commands. HTTPS encrypts the web interface traffic, ensuring that sensitive data transmitted between the client and the router is secure. Telnet and HTTP do not provide encryption and are therefore not suitable for secure environments."
   },
   {
    "n": 67,
    "q": "How much space is found between channels 13 and 14 in the 2.4 Gigahertz (GHz) wireless range?",
    "options": [
     "12 MHz",
     "5 MHz",
     "10 MHz",
     "1 MHz"
    ],
    "answer": "A",
    "why": "There are 14 channels designated in the 2.4 Gigahertz (GHz) wireless range. Channels 1 through 13 have a space of 5 Megahertz (MHz) between them. The exception is the space between channels 13 and 14, which is 12 MHz."
   },
   {
    "n": 68,
    "q": "You have a Class C network with a default subnet mask of /24. If you apply a subnet mask of /27 to this network, how many total subnets are created?",
    "options": [
     "2",
     "4",
     "8",
     "16"
    ],
    "answer": "C",
    "why": "By moving from a /24 to a /27 subnet mask, you are borrowing 3 bits for subnetting (since 27 - 24 = 3). According to the formula: \"Created Subnets = 2^s, where s is the number of borrowed bits\", the created subnets in this instance = 2^3 = 8."
   },
   {
    "n": 69,
    "q": "Which command do you use in interface configuration mode a router to instruct the interface to obtain its IP address via DHCP?",
    "options": [
     "ip address dhcp",
     "interface dhcp ip",
     "ip address dynamic",
     "interface dhcp"
    ],
    "answer": "A",
    "why": "The command `ip address dhcp` is used on a Cisco router to configure an interface to obtain its IP address information dynamically from a DHCP server. This configuration is useful for an interface that needs to learn its IP address from an Internet Service Provider (ISP). \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 70,
    "q": "Which plane of operation is used to move traffic from an ingress interface to an appropriate egress interface as quickly as possible?",
    "options": [
     "Data Plane",
     "Control Plane",
     "Management Plane",
     "Remote Plane"
    ],
    "answer": "A",
    "why": "The Data Plane is also referred to as the Forwarding Plane, responsible for forwarding traffic to the next hop along the path to the destination based on control plane logic."
   },
   {
    "n": 71,
    "q": "You are configuring a Cisco router to act as a DHCP server for a subnet with the network address 192.168.1.0 /24. You need to reserve the first 10 IP addresses for static assignments and set the default gateway to 192.168.1.1. Which of the following correctly configures the DHCP server?",
    "options": [
     "ip dhcp pool CLIENTS",
     "ip dhcp excluded-address 192.168.1.1 192.168.1.10",
     "ip dhcp pool CLIENTS",
     "ip dhcp excluded-address 192.168.1.1 192.168.1.10"
    ],
    "answer": "B",
    "why": "The correct configuration requires excluding the first 10 IP addresses from being assigned by the DHCP server and setting the default gateway to 192.168.1.1. The command `ip dhcp excluded-address 192.168.1.1 192.168.1.10` reserves the first 10 IP addresses for static assignments, while the `ip dhcp pool CLIENTS` configuration sets up the DHCP pool for the 192.168.1.0 /24 subnet and specifies the default gateway as 192.168.1.1. Option B correctly includes all necessary commands in the proper order."
   },
   {
    "n": 72,
    "q": "Which Quality of Service (QoS) mechanism performs queuing?",
    "options": [
     "Classification and Marking",
     "Congestion Management",
     "Congestion Avoidance",
     "Link Efficiency"
    ],
    "answer": "B",
    "why": "Congestion Management can attempt to manage congestion on an interface by dividing an interface\u2019s buffer into sub-queues and placing different categories of traffic in those sub-queues. A queuing mechanism such as CB-WFQ can specify a minimum bandwidth allocation for each sub-queue, while LLQ can make one of the sub-queues a priority sub-queue and send traffic from that sub-queue first (up to a specified bandwidth limit to avoid starving out other traffic types)."
   },
   {
    "n": 73,
    "q": "As a network administrator, you are tasked with configuring your Cisco router to mitigate Distributed Denial of Service (DDoS) attacks. Which of the following strategies might you implement to better protect your network from DDoS attacks?",
    "options": [
     "Enable and configure Access Control Lists (ACLs) to block traffic from known malicious IP",
     "Configure Network Address Translation (NAT) to hide internal IP addresses.",
     "Set up DHCP snooping to prevent rogue DHCP servers.",
     "Implement VLAN segmentation to separate different types of network traffic."
    ],
    "answer": "A",
    "why": "To mitigate DDoS attacks, one effective strategy is to enable and configure Access Control Lists (ACLs) to block traffic from known malicious IP addresses. ACLs can help filter out unwanted traffic, reducing the impact of DDoS attacks on your network. While NAT, DHCP \u00a9 2024 Kevin Wallace Training, LLC snooping, and VLAN segmentation have their own security benefits, they are not specifically targeted at mitigating DDoS attacks."
   },
   {
    "n": 74,
    "q": "Which best practice should be followed when placing a standard ACL in the network?",
    "options": [
     "Place it as close to the source as possible.",
     "Place it as close to the destination as possible.",
     "Place it on the inbound interface of the router.",
     "Place it on the outbound interface of the router."
    ],
    "answer": "B",
    "why": "Standard ACLs should be placed as close to the destination as possible to avoid inadvertently blocking traffic that should be allowed to pass through the network. This helps prevent premature packet drops and ensures that traffic can reach its intended destinations before being filtered."
   },
   {
    "n": 75,
    "q": "Which access point mode would you configure for access points at a remote office to keep local data local, avoiding excessive WAN traffic?",
    "options": [
     "Local Mode",
     "FlexConnect Mode",
     "Sniffer Mode",
     "SE Connect Mode"
    ],
    "answer": "B",
    "why": "FlexConnect Mode allows access points (APs) at remote offices to keep local data traffic local, reducing the need to send data over the WAN to a centralized WLAN controller. This mode is beneficial in remote locations with limited WAN bandwidth. CAPWAP traffic sent between a remote AP and a centralized WLAN controller, however, still crosses the WAN link. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 76,
    "q": "Considering the need for secure communication between a SOHO location and a main corporate office, which technology would be essential to implement alongside the network infrastructure in a SOHO environment?",
    "options": [
     "Quality of Service (QoS) settings on the router",
     "A dedicated leased line for direct connectivity",
     "An additional standalone Ethernet switch for increased port capacity",
     "A Virtual Private Network (VPN) connection"
    ],
    "answer": "D",
    "why": "A Virtual Private Network (VPN) is crucial for ensuring secure communication between a SOHO location and a main corporate office. VPN technology encrypts traffic between these sites over the Internet, protecting sensitive information from eavesdropping. This secure tunnel allows employees at the SOHO location to safely access corporate resources as if they were directly connected to their main office network. The other options do not specifically address the security of data communication between the SOHO location and a main corporate office, making the VPN connection the most appropriate technology to implement for this purpose."
   },
   {
    "n": 77,
    "q": "Which first hop redundancy protocol makes use of all routers in the group, rather than electing primary and secondary devices?",
    "options": [
     "HSRP",
     "GLBP",
     "VRRP",
     "MPLS"
    ],
    "answer": "B",
    "why": "Gateway Load Balancing Protocol (GLBP) is a Cisco proprietary protocol that offers both redundancy and load balancing. This is performed by balancing traffic over multiple routers using a single virtual IP address and multiple virtual MAC addresses. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 78,
    "q": "When a Layer 2 switch receives a frame for a destination MAC address that is not in its MAC address table, what action does it take?",
    "options": [
     "Drops the frame",
     "Floods the frame out of all ports except the one on which it was received",
     "Sends a request to all devices to identify the destination MAC address",
     "Stores the frame until it learns the destination MAC address"
    ],
    "answer": "B",
    "why": "When a Layer 2 switch receives a frame destined for a MAC address that is not in its MAC address table, it performs flooding. This means the switch forwards the frame out of all ports except the one it was received on. This action ensures the frame has the best chance of reaching its intended destination even when the switch does not yet know where that MAC address resides. This process allows the switch to learn the location of MAC addresses over time."
   },
   {
    "n": 79,
    "q": "What phenomenon causes multimode delay distortion in Multimode Fiber (MMF) cabling, potentially leading to data corruption over long distances?",
    "options": [
     "The bending of light due to different indices of refraction",
     "The single path of light through the core",
     "Light escaping out into the cladding",
     "Different paths of light bouncing at varying angles within the core"
    ],
    "answer": "D",
    "why": "Multimode delay distortion in MMF cabling is caused by different paths (modes) of light bouncing at varying angles within the core, leading to varying travel times for the light signals. This can result in a situation where data bits arrive out of order, potentially corrupting the data. This issue is specific to MMF due to its larger core diameter, which allows multiple modes of light propagation, as opposed to Single-Mode Fiber (SMF), which only allows a single mode (i.e., a single path of light), preventing this type of distortion. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 80,
    "q": "In an effort to optimize network security and performance, you decide to limit the VLANs allowed over a trunk link between two switches. Specifically, you want to ensure only VLANs 1, 10, and 900 can traverse this link. Which command could you apply to accomplish this selective VLAN pruning?",
    "options": [
     "switchport trunk prune vlan 1,10,900",
     "switchport trunk permit vlan 1,10,900",
     "switchport trunk allowed vlan 1,10,900",
     "switchport trunk access vlan 1,10,900"
    ],
    "answer": "C",
    "why": "The command `switchport trunk allowed vlan 1,10,900` specifies which VLANs are permitted to cross the trunk link, effectively pruning (excluding) all other VLANs. This ensures that only traffic from VLANs 1, 10, and 900 is allowed, enhancing security by limiting access and potentially improving network performance by reducing unnecessary traffic. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 81,
    "q": "Consider the following topology and output. Based on the output, which Spanning Tree Protocol (STP) parameter has been modified from its default value.",
    "options": [
     "Bridge Priority",
     "Hello Time",
     "Port Cost",
     "Aging Time"
    ],
    "answer": "C",
    "why": "From the topology, we can see that all of the links are Gigabit Ethernet links, which have a default Port Cost of 4 (for the Short Path Cost method). From the output, we can see that 4 is the Port Cost of Gig 0/1 on SW1. However, the Port Cost for Gig 0/0 on SW1 has been modified to have a value of 2, which is the default Port Cost for a Ten Gigabit Ethernet link."
   },
   {
    "n": 82,
    "q": "What is the default Port Security violation mode on a switch?",
    "options": [
     "Protect",
     "Restrict",
     "Shutdown",
     "Drop"
    ],
    "answer": "C",
    "why": "The shutdown option is the default Port Security action taken during a violation. This will put the interface into an error-disabled state and send an SNMP trap notification, if configured for SNMP."
   },
   {
    "n": 83,
    "q": "Which Cisco features allows us to mitigate CAM table overflow attacks?",
    "options": [
     "STP",
     "PortFast",
     "ACL",
     "Port Security"
    ],
    "answer": "D",
    "why": "In a CAM table overflow attack, frames are flooded into the network in an attempt to fill up the CAM table with spoofed MAC addresses. The Port Security feature allows us to specify the maximum number of MAC addresses that can be learned by a particular port."
   },
   {
    "n": 84,
    "q": "In a network using IEEE 802.1Q trunking to interconnect switches, what happens to the size of an Ethernet frame when VLAN tagging is applied?",
    "options": [
     "It increases by 4 bytes.",
     "It remains unchanged.",
     "It decreases by 4 bytes.",
     "The \"frame\" size is not impacted, because Tag bytes are applied at Layer 1."
    ],
    "answer": "A",
    "why": "IEEE 802.1Q tagging adds an additional 4 bytes to the Ethernet frame to include VLAN information, resulting in a slight increase in frame size. Despite this increase, such frames are considered \"baby giants\" and are accepted by switches that support 802.1Q, thereby not violating the typical MTU restrictions of Ethernet frames. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 85,
    "q": "What is the name of the notification message sent out by an SNMP agent?",
    "options": [
     "OID",
     "Trap",
     "MIB",
     "Query"
    ],
    "answer": "B",
    "why": "SNMP trap messages are alert messages or notifications that are sent from a remote SNMP-enabled device (referred to as an SNMP agent) to a central SNMP manager."
   },
   {
    "n": 86,
    "q": "Which type of Access Control List (ACL) allows you to prioritize traffic by source port?",
    "options": [
     "Standard",
     "Extended",
     "Named",
     "Numbered"
    ],
    "answer": "B",
    "why": "A Standard ACL allows you to prioritize traffic by the source IP address only. An Extended ACL provides greater control over which traffic is prioritized, using source and destination IP addresses, source and destination TCP/UDP ports, and protocol ID."
   },
   {
    "n": 87,
    "q": "In the context of IPv6 unique local addresses, what does the L bit signify when set to 1?",
    "options": [
     "Multicast",
     "Unicast",
     "Anycast",
     "None of the above"
    ],
    "answer": "A",
    "why": "In IPv6, the absence of a broadcast traffic type is mitigated by the enhanced functionality of Multicast. Multicast allows for one-to-many communication, where a single packet can be sent to multiple destinations (members of a multicast group) efficiently. This serves the purposes previously fulfilled by broadcasting in IPv4, such as discovering devices or services on the network, but in a more controlled and efficient manner. \u00a9 2024 Kevin Wallace Training, LLC"
   },
   {
    "n": 88,
    "q": "What is the default Advertisement Interval used in Virtual Router Redundancy Protocol (VRRP)?",
    "options": [
     "1 second",
     "3 seconds",
     "5 seconds",
     "10 seconds"
    ],
    "answer": "A",
    "why": "Instead of using a Hello message as HSRP does, this type of message in VRRP is referred to as an Advertisement Interval. These advertisements are used to determine if the master router is up and functioning and are sent every 1 second by default."
   }
  ]
 }
];
