# Web Security

<p>Attacks against web apps range from targeted database manipulation to large-scale network disruption.</p>

1. <b>Cross site scripting (XSS)</b> - XSS is a vulnerability that allows an attacker to inject client-side scripts into a webpage in order to access important information directly, impersonate the user, or trick the user into revealing important information.

2. <b>SQL injection (SQi)</b> - SQi is a method by which an attacker exploits vulnerabilities in the way a database executes search queries. Attackers use SQi to gain access to unauthorized information, modify or create new user permissions, or otherwise manipulate or destroy sensitive data.

3. <b>Denial of Service (DoS)</b> - Through a variety of vectors, attackers are able to overload a targeted server or its surrounding infrastructure with different types of attack traffic. When a server is no longer able to effectively process incoming requests, it begins to behave sluggishly and eventually deny service to incoming requests from legitimate users.

4. <b>Memory corruption</b> - Memory corruption occurs when a location in memory is unintentionally modified, resulting in the potential for unexpected behavior in the software. Bad actors will attempt to sniff out and exploit memory corruption through exploits such as code injections or buffer overflow attacks.

5. <b>Buffer overflow</b> - Buffer overflow is an anomaly that occurs when software writing data to a defined space in memory known as a buffer. Overflowing the buffer’s capacity results in adjacent memory locations being overwritten with data. This behavior can be exploited to inject malicious code into memory, potentially creating a vulnerability in the targeted machine.

6. <b>Cross-site request forgery (CSRF)</b> - Cross site request forgery involves tricking a victim into making a request that utilizes their authentication or authorization. By leveraging the account privileges of a user, an attacker is able to send a request masquerading as the user. Once a user’s account has been compromised, the attacker can exfiltrate, destroy or modify important information. Highly privileged accounts such as administrators or executives are commonly targeted.

7. <b>CSP</b> - It is a browser security mechanism that aims to mitigate XSS and some other attacks. It works by restricting the resources (such as scripts and images) that a page can load and restricting whether a page can be framed by other pages.

8. <b>Click hijacking</b> - Click hijacking is a type of mobile click and install fraud that sends fraudulent click reports moments after a genuine click occurs. Usually triggered by malware, it's commonly hidden in apps that seem completely legitimate, or apps downloaded via third-party app stores.