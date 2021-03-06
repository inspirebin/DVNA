![DVNA logo](https://github.com/quantumfoam/DVNA/blob/master/dvna.jpg)

## Beta!

This is very much beta software and is under active development. If you wanted to test out the vulnerabilities as they are now, make sure you have Express added as a dependency.

**Contributors wanted for UX/UI, bug fixes, and documentation.**
- - -

Damn Vulnerable Node Application (DVNA) is a Node.js web application that is damn vulnerable. Its intended purpose is to teach secure coding concepts to web developers who use Node, and to explore web application vulnerabilities in a controlled class environment or to serve as a cyber range for capture the flag events. It's loaded with **common web vulnerabilitiess** and **various levels of complexity.**
- - -

## Installation

### Ubuntu 15.10

Install git, a node version manager and the latest stable release

```
sudo apt-get install git
wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
source ~/.bashrc
nvm install 5.3.0
nvm use 5.3.0
git clone https://github.com/quantumfoam/DVNA.git
cd DVNA/
npm install
node dvna.js
navigate to http://localhost:6666/
```

Your can start the server in another PORT with:

```
PORT=16666 node dvna.js
navigate to http://localhost:16666/
```

Go read the source files and find out how to exploit each flaw! not all the bugs require Express. At one point all the bugs will be under the same UI and be browsable with a hint system and information related to each bug class.

*Note* Yes, this is tedious to have to be repeating for each issue class but at the moment I haven't added a UI template to browse challenges individually (coming soon!)
- - -

## Disclaimer

We do not take responsibility for the way in which any one uses this application (DVNA). We have made the purposes of the application clear and it should not be used maliciously. We have given warnings and taken measures to prevent users from installing DVNA on to live web servers. If your web server is compromised via an installation of DVNA it is not our responsibility it is the responsibility of the person/s who uploaded and installed it.

- - -

## License

This file is part of Damn Vulnerable Node Application (DVNA).

Damn Vulnerable Node Application (DVNA) is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Damn Vulnerable Node Application (DVNA) is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Damn Vulnerable Node Application (DVNA).  If not, see http://www.gnu.org/licenses/.

- - -
